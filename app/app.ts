import { NegociacaoController } from './controllers/negociacao-controller.js';

const contoller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    contoller.adiciona();
})