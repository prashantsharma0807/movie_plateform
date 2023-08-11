const Category=require('../models/category')


exports.categoryadd=(req,res)=>{
    const {category}=req.body
    //console.log(req.body)
    try{
       const record= new Category({categoryName:category})
       record.save()
        res.json({
            status:201,
            message:"Successfully added"
        })
    }catch(error){
         res.json({
            status:400,
            message:error.message
         })
    }
}

exports.categoryrecord=async(req,res)=>{
   try{
    const record=await Category.find()
   // console.log(record)
    res.json({
        status:200,
        apidata:record
    })
   // console.log(record)
   }catch(error){
         res.json({
            status:400,
            message:error.message
         })
   }
}
exports.categorytype=async(req,res)=>{
    try{
     const record=await Category.find()
    // console.log(record)
     res.json({
         status:200,
         apidata:record
     })
    // console.log(record)
    }catch(error){
          res.json({
             status:400,
             message:error.message
          })
    }
 }

 exports.allcategort=async(req,res)=>{
    try{
        const record=await Category.find()
       // console.log(record)
        res.json({
            status:200,
            apidata:record
        })
       // console.log(record)
       }catch(error){
             res.json({
                status:400,
                message:error.message
             })
       }
 }
 