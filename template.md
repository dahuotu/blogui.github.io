### 默认模板

仅支持在现代浏览器中使用的页面模板，在 IE9 及以下显示效果不佳。具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/page-normal.html)

> 支持浏览器如下

* Chrome
* Safari
* Firefox
* Opera
* Microsoft Edge

```html
<!--
    作者：大火兔
    联系：1979788761@qq.com
    时间：2022-03-23
    描述：BlogUi极简主题
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
    <title>BlogUi极简主题</title>
    <!-- 关键字 -->
    <meta name="keywords" content="BlogUi,BlogUi极简主题" />
    <!-- 描述 -->
    <meta name="description" content="这是BlogUi极简主题" />
    <!-- 作者 -->
    <meta name="author" content="大火兔" />
    <!-- 版权 -->
    <meta name="copyright" content="版权所有 BlogUi All Rights Reserved" />
    <!-- 搜索引擎索引向导 -->
    <meta name="robots" content="all" />
    <!-- 图标 -->
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    <link rel="icon" type="image/svg+xml" href="favicon.ico" />
    <!-- 引入BlogUi.less，切记这里的rel属性一定不能少 -->
    <link rel="stylesheet/less" type="text/css" href="css/blogui.less" />
    <!-- 引入稳定版Less.js -->
    <script src="js/less.min.js"></script>
</head>

<body>
    <p align="center">Hello, BlogUi!</p>
</body>
<!-- 引入兼容IE8的jQuery版本 -->
<script src="js/jquery-1.12.4.min.js"></script>
<!-- 引入BlogUi框架Js -->
<script src="js/blogui.js"></script>
<!-- 引入你的JS -->
<script src="js/your.js"></script>

</html>
```

### 支持 IE9

考虑到博客系统主要以内容为主，对 `SEO` 的要求较高，还是决定做到最低兼容 `IE9` ，这是一个漫长的测试及调整过程。具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/page-ie8.html)

> 支持浏览器如下

* Chrome
* Safari
* Firefox
* Opera
* Microsoft Edge
* Internet Explorer 11
* Internet Explorer 10
* Internet Explorer 9 (基本支持，特殊动画及效果不支持)
* Internet Explorer 8 (仅 Js 支持，布局会错位，特殊动画及效果不支持)
* Internet Explorer 7 (仅 Js 支持，布局会错位)
* Internet Explorer 6 (仅 Js 支持，布局会错位)

### 关于对 IE8 的支持

经过测试，目前针对IE8的多数方式已失效，我用一台20年前的台式机，用的 WindowsXP，真正的IE8环境（绝非IE仿真环境）逐个测试过。如果你用的办法还可行，可以[联系我](mailto:1979788761@qq.com?subject=来自BlogUi网站的反馈&body=你好，我是BlogUi前端框架的用户，我有一些问题需要反馈和请教。)彼此交流一下。

**注意：** 如有特殊需求需要支持 `IE8` 的可以[联系我](mailto:1979788761@qq.com?subject=来自BlogUi网站的反馈&body=你好，我是BlogUi前端框架的用户，我有一些问题需要反馈和请教。)单独定制。毕竟某些政府单位还在使用IE7\IE8\IE9这些浏览器。国内目前仅支持 `IE8` 的前端框架[拼图响应式前端框架1.0](https://www.pintuer.com)。

<!-- 
### Mata 标记使用

页面头部<Mata... />标记的使用非常多，这里就不再做一一例举，需要了解的可以参考：[html meta 标记详解](http://www.dahuotu.com/docs/#/documents/html?id=mate标记详解) 
-->

最后更新：2022-03-28

---
