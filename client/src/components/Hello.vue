<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>我的作品</h2>
    <ul>
      <li><a href="https://mikecollections.herokuapp.com/" target="_blank">我的博客</a></li>
      <li><a href="http://writelrc.qdgls.cn/#!/main" target="_blank">写歌词</a></li>
      <li><a href="http://qdgls.cn/" target="_blank">前端鼓励狮</a></li>
      <li><a href="http://doubimike.github.io/" target="_blank" title="我的在线简历 -设计理念：分别代表脑袋、身体、脚的页面，意指人的思想、作品、经历，整站代表一个形象的人 -开发技术：RequireJS，SASS，CSS3，jQuery及各种插件...">出道青涩简历</a></li>
      <!-- 我的在线简历 -设计理念：分别代表脑袋、身体、脚的页面，意指人的思想、作品、经历，整站代表一个形象的人 -开发技术：RequireJS，SASS，CSS3，jQuery及各种插件... -->
      <li><a href="http://www.doubimike.qdgls.cn/collections/make_a_movie_by_javascript" target="_blank">用JS制作电影</a></li>
    </ul>
    <h2>我的临摹</h2>
    <ul>
      <li><a href="http://www.doubimike.qdgls.cn/collections/animation_cv" target="_blank">我的酷炫简历</a></li>
      <li><a href="http://www.doubimike.qdgls.cn/collections/brick_game" target="_blank">Canvas砖块游戏</a></li>
      <li><a href="http://www.doubimike.qdgls.cn/collections/buddha_particle" target="_blank">佛粒子</a></li>
    </ul>
    <h2>我的外包</h2>
    <ul>
      <li><a href="http://www.shengyefinance.com/" target="_blank">盛业资本</a></li>
      <li><a href="http://www.ergedd.com/" target="_blank">儿歌点点</a></li>
      <li><a href="http://www.lpz56.com/" target="_blank">蓝胖子物流</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Doubmike\'s website!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
