<template>
	<div id="app">
		<h1>Registrar Reclamação</h1>
		<div class="conteudo">
			<form class="painel" v-if="!formularioEnviado">
				<div class="cabecalho">Formulário</div>
				<Rotulo nome="E-mail">
					<!--os modificadores de entradas do usuário lazy e trim fazem alterações no input digitado.
					lazy fará com que o two way data binding ocorrá somente quando o usuário retirar o cursor do input
					trim removerá os espaços em branco antes e depois do valor digitado-->
					<input type="text" v-model.lazy.trim="usuario.email">
				</Rotulo>
				<Rotulo nome="Senha">
					<input type="password" v-model="usuario.senha">
				</Rotulo>
				<Rotulo nome="Idade">
					<!--modificador number em v-model.number garante que o valor será um número e não uma string-->
					<input type="number" v-model.number="usuario.idade">
				</Rotulo>
				<Rotulo nome="Mensagem">
					<textarea name="" cols="30" rows="5" v-model="mensagemTextArea"></textarea>
				</Rotulo>
				<Rotulo nome="Características do Problema">
					<!--o valor contido em 'value' será adicionado ao array 'caracteristicasSelecionadas' 
					quando o checkbox for selecionado-->
					<span class="mr-4">
						<input type="checkbox" value="reproduzivel" v-model="caracteristicasSelecionadas"> Reproduzível
					</span>
					<span>
						<input type="checkbox" value="intermitente" v-model="caracteristicasSelecionadas"> Intermitente
					</span>
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<!--devido a mesma propriedade v-model está em todos os radiobuttons o vue impedirá a seleção 
					de mais de uma opção por vez. O valor contido em 'value' será setado na propriedade 'produtoSelecionado' 
					quando o radiobutton for selecionado-->
					<span class="mr-4"><input type="radio" value="web" v-model="produtoSelecionado"> Web</span>
					<span class="mr-4"><input type="radio" value="mobile" v-model="produtoSelecionado"> Mobile</span>
					<span><input type="radio" value="outro" v-model="produtoSelecionado"> Outro</span>
				</Rotulo>
				<Rotulo nome="Prioridade">
					<select v-model="prioridadeSelecionada">
						<!--iteração sobre a lista 'niveisPrioridade' com os valores que serão exibidos na caixa
						de seleção-->
						<option v-for="op in niveisPrioridade" :key="op.codigo" :value="op.codigo">{{op.nome}}</option>
					</select>
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?">
					<Escolha v-model="primeiraReclamacao"/>
				</Rotulo>
				<hr>
				<button @click.prevent="enviar">Enviar</button>
			</form>

			<div class="painel" v-if="formularioEnviado">
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="E-mail">
					<span>{{usuario.email}}</span>
				</Rotulo>
				<Rotulo nome="Senha">
					<span>{{usuario.senha}}</span>
				</Rotulo>
				<Rotulo nome="Idade">
					<span>{{usuario.idade}}</span>	
				</Rotulo>
				<Rotulo nome="Mensagem">
					<!--a propriedade css white-space com o valor 'pre' fará com que os espaços em branco e
					quebras de linhas digitadas pelo usuário sejam preservadas, não sendo removidos-->
					<span style="white-space: pre;">{{mensagemTextArea}}</span>
				</Rotulo>
				<Rotulo nome="Marque as Opções">
					<span>
						<ul>
							<li v-for="c in caracteristicasSelecionadas" :key="c.value">{{c}}</li>
						</ul>
					</span>
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<span>{{produtoSelecionado}}</span>
				</Rotulo>
				<Rotulo nome="Prioridade">
					<span>{{prioridadeSelecionada}}</span>
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?">
					<span>{{primeiraReclamacao ? 'Sim' : 'Não'}}</span>
				</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import Escolha from './components/Escolha.vue'

export default {
	name: 'app',
	components: { Rotulo, Escolha },
	data() {
		return {
			mensagemTextArea: '',
			caracteristicasSelecionadas: [],
			produtoSelecionado: 'web',
			niveisPrioridade: [
				{codigo: 1, nome: 'Baixa'},
				{codigo: 2, nome: 'Média'},
				{codigo: 3, nome: 'Alta'}
			],
			prioridadeSelecionada: 1,
			usuario: {
				email: '',
				senha: '',
				idade: 25
			},
			primeiraReclamacao: false,
			formularioEnviado: false
		}
	},
	methods: {
		enviar(){
			this.formularioEnviado = true
		}
	},
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
