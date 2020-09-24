import Koa from 'koa'
import cors from '@koa/cors'
import Router from'koa-router'
import bodyParser from 'koa-bodyparser'
import api from './api'

const app = new Koa() 
const router = new Router()

const PORT = process.env.PORT

app.use(bodyParser())
app.use(cors())

router.use('/api', api.routes())

app.use(router.routes()).use(router.allowedMethods())

app.listen(PORT, () => {
    console.log(`Listening port ${PORT}`)
})
