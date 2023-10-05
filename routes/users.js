const express = require('express');
const { is } = require('express/lib/request');
const router = express.Router();
const adminMiddleware = require('../middlewares/admin');
const usersController = require('../controllers/users');


router.use(express.json());
//Para manipular todos los parametros de una URL
router.use(express.urlencoded({extended:true})); 

router.use(adminMiddleware.isAdmin);

router.delete('/:id', adminMiddleware.itsMe, usersController.delete);

router.get('/', usersController.get);

router.post('/', usersController.post);

router.put('/:id', usersController.put);

 
module.exports = router;

//Como función
/*function isAdmin(req, res, next){
    const {isAdmin} = req.body //Desestruración
        if(isAdmin){
            next()
        }else{
            res.status(403).send({
                msg: "User not admin"
            })
        }
    }*/

//De manera global en este router(users)
/*
router.use((req, res, next) =>{
    const {isAdmin} = req.body //Desestruración
    if(isAdmin){
        next()
    }else{
        res.status(403).send({
            msg: "User not admin"
        })
    }
})*/


/*router.get('/',isAdmin, (req, res) => {    
    res.status(200).send('Users')
})*/


/*router.get('/:id/', (req, res) => {
    res.send('id')
})

router.get('/login', (req, res) => {
    res.send('Login')
})*/

