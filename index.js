const express = require('express')
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const app = express()
const port = 3000

/*Route*/
const apiRoutes = require('./routes/index')

/* Middleware Global */
app.use(express.json());
//Para manipular todos los parametros de una URL
app.use(express.urlencoded({extended:true})); 

app.get('/', (req, res) => {
    res.status(200).send('ok')
})

app.use(apiRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})