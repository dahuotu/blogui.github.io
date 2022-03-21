#### 安装

```npm

npm i docsify-cli -g

```

#### 初始化

```docsify

docsify init

```

##### 文档目录说明

* `.nojekyll`：告诉GitHub Pages服务该站点不使用`Jekyll`作为构建工具
* `index.html`：入口文件
* `README.md`：作为首页渲染

#### 运行

```docsify

docsify serve

```

通过[http://localhost:3000/](http://localhost:3000/)来访问你的文档站点

#### 说明

> 需要调整的文件

1. README.md  默认首页
2. _coverpage.md  封面
3. _navbar.md 头部导航
4. _sidebar.md  左侧菜单
5. _footer.md 底部页脚
6. _404.md  404错误页
7. _about.md  关于

> index.html的调整按照页面内代码注释自行调整
