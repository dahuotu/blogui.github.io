### BlogUi介绍

BlogUi响应式前端框架，基于[拼图响应式前端框架1.0](https://www.pintuer.com/documents/pintuer/1.x/index.html)精简分支开发。优秀的Html、Css、Js跨屏响应式开源前端框架，使用最新浏览器技术，专为博客系统（Blog System）打造的前端页面Ui框架，占用资源小、风格极简而优雅、用户只需简单的配置便可随意定制主题风格。

### 自动适应多端设备

* 手机（iOS、Android、Window Phone、Symbian）
* 平板（iOS iPad、Android Pad、Kindle）
* 笔记本电脑（Windows、MacBook）
* 桌面电脑等（Windows、Mac PC）

### 浏览器一致性

内置 `Normalize.css` 最新稳定版本，提高不同浏览器的一致性。相比传统的 `Css Reset` 方式，是更现代的、更优质的替代方案。

> 使用浏览器一致性的目的

```text
1. 保护有用的浏览器默认样式而不是完全去掉它们。
2. 为大部分HTML元素提供一般化的样式。
3. 修复浏览器自身的bug并保证各浏览器的一致性。
4. 用一些小技巧优化CSS可用性。
5. 用注释和详细的文档来解释代码。
```

### 便捷的主题风格按喜好切换

**基于Less编写样式：** 简单，明了的语法定义，使编写CSS变得非常简单，并且容易维护，不需要为更改一个色值而使用 `查找+替换` ，只需要更改指定变量。完全可以做到一套编写多套样式，是主题风格编写利器。

> BlogUi极简风格。

* [首页预览](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/theme/blogui/index.html)
* [博文页预览](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/theme/blogui/page.html)
* [测试页预览](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/theme/blogui/test.html)

### 使用文档

#### [官方文档](https://www.blogui.cn/)

#### [码云托管文档](https://dahuotu.gitee.io/blogui)

### 下载使用

#### 下载

[官方下载](https://www.blogui.cn/files/blogui.zip)

#### Git

[Github](https://github.com/dahuotu/blogui.github.io/tree/download)

[Gitee](https://gitee.com/dahuotu/BlogUi/tree/download/)

### 目录结构

```text
css
|-- blogui.less
|-- iconfont.ttf
|-- iconfont.woff
|-- iconfont.woff2
images
|-- Logo.png
|-- 400x400.jpeg
js
|-- less.min.js
|-- jquery-1.12.4.min.js
|-- blogui.js
|-- your.js
favicon.ico
index.html
page.html
test.html
var.txt
```

> 目录结构说明

* css目录存放BlogUi框架的样式文件和图标字体文件。

1. blogui.less BlogUi框架的默认主题.less（相当于`.css`）。
2. `iconfont.ttf`、`iconfont.woff`、`iconfont.woff2`图标字体文件。

* images目录存放Logo和头像图片。
* js目录存放常用脚本

1. less.min.js 压缩后的less.js
2. jquery-1.12.4.min.js 支持IE8的jQuery库
3. blogui.js BlogUi框架的js，未压缩不到20行代码，为了减少浏览器请求可以把自己的js写在这里。
4. your.js 你自己的js，这里提前预留好，方便归纳区分。如果不需要可以直接写在blogui.js里，原因如上。

---
