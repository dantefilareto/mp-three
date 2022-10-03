const preference = require('./preferences');
const mercadopago = require("mercadopago");

exports.init = async function(){
    mercadopago.configure({
        access_token: "TEST-200312321772452-051315-eef217da54a82d0436a9a7f33244ef30-303364636",
      });
    //await mercadopago.preferences.create(preference.preferenceEbookTest1)
    //await mercadopago.preferences.create(preference.preferenceVideoTest1)

    mercadopago.preferences
    .create(preference.preferenceEbookTest1)
    .then(function (response) {
        response.body.id
    })
    .catch(function (error) {
        console.log(error);
    });
    mercadopago.preferences
    .create(preference.preferenceVideoTest1)
    .then(function (response) {
        response.body.id
    })
    .catch(function (error) {
        console.log(error);
    });
}
