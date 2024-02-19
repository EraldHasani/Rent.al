const Post = require('../models/post.model');



module.exports.findAll = (req, res) => {
    Post.find({ eMbyllur: false }) // Filter posts that are not closed
        .sort({ createdAt: -1 }) // Sort by createdAt in descending order
        .then((allPosts) => {
            res.json({ clinics: allPosts });
        })
        .catch((err) => {
            res.status(500).json({ message: "Something went wrong", error: err });
        });
};


module.exports.findOne = (req, res) => {
    Post.findOne({_id: req.params.id})
    .then((oneclinic) => {
        res.json({clinic: oneclinic})
    })
    .catch((err) => {
        res.json({message: "Something went wrong", error: err})
    })
}

module.exports.create = (req, res) => {
    Post.create(req.body)
    .then((createclinic) => {
        res.json({clinic: createclinic})
    })
    .catch((err) => {
        res.json({message: "Something went wrong", error: err})
    })

}






module.exports.update = (req, res) => {
    Post.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
    .then((updateclinic) => {
        res.json({clinic: updateclinic})
    })
    .catch((err) => {
        res.json({message: "Something went wrong", error: err})
    })

}


module.exports.delete = (req, res) => {
    Post.deleteOne({_id: req.params.id})
    .then((result) => {
        res.json({result: result})
    })
    .catch((err) => {
        res.json({message: "Something went wrong", error: err})
    })
}


module.exports.AddUserToPost = (req, res) => {
    Post.findOneAndUpdate(
        { _id: req.params.id },
        {
            $push: { users: req.body },
        },
        { new: true, runValidators: true }
    )
   
    .then((updatedPost) => {
        res.json({ post: updatedPost });
    })
    .catch((err) => {
        res.json({ message: "Something went wrong", error: err });
    });
};



module.exports.eLire= (req, res) => {
    try{
        Post.findOneAndUpdate({_id: req.params.id}, {eMbyllur: false})
        .then((form) => res.json(form))
        .catch((err) => res.status(400).json(err))
    }
    catch (err){
        res.status(400).json(err)
    }
}

module.exports.eZene= (req, res) => {
    try{
        Post.findOneAndUpdate({_id: req.params.id}, {eMbyllur: true})
        .then((form) => res.json(form))
        .catch((err) => res.status(400).json(err))
    }
    catch (err){
        res.status(400).json(err)
    }
}

