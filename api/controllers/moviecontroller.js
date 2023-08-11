const Movie=require('../models/movie')


exports.addmovie=(req,res)=>{
    const filename=req.file.filename
    const {name,desc,year,cat}=req.body
    try{
     const record=  new Movie({name:name,desc:desc,year:year,cat:cat,img:filename})
     record.save()
     res.json({
        status:201,
        message:"Successfully Added",
        apidata:record
     })
    }catch(error){
           res.json({
            status:400,
            message:error.message
           })
    }
}
exports.allmovies=async(req,res)=>{
    try{
    const record=await Movie.find()
    res.json({
       status:200,
       apidata:record
    })
   }catch(error){
    res.json({
        status:400,
        message:error.message
    })
}
}

exports.moviecollection=async(req,res)=>{
   try{
    const record=  await Movie.find()
    res.json({
        status:200,
        apidata:record
     })
   }catch(error){
    res.json({
        status:400,
        message:error.message
    })
   }
}

exports.accordingtocat=async(req,res)=>{
    const {cat}=req.body
    try{
      const record= await Movie.find({cat:cat})
     // console.log(record)
     res.json({
        status:200,
        apidata:record
     })
    }catch(error){
           res.json({
            status:400,
            message:error.message
           })
    }
}

exports.deletemovie=async(req,res)=>{
    const id=req.params.id
    try{
        await Movie.findByIdAndDelete(id)
        res.json({
            status:200,
            message:'Successfully Deleted'
        })
    }catch(error){
        res.json({
            status:400,
            message:error.message
        })
    }
}