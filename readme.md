## 问题：
页面上一个div，右方是各种可以拖拽的组件，将组件拖至div里，会把div变成组件的组合方式，且能无限放置进去
## 解决思路:
1、组件是作为component组合起来
2、组件采用js动态生成
3、一个父组件，其他组件继承父组件，并且子组件生成的放在一个共享的collections里
4、每次新增加一个组件，就增加一个类继承，然后放到集合就行了，首页只需要操作这个collection就可以
5、index为主页面，左侧div监听拖拽事件，然后替换innerHtml

## 遗留问题
1 相对路径太长
2 firefox下拖拽会打开一个新标签,禁用扩展组件管理器中的拖拽选项可以不打开新标签页