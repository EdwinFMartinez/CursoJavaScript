var bookModel = require('../models/bookModel');
exports.saveBook =  function (req, res){
   bookModel.create  ({
     date_reservation: req.body.date_reservation,
     id_services: req.body.id_services,
     mail: req.body.mail,
     names: req.body.names,
     hour_reservation: req.body.hour_reservation
   })

   .then(data =>{
    res.json(data);
})
.catch(err=> res.status(500).send(err));
}