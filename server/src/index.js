const Koa = require('koa')
const cors = require('@koa/cors')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const axios = require('axios')

const app = new Koa() 
const router = new Router()

const port = 4000;

router.use('/home', router.routes())

app.use(bodyParser())

app.use(router.routes()).use(router.allowedMethods())

app.listen(port, () => {
    console.log('Listening port 4000')
})
