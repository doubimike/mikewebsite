const router = require('koa-router')()

router.prefix('/collections')

router.get('/brick_game', async (ctx, next) => {
  await ctx.render('other_collections/brick_game')
})

router.get('/animation_cv', async (ctx, next) => {
  await ctx.render('other_collections/animation_cv/index')
})

module.exports = router