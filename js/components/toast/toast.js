import './toast.css';
export default class Toast {
    constructor(message, type) {
        this.message = message;
        this.type = type;

        // Close the toast after 5 seconds 
        setTimeout(() => {
            this.close()
        }, 3000)
        document.querySelector(`[data-status="${this.type}"]`)?.remove();
        this.create()
    }
    create() {
        this.toast = document.createElement('div');
        this.toast.classList.add('toast__item');
        this.toast.setAttribute('data-status', this.type);

        const text = document.createElement('p');
        text.classList.add('toast__message');
        text.textContent = this.message;

        const button = document.createElement('button');
        button.classList.add('toast__close');
        button.innerHTML = '<span> <i class="fas fa-times"></i></span>'
        button.addEventListener('click', this.close.bind(this));

        this.toast.append(text, button)
        document.querySelector('.toast').append(this.toast);
    }
    close() {
        clearTimeout(this.timeout);
        this.toast.remove();
    }
}

