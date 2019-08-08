(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{188:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_07按键修饰符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_07按键修饰符","aria-hidden":"true"}},[t._v("#")]),t._v(" 07按键修饰符")]),t._v(" "),a("p",[t._v("键盘事件具体有onkeyup、onkeypress、onkeydown、oninput等")]),t._v(" "),a("p",[t._v("oninput：触碰键盘给输入框做输入动作时会触发执行")]),t._v(" "),a("p",[t._v("onkeyup：键盘抬起触发执行")]),t._v(" "),a("p",[t._v("onkeypress：按下任何字母数字键时触发执行，系统按钮（例如，箭头键和功能键）无法得到识别")]),t._v(" "),a("p",[t._v("onkeydown：按下任何键盘键（包括系统按钮，如箭头键和功能键）时触发执行")]),t._v(" "),a("blockquote",[a("p",[t._v("onkeydown 捕获的 keyCode 不区分字母大小，而 onkeypress 区分")])]),t._v(" "),a("p",[t._v("有时我们想要设定只有"),a("span",{staticStyle:{"background-color":"yellow"}},[t._v("按到某个键盘")]),t._v("时，才激活该事件执行，例如只有触碰 "),a("strong",[t._v("回车键")]),t._v("或"),a("strong",[t._v("ESC键")]),t._v(" 才有效果，那么可以通过 "),a("strong",[t._v("按键修饰符")]),t._v(" 实现")]),t._v(" "),a("p",[t._v("语法：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@事件类型.键值码")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("submit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@keyup.13")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("submit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 对keyCode键值码为13的回车键进行修饰激活--\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@keyup.enter")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("submit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 通过“enter别名”对回车键进行修饰激活--\x3e")]),t._v("\n\n")])])]),a("p",[a("img",{attrs:{src:"/img/1560989082516.png",alt:"1560989082516"}})]),t._v(" "),a("p",[t._v("通过“键值码”实现按键"),a("strong",[t._v("修饰效果")]),t._v("会使得代码可读性降低，Vue为常用的按键设置了对应的"),a("strong",[t._v("别名")]),t._v("：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v(".enter")])]),t._v(" "),a("li",[a("code",[t._v(".tab")])]),t._v(" "),a("li",[a("code",[t._v(".delete")]),t._v(" (捕获“删除”和“退格”按键)")]),t._v(" "),a("li",[a("code",[t._v(".esc")])]),t._v(" "),a("li",[a("code",[t._v(".space")])]),t._v(" "),a("li",[a("code",[t._v(".up")])]),t._v(" "),a("li",[a("code",[t._v(".down")])]),t._v(" "),a("li",[a("code",[t._v(".left")])]),t._v(" "),a("li",[a("code",[t._v(".right")])])]),t._v(" "),a("p",[t._v("如果默认的按键别名不满足需要，也可以自定义其他的按键别名")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以使用 `v-on:keyup.f1`")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keyCodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("别名 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 键值码\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keyCodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("112")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("input @keyup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只有单击f1键才会触发xxx的回调")]),t._v("\n\n")])])]),a("p",[t._v("应用：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("品牌管理应用中，给添加品牌输入框键入  "),a("strong",[t._v("回车键")]),t._v("  进行添加动作")]),t._v(" "),a("p",[t._v("键入  "),a("strong",[t._v("Esc键")]),t._v("  清除被添加内容")])])])])},[],!1,null,null,null);s.default=e.exports}}]);