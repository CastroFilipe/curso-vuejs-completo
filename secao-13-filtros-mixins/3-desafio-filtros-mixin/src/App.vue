<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<p>{{ frase1 | replaceSpaces}}</p>
		
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<p>{{ frase2 | contarCaracteres}}</p>

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<!-- <p>{{ espacoPorVirgula }}</p>
		<p>{{ fraseTamanhos }}</p> -->

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
		<p>{{ espacoPorVirgula }}</p>
		<p>{{ fraseTamanhos }}</p>
	</div>
</template>

<script>
import palavrasMixin from '@/palavrasMixin.js'

export default {
	mixins: [palavrasMixin],
	filters: {
		replaceSpaces(valor){
			return valor.replace(/\s/g, ',')
		},
	},
	data() {
		return {
			frase1: 'Isto é uma caliúnia! Uma caliúnia! Você sabe o que é uma caliúnia?',
			frase2: 'Pedro é legal'
		}
	},
	// substituido pelo mixin
	// computed: {
	// 	espacoPorVirgula() {
	// 		return this.frase1.replace(/\s/g, ',')//fará a mesma coisa que o filtro replaceSpaces
	// 	},
	// 	fraseTamanhos(){
	// 		return this.frase2.split(' ').map((palavra)=>{ return `${palavra}(${palavra.length}) `}).join('')
	// 	}
	// },
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}
</style>
