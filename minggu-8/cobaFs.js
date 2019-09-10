const fs = require('fs');

console.log('start reading a file....');

fs.readFile('text.txt', 'utf-8', (err, content)=>{
    if (err){
        console.log('error happened during reading the file');
        return console.log(err);
    }
    console.log("yeay, berhasil! Datanya bro: "+content);




    fs.rename('text.txt','terserah.txt',(err)=>{
        if(err) console.log("gagal rename!"+err);
        console.log("berhasil");
    })
})

console.log('end of the file');
