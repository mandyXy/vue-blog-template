(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42c46928"],{"674f":function(t,e,s){"use strict";var r=s("7080"),o=s.n(r);o.a},7080:function(t,e,s){t.exports={appColor:"#42b983",appColorRGB:"66, 185, 131",menuBg:"#304156",menuText:"#bfcbd9",menuWidth:"180px"}},a86a:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"login"}},[s("div",{staticClass:"login-wrapper"},[s("div",{staticClass:"login-container"},[t._m(0),s("div",{staticClass:"login-box"},[s("el-form",{staticClass:"login-form",attrs:{model:t.form,"label-position":"top"},nativeOn:{submit:function(e){return e.preventDefault(),t.verify(e)}}},[s("el-form-item",{staticClass:"tip"},[t._v("系统登录")]),s("el-form-item",{attrs:{label:"用户名"}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),s("el-form-item",{attrs:{label:"密码"}},[s("el-input",{attrs:{"auto-complete":"off",type:"password","show-password":""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),s("el-form-item",{attrs:{label:" "}},[s("el-input",{staticClass:"submit",attrs:{type:"submit",value:"登录"}})],1)],1)],1)])])])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login-brand"},[r("img",{attrs:{src:s("aca7")}})])}],a={name:"login",data:function(){return{form:{username:"uncleLian",password:"123456"}}},methods:{verify:function(){var t="请输入用户名",e="请输入密码";this.form.username?this.form.password?this.login():this.$message.error(e):this.$message.error(t)},login:function(){var t=this,e="登录成功",s="账号或密码错误";this.$store.dispatch("GET_LOGIN_DATA",this.form).then(function(s){t.$message.success(e),t.$route.query.redirect?t.$router.push(t.$route.query.redirect):t.$router.push("/")}).catch(function(e){console.log(e),t.$message.error(s)})}}},n=a,i=(s("674f"),s("2877")),l=Object(i["a"])(n,r,o,!1,null,null,null);e["default"]=l.exports},aca7:function(t,e,s){t.exports=s.p+"img/logo.a87e35c9.jpg"}}]);