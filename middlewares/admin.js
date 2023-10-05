module.exports = {
    isAdmin: async (req, res, next) =>{
        const {isAdmin} = req.body 
        const method = req.method;
        if(isAdmin || method === 'DELETE'){
            next()
        }else{
            res.status(403).send({
                msg: "User not admin"
            })
        }
    },
    itsMe: async(req, res, next) =>{
        const {itsMe} = req.body 
        const {isAdmin} = req.body 
        if(itsMe || isAdmin){
            next()
        }else{
            res.status(403).send({
                msg: "User not autorized"
            })
        }
    }
}