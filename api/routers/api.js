const router=require('express').Router()
const regc=require('../controllers/regcontrollers')
const catec=require('../controllers/categorycontroller')
const moviec=require('../controllers/moviecontroller')

const multer=require('multer')

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/image')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+file.originalname)
    }
})

let upload=multer({
    storage:storage,
    limits:{fieldSize:1024*1024*4}
})


router.post('/regdata',regc.regdata)
router.post('/logincheck',regc.logincheck)
router.post('/categoryadd',catec.categoryadd)
router.get('/categoryrecord',catec.categoryrecord)
router.post('/addmovie',upload.single('img'),moviec.addmovie)
router.get('/allmovies',moviec.allmovies)

router.get('/moviecollection',moviec.moviecollection)
router.get('/categorytype',catec.categorytype)


router.post('/accordingtocat',moviec.accordingtocat)
router.get('/allcategort',catec.allcategort)

router.delete('/deletemovie/:id',moviec.deletemovie)


module.exports=router