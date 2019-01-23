<template>
<div>
  <div class="nav">
    <ul>
      <li class="l-btn" @click="goback"></li>
    </ul>
  </div>
  <div class="content">
    <div class="header clear"><h2><img src="../assets/img/head.png" alt=""/></h2><p>作者名字</p></div>
    <div class="cont">
      <h3>驱动中国晚报丨马云入选全球“10大思想者” 外卖送餐员平均月薪将近八千元</h3>
      <div class="time"><p>2驱动中国 百家号 01-2117:31 <span><img src="../assets/img/zan.png" alt=""/></span></p></div>
      <div class="text-box">1、马云入选《外交政策》十大思想者：他改变了一个社会。近日，美国《外交政策》杂志评选出了过去10年全球十大思想者榜单，阿里巴巴创始人马云跻身其中，位列第三，仅次于德国总理默克尔和美国前总统奥巴马，是排名最高的企业家。 《外交政策》给马云的评价是：真正能改变一个社会的人很少，马云是其中之一。他创办阿里巴巴，让一代中国人触达国内和国际市场，推动中国快速增长；引领供应链创新，在人工智能研究中居于领导地位；让一整代人把握电子商务的机遇，帮助中国成为世界大国。<br>
      2、外卖送餐员平均月薪将近八千元。1月21日，58同城招聘发布的《2018年送餐员就业报告》显示，2018年全国送餐员平均薪资达7750元，甚至超过了行政、文员等白领岗位。相信看到这里，小伙伴们肯定是五味杂陈，甚至有不少小伙伴萌生辞职送外卖的想法。但话说回来了，天下不会掉馅饼，外卖送餐员也不是人人都能干，风里来雨里去，试问有多少小伙伴能吃得了这个苦？<br>
      3、富士康大规模解聘？国家统计局局长：个例是有的。富士康可能解雇35万员工的消息立即登上了各大媒体头条，人们唏嘘之余也不禁质疑这究竟是真的吗？我们姑且暂不深究这个传言的真假，但正所谓“无风不起浪”，到底是什么原因导致了富士康需要缩减这么多的开支呢？而对此，坊间也是议论纷纷，一方面苹果手机销量不及预期，富士康作为苹果的组装工厂自然首当其冲；另一方面，也有观点认为，近年来都市康引进更多高端机器来代替人工，势必会导致人工数量的下滑。针对富士康年轻有大规模解雇的现象，国家统计局局长宁吉喆在1月21日举行的2018年国民经济运行情况发布会上回应，个例是有的，同时还要看到新的企业还在进入中国，无论是服务业还是制造业，包括百亿元规模的也在进入，外资有进有出是正常的，跨国企业在全球调整布局，这会带来一部分职工的转移就业和再就业。</div>
    </div>
  </div>
  <div class="foot-btn">
    <ul>
      <li class="say"><a href="javascript:;">
        <i></i><span>0</span>
      </a></li>
      <li class="zan"><a href="javascript:;">
        <i></i><span>0</span>
      </a></li>
      <li class="xing"><a href="javascript:;">
        <i><img src="../assets/img/xing.png" alt=""/></i>
      </a></li>
      <li class="fx"><a href="javascript:;">
        <i><img src="../assets/img/fx.png" alt=""/></i>
      </a></li>
    </ul>
  </div>
</div>
</template>
<script  scoped>
export default {
//   data(){
//     return {
//       detail:{}
//     }
//   },
  methods:{
    goback(){
      this.$router.go(-1);
    }
  },
//   mounted(){
//     let id = this.$route.params.id-0;
//     let dataName = this.$route.query.dataName;
//     this.$http({
//       url:'/data/article_'+dataName+'.data'
//     }).then(
//       res=>this.detail = res.data[id-1]
//     )
//   }
}
</script>

<style scoped> 
/* detail */
html,body{ overflow-x: hidden; }
    .nav{width:100%; position:fixed;top:0;left:0; background:#fff; border-bottom:1px solid #e8eaec; z-index:99;}
    .nav ul{width:6.4rem;height:0.45rem; padding-top:0.15rem; margin:0 auto;}
    .nav ul li{width:0.29rem;height:0.31rem; background:url(../assets/img/history.png) no-repeat 0 0; background-size:100%; margin:0 0 0 0.38rem;}

    .content{max-width:6.4rem; margin:0 auto; margin-top:0.6rem; background:#f2f4f5; padding-bottom:0.85rem;}
    .content .header{ padding:0.39rem 0.28rem 0.15rem 0.28rem; height:auto; background: none}
    .header h2{ float:left; margin-right:0.18rem;}
    .header p{ float:left; margin-top:0.18rem; font-size:0.3rem;}

    .content .cont{ padding:0 0.38rem; color:#494d4d;}
    .cont h3{ font-size:0.4rem; line-height:0.6rem; padding-bottom:0.25rem; border-bottom:1px solid #494d4d;}
    .cont .time{height:0.24rem; line-height:0.24rem; margin:0.26rem 0; }
    .time p{ float:left;position:relative;}
    .time span{width:0.33rem;height:0.32rem; position:absolute; top:-0.02rem;right:-0.35rem;}
    .time span img{width:100%;height:100%;}

    .cont .text-box{ font-size:0.25rem;}
    .text-box p{ line-height:0.45rem; margin-bottom:0.1rem;}
    .foot-btn{width:100%;height:0.8rem; background:#fff; border-top:1px solid #e8eaec; position:fixed; left:0;bottom:0;}
    .foot-btn ul{width:6.4rem; margin:0 auto;height:0.52rem; margin-top:0.16rem;}
    .foot-btn ul li{ float:left;}
    .foot-btn ul li a{width:100%;height:100%; display:block;}
    .foot-btn ul .say{width:2.03rem;height:0.52rem; border-right:1px solid #e8eaec;}
    .say i{width:0.36rem;height:0.26rem; background:url(../assets/img/say.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.7rem; margin-top:0.13rem;}
    .say span{height:0.26rem; float:left; line-height:0.26rem; margin-left:0.16rem; margin-top:0.13rem;}
    .foot-btn ul .zan{width:1.86rem;height:0.52rem; border-right:1px solid #e8eaec;}
    .zan i{width:0.36rem;height:0.28rem; background:url(../assets/img/zan1.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.54rem; margin-top:0.13rem;}
    .zan span{height:0.26rem; float:left; line-height:0.26rem; margin-left:0.16rem; margin-top:0.13rem;}
    .foot-btn ul .xing{width:1.2rem;height:0.52rem; border-right:1px solid #e8eaec;}
    .xing i{width:0.34rem;height:0.24rem; margin:0 auto; display:block; padding-top:0.1rem;}
    .xing i img{width:100%;}
    .foot-btn ul .fx{width:1.25rem;height:0.52rem;}
    .fx i{width:0.33rem;height:0.08rem;display:block; margin:0 auto; padding-top:0.15rem;}
    .fx i img{width:100%;}
</style>
