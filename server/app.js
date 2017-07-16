const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')
const collections = require('./routes/collections')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/client/dist/'))
app.use(require('koa-static')(__dirname + '/client/other_collections/animation_cv/es6/build/'))
app.use(require('koa-static')(__dirname + '/client/other_collections/canvas_particle_animator/'))

app.use(views(__dirname + '/client', {
  extension: 'html'
}))


// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(collections.routes(), index.allowedMethods())

module.exports = app
