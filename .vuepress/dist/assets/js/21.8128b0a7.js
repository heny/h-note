(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{268:function(t,a,s){"use strict";s.r(a);var n=s(28),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"过渡效果、生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#过渡效果、生命周期"}},[t._v("#")]),t._v(" 过渡效果、生命周期")]),t._v(" "),s("p",[t._v("[TOC]")]),t._v(" "),s("h2",{attrs:{id:"一、过渡效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、过渡效果"}},[t._v("#")]),t._v(" 一、过渡效果")]),t._v(" "),s("ul",[s("li",[t._v("定义动画 类")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 定义进入和离开时候的过渡状态 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".v-enter-active, .v-leave-active")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" opacity .5s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 定义进入过渡的开始状态和离开过渡的结束状态 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".v-enter, .v-leave-to")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("使用vue内置的transition标签把需要动画控制的元素包裹起来")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("show"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("transition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("![image-20200330232746032](static/vue-05 过渡 生命周期/image-20200330232746032.png)")]),t._v(" "),s("p",[t._v("图中可见：")]),t._v(" "),s("p",[t._v("v-enter和v-leave-to的样式是一样的，可以写成一组样式")]),t._v(" "),s("p",[t._v("v-enter-to和v-leave的样式是一样的，可以写成一组样式")]),t._v(" "),s("ul",[s("li",[t._v("四个时间点\n"),s("ul",[s("li",[t._v("v-enter：进入之前元素的起始状态，还没进入")]),t._v(" "),s("li",[t._v("v-enter-to：定义进入过渡结束状态")]),t._v(" "),s("li",[t._v("v-leave：定义离开过渡的开始状态；")]),t._v(" "),s("li",[t._v("v-leave-to：离开之后离开的终止状态，动画已经结束了；")])])]),t._v(" "),s("li",[t._v("两个时间段，在时间段设置过渡等等\n"),s("ul",[s("li",[t._v("v-enter-active：进入动画的时间段发生的事情")]),t._v(" "),s("li",[t._v("v-leave-active：离开动画的时间段发生的事情")])])])]),t._v(" "),s("h4",{attrs:{id:"列表渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#列表渲染"}},[t._v("#")]),t._v(" 列表渲染")]),t._v(" "),s("p",[t._v("在使用v-for循环时，需要使用transition-group标签包裹li，如果要为v-for循环动画时，必须为每一个元素")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transition-group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-for")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("..."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("transition-group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("为列表删除定义移除的动画（固定写法）")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".v-move")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("all .6s ease"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".v-leave-active")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("给transition-group添加appear属性，实现页面刚展示出来的入场动画；因为transition-group标签被渲染成了span标签，可以添加一个tag转换ul标签包裹；")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transition-group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("appear")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tag")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("ul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"过渡的自定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#过渡的自定义"}},[t._v("#")]),t._v(" 过渡的自定义")]),t._v(" "),s("h4",{attrs:{id:"自定义前缀"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义前缀"}},[t._v("#")]),t._v(" 自定义前缀")]),t._v(" "),s("ul",[s("li",[t._v("定义样式中v是css中定义样式名字的开头，使用时在transition标签写上name名字")]),t._v(" "),s("li",[t._v("前缀的作用：区分不同组件的动画；不同的组件使用不同的动画")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transition")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("fade"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("transition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n.fade-enter,.fade-leave-to{\n\topacity: 0\n}\n")])])]),s("h4",{attrs:{id:"自定义过渡类名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义过渡类名"}},[t._v("#")]),t._v(" 自定义过渡类名")]),t._v(" "),s("ul",[s("li",[t._v("enter-class")]),t._v(" "),s("li",[t._v("enter-active-class")]),t._v(" "),s("li",[t._v("enter-to-class")]),t._v(" "),s("li",[t._v("leave-class")]),t._v(" "),s("li",[t._v("leave-active-class")]),t._v(" "),s("li",[t._v("leave-to-class")])]),t._v(" "),s("h2",{attrs:{id:"动画钩子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动画钩子"}},[t._v("#")]),t._v(" 动画钩子")]),t._v(" "),s("p",[t._v("使用类名的动画都无法设置半场的动画，需要用到动画钩子，使用动画钩子不需要再设置样式，在methods里面定义；")]),t._v(" "),s("p",[s("strong",[t._v("半场动画：")])]),t._v(" "),s("p",[t._v("原来动画分为进入和离开，两场动画，半场动画只有进入的状态就消失了，每次点一下就显示隐藏了")]),t._v(" "),s("p",[t._v("每个钩子对应一个事件，事件的第一个参数：el，表示要执行动画的那个dom元素；js原生的dom元素；动画钩子事件添加到transition标签里")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("@before-enter='beforeEnter' 进入之前，")]),t._v(" "),s("p",[t._v("动画尚未开始，可以在这里设置元素动画之前的起始样式；")])]),t._v(" "),s("li",[s("p",[t._v("@enter='enter'  进入")]),t._v(" "),s("p",[t._v("这里可以设置动画起始完成之后的状态，enter和leave事件过渡的时候，回调函数必须有第二个参数，done，")])]),t._v(" "),s("li",[s("p",[t._v("@after-enter='afterEnter'  进入之后")]),t._v(" "),s("p",[t._v("动画完成之后执行的函数，该函数执行有延迟，需要在上一个函数进入调用一次；")])]),t._v(" "),s("li",[s("p",[t._v("@enter-cancelled='enterCancelled' 进入取消（一般用不到）；")])])]),t._v(" "),s("p",[t._v("v-on:before-leave='beforeleave'")]),t._v(" "),s("p",[t._v("v-on:leave='leave'")]),t._v(" "),s("p",[t._v("v-on:after-ente='afterleave'")]),t._v(" "),s("p",[t._v("v-on:leave-cancelled='leaveCancelled'")]),t._v(" "),s("h4",{attrs:{id:"简单的例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简单的例子"}},[t._v("#")]),t._v(" 简单的例子")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeEnter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transform"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'translate(0,0)'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("enter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" done")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetWidth  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果没有动画效果，设置这行代码，可以进行动画，或offsetHeight/top/right都行;")]),t._v("\n    el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transform"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'translate(0,0)'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transition "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'all 1s ease'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("done")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//必须要调用一次，否则会出现延迟的情况; 相当于afterenter事件,立即调用最后一个事件;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("afterEnter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("flag "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("flag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//进入之后让元素隐藏;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"使用animate-css动画库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用animate-css动画库"}},[t._v("#")]),t._v(" 使用animate.css动画库")]),t._v(" "),s("ul",[s("li",[t._v("引入animate.css文件")]),t._v(" "),s("li",[t._v("直接在transition标签上写动画名称")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transition")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("leave-active-class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("animated fadeOutDown"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("enter-active-class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("animated flipInX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-show")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("isShow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Baidu"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("transition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("ul",[s("li",[t._v("使用animate动画库时，只需要定义两个时间段即可")]),t._v(" "),s("li",[t._v("animate必须带一个animted的类名")])]),t._v(" "),s("h2",{attrs:{id:"生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),s("h4",{attrs:{id:"什么是生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是生命周期"}},[t._v("#")]),t._v(" 什么是生命周期")]),t._v(" "),s("ul",[s("li",[t._v("通常叫作生命周期钩子函数，在经过它的阶段则会触发\n"),s("ul",[s("li",[t._v("什么是生命周期：从vue实例创建、运行、到销毁期间的过程统称为生命周期；")]),t._v(" "),s("li",[t._v("生命周期钩子：就是生命周期事件的别名；")]),t._v(" "),s("li",[t._v("生命周期钩子=生命周期函数=生命周期事件；")])])])]),t._v(" "),s("h4",{attrs:{id:"生命周期的状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期的状态"}},[t._v("#")]),t._v(" 生命周期的状态")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("创建期间的生命周期函数")]),t._v(" "),s("ul",[s("li",[s("p",[s("font",{attrs:{color:"red"}},[s("code",[t._v("beforeCreate")])]),t._v("：实例刚在内存中被创建出来，此时，还没有初始化好data和methods属性；")],1)]),t._v(" "),s("li",[s("p",[s("font",{attrs:{color:"red"}},[s("code",[t._v("created")])]),t._v("：实例已经在内存中创建ok，此时data和methods已经创建ok，还没编译模板，此时还没有el元素；")],1)]),t._v(" "),s("li",[s("p",[s("font",{attrs:{color:"red"}},[s("code",[t._v("beforeMount")])]),t._v("：已经完成了模板的编译，可以访问$el，页面还没渲染；")],1)]),t._v(" "),s("li",[s("p",[s("font",{attrs:{color:"red"}},[s("code",[t._v("mounted")])]),t._v("：已挂载，页面被渲染；一般在这里调取接口，ajax或axios等等；")],1),t._v(" "),s("p",[t._v("mounted执行完成不一定页面全部被渲染，可以在mounted里面使用this.$nextTick(()=>{})函数，页面渲染完成时执行；")])])])]),t._v(" "),s("li",[s("p",[t._v("运行期间的生命周期函数")]),t._v(" "),s("ul",[s("li",[s("font",{attrs:{color:"red"}},[s("code",[t._v("beforeUpdate")])]),t._v("：数据更新时调用，页面还是旧数据，data里是新数据")],1),t._v(" "),s("li",[s("font",{attrs:{color:"red"}},[s("code",[t._v("updated")])]),t._v("：组件DOM已经更新；updated不一定页面全部被重绘，可以使用this.$nextTick")],1),t._v(" "),s("li",[s("font",{attrs:{color:"red"}},[s("code",[t._v("activated")])]),t._v("：keep-alive组件激活时被调用")],1),t._v(" "),s("li",[s("font",{attrs:{color:"red"}},[s("code",[t._v("deactivated")])]),t._v("：keep-alive组件停用时被调用；")],1)])]),t._v(" "),s("li",[s("p",[t._v("销毁期间的生命周期函数")]),t._v(" "),s("ul",[s("li",[s("font",{attrs:{color:"red"}},[s("code",[t._v("beforeDestroy")])]),t._v("：实例销毁之前调用，在这一步，实例仍然可用")],1),t._v(" "),s("li",[s("font",{attrs:{color:"red"}},[s("code",[t._v("destroyed")])]),t._v("：实例被销毁后调用； 调用后，当前Vue实例与挂载元素断开了，组件中的所有方法都不可用了；")],1)])])]),t._v(" "),s("p",[t._v("一般不会自动调用销毁事件，如果需要调用销毁事件，可以写一个按键，定义一个函数，在函数内部调用this.$destroy()，进行手动销毁；尽量避免销毁，一般用不上，如果需要销毁，可以手动调用销毁；")]),t._v(" "),s("p",[t._v("捕获错误："),s("font",{attrs:{color:"red"}},[s("code",[t._v("errorHandler")])])],1),t._v(" "),s("p",[t._v("![image-20200330234228148](static/vue-05 过渡 生命周期/image-20200330234228148.png)")]),t._v(" "),s("p",[t._v("生命周期图解：")]),t._v(" "),s("p",[t._v("在创建之前Vue初始化，没有其他操作；")]),t._v(" "),s("p",[t._v("在创建之间，依然是初始化，这个时候没有出现el元素，可以访问data；")]),t._v(" "),s("p",[t._v("在创建和挂载之间，做了大量的事情；")]),t._v(" "),s("p",[t._v("首先判断是否有el元素，如果没有，分两个步骤：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("没有：那生命周期就结束；")])]),t._v(" "),s("li",[s("p",[t._v("手动调取$mount()这个方法，去挂载el元素，生命周期继续；")])])]),t._v(" "),s("p",[t._v("如果有el元素，这个时候我们要判断是否有render()这个函数，如果有，优先去渲染它，如果没有，就找template模板对象，如果有就渲染模板内容，如果没有就去找outerHtml，如果都没有就空白；")]),t._v(" "),s("p",[t._v("渲染优先级：reder()函数>template>outerHtml")]),t._v(" "),s("p",[t._v("在挂载之前，出现了el元素，这个时候的dom结构是虚拟dom结构，进行了占位；")]),t._v(" "),s("p",[t._v("在挂载的时候，出现了el元素dom结构内容，替换成了实体内容；")]),t._v(" "),s("p",[s("strong",[t._v("当有子组件时的生命周期")]),t._v("（了解之后对数据获取很重要）")]),t._v(" "),s("p",[t._v("父组件created->父组件beforeMounte->子组件created->子组件mounted->父组件mounted")]),t._v(" "),s("p",[s("strong",[t._v("父组件通过异步获取数据，在子组件拿到数据的方法：")])]),t._v(" "),s("ol",[s("li",[t._v("在父组件渲染子组件时添加判断，有数据再渲染子组件")]),t._v(" "),s("li",[t._v("通过computed事件来处理")])]),t._v(" "),s("p",[s("strong",[t._v("清除定时器或者事件监听")])]),t._v(" "),s("p",[t._v("由于项目中有些页面难免会碰到需要定时器或者事件监听。但是在离开当前页面的时候，定时器如果不及时合理地清除，会造成业务逻辑混乱甚至应用卡死的情况，这个时就需要清除定时器事件监听，即在页面卸载（关闭）的生命周期函数里，清除定时器。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("methods"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resizeFun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableHeight "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHeight "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'table'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearTimer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//清除定时器")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'resize'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resizeFun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeDestroy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'resize'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resizeFun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearTimer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"脚手架工具vue-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#脚手架工具vue-cli"}},[t._v("#")]),t._v(" 脚手架工具Vue-cli")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("安装：npm i -g @vue/cli")])]),t._v(" "),s("li",[s("p",[t._v("生成包")]),t._v(" "),s("ul",[s("li",[t._v("使用图形界面安装：vue ui")]),t._v(" "),s("li",[t._v("使用cmd安装：vue create demo")])])])]),t._v(" "),s("p",[t._v("由于安装node-sass时，会卡住，建议设置下环境")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("yarn config "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" sass_binary_site http"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("cdn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("npm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("taobao"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dist"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("sass "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("g\n")])])]),s("ul",[s("li",[s("p",[t._v("执行vue serve运行起来")])]),t._v(" "),s("li",[s("p",[t._v("脚手架规范；")]),t._v(" "),s("ul",[s("li",[t._v("组件名字首字母必须大写")]),t._v(" "),s("li",[t._v("冒号后面必须有一个空格")]),t._v(" "),s("li",[t._v("函数名和括号和大括号之间必须有一个空格")]),t._v(" "),s("li",[t._v("每一个文件最后面必须保留一个空行")]),t._v(" "),s("li",[t._v("js中要使用单引号，否则报错")]),t._v(" "),s("li",[t._v("一行结尾不应该有分号")]),t._v(" "),s("li",[t._v("判断条件不能使用==，需要使用===")]),t._v(" "),s("li",[t._v("双斜杠注释后面必须留有一个空格")])])]),t._v(" "),s("li",[s("p",[t._v("脚手架目录结构")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);