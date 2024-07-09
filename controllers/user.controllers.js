const  CRUDmodel = require ("../models/user.model")
let jwt = require("jsonwebtoken")

const submitPost = (req,res)=>{
    let blogdata={
        title: req.body.title,
        main:req.body.main
    }
    
    let blogPost = new CRUDmodel(blogdata)
    //Saving To The Database
    blogPost.save()
    .then(()=>{
            console.log("Post saved successfully"); 
            console.log(req.body);
            res.send({status:true, message:"post submitted successfully"})
    })
    .catch((err)=>{
        console.log(req.body);
        console.log("failed", err); 
        res.send({status:false, message:"Post could not be saved"})
    }) 
}

//READING FROM THE DATABASE
const readpost = (req, res)=>{
    let secret = process.env.SECRET
    let email = process.env.USER_EMAIL
    let token = jwt.sign({email}, secret, {expiresIn:900} ); console.log(token)
                
    CRUDmodel.find()
        .then((result)=>{console.log("Post loaded successfully"); 
        res.send({status:true, token, message:"Post loaded successfully", result })})
        
        .catch((err)=>{console.log("Post could not loaded", err); 
        res.send({status:false, message:"Post could not loaded"})})
}

//DELETING FORM THE DATABASE
const deletepost = (req, res)=>{
    let postID = req.body.id; console.log(req.body);
    userModel.findOneAndDelete({_id:postID})
    .then((result)=>{console.log(result); res.send({status:true, message:"Deleted successfully", result})})
    .catch((err)=>{console.log(err+ "couldnt delete"); res.send({status:false, message:"could not Delete", result})})
}

//UPDATING THE DATA
const editpost = (req, res)=>{
    console.log(req.body);
    let id= req.body.id; let title = req.body.title; let main = req.body.main;

    userModel.findOneAndUpdate({_id:id}, {title, main}, {new:true})
    .then((result)=>{
    console.log(result);
    res.send({status:true, message:"Edited Successfully"})
    })
    .catch((err)=>{res.send({status:false, message:" Edit failed" + " " + err}); console.log(err, "couldnt edit");})
}

module.exports={submitPost, readpost, deletepost, editpost }