module.exports = {
    get: async(req, res, next) => {
        res.status(200).send({msg: "users"});
    },
    post: async(req, res, next) => {
        res.status(201).send({msg:"POST"});
    },
    put: async(req, res, next) => {
        console.log(req.params.id);
        res.status(201).send({msg:"PUT"});
    },
    delete: async(req, res, next) => {
        res.status(201).send({msg:"DELETE"});
    },
}