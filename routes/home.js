
var Homecontroller = require('../controllers/home');

module.exports = (app) => {  
app.get(`/`, Homecontroller.index);
app.get(`/login`, Homecontroller.login);
app.get(`/register`, Homecontroller.register);
app.post(`/adduser`, Homecontroller.adduser);

}