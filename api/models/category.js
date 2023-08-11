const mongoose=require('mongoose')

const categorySchema=mongoose.Schema({
    categoryName:String
})


module.exports=mongoose.model('category',categorySchema)