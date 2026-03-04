//closure
function eAgora(){
    let cont = 1
    function f1(){
        console.log(cont)
    }
    cont++
    function f2(){
        console.log(cont)
    }
    cont++
    return (f1, f2)
}

let res = eAgora()

res.f1()
res.f2()



// function saudacoesFactory(saudacao, nome){
//     return function(){
//         console.loig(`${saudacao}`, `${nome}`)
//     }
// }
// let olaJoao = saudacoesFactory('Oi', 'João')
// let tchauJoao = saudacoesFactory('Tchau', 'João')
// olaJoao()
// tchauJoao()



// function f(){
//     let nome = 'João'
//     function g(){
//         console.log(nome)
//         teste = 'a'
//     }
//     g()
// }

// f()

// let umaFuncao = function(){
//     console.log("Fui armazena numa variável")
// }

// umaFuncao()

// function f (funcao){
//     funcao()
// }
// f(umaFuncao)

// function g(){
//     function outraFuncao(){
//         console.log('Fui criada pela g')
//         return() => console.log("E agora?")
//     }
//     return outraFuncao
// }
// f(g()())

// f(g())

// const gResult = g()
// gResult()
// g()()()

// const valores = [1,2,3,4]


// const soma = valores.reduce((ac,v) =>  ac + v)
// console.log(soma)

// const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
// const algumComecaComA = nomes.some(n => n.startsWith('A'))
// console.log(algumComecaComA)

// const todosComecamComA = nomes.every(n => n.startsWith('A'))
// console.log(todosComecamComA)

//[A,A,R,A,C]
// const res = nomes.map(nome => nome.charAt(0))
// console.log(res)

//reescrever usando todo syntax sugar que as arrow functions oferecem
// const apenasComA = nomes.filter( nome =>  nome.startsWith('A'))
// console.log(apenasComA)





//funçôes
//arrow function
// const dobrar = n =>  2 * n
// console.log(dobrar(6))

// const triplicar = (n) => {
//     console.log("Vamos calcular o triplo de " + n)
//     return 3* n
// }


// //escreva uma função que decida se um valor é par ou não

// const par = (n) => n % 2 === 0

// par(2)

// const hello = (nome) =>{console.log('Oi ', + nome)}
// hello('Ana')
// const hello = () => {console.log('Oi')}
// hello()
// const dobrar =  function(n){
//     return 2 * n
// }

// donsole.log(dobrar(2))
// console.log(dobrar(undefined))

// const triplicar = function(n = 5){
//     return 3 * n
// }

// const resultado = triplicar(10)
// console.log(resultado)
// console.log(triplicar(undefined))

// const produto = function(a,b){
//     console.log(a*b)
// }

// function somar(a,b){
//     return a + b 
// }
// console.log(somar(2,3))

//functions e arrow functions

// function hello(){
//     console.log('Oi')
// }
// hello()
// function hello(nome){
//     console.log('Oi ', + nome)
// }

// hello('Ana')




// v1 = []
// console.log(v1.length)
// v1[0] = 3.4
// console.log(v1.length)
// v1[10] ='abc'
// console.log(v1.length)
// console.log(v1)
// for(let i = 0; i< v1.length; i++){
//     console.log(v1[i])
// }

//comparação por igualdade

//Java: ==, Python: ==
//Javascript: == ou ===(usamos apenas esse)

// console.log(true == 1): true
// console.log(1 === '1'): false
// console.log(1 == '1'): true


//coerção explicita
// const n1 = 2
// const n2 = '3'
// const n3 = n1 + Number(n2)
// console.log(`${n1} + ${n2} = ${n3}`)

//coerção implicita

// const n1 = 2
// const n2 = '3'
// const n3 = n1 + n2

// console.log(`${n1} + ${n2} = ${n3}`)

//tipos
//js é dinamicamente tipa

// let a = 2
// console.log(typeof(a))
// a = true
// console.log(typeof(a))

// s = "abc"
// String s = "abc"

// listaDeLista[[],[],[]]


//declaração de variaveis 
//const, let e var

// var idade = 18
// console.log(`Oi, ${nome}`)
// if(idade >= 18){
//     var nome = 'Maria'
//     console.log(`Parabens,${nome}. Você pode dirigir`)
// }
// console.log("Até mais, " + nome)
// var linguagem = 'Javascript'
// console.log(`Aprendendo ${linguagem}`)
// var linguagem = 'Java'
// console.log('Aprendendo' + linguagem)


// console.log('Antes do for')
// for (const i = 0; i < 10; i = i +1){
//     console.log('for com const...')
// }
// console.log('Depois do for')



// let nome = 'Maria'
// console.log(nome)
// nome = `Meu nome é ${nome}.`
// console.log(nome)




// const nome = 'José'
// console.log(nome)
// nome = 'José Silva'
// console.log(nome)


// console.log('Hello, JS!')