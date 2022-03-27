?> 选项卡在博客系统中是常用的一种容器面板，因为可以方便切换不同的内容而受到亲昵。常见的选项卡分为水平选项卡和垂直选项卡。

### 水平选项卡

> 在博客系统中最常见的选项卡为水平选项卡，这里只提最基础的选项卡；因为在博客系统中水平选项卡一般用在侧边栏文章排行分类中。具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/component-tabs.html)

**注意：**多个选项卡不能出现重复的id，否则切换效果失效，这是jQuery常识。

```html
<div class="tabs">
    <ul class="head">
        <li class="checked" data-checked="#tab1">tab1</li>
        <li data-checked="#tab2">tab2</li>
        <li data-checked="#tab3">tab3</li>
    </ul>
    <ul class="body">
        <!--id唯一，多个选项卡不能出现重复的id，否则切换效果失效，这是jQuery常识-->
        <li class="checked" id="tab1">panel1</li>
        <li id="tab2">panel2</li>
        <li id="tab3">panel3</li>
    </ul>
</div>
```

### 垂直选项卡

> 垂直选项卡一般多用在影视类博客系统中，主要是方便分类展示内容。具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/component-tabs-y.html)

**注意：**多个选项卡不能出现重复的id，否则切换效果失效，这是jQuery常识。

```html
<div class="tabs-y">
    <ul class="head">
        <li class="checked" data-checked="#tab1">tab1</li>
        <li data-checked="#tab2">tab2</li>
        <li data-checked="#tab3">tab3</li>
    </ul>
    <ul class="body">
        <li class="checked" id="tab1">panel1</li>
        <li id="tab2">panel2</li>
        <li id="tab3">panel3</li>
    </ul>
</div>
```

验证版本：version 1.0.1
最后更新：2022-02-03

---
