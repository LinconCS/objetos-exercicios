const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

// respostas aqui ⬇️

const nomePrimeiroAtor = filme.elenco[0]
console.log(`Nome do Primeiro Ator/Atriz:`, nomePrimeiroAtor)

const nomeUltimoAtor = filme.elenco[3]
console.log(`Nome do Último Ator/Atriz:`, nomeUltimoAtor)

const todasTransmissoesHoje = filme.transmissoesHoje
console.log(`Todas as transmissões de hoje:`, todasTransmissoesHoje)

const horarioFilmeCanalBrasil = filme.transmissoesHoje[1].horario
console.log(`Horário de transmissão do filme no Canal Brasil:`, horarioFilmeCanalBrasil)

