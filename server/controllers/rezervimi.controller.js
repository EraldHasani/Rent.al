const Rezervimi = require('../models/rezervimi.model');




module.exports.createForm = (req, res) => {
    Rezervimi.create(req.body)
    .then((createclinic) => {
        res.json({clinic: createclinic})
    })
    .catch((err) => {
        res.json({message: "Something went wrong", error: err})
    })

}

module.exports.getAllForms = (req, res) => {
    Rezervimi.find()
    .then((allclinics) => {
        res.json({clinics: allclinics})
    })
    .catch((err) => {
        res.json({message: "Something went wrong", error: err})
    })
}



module.exports.getFormById = (req, res) => {
    Rezervimi.findOne({_id: req.params.id})
    .then((oneclinic) => {
        res.json({clinic: oneclinic})
    })
    .catch((err) => {
        res.json({message: "Something went wrong", error: err})
    })
}

module.exports.getRezervimbyUserId = (req, res) => {
    Rezervimi.find({userId: req.params.id})
    .then((oneclinic) => {
        res.json({clinic: oneclinic})
    })
    .catch((err) => {
        res.json({message: "Something went wrong", error: err})
    })
}




