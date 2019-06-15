const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video');
var bodyParser = require('body-parser')

var customParser = bodyParser.json({type: function(req) {
       req.headers['content-type'] === star/star
}});

const db ="mongodb://localhost:27017/videoplayer";
mongoose.Promise = global.Promise;
mongoose.connect(db, { useNewUrlParser: true },function(err){
    if(err){
        console.log(err);
    }else{
        console.log("success");
    }
})
router.get('/videos',function(req,res){
    Video.find({}).exec(function(err,videos){
        if(err){
            console.log("error retrieved");
        }else{
            res.json(videos);
        }
    })
});
router.get('/videos/:id',function(req,res){
    console.log("get data by id");
    Video.findById(req.params.id).exec(function(err,video){
        if(err){
            console.log("error retrieved");
        }else{
            res.json(video);
        }
    })
});

router.post('/video',function(req,res){
    var newVideo= new Video();
    newVideo.title =req.body.title;
    newVideo.url=req.body.url;
    newVideo.description=req.body.description;
    newVideo.save(function(err, insertedVideo){
        if(err){
            console.log("failed to post");
        }else{
            console.log(res.json(insertedVideo));
        }
    })
});

router.put("/video/:id",function(req,res){
    Video.findByIdAndUpdate(req.params.id,
    {
       $set:{title:req.body.title, url: req.body.url, description: req.body.description} 
    },
    {
        new:true
    },
    function(err,updatedVideo){
        if(err){
            res.send("error");
        }else{
            res.json(updatedVideo);
        }
    }
    )
});

router.delete('/video/:id',function(req,res){
    Video.findByIdAndRemove(req.params.id, function(err,deletedVideo){
        if(err){
            res.send("deleted error hit");
        }else{
            res.json(deletedVideo);
        }
    })
});


module.exports = router;