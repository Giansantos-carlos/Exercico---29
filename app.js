
const getPokemon = (url, callback) => {
    const request = new XMLHttpRequest
    
    request.addEventListener('readystatechange', () => {
        const isRequestOk = request.readyState === 4 && request.status === 200
        const isRequestNotOk = request.readyState === 4 
        if(isRequestOk) {
            const data = JSON.parse(request.responseText)
            callback(null, data)
            return
        }
        
        if(isRequestNotOk) {
            console.log('Não foi possivel acesso o pokemon', null)
        }
    })
    
    request.open('GET', url)
    request.send()    
}
const logPokemonData = (error, data) => error ? 
 console.log(error) 
 : console.log(`Pokemon obtido : ${data.name}`)

const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
const bulbasaur = getPokemonUrl(1) 
const charmander = getPokemonUrl(4)
const squirtle =  getPokemonUrl(7)
getPokemon(bulbasaur, (error, data) => {
    logPokemonData(error, data)
    getPokemon(charmander, (error,data) => {
        logPokemonData(error, data)
        getPokemon(squirtle, logPokemonData)
    })
})





const map = (array, func) => {
    let newArray = []
    array.forEach(item => newArray.push(func(item)))
    return newArray
}

console.log(map([1,2,3,4,5,6], item => item * 2))
console.log(map([1,2,3,4,5,6], item => item * 10))
console.log(map([1,2,3,4,5,6], item => item * 4))

const person = {
    name: 'Roger',
    getName () {
        return this.name   
    }    
  }
  
console.log(person.getName())

const x = 'x'

const getX = () => {
    const x = 'y'
}


const getFullName = ({firstName, lastName}) => `${firstName} ${lastName}`
  console.log(getFullName({ firstName: 'Afonso', lastName: 'Solano' }))
  

const convertToHex = color => {
    const colors = {
        red: '#A31419',
        green: '#10A337',
        blue: '#4C91F0',
        yellow: '#F0EA6F',
        purple: '#8132A3'
    }
    return colors[color] ? `O hexadecimal para a cor ${color} é ${colors[color]}` : `Não temos o equivalente hexadecimal para ${color}`
}

const colors = [
    'red', 
    'green', 
    'blue', 
    'yellow', 
    'purple', 
    'black', 
    'brow', 
    'pink'
]
const logColorMessage = color =>console.log(convertToHex(color)) 
colors.forEach(logColorMessage)



const people = [
    { id: 5 , name: 'Angelica', age: 18, federativeUnit: 'Pernambuco' },
    { id: 81, name: 'Thales', age: 19, federativeUnit: 'São Paulo' },
    { id: 47, name: 'Ana Carolina', age: 18, federativeUnit: 'Alagoas' },
    { id: 87, name: 'Felipe', age: 18, federativeUnit: 'Minas Gerais' },
    { id: 9 , name: 'Gabriel', age: 20, federativeUnit: 'São Paulo' },
    { id: 73, name: 'Aline', age: 19, federativeUnit: 'Brasília' }
  ]

const createOrIncrementAgeFrequency = (acc, {age}) => {
    acc[age] = acc[age] + 1 || 1 
    return acc
} 

const agesFranquency = people.reduce(createOrIncrementAgeFrequency,{})

console.log(agesFranquency)


