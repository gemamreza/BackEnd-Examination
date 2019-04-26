const router = require('express').Router()
const movieController = require('./../2.controller/movieController')

// movie
router.get('/allmovies', movieController.getAllMovies)
router.post('/addmovie', movieController.addMovie)
router.put('/editmovie/:id', movieController.editMovie)
router.delete('/deletemovie/:id', movieController.deleteMovie)

//category
router.get('/allcategories', movieController.allCategories)
router.post('/addcategory', movieController.addCategory)
router.put('/editcategory/:id', movieController.editCategory)
router.delete('/deletecategory/:id', movieController.deleteCategory)

//connection
router.get('/allmovcat', movieController.allMovCat)
router.post('/addmovcat', movieController.addMovCat)
router.delete('/deletemovcat/:id', movieController.deleteMovCat)


module.exports = router