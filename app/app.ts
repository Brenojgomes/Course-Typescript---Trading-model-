import { NegociacoesView } from './src/views/negociacoes-view.js';
import { NegociacaoController } from './src/controllers/negociacao-controller.js';

const contoller = new NegociacaoController();
const form = document.querySelector('.form');
if(form){
    form.addEventListener('submit', event => {
        event.preventDefault();
        contoller.adiciona();
    })
} else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se seu form existe!');
}

