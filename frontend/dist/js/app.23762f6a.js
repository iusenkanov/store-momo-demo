(function(t){function e(e){for(var c,a,o=e[0],i=e[1],u=e[2],l=0,d=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&d.push(n[a][0]),n[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c]);b&&b(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],c=!0,a=1;a<r.length;a++){var o=r[a];0!==n[o]&&(c=!1)}c&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var c={},a={app:0},n={app:0},s=[];function o(t){return i.p+"js/"+({404:"404",cart:"cart",login:"login",me:"me"}[t]||t)+"."+{404:"bf5cd41f",cart:"e654e9de",login:"37af65f1",me:"e71d8228"}[t]+".js"}function i(e){if(c[e])return c[e].exports;var r=c[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r={login:1,me:1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise((function(e,r){for(var c="css/"+({404:"404",cart:"cart",login:"login",me:"me"}[t]||t)+"."+{404:"31d6cfe0",cart:"31d6cfe0",login:"4aa27098",me:"c6249179"}[t]+".css",n=i.p+c,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===c||l===n))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===c||l===n)return e()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=e,b.onerror=function(e){var c=e&&e.target&&e.target.src||n,s=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=c,delete a[t],b.parentNode.removeChild(b),r(s)},b.href=n;var h=document.getElementsByTagName("head")[0];h.appendChild(b)})).then((function(){a[t]=0})));var c=n[t];if(0!==c)if(c)e.push(c[2]);else{var s=new Promise((function(e,r){c=n[t]=[e,r]}));e.push(c[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(b);var r=n[t];if(0!==r){if(r){var c=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+c+": "+a+")",d.name="ChunkLoadError",d.type=c,d.request=a,r[1](d)}n[t]=void 0}};var b=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=c,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)i.d(r,c,function(e){return t[e]}.bind(null,c));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var b=l;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"2b99":function(t,e,r){"use strict";r("ebf7")},3167:function(t,e,r){},4010:function(t,e,r){"use strict";var c=r("7a23");const a={class:"d-flex justify-content-center align-items-center"};function n(t,e){return Object(c["u"])(),Object(c["f"])("div",a,[Object(c["z"])(t.$slots,"default")])}var s=r("6b0d"),o=r.n(s);const i={},u=o()(i,[["render",n]]);e["a"]=u},"5e0c":function(t,e,r){"use strict";r("6b14")},"600f":function(t,e,r){"use strict";r("3167")},"69b7":function(t,e,r){},"6b14":function(t,e,r){},"6d36":function(t,e,r){"use strict";r("c863")},"7b52":function(t,e,r){"use strict";r("69b7")},"87b5":function(t,e,r){},"8b7e":function(t,e,r){"use strict";r("87b5")},"9fd8":function(t,e,r){},ba6e:function(t,e,r){"use strict";var c=r("7a23");function a(t,e,r,a,n,s){return Object(c["u"])(),Object(c["f"])("div",{class:"spinner-border",role:"status",style:Object(c["q"])({width:t.size,height:t.size,"font-size":t.thickness,color:t.color})},e[0]||(e[0]=[Object(c["g"])("span",{class:"visually-hidden"},"Loading...",-1)]),4)}var n=Object(c["j"])({name:"Spinner",props:{size:{type:String,default:"4rem"},thickness:{type:String,default:"1rem"},color:{type:String,default:"#000"}}}),s=r("6b0d"),o=r.n(s);const i=o()(n,[["render",a]]);e["a"]=i},c863:function(t,e,r){},c8a0:function(t,e,r){},cd49:function(t,e,r){"use strict";r.r(e);var c=r("7a23");const a={class:"mt-3 content-wrapper"};function n(t,e,r,n,s,o){const i=Object(c["A"])("Navbar"),u=Object(c["A"])("router-view"),l=Object(c["A"])("Spinner"),d=Object(c["A"])("Center");return Object(c["u"])(),Object(c["f"])(c["a"],null,[Object(c["i"])(i),Object(c["g"])("div",a,[t.$store.state.auth.checked?(Object(c["u"])(),Object(c["d"])(u,{key:0})):(Object(c["u"])(),Object(c["d"])(d,{key:1,class:"h-100"},{default:Object(c["H"])(()=>[Object(c["i"])(l,{size:"8rem",thickness:"1.25rem"})]),_:1}))])],64)}var s=r("cf05"),o=r.n(s);const i={class:"navbar navbar-expand-sm navbar-dark bg-dark"},u={class:"container-fluid justify-content-end"},l={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},d={class:"navbar-nav align-items-stretch align-items-sm-center"};function b(t,e,r,a,n,s){const b=Object(c["A"])("router-link"),h=Object(c["A"])("CartIcon");return Object(c["u"])(),Object(c["f"])("nav",i,[Object(c["g"])("div",u,[Object(c["i"])(b,{class:"navbar-brand me-auto",to:"/"},{default:Object(c["H"])(()=>e[0]||(e[0]=[Object(c["g"])("img",{src:o.a,style:{"margin-right":"15px",height:"57px"}},null,-1),Object(c["h"])("Пельменная №2")])),_:1}),e[2]||(e[2]=Object(c["g"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["g"])("span",{class:"navbar-toggler-icon"})],-1)),Object(c["g"])("div",l,[e[1]||(e[1]=Object(c["g"])("div",{class:"navbar-nav me-auto"},null,-1)),Object(c["g"])("div",d,[Object(c["i"])(h,{class:"d-none d-sm-block"})])]),Object(c["i"])(h,{class:"d-block d-sm-none ms-3"})])])}r("14d9");const h={class:"fas fa-shopping-cart"},p={key:0,class:"badge badge-pill"};function g(t,e,r,a,n,s){const o=Object(c["A"])("router-link");return Object(c["u"])(),Object(c["d"])(o,{class:"mx-0 mx-sm-2 my-2 my-sm-0",to:"/cart"},{default:Object(c["H"])(()=>[Object(c["g"])("i",h,[t.$store.getters.numberOfItemsInCart?(Object(c["u"])(),Object(c["f"])("span",p,Object(c["D"])(t.$store.getters.numberOfItemsInCart),1)):Object(c["e"])("",!0)])]),_:1})}var f=Object(c["j"])({data(){const t=10;return{numberOfItems:t}}}),m=(r("2b99"),r("6b0d")),j=r.n(m);const O=j()(f,[["render",g],["__scopeId","data-v-7962ddac"]]);var v=O,y=Object(c["j"])({components:{CartIcon:v},methods:{handleLogout(){this.$store.dispatch("logout").then(()=>{this.$router.push("/login")})}}});const C=j()(y,[["render",b]]);var _=C,k=_,A=r("ba6e"),w=r("4010"),x=Object(c["j"])({name:"App",components:{Navbar:k,Spinner:A["a"],Center:w["a"]}});r("6d36");const I=j()(x,[["render",n]]);var S=I,P=(r("13d5"),r("e9f5"),r("9485"),r("5502")),$=r("bc3a"),q=r.n($),T=r("8958");q.a.defaults.baseURL="/api";class L{static async getCsrfToken(t=!0){const e=Object(T["parse"])(document.cookie);return e["mock_store_csrftoken"]?e["mock_store_csrftoken"]:t?(await this.get("/csrf/"),this.getCsrfToken(!1)):Promise.reject("No CSRF token found")}static async getHeaders(t={}){return Object.assign({"X-CSRFTOKEN":await this.getCsrfToken()},t)}static get(t,e){return q.a.get(t,{params:e}).then(t=>t.data)}static async post(t,e){return q.a.post(t,e,{headers:await this.getHeaders()}).then(t=>t.data)}static async put(t,e){return q.a.put(t,e,{headers:await this.getHeaders()}).then(t=>t.data)}static async delete(t,e){return q.a.delete(t,{headers:await this.getHeaders(),data:e}).then(t=>t.data)}}var N=L;const F=JSON.parse(localStorage.getItem("cart")||"{}");function E(t){return"_"+t.id.toString()}const H=Object(P["a"])({state:{cart:F,auth:{checked:!1,isLoggedIn:!1}},getters:{cartAsArray:t=>Object.values(t.cart),numberOfItemsInCart:t=>Object.values(t.cart).reduce((t,e)=>t+e.quantity,0),cartTotal:t=>Object.values(t.cart).reduce((t,e)=>t+e.quantity*e.product.price,0),userFullname:t=>t.auth.user?t.auth.user.first_name+" "+t.auth.user.last_name:""},mutations:{addToCart(t,e){t.cart[E(e)]?t.cart[E(e)].quantity++:t.cart[E(e)]={product:e,quantity:1}},removeFromCart(t,e){delete t.cart[E(e)]},setAuthChecked(t,e){t.auth.checked=e},setAuthLoggedIn(t,e){t.auth.isLoggedIn=e},setAuthUser(t,e){t.auth.user=e}},actions:{async checkAuth({commit:t}){const e=await N.get("/auth/whoami/").catch(t=>{if(t.response&&403===t.response.status)return null});t("setAuthChecked",!0),t("setAuthLoggedIn",!!e),t("setAuthUser",e)},login({commit:t},e){return N.post("/auth/login/",e).then(e=>(t("setAuthLoggedIn",!0),t("setAuthUser",e),e))},logout({commit:t}){return N.post("/auth/logout/").then(()=>{t("setAuthLoggedIn",!1),t("setAuthUser",null),N.csrf_token=""})},changePassword({commit:t},e){return N.post("/auth/change-password/",e).then(e=>(t("setAuthLoggedIn",!1),t("setAuthUser",null),N.csrf_token="",e))}},modules:{}});H.dispatch("checkAuth"),H.subscribe((t,e)=>{localStorage.setItem("cart",JSON.stringify(e.cart))});var M=H,D=r("6605");const z={class:"container d-flex flex-column h-100"},U={class:"row flex-fill"},R={class:"col-12 col-lg-9"},B={class:"d-flex flex-column h-100"},J={class:"flex-fill"},K={key:0,class:"d-flex align-items-center justify-content-center h-100"},X={class:"col-12 col-lg-3 my-3 my-lg-0"};function G(t,e,r,a,n,s){const o=Object(c["A"])("Products"),i=Object(c["A"])("Pagination"),u=Object(c["A"])("Search"),l=Object(c["A"])("CartCard"),d=Object(c["A"])("Filters");return Object(c["u"])(),Object(c["f"])("div",z,[e[3]||(e[3]=Object(c["g"])("div",{class:"row"},[Object(c["g"])("div",{class:"col-12 col-lg-9"},[Object(c["g"])("h1",{class:"text-center mb-3"},"Каталог")])],-1)),Object(c["g"])("div",U,[Object(c["g"])("div",R,[Object(c["g"])("div",B,[Object(c["g"])("div",J,[t.loading?(Object(c["u"])(),Object(c["f"])("div",K,e[0]||(e[0]=[Object(c["g"])("div",{class:"spinner-wrapper"},[Object(c["g"])("div",{class:"spinner-border",role:"status"},[Object(c["g"])("span",{class:"visually-hidden"},"Загрузка...")])],-1)]))):(Object(c["u"])(),Object(c["d"])(o,{key:1,products:t.products},null,8,["products"]))]),Object(c["g"])("div",null,[Object(c["i"])(i,{products:t.products,onPageChange:t.fetchProducts},null,8,["products","onPageChange"])])])]),Object(c["g"])("div",X,[Object(c["i"])(u,{onSearch:t.handleSearch,query:t.search_query},null,8,["onSearch","query"]),e[1]||(e[1]=Object(c["g"])("br",null,null,-1)),Object(c["i"])(l),e[2]||(e[2]=Object(c["g"])("br",null,null,-1)),Object(c["i"])(d,{onChange:t.handleFiltersChange},null,8,["onChange"])])])])}const Q={key:0,class:"grid"},V={key:1,class:"text-center mt-4"};function W(t,e,r,a,n,s){const o=Object(c["A"])("Product");return t.products.results.length?(Object(c["u"])(),Object(c["f"])("div",Q,[(Object(c["u"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(t.products.results,(t,e)=>(Object(c["u"])(),Object(c["d"])(o,{key:e,product:t},null,8,["product"]))),128))])):(Object(c["u"])(),Object(c["f"])("div",V,e[0]||(e[0]=[Object(c["g"])("h3",{class:"text-secondary"},"Продукты не найдены",-1)])))}const Y={class:"card"},Z=["src","alt"],tt={class:"card-body"},et={class:"card-title"},rt={class:"card-subtitle fw-bold"},ct={class:"card-text"};function at(t,e,r,a,n,s){return Object(c["u"])(),Object(c["f"])("div",Y,[Object(c["g"])("img",{src:t.product.image,class:"card-img-top",alt:`Изображение "${t.product.name}"`},null,8,Z),Object(c["g"])("div",tt,[Object(c["g"])("h5",et,Object(c["D"])(t.product.name),1),Object(c["g"])("h6",rt,"$"+Object(c["D"])(t.product.price),1),Object(c["g"])("p",ct,Object(c["D"])(t.product.description),1),Object(c["g"])("button",{onClick:e[0]||(e[0]=(...e)=>t.addToCart&&t.addToCart(...e)),class:"btn btn-primary"},"Добавить в корзину")])])}class nt{constructor(t){this.id=t.id,this.name=t.name,this.price=t.price,this.description=t.description,this.image=t.image}}var st=Object(c["j"])({name:"Product",props:{product:{type:nt,required:!0}},methods:{addToCart(){this.$store.commit("addToCart",this.product)}}});r("600f");const ot=j()(st,[["render",at],["__scopeId","data-v-ce16fffa"]]);var it=ot,ut=Object(c["j"])({name:"Products",components:{Product:it},props:{products:{type:Object,required:!0}}});r("8b7e");const lt=j()(ut,[["render",W],["__scopeId","data-v-2ded20a0"]]);var dt=lt;function bt(t,e,r,c,a,n){return null}var ht=Object(c["j"])({props:{products:{type:Object,required:!0}},emits:["pageChange"],methods:{setPage(t){t>0&&t<=this.products.total_pages&&(this.products.current_page=t,this.$emit("pageChange",t))},handleBur(t){const e=t.target;this.setPage(Number(e.value)),e.value=this.products.current_page.toString()}}});r("5e0c");const pt=j()(ht,[["render",bt],["__scopeId","data-v-7fe641d6"]]);var gt=pt;function ft(t,e,r,c,a,n){return null}var mt=r("319e"),jt=r.n(mt);const Ot=1e3;var vt=Object(c["j"])({name:"Search",data(){return{search_debouncer:new jt.a(t=>this.$emit("search",t.trim()),Ot,!0)}},props:{query:{type:String,default:""}},emits:["search"]});const yt=j()(vt,[["render",ft]]);var Ct=yt;const _t={class:"card"},kt={class:"list-group list-group-flush"},At={class:"list-group-item"},wt={key:0,class:"list-group-item list-bottom"},xt={class:"list-group-item list-bottom"},It={class:"col"},St=["disabled"];function Pt(t,e,r,a,n,s){const o=Object(c["A"])("router-link"),i=Object(c["A"])("CartCardRow");return Object(c["u"])(),Object(c["f"])("div",_t,[Object(c["g"])("ul",kt,[Object(c["g"])("li",At,[Object(c["i"])(o,{class:"cart-link",to:"/cart"},{default:Object(c["H"])(()=>e[0]||(e[0]=[Object(c["g"])("h4",{class:"card-title mt-1 mb-3"},"Корзина",-1)])),_:1})]),(Object(c["u"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(t.$store.getters.cartAsArray,(t,e)=>(Object(c["u"])(),Object(c["d"])(i,{key:e,cartItem:t},null,8,["cartItem"]))),128)),t.$store.getters.cartAsArray.length?Object(c["e"])("",!0):(Object(c["u"])(),Object(c["f"])("li",wt,e[1]||(e[1]=[Object(c["g"])("p",{class:"text-center m-0"},"Корзина пуста",-1)]))),Object(c["g"])("li",xt,[Object(c["g"])("span",It,[e[2]||(e[2]=Object(c["h"])("Итого: ")),Object(c["g"])("strong",null,"$"+Object(c["D"])(t.$store.getters.cartTotal),1)]),Object(c["i"])(o,{class:"cart-link",to:"/cart"},{default:Object(c["H"])(()=>[Object(c["g"])("button",{class:"btn btn-primary",disabled:!t.$store.getters.numberOfItemsInCart},"Оформить",8,St)]),_:1})])])])}const $t={class:"right-section"},qt={key:1,class:"bg-primary quantity"};function Tt(t,e,r,a,n,s){return Object(c["u"])(),Object(c["f"])("li",{class:"list-group-item d-flex justify-content-between align-items-center",onMouseenter:e[1]||(e[1]=e=>t.hovering=!0),onMouseleave:e[2]||(e[2]=e=>t.hovering=!1)},[Object(c["g"])("span",null,Object(c["D"])(t.cartItem.product.name),1),Object(c["g"])("div",$t,[t.hovering?(Object(c["u"])(),Object(c["f"])("button",{key:0,onClick:e[0]||(e[0]=(...e)=>t.removeFromCart&&t.removeFromCart(...e)),class:"btn btn-close"})):Object(c["e"])("",!0),t.hovering?Object(c["e"])("",!0):(Object(c["u"])(),Object(c["f"])("span",qt,Object(c["D"])(t.cartItem.quantity),1))])],32)}var Lt=Object(c["j"])({name:"CartCardRow",props:{cartItem:{type:Object,required:!0}},data(){return{hovering:!1}},methods:{removeFromCart(){this.$store.commit("removeFromCart",this.$props.cartItem.product)}}});r("d22f");const Nt=j()(Lt,[["render",Tt],["__scopeId","data-v-0ef250f5"]]);var Ft=Nt,Et=Object(c["j"])({name:"CartCard",components:{CartCardRow:Ft}});r("7b52");const Ht=j()(Et,[["render",Pt],["__scopeId","data-v-42d0b32e"]]);var Mt=Ht;function Dt(t,e,r,c,a,n){return null}r("910d"),r("ab43");class zt{get(t,e){return N.get(`${this.path}/${t}`,e).then(t=>new this.resource(t))}post(t){return N.post(this.path+"/",t)}put(t,e){return N.put(`${this.path}/${t}`,e)}delete(t){return N.delete(`${this.path}/${t}`)}}var Ut=zt;class Rt extends Ut{query(t){return N.get(this.path+"/",t).then(t=>t.map(t=>new this.resource(t)))}}var Bt=Rt;class Jt{constructor(t){this.id=t.id,this.name=t.name,this.description=t.description}}class Kt extends Bt{constructor(){super(...arguments),this.resource=Jt,this.path="categories"}}var Xt=Kt;const Gt=new Xt;var Qt=Object(c["j"])({name:"Filters",created(){this.fetchCategories()},data(){const t=[],e=[];return{categories:t,loading:!0,selected:e}},emits:["change"],methods:{async fetchCategories(){this.loading=!0,this.categories=await Gt.query(),this.loading=!1},handleChange(t){const e=t.target,r=parseInt(e.value);e.checked?this.selected.push(r):this.selected=this.selected.filter(t=>t!==r),this.$emit("change",this.selected)}}});const Vt=j()(Qt,[["render",Dt]]);var Wt=Vt;class Yt{constructor(t,e){this.count=t.count,this.total_pages=t.total_pages,this.current_page=t.current_page,this.next=t.next,this.previous=t.previous,this.results=t.results.map(t=>new e(t))}static empty(t){return new Yt({count:0,total_pages:0,current_page:1,next:null,previous:null,results:[]},t)}}var Zt=Yt;class te extends Ut{query(t){return N.get(this.path+"/",t).then(t=>new Zt(t,this.resource))}}var ee=te;class re extends ee{constructor(){super(...arguments),this.resource=nt,this.path="products"}}var ce=re;const ae=new ce,ne=12;var se=Object(c["j"])({name:"Catalog",components:{Products:dt,Pagination:gt,Search:Ct,CartCard:Mt,Filters:Wt},data(){const t=Zt.empty(nt),e=[];return{products:t,categories_filter:e,search_query:"",loading:!0}},created(){this.fetchProducts()},methods:{fetchProducts(t){return t=t||this.products.current_page,this.loading=!0,ae.query({page:t,size:ne,categories:this.categories_filter,search:this.search_query||void 0}).then(t=>{this.products=t,this.loading=!1})},handleSearch(t){this.search_query=t,this.products.current_page=1,this.fetchProducts()},handleFiltersChange(t){this.categories_filter=t,this.products.current_page=1,this.fetchProducts()}}});r("fb60");const oe=j()(se,[["render",G],["__scopeId","data-v-0ac8ae8f"]]);var ie=oe;const ue=[{path:"/",redirect:"/catalog"},{path:"/catalog",name:"Catalog",component:ie},{path:"/cart",name:"Cart",component:()=>r.e("cart").then(r.bind(null,"b789"))},{path:"/login",name:"Login",component:()=>r.e("login").then(r.bind(null,"a55b"))},{path:"/profile",name:"Profile",component:()=>r.e("me").then(r.bind(null,"c66d"))},{path:"/:pathMatch(.*)*",name:"404",component:()=>r.e("404").then(r.bind(null,"8cdb"))}],le=Object(D["a"])({history:Object(D["b"])(""),routes:ue});var de=le;Object(c["c"])(S).use(de).use(M).mount("#app")},cf05:function(t,e,r){t.exports=r.p+"img/logo.ed1be4e1.png"},d22f:function(t,e,r){"use strict";r("c8a0")},ebf7:function(t,e,r){},fb60:function(t,e,r){"use strict";r("9fd8")}});
//# sourceMappingURL=app.23762f6a.js.map