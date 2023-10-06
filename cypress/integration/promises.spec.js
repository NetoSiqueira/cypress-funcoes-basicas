it('sem testes, ainda', () => {
    
});


const getSomething = () => {
    return new Promise((resolve, reject) =>{
        setTimeout( () =>{
            resolve(11);
        }, 1000)
    })
}

const system = async () => {
    console.log('init');
    //getSomething(some => {console.log(`Something is ${some}`)
    const some = await getSomething()
    console.log(`Something is ${some}`)
    console.log('end')
   // console.log(`Something is  ${something}`)
}

system();