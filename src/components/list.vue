<template>
  <div class="newsList">
    <ul>
      <li>
        <!-- <router-link to="/detail/1"> -->
        <router-link :to="{name:'detail',params:{id:1},query:{dataName:'follow'}}">
          <h2>驱动中国晚报丨马云入选全球“10大思想者” </h2>
          <p>今天是2019年1月21日，农历十二月（腊月）十六，星期一，根据国家统计局消息，2018年，全国居民人均可支配收入28228元...</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'detail',params:{id:2},query:{start:1,count:2}}">
          <h2>知名科技博主：开源软件面临经济困境，就像过去的音乐产业一样</h2>
          <p>编者按：知名科技博主Ben Thompson以音乐产业发展史作为对比分析了当今开源软件的发展情况。开源经济面临的一个问题是...</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'detail',params:{id:2},query:{start:1,count:2}}">
          <h2>中国经济仍有条件保持平稳增长 增速仍将处于合理区间</h2>
          <p>步入2019年以来，多家国内外机构对今年中国经济形势进行了预测研判。在国际形势复杂严峻，经济面临下行压力的背景下，市场上不...</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'detail',params:{id:2},query:{start:1,count:2}}">
          <h2>长征十一号遥六火箭在酒泉成功发射 搭载4颗卫星</h2>
          <p>央视新闻客户端消息，2019年1月21日13时42分，长征十一号遥六火箭在酒泉卫星发射中心点火升空，成功将4颗卫星送入预定轨道。</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style>
.content .newsList{width:6.4rem; margin:0 auto;}
.newsList ul{ padding:0 0.4rem;}
.newsList ul li{ color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;}
.newsList ul li h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;}
.newsList ul li p{max-height:1.8rem; margin-top:0.05rem;overflow:hidden;}
.newsList{clear: both;margin-bottom:1rem;}
</style>
