import { createApp } from 'vue';
import App from './App.vue';

// Importa las librerías de Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Importar los iconos para usarlos
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { faClone } from '@fortawesome/free-solid-svg-icons';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {faBroom} from '@fortawesome/free-solid-svg-icons';
import {faSquareCheck} from '@fortawesome/free-solid-svg-icons';
import {faArrowRotateLeft} from '@fortawesome/free-solid-svg-icons';
import {faBan} from '@fortawesome/free-solid-svg-icons';
import {faBug} from '@fortawesome/free-solid-svg-icons';
import {faEraser} from '@fortawesome/free-solid-svg-icons';
import {faTerminal} from '@fortawesome/free-solid-svg-icons';
import {faBullseye} from '@fortawesome/free-solid-svg-icons';

// Añadir los iconos a la librería
library.add(faSquarePlus);
library.add(faClone);
library.add(faTrashCan);
library.add(faBroom);
library.add(faSquareCheck);
library.add(faArrowRotateLeft);
library.add(faBan);
library.add(faBug);
library.add(faEraser);
library.add(faTerminal);
library.add(faBullseye);

// Añado el componente de Font Awesome para poder usarlo
createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
