const router = require('express').Router()
const Product = require('./models/Products')


router.get('/all-products/:id' , (req,res,next) => {
    Product.find({category: req.params.id}).populate('category').exec((err, foundproduct) => {
        if (err) return next(err)
        return res.render('main/category' , {products: foundproduct})
    })
})




module.exports = router