const express = require('express')
const axios = require('axios')
const app = express()
const PORT = 3000

function get_data(){
    axios.get('https://services-eu1.arcgis.com/zk7YlClTgerl62BY/arcgis/rest/services/global_corona_actual_widok3/FeatureServer/0/query?f=json&where=1%3D1&outFields=*')
    .then(response => {
    if(response.status === 200) {
        var obj = response.data.features[0].attributes
        delete obj.OBJECTID
        return data = obj
    }else{
        return data = {
            error: true,
            status: response.status
        }
    }
    })
}

app.get('/help', (req, res) => {
    res.json({
        message: 'Welcome to the help route!'
    })
})

app.listen(PORT, () => console.log(`Covid-19 stats API is running on port ${PORT}`))