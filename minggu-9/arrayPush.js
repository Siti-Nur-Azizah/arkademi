const hewan = ['singa', 'ular', 'harimau'],tambahan =['buaya', 'beruangan', {obj: 'rusa'}]
const arrayPushHewan = async () =>{
    await tambahan.map(res => hewan.push(res))
    console.log(hewan);
}

arrayPushHewan();
