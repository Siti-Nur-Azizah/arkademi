//Pemanggilan Library axios
const axios = require('axios');

//URL api
const url = 'https://rickandmortyapi.com/api/character';

//Action GET METHOD
axios.get(url).then(res =>{
    //Jika succes akan tertampil disini
    console.log(res.datanode);
}).catch(err =>{
    //Jika error akan disini
    console.log(err);
})