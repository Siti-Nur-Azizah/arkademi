const pertambahan = (num1,num2) => {
    return num1+num2;
}

const perkalian = (num1,num2) => {
    return num1*num2;
}

const pembagian = (num1,num2) => {
    return num1/num2;
}

const luasAlasSegitiga = (a,t) => {
    return 0.5*a*t;
}

const luasLingkaran = (d) => {
    return 3.14*d;
}




const siswa = [
    {
        "nama":"Nanda",
        "kelas":"XI-RPL-1"
    },
    {
        "nama":"zul",
        "kelas":"XI-RPL-1"
    },
    {
        "nama":"akmal",
        "kelas":"XI-RPL-1"
    },
    {
        "nama":"rifki",
        "kelas":"XI-RPL-1"
    },
    {
        
        "nama":"zidane",
        "kelas":"XI-RPL-1"
    },
    {
        "nama":"jaki",
        "kelas":"XI-RPL-1"
    },
    {
        "nama":"hilmi",
        "kelas":"XI-RPL-1"
    },
    {
        "nama":"viki",
        "kelas":"XI-RPL-1"
    },
];

let x;

for(x in siswa){
    let namaSiswa = siswa[x].nama 
    let kelasSiswa = siswa[x].kelas
    let divider = "<div>\
    <span class='nama-siswa'>"+namaSiswa+"</span>\
    <span class='kelas-siswa'>"+kelasSiswa+"</span>\
    </div>";
    document.getElementById('siswa-rpl').innerHTML += divider
}