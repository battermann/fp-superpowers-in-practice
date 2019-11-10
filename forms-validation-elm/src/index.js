import './main.css';
import { Elm } from './Forms.elm';
import registerServiceWorker from './registerServiceWorker';

Elm.Forms.init({
  node: document.getElementById('root')
});

registerServiceWorker();
