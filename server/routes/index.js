const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('dist/index')
})

module.exports = router
