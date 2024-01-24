import validator from "validator"; 

export default class validaLogin {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }
    events() {
        if (!this.form) return;
        this.form.addEventListener('submit' , e => {
            e.preventDefault();
            this.validate(e);
        });
    }
    validate(e) {
        const el = e.target;
        const emailInput = document.querySelector('input[name="email"]');
        const passwordInput = document.querySelector('input[name="password"]');
        let error = false;

        if (!validator.isEmail(emailInput.value)) {
            alert('E-mail inválido');
            error = true;
        }

        if (passwordInput.value.length < 6 || passwordInput.value.length > 20) {
            alert('Senha precisa ter entre 6 e 20 caracteres');
            error = true;
        }

        if (!error) el.submit();
    }
}