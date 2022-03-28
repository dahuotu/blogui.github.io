### 现有主题

#### BlogUi

> BlogUi极简风格。

* [首页预览](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/theme/blogui/index.html) 
* [博文页预览](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/theme/blogui/page.html) 
* [测试页预览](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/theme/blogui/test.html) 

```css
<!--引入BlogUi.less-->
<link rel="stylesheet/less"type="text/css"href="css/blogui.less"/>
```

### 更换主题

选择喜欢的主题替换默认的主题文件 `.less` 即可。

> 例如：默认BlogUi主题 `blogui.less` 替换成拼图大前端v1.0版本主题 `pintuer.v1.less`

```css
<!--引入BlogUi.less-->
<link rel="stylesheet/less"type="text/css"href="css/blogui.less"/>
<!--替换成-->
<!--引入BlogUi.less-->
<link rel="stylesheet/less"type="text/css"href="css/pintuer.v1.less"/>
```

### 自定义主题

> 如果不喜欢默认的主题风格想自己调整主题风格怎么办？

BlogUi提供通过修改变量的方式调整主题的颜色、边距、圆角、阴影等达到调整主题风格的要求。

1. 先下载BlogUi,默认使用的就是`blogui.less`极简风格主题，只需要在此基础上修改`.less`文件里的以下变量即可。

```text

/*----步骤1：先确定风格，主要先确定以下元素配色----*/

背景色=#f1f2f9
tips:背景色即整体网页的背景色

主色=#666
tips:主色即整体网页的主要色调，一般默认的字体颜色就是主要颜色

强调色=#888
tips:强调即整体网页醒目提示用来强调的颜色，一般加粗的标题，提示颜色

激活色=#0a8
tips:激活色即用来明显的显示，但有一定动作才能激活，比如链接滑入、选中等

背景=全局配置
容器=面板、列表、菜单、面包屑

```

```css
/*----步骤2：修改以下元素变量参数----*/

/*----颜色相关---*/

/*背景色*/
@global-background-color: #f1f2f9;
/*主色*/
@global-main-color: #666;
/*强调色*/
@global-strong-color: #888;
/*激活色*/
@global-active-color: #0a8;
/*黑色*/
@global-black-color: #000;
/*白色*/
@global-white-color: #fff;
/*灰色*/
@global-gray-color: #f3f3f3;

/*----字体相关---*/

/*全局字体*/
@global-font-family: PingFang SC,Lantinghei SC,Helvetica Neue,Helvetica,Arial,Microsoft YaHei,"微软雅黑",STHeitiSC-Light,simsun,"宋体",WenQuanYi Zen Hei,WenQuanYi Micro Hei,"sans-serif";
/*主字体大小*/
@global-font-size: 14px;
/*强调字体大小*/
@global-strong-size: 16px;
/*标题字体大小*/
@global-title-size: 18px;

/*----容器相关---*/

/*容器背景色*/
@container-background-color: #fff;
/*容器边框色*/
@container-border-color: #f3f3f3;
/*容器内边距*/
@container-padding: 15px 20px;
/*容器外边距*/
@container-margin: 15px;
/*容器阴影*/
@container-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.02);
/*容器圆角*/
@container-border-radius: 10px;

```

2. 通过调整BlogUi提供的模板页`index.html`（博客首页）、`page.html`（博客博文页）以及`test.html`（用来测试博客组件的测试页）布局来调整主题风格。

验证版本：version 1.0.1
最后更新：2022-03-28

---
