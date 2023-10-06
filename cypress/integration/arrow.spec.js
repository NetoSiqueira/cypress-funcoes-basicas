it('nada agora', function() {  })

//const soma = function (a, b){
 //   return a + b;
//}

  //  const soma = (a, b) => {
  //      return a + b
  //  }


 // const soma = (a, b) => a + b

//const soma = (a) => a + a
const soma = a => a + a

console.log(soma(3,10))

it('a fuction test.....', function() {
    console.log('Function', this)
});

it('an arrow test;.....', () => {
    console.log('Arrow', this)
});