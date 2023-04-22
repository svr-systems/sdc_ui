import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const options = {
    confirmButtonColor: '#4caf50',
    cancelButtonColor: '#757575',
};

Vue.use(VueSweetalert2, options);