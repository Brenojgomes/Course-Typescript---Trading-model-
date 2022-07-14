export class View {
    constructor(seletor) {
        this.elemento.innerHTML = seletor;
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
