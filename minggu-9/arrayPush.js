const hewan = ['singa', 'ular', 'harimau'],tambahan =['buaya', 'beruangan', {obj: 'rusa'}]
const arrayPushHewan = async () =>{
    await tambahan.map(res => hewan.push(res))
    console.log(hewan);
}

arrayPushHewan();
/*NOTE:
Array map adalah fungsi perulangan array seperti for in dan foreach
*/