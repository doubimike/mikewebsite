const router = require('koa-router')()

router.prefix('/collections')

router.get('/brick_game', async (ctx, next) => {
  await ctx.render('other_collections/brick_game')
})

router.get('/animation_cv', async (ctx, next) => {
  await ctx.render('other_collections/animation_cv/index')
})
router.get('/buddha_particle', async (ctx, next) => {
  await ctx.render('other_collections/canvas_particle_animator_new/index')
})
router.get('/make_a_movie_by_javascript', async (ctx, next) => {
  await ctx.render('other_collections/make_a_movie_by_javascript/index')
})

module.exports = router