### 默认模板

仅支持在现代浏览器中使用的页面模板，在 IE11 及以下显示效果不佳。具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/page-normal.html)

> 支持浏览器如下

* Chrome
* Safari
* Firefox
* Opera
* Microsoft Edge

```html
<!--
	作者：1979788761@qq.com
	时间：2021-12-31
	描述：现代浏览器模板演示
-->
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- 页面编码 -->
    <meta charset="utf-8" />
    <!-- 移动设备优先 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- 兼容Edge模式 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- 极速模式 -->
    <meta name="renderer" content="webkit" />
    <!-- 标题 -->
    <title>通用模板</title>
    <!-- 关键字 -->
    <meta name="keywords" content="BlogUi,通用模板" />
    <!-- 描述 -->
    <meta name="description" content="这是BlogUi通用模板" />
    <!-- 作者 -->
    <meta name="author" content="大火兔" />
    <!-- 版权 -->
    <meta name="copyright" content="版权所有 BlogUi All Rights Reserved" />
    <!-- 搜索引擎索引向导 -->
    <meta name="robots" content="all" />
    <!-- 图标 -->
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    <link rel="icon" type="image/svg+xml" href="favicon.ico" />
    <!-- 引入BlogUi.less -->
    <link rel="stylesheet/less" type="text/css" href="../css/blogui.less" />
    <!-- 引入最新稳定版Less.js -->
    <script src="../js/less.min.js"></script>
</head>

<body>
    <p align="center">Hello, BlogUi!</p>
</body>
<!-- 引入兼容IE8的jQuery版本 -->
<script src="../js/jquery-1.12.4.min.js"></script>
<!-- 引入BlogUi框架Js -->
<script src="../js/blogui.js"></script>
<!-- 引入你的JS -->
<script src="../js/your.js"></script>

</html>
```

### 支持 IE8 模板

考虑到博客系统主要以内容为主，对 SEO 的要求较高，还是决定做到最低兼容 IE8，这是一个漫长的测试及调整过程，毕竟国内目前支持 IE8 的框架仅仅只有[拼图响应式前端框架](https://www.pintuer.com)了。

具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/page-ie8.html)

> 支持浏览器如下

* Chrome
* Safari
* Firefox
* Opera
* Microsoft Edge
* Internet Explorer 11
* Internet Explorer 10
* Internet Explorer 9
* Internet Explorer 8 (基本支持，特殊动画及效果支持不佳)
* Internet Explorer 7 (仅 Js 支持，布局会错位)
* Internet Explorer 6 (仅 Js 支持，布局会错位)

```html
<!--
	作者：1979788761@qq.com
	时间：2021-12-31
	描述：兼容IE8+版本浏览器模板演示
-->
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- 页面编码 -->
    <meta charset="utf-8" />
    <!-- 移动设备优先 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- 兼容Edge模式 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- 极速模式 -->
    <meta name="renderer" content="webkit" />
    <!-- 标题 -->
    <title>兼容IE8+模板</title>
    <!-- 关键字 -->
    <meta name="keywords" content="BlogUi,兼容IE8+模板" />
    <!-- 描述 -->
    <meta name="description" content="这是BlogUi兼容IE8+模板" />
    <!-- 作者 -->
    <meta name="author" content="大火兔" />
    <!-- 版权 -->
    <meta name="copyright" content="版权所有 BlogUi All Rights Reserved" />
    <!-- 搜索引擎索引向导 -->
    <meta name="robots" content="all" />
    <!-- 图标 -->
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    <link rel="icon" type="image/svg+xml" href="favicon.ico" />
    <!-- 让IE8、9 支持媒体查询及H5标签等 -->
    <!--[if lt IE 9]>
      <script src="https://cdn.bootcdn.net/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
      <script src="https://cdn.bootcdn.net/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
    <![endif]-->
    <!-- 引入BlogUi.css -->
    <link type="text/css" href="../css/blogui.css" />
</head>

<body>
    <p align="center">Hello, BlogUi!</p>
    <div style="border:1px solid #ddd;border-radius: 5px;text-align: center;">
        如果IE8下打开可以看到圆角说明可以正常使用！
    </div>
</body>
<!-- 引入兼容IE8的jQuery版本 -->
<script src="../js/jquery-1.12.4.min.js"></script>
<!-- 引入BlogUi框架Js -->
<script src="../js/blogui.js"></script>
<!-- 引入你的JS -->
<script src="../js/your.js"></script>

</html>
```

### Mata 标记使用

页面头部<Mata... />标记的使用非常多，这里就不再做一一例举，需要了解的可以参考：[html meta 标记详解](http://www.dahuotu.com/docs/#/documents/html?id=mate标记详解)

最后更新：2022-01-14

---
