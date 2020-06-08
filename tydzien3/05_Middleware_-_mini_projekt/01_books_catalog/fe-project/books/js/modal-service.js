//import { html, render } from './../node_modules/lit-html/lit-html.js';

const html = require('./../node_modules/lit-html/lit-html.js');
const render = require('./../node_modules/lit-html/lit-html.js');

class ModalService {
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    showModal(template) {
        render(html`
            <div class="modal-overlay">
                <div class="modal-container">
                    ${template}
                </div>
            </div>
        `, this.rootElement);
    }

    closeModal() {
        render('', this.rootElement);
    }

}

module.exports = ModalService;