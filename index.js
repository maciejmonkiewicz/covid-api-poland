const express = require('express')
const axios = require('axios')
const app = express()
const PORT = 3000

/*
    Function to get data from server
*/
var values;
function get_data(){
    return axios.get('https://services-eu1.arcgis.com/zk7YlClTgerl62BY/arcgis/rest/services/global_corona_actual_widok3/FeatureServer/0/query?f=json&where=1%3D1&outFields=*').then(response => response)
}

/* 
    Simple validation to determine if request is send correctly
*/

setInterval(function(){ 
    get_data()
    .then(res => {
        if(res.status === 200){
            var obj = res.data.features[0].attributes
            delete obj.OBJECTID
            values = obj
        }else{
            values = {
                error: true,
                status: res.status
            }
        }
    })
}, 1800000); // 30 minutes


app.get('/help', (req, res) => {
    res.json({
        message: 'Welcome to the help route!',
    })
});

app.get('/data', (req, res) => {
    res.json({
        values
    })
})

app.listen(PORT, () => console.log(`Covid-19 stats API is running on port ${PORT}`))