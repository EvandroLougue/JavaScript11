import 'core-js/stable';
import 'regenerator-runtime/runtime'
import validaLogin from './modules/validaLogin'
//import './assets/css/estilo.css';

const login = new validaLogin('.form-login');
const cadastro = new validaLogin('.form-cadastro');

login.init();
cadastro.init();