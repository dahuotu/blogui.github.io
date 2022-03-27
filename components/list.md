### 文字列表

文字列表在博客系统中一般用在侧边栏，展示文章、评论等内容时多常见，这里仅提供了常见的文字列表（普通列表、圆点列表、数字列表）。

#### 普通列表

> 普通列表即一般文字列表，默认列表无序号，无圆点；在 `ul` 标签添加 `list` 样式即可。[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/component-list.html)

```html
<ul class="list">
    <li>
        <a href="#" target="_blank" title="...">...</a>
    </li>
    <li>
        <a href="#" target="_blank" title="...">...</a>
    </li>
    <li>
        <a href="#" target="_blank" title="...">...</a>
    </li>
    <li>
        <a href="#" target="_blank" title="...">...</a>
    </li>
    <li>
        <a href="#" target="_blank" title="...">...</a>
    </li>
    <li>
        <a href="#" target="_blank" title="...">...</a>
    </li>
</ul>
```

#### 圆点列表

> 圆点列表即带圆点的特殊文字列表，在 `ul` 标签添加 `list-dot` 样式即可。具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/component-list.html)

```html
<ul class="list-dot">
    <li>
        <a href="#" target="_blank" title="...">...</a>
    </li>
    <li>
        <a href="#" target="_blank" title="...">...</a>
    </li>
    <li>
        <a href="#" target="_blank" title="...">...</a>
    </li>
    <li>
        <a href="#" target="_blank" title="...">...</a>
    </li>
    <li>
        <a href="#" target="_blank" title="...">...</a>
    </li>
    <li>
        <a href="#" target="_blank" title="...">...</a>
    </li>
</ul>
```

#### 数字列表

> 数字列表即数字序号的特殊文字列表，在 `ol` 标签添加 `list-num` 样式即可。具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/component-list.html)

```html
<!--切记这里要使用ol标签,不是使用ul标签。-->
<ol class="list-num">
    <li>
        <a href="#" target="_blank" title="...">...</a>
    </li>
    <li>
        <a href="#" target="_blank" title="...">...</a>
    </li>
    <li>
        <a href="#" target="_blank" title="...">...</a>
    </li>
    <li>
        <a href="#" target="_blank" title="...">...</a>
    </li>
    <li>
        <a href="#" target="_blank" title="...">...</a>
    </li>
    <li>
        <a href="#" target="_blank" title="...">...</a>
    </li>
</ol>
```

### 标签列表

标签列表主要是用来展示博客内容分类，与导航菜单不同的是标签列表只是按照频次分类。在标签列表中主要分为普通标签和列表标签。

#### 普通标签

> 普通标签即单独使用的标签，博客系统中实际使用的标签是不具备关闭这类属性的，使用时注意区分。具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/component-tag.html)

```html
<h2>普通标签</h2>
<span class="tag">默认标签</span>
<span class="tag-round">胶囊标签</span>
<h2>颜色标签</h2>
<span class="tag bg-main">主色</span>
<span class="tag bg-sub">辅助色</span>
<span class="tag bg-back">背景色</span>
<span class="tag bg-mix">融合色</span>
<span class="tag bg-dot">点缀色</span>
<span class="tag bg-black">黑色</span>
<span class="tag bg-gray">灰色</span>
<span class="tag bg-white">白色</span>
```

#### 列表标签

> 列表标签在博客系统中是必备的内容，主要用来展示文章标签分类，一般是放置在博客侧边栏中。具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/component-tag-list.html)

**注意：**在使用列表标签时一定要加 `<div class="clear"></div>` 来结束，此处是为了清除浮动，列表标签会根据父容器宽度自行换行，列表标签一般默认为胶囊标签（也就是圆角标签）。

```html
<ul class="tag-list">
    <li>
        <a href="#">人口标签</a>
    </li>
    <li>
        <a href="#">性别</a>
    </li>
    <li>
        <a href="#">年龄</a>
    </li>
    <li>
        <a href="#">地域</a>
    </li>
    <li>
        <a href="#">教育水平</a>
    </li>
    <li>
        <a href="#">出生日期</a>
    </li>
    <li>
        <a href="#">职业</a>
    </li>
    <li>
        <a href="#">星座</a>
    </li>
    <!-- 切记在使用列表标签时这里一定要加，此处是为了清除浮动，列表标签会根据父容器宽度自行换行 -->
    <div class="clear"></div>
</ul>
```

最后更新：2022-02-07

---
