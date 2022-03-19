var moment = require('moment');
moment.locale('es');

console.log('Naci ' + moment('03/11/1990', 'DD/MM/YYYY').fromNow());