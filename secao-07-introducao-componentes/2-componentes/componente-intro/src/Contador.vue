<template>
    <div class="contador">
        <span>{{contador}}</span>
        <button @click="adicionar">+</button>
        <button @click="subtrair">-</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contador : 0
        }
    },
    methods: {
        adicionar(){
            this.contador++
        },
        subtrair(){
            this.contador--
        }
    },
}
</script>

<!--
scoped faz com que os estilos sejam aplicados apenas nos elementos do componente Contador.
Os estilos não serão aplicados a outros elementos fora do componente Contador
-->
<style scoped>
    .contador span{
        border-bottom: 1px solid #CCC;
        height: 30px;
        padding: 5px 25px;
    }

    .contador button {
        height: 30px;
        width: 30px;
        border-radius: 15px;
        background-color: coral;
        color: white;
        margin-left: 10px;
        outline: none;/*Itens selecionados não irão exibir as linhas que indicam que o item está selecionado*/
    }
</style>