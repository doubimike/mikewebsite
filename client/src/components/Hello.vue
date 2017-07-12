<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>我的作品</h2>
    <ul>
      <li><a href="https://mikecollections.herokuapp.com/" target="_blank">我的博客</a></li>
      <li><a href="http://writelrc.qdgls.cn/#!/main" target="_blank">写歌词</a></li>
      <li><a href="http://qdgls.cn/" target="_blank">前端鼓励狮</a></li>
    </ul>
    <h2>我的临摹</h2>
    <ul>
      <li><a href="http://www.doubimike.qdgls.cn/collections/animation_cv" target="_blank">我的酷炫简历</a></li>
      <li><a href="http://www.doubimike.qdgls.cn/collections/brick_game" target="_blank">Canvas砖块游戏</a></li>
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
