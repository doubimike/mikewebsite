const router = require('koa-router')()

router.prefix('/collections')

router.get('/brick_game', async (ctx, next) => {
  await ctx.render('other_collections/brick_game')
})

module.exports = router