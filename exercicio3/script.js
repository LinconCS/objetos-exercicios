const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

// a)
const copiaPokemon1 = {
    ...pokemon1,
    nome:'Squirtle',
    tipo:'Água'
}

// b)
pokemon1.ataques = []

// c)
const ataque1 = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
}
pokemon1.ataques.push(ataque1)

// d)
copiaPokemon1.ataques = [...pokemon1.ataques]

// e)
/* fazendo com spread 
pokemon1.ataques.push({
    ...pokemon1.ataques[0],
    nome: 'Folha Navalha',
    dano: 45,
    tipo: 'Grama'
})
*/
const ataque2 = {
    nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100
}
pokemon1.ataques.push(ataque2)

// f)
/* fazendo com spread 
copiaPokemon1.ataques.push({
    ...copiaPokemon1.ataques[0],
    nome: 'Jato de Água',
    dano: 40,
    tipo: 'Água'
})
*/
const ataque3 = {
    nome: "Jato de Água",
    dano: 40,
    tipo: "Água",
    precisao: 100
}
copiaPokemon1.ataques.push(ataque3)

// g)
console.log(pokemon1)
console.log(copiaPokemon1)


