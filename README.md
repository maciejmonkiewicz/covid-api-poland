### 📊 Covid-19 Stats

# Simple API to gain information about covid-19 cases in Poland 😛

# How to get all data:
- Request URL: http://localhost:3000/data
- Request Method: GET
- Sample response:
```js
{
  Data: 1635409814688,
  ZAKAZENIA_DZIENNE: 8378,
  ZGONY_DZIENNE: 101,
  ZGONY_COVID: 26,
  ZGONY_WSPOLISTNIEJACE: 75,
  KWARANTANNA: 253059,
  TESTY: 58849,
  TESTY_POZYTYWNE: 9069,
  ZLECENIA_POZ: 16819,
  LICZBA_OZDROWIENCOW: 4047,
  AKTUALNE_ZAKAZENIA: 228745,
  DATA_SHOW: '28.10.2021 10:30',
  LICZBA_ZGONOW: 76773,
  WSZYSCY_OZDROWIENCY: 2693373,
  LICZBA_ZAKAZEN: 2998891
}
```

# How to get specified value: 
- Request URL: http://localhost:3000/data?show=TESTY
- Request Method: GET
- Sample response:
```js
{
 TESTY: 58849
}
```

# Todo:
- Parse URL queries, and create simple validation
- Ratelimit
- Add query parameter to get stats on specific date
