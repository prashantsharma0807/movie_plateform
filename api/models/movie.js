const mongoose=require('mongoose')

const movieSchema=mongoose.Schema({
    name:String,
    desc:String,
    year:String,
    cat:String,
    img:String
})

module.exports=mongoose.model('movie',movieSchema)