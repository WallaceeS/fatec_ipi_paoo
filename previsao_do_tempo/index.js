const axios = require('axios')

const baseURL = 'https://api.openweathermap.org/data/2.5/forecast'

const q = 'Berlim'

const appid = '04d83639d0de90e17c24d96b79f1b440'

const units = 'metric'

const lang = 'pt_br'

const cnt = 3

const url = `${baseURL}?q=${q}&appid=${appid}&units=${units}&lang=${lang}&cnt=${cnt}`

axios.get(url)
.then(res => {
    console.log(res)
    console.log("------------------------------")
    return res.data
})
.then(res => {
    console.log(res)
    console.log("------------------------------")
    return res 
})
.then(abc =>{
    console.log(abc.cnt)
    console.log("------------------------------")
    return abc.list
})
.then(list => {
     console.log(list[0])
     console.log("------------------------------")
     return list
})

.then(list => {
     console.log(list[0].main.temp_max)
     console.log("------------------------------")
})
