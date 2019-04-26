const db = require('./../1.database/index')

module.exports = {
    getAllMovies : (req, res) => {
        var sql = `select * from movies;`
        db.query(sql, (err, result) => {
            if(err) throw err
            res.send(result)
        })
    },
    addMovie : (req, res) => {
       var newData = {
           nama : req.body.nama,
           tahun : req.body.tahun,
           description : req.body.description
       }
       var sql = `insert into movies set ?;`
       db.query(sql, newData, (err, result) => {
           if(err) throw err
           res.redirect('/movie/allmovies')
       })
    },
    editMovie : (req, res) => {
        var id = req.params.id
        var nama = req.body.nama
        var tahun = req.body.tahun
        var description = req.body.description

        var sql = `update movies set nama = '${nama}', tahun = ${tahun}, description = '${description}'
                    where id = ${id};`
        db.query(sql, {nama, tahun, description}, (err, result) => {
            if(err) throw err
            res.redirect('/movie/allmovies')
        })
    },
    deleteMovie : (req, res) => {
        var id = req.params.id
        var sql = `delete from movies where id=${id};`
        db.query(sql, (err, result) => {
            if(err) throw err
            res.redirect('/movie/allmovies')
        })
    },
    allCategories : (req, res) => {
        var sql = `select * from categories;`
        db.query(sql, (err, result) => {
            if(err) throw err
            res.send(result)
        })
    },
    addCategory : (req, res) => {
        var nama = req.body.nama
        var sql = `insert into categories (nama) values ('${nama}');`
        db.query(sql, nama, (err, result) => {
            if(err) throw err
            res.redirect('/movie/allcategories')
        })
    },
    editCategory : (req, res) => {
        var id = req.params.id
        var nama = req.body.nama
        var sql = `update categories set nama='${nama}' where id=${id};`
        db.query(sql, nama, (err, result) => {
            if(err) throw err
            res.redirect('/movie/allcategories')
        })
    },
    deleteCategory : (req, res) => {
        var id = req.params.id
        var sql = `delete from categories where id=${id};`
        db.query(sql, (err, result) => {
            if(err) throw err
            res.redirect('/movie/allcategories')
        })
    },
    allMovCat : (req, res) => {
        var sql = `select m.nama as Nama_Movie, c.nama as Nama_Category from movcat as mov
                   join movies as m on idmovie = m.id
                   join categories as c on idcategory = c.id;`
        db.query(sql, (err, result) => {
            if(err) throw err
            res.send(result)
        })
    },
    addMovCat : (req, res) => {
        var idmovie = req.body.idmovie
        var idcategory = req.body.idcategory
        var sql = `insert into movcat (idmovie, idcategory) values (${idmovie},${idcategory});`
        db.query(sql, {idmovie,idcategory}, (err, result) => {
            if(err) throw err
            res.redirect('/movie/allmovcat')
        })
    },
    deleteMovCat : (req, res) => {
        var id = req.params.id
        var sql = `delete from movcat where id=${id};`
        db.query(sql, (err, result) => {
            if(err) throw err
            res.redirect('/movie/allmovcat')
        })
    },
    getMovieOption : (req, res) => {
        var sql = `select id, nama from movies;`
        db.query(sql, (err, result) => {
            if(err) throw err
            res.send(result)
        })
    },
    getCatOption : (req, res) => {
        var sql = `select * from categories;`
        db.query(sql, (err, result) => {
            if(err) throw err
            res.send(result)
        })
    }
}