var bookModel = require('../models/bookModel');
exports.saveBook =  function (req, res){
   bookModel.saveBook({
    attributes:['id_reservation','date_reservation','id_services','mail','names','hour_reservation']
   })

   .then(data =>{
    res.json(data);
})
.catch(err=> res.status(500).send('error'));
}