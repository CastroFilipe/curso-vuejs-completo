<template>
	<div id="app">
		<span>
			<button @click="meuComponente = 'Citacoes'">Citacoes</button>
			<button @click="meuComponente = 'Sobre'">Sobre</button>
		</span>
		
		<!--tag que impede que o componente seja criado e destuido sempre que o componente 'sobre' for selecionado-->
		<keep-alive>
			<!--tag component do vue-->
			<component class="meu-componente" :is="meuComponente"></component>
		</keep-alive>
	</div>
</template>

<script>
import Citacoes from './components/Citacoes'
import Sobre from './components/Sobre'

export default {
	components: { Citacoes, Sobre },
	data(){
		return {
			meuComponente : 'Citacoes'
		}
	}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		font-size: 1.6rem;
	}

	button {
        outline: none;
        padding: 5px 15px 10px;
        margin: 10px 5px;
        border-radius: 3px;
        font-size: 2rem;
        font-weight: 300;
        color: #FFF;
        background-color: rgba(0, 0, 0, .5);
	}
	
	.meu-componente {
		display: flex;
		height: 50%;
		width: 50%;
	}
</style>