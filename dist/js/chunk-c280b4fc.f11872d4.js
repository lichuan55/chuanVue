(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c280b4fc"],{"0e9b":function(t,s,e){},"10e5":function(t,s,e){"use strict";var i=e("c83f"),a=e.n(i);a.a},"1fbe":function(t,s,e){"use strict";var i=e("7ee5"),a=e.n(i);a.a},"49c2":function(t,s,e){"use strict";var i=e("8c71"),a=e.n(i);a.a},"4e90":function(t,s,e){"use strict";var i=e("fa35"),a=e.n(i);a.a},"63a3":function(t,s,e){},"6ab7":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"detail"}},[e("detail-nav-bar",{staticClass:"detail-nav"}),e("scroll",{ref:"scroll",staticClass:"content"},[e("detail-swiper",{attrs:{"top-images":t.topImages}}),e("detail-base-info",{attrs:{goods:t.goods}}),e("detail-shop-info",{attrs:{shop:t.shop}}),e("detail-goods-info",{attrs:{"detail-info":t.detailInfo},on:{imageLoad:t.imageLoad}}),e("detail-param-info",{attrs:{"param-info":t.paramInfo}})],1)],1)},a=[],n=(e("cadf"),e("551c"),e("097d"),function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("nav-bar",[i("div",{staticClass:"back",attrs:{slot:"left"},on:{click:t.backClick},slot:"left"},[i("img",{attrs:{src:e("7a74"),alt:""}})]),i("div",{staticClass:"title",attrs:{slot:"center"},slot:"center"},t._l(t.titles,function(s,e){return i("div",{staticClass:"title-item",class:{active:e===t.currentIndex},on:{click:function(s){t.titleClick(e)}}},[t._v("\n        "+t._s(s)+"\n      ")])}),0)])],1)}),o=[],c=e("a7ac"),l={name:"DetailNavBar",components:{NavBar:c["a"]},data:function(){return{titles:["商品","参数","评论","推荐"],currentIndex:0}},methods:{titleClick:function(t){this.currentIndex=t},backClick:function(){this.$router.back()}}},r=l,f=(e("1fbe"),e("2877")),d=Object(f["a"])(r,n,o,!1,null,"0cb779d2",null);d.options.__file="DetailNavBar.vue";var u=d.exports,p=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("swiper",{staticClass:"detail-swiper"},t._l(t.topImages,function(t){return e("swiper-item",[e("img",{attrs:{src:t,alt:""}})])}),1)},v=[],m=e("dc2c"),h={name:"DetailSwiper",components:{Swiper:m["a"],SwiperItem:m["b"]},props:{topImages:{type:Array,default:function(){return[]}}}},_=h,g=(e("49c2"),Object(f["a"])(_,p,v,!1,null,"59a8beac",null));g.options.__file="DetailSwiper.vue";var C=g.exports,b=function(){var t=this,s=t.$createElement,e=t._self._c||s;return 0!==Object.keys(t.goods).length?e("div",{staticClass:"base-info"},[e("div",{staticClass:"info-title"},[t._v(t._s(t.goods.title))]),e("div",{staticClass:"info-price"},[e("span",{staticClass:"n-price"},[t._v(t._s(t.goods.newPrice))]),e("span",{staticClass:"o-price"},[t._v(t._s(t.goods.oldPrice))]),t.goods.discount?e("span",{staticClass:"discount"},[t._v(t._s(t.goods.discount))]):t._e()]),e("div",{staticClass:"info-other"},[e("span",[t._v(t._s(t.goods.columns[0]))]),e("span",[t._v(t._s(t.goods.columns[1]))]),e("span",[t._v(t._s(t.goods.services[t.goods.services.length-1].name))])]),e("div",{staticClass:"info-service"},t._l(t.goods.services.length-1,function(s){return e("span",{key:s,staticClass:"info-service-item"},[e("img",{attrs:{src:t.goods.services[s-1].icon}}),e("span",[t._v(t._s(t.goods.services[s-1].name))])])}),0)]):t._e()},I=[],k={name:"DetailBaseInfo",props:{goods:{type:Object,default:function(){return{}}}}},w=k,y=(e("dc66"),Object(f["a"])(w,b,I,!1,null,"2d7c7142",null));y.options.__file="DetailBaseInfo.vue";var D=y.exports,j=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shop-info"},[e("div",{staticClass:"shop-top"},[e("img",{attrs:{src:t.shop.logo}}),e("span",{staticClass:"title"},[t._v(t._s(t.shop.name))])]),e("div",{staticClass:"shop-middle"},[e("div",{staticClass:"shop-middle-item shop-middle-left"},[e("div",{staticClass:"info-sells"},[e("div",{staticClass:"sells-count"},[t._v("\n          "+t._s(t._f("sellCountFilter")(t.shop.sells))+"\n        ")]),e("div",{staticClass:"sells-text"},[t._v("总销量")])]),e("div",{staticClass:"info-goods"},[e("div",{staticClass:"goods-count"},[t._v("\n          "+t._s(t.shop.goodsCount)+"\n        ")]),e("div",{staticClass:"goods-text"},[t._v("全部宝贝")])])]),e("div",{staticClass:"shop-middle-item shop-middle-right"},[e("table",t._l(t.shop.score,function(s,i){return e("tr",{key:i},[e("td",[t._v(t._s(s.name))]),e("td",{staticClass:"score",class:{"score-better":s.isBetter}},[t._v(t._s(s.score))]),e("td",{staticClass:"better",class:{"better-more":s.isBetter}},[e("span",[t._v(t._s(s.isBetter?"高":"低"))])])])}),0)])]),t._m(0)])},x=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shop-bottom"},[e("div",{staticClass:"enter-shop"},[t._v("进店逛逛")])])}],O={name:"DetailShopInfo",props:{shop:{type:Object,default:function(){return{}}}},filters:{sellCountFilter:function(t){return t<1e4?t:(t/1e4).toFixed(1)+"万"}}},P=O,$=(e("4e90"),Object(f["a"])(P,j,x,!1,null,"2ae65805",null));$.options.__file="DetailShopInfo.vue";var B=$.exports,L=function(){var t=this,s=t.$createElement,e=t._self._c||s;return 0!==Object.keys(t.detailInfo).length?e("div",{staticClass:"goods-info"},[e("div",{staticClass:"info-desc clear-fix"},[e("div",{staticClass:"start"}),e("div",{staticClass:"desc"},[t._v(t._s(t.detailInfo.desc))]),e("div",{staticClass:"end"})]),e("div",{staticClass:"info-key"},[t._v(t._s(t.detailInfo.detailImage[0].key))]),e("div",{staticClass:"info-list"},t._l(t.detailInfo.detailImage[0].list,function(s,i){return e("img",{key:i,attrs:{src:s,alt:""},on:{load:t.imgLoad}})}),0)]):t._e()},S=[],E={name:"DetailGoodsInfo",props:{detailInfo:{type:Object}},data:function(){return{counter:0,imagesLength:0}},methods:{imgLoad:function(){++this.counter===this.imagesLength&&this.$emit("imageLoad")}},watch:{detailInfo:function(){this.imagesLength=this.detailInfo.detailImage[0].list.length}}},F=E,N=(e("10e5"),Object(f["a"])(F,L,S,!1,null,"4b824e10",null));N.options.__file="DetailGoodsInfo.vue";var G=N.exports,z=function(){var t=this,s=t.$createElement,e=t._self._c||s;return 0!==Object.keys(t.paramInfo).length?e("div",{staticClass:"param-info"},[t._l(t.paramInfo.sizes,function(s,i){return e("table",{key:i,staticClass:"info-size"},t._l(s,function(s,i){return e("tr",{key:i},t._l(s,function(s,i){return e("td",{key:i},[t._v(t._s(s))])}),0)}),0)}),e("table",{staticClass:"info-param"},t._l(t.paramInfo.infos,function(s,i){return e("tr",[e("td",{staticClass:"info-param-key"},[t._v(t._s(s.key))]),e("td",{staticClass:"param-value"},[t._v(t._s(s.value))])])}),0),0!==t.paramInfo.image.length?e("div",{staticClass:"info-img"},[e("img",{attrs:{src:t.paramInfo.image,alt:""}})]):t._e()],2):t._e()},J=[],A={name:"DetailParamInfo",props:{paramInfo:{type:Object,default:function(){return{}}}}},T=A,q=(e("ed22"),Object(f["a"])(T,z,J,!1,null,"09a9ec91",null));q.options.__file="DetailParamInfo.vue";var H=q.exports,K=e("5d17");e("7f7f");function M(t,s){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}var Q=e("1bab");function R(t){return Object(Q["a"])({url:"/detail",params:{iid:t}})}var U=function t(s,e,i){M(this,t),this.title=s.title,this.desc=s.desc,this.newPrice=s.price,this.oldPrice=s.oldPrice,this.discount=s.discountDesc,this.columns=e,this.services=i,this.realPrice=s.lowNowPrice},V=function t(s){M(this,t),this.logo=s.shopLogo,this.name=s.name,this.fans=s.cFans,this.sells=s.cSells,this.score=s.score,this.goodsCount=s.cGoods},W=function t(s,e){M(this,t),this.image=s.images?s.images[0]:"",this.infos=s.set,this.sizes=e.tables},X={name:"Detail",components:{DetailNavBar:u,DetailSwiper:C,DetailBaseInfo:D,DetailShopInfo:B,DetailGoodsInfo:G,DetailParamInfo:H,Scroll:K["a"]},data:function(){return{iid:null,topImages:[],goods:{},shop:{},detailInfo:{},paramInfo:{}}},created:function(){var t=this;this.iid=this.$route.params.iid,R(this.iid).then(function(s){console.log(s);var e=s.result;t.topImages=e.itemInfo.topImages,t.goods=new U(e.itemInfo,e.columns,e.shopInfo.services),t.shop=new V(e.shopInfo),t.detailInfo=e.detailInfo,t.paramInfo=new W(e.itemParams.info,e.itemParams.rule)})},methods:{imageLoad:function(){this.$refs.scroll.refresh()}}},Y=X,Z=(e("7b83"),Object(f["a"])(Y,i,a,!1,null,"a17d26ca",null));Z.options.__file="Detail.vue";s["default"]=Z.exports},"7a74":function(t,s,e){t.exports=e.p+"img/back.26df9036.svg"},"7b83":function(t,s,e){"use strict";var i=e("63a3"),a=e.n(i);a.a},"7ee5":function(t,s,e){},"7f7f":function(t,s,e){var i=e("86cc").f,a=Function.prototype,n=/^\s*function ([^ (]*)/,o="name";o in a||e("9e1e")&&i(a,o,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(t){return""}}})},"8c71":function(t,s,e){},c83f:function(t,s,e){},d523:function(t,s,e){},dc66:function(t,s,e){"use strict";var i=e("d523"),a=e.n(i);a.a},ed22:function(t,s,e){"use strict";var i=e("0e9b"),a=e.n(i);a.a},fa35:function(t,s,e){}}]);
//# sourceMappingURL=chunk-c280b4fc.f11872d4.js.map