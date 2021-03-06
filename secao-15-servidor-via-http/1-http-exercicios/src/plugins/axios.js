/** Arquivo para configuração global do axios para disponibilizá-lo em toda a aplicação*/
import Vue from 'vue'
import axios from 'axios'

//url base para as requisições na api
//axios.defaults.baseURL = 'http://localhost:3000'

Vue.use({
    install(Vue) {
        /*propriedade $http criada e que aponta para a instância do axios.
        Com isso o axios poderá ser acessado através do atributo $http*/
        //Vue.prototype.$http = axios 

        /*criando instância do axios. Dessa forma novas instâncias podem ser 
        criadas com diferentes valores para baseURL. Assim, diferentes 
        apis podem ser consumidas*/
        Vue.prototype.$http = axios.create({
            baseURL : 'http://localhost:3000/'
        })

        /*Interceptors. Interceptando requisições. 
        Qualquer requisição passará por esse trecho de cógido. */
        Vue.prototype.$http.interceptors.request.use(config => {
            console.log('Requisição do tipo: '+ config.method)
            console.log(config)

            return config //necessário para permitir que a requisição continue até o destino.
        
        }, erro => Promise.reject(erro))//em caso de erro, será rejeitda a requisição.

        /*Interceptando respostas */
        Vue.prototype.$http.interceptors.response.use(res => {
            console.log('resposta recebida com sucesso')     
            return res //necessário para permitir que a requisição continue até o destino.
        }, erro => Promise.reject(erro))//em caso de erro, será rejeitda a Resposta.

    }
})