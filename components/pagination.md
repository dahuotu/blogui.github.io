?> 分页是博客系统中最常见的必备元素，BlogUi主要提供一般常见的分页、翻页，并且可以通过内置颜色调整分页颜色，分页大小以及禁用分页页码。

### 常见分页

> 一般常见的分页，主要由上一页、页码、更多、下一页组成；上一页和下一页如果不想要图标方式，可以去掉 `iconfont icon-*` 的 `class` 属性，改成中文即可。具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/component-pagination.html)

```html
<ul class="pagination">
    <li>
        <a href="#" class="iconfont icon-left"></a>
    </li>
    <li>
        <a href="#">1</a>
    </li>
    <li>
        <a href="#">2</a>
    </li>
    <li>
        <a href="#">3</a>
    </li>
    <li>
        <a href="#">4</a>
    </li>
    <li>
        <a href="#">5</a>
    </li>
    <li>
        <a href="#" class="iconfont icon-more"></a>
    </li>
    <li>
        <a href="#" class="iconfont icon-right"></a>
    </li>
</ul>
```

### 常见翻页

> 箭头形式的常见翻页。具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/component-pagination.html)

```html
<ul class="pagination">
    <li>
        <a href="#" class="iconfont icon-left"></a>
    </li>
    <li>
        <a href="#" class="iconfont icon-right"></a>
    </li>
</ul>
```

> 文字形式的常见翻页。具体示例：[查看示例](https)

```html
<ul class="pagination">
    <li>
        <a href="#">上一页</a>
    </li>
    <li>
        <a href="#">下一页</a>
    </li>
</ul>
```

### 组合使用

> 常见分页组合形式的使用。具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/component-pagination.html)

```html
<ul class="pagination pagination-group">
    <li>
        <a href="#" class="iconfont icon-left"></a>
    </li>
    <li>
        <a href="#">1</a>
    </li>
    <li>
        <a href="#">2</a>
    </li>
    <li>
        <a href="#">3</a>
    </li>
    <li>
        <a href="#">4</a>
    </li>
    <li>
        <a href="#">5</a>
    </li>
    <li>
        <a href="#" class="iconfont icon-more"></a>
    </li>
    <li>
        <a href="#" class="iconfont icon-right"></a>
    </li>
</ul>
```

> 常见翻页组合形式的使用。具体示例：[查看示例](https)

```html
<ul class="pagination pagination-group">
    <li>
        <a href="#">上一页</a>
    </li>
    <li>
        <a href="#">下一页</a>
    </li>
</ul>
```

### 颜色大小

> 默认分页尺寸。具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/component-pagination.html)

```html
<ul class="pagination">
    <li>
        <a href="#" class="iconfont icon-left"></a>
    </li>
    <li>
        <a href="#">1</a>
    </li>
    <li>
        <a href="#">2</a>
    </li>
    <li>
        <a href="#">3</a>
    </li>
    <li>
        <a href="#">4</a>
    </li>
    <li>
        <a href="#">5</a>
    </li>
    <li>
        <a href="#" class="iconfont icon-more"></a>
    </li>
    <li>
        <a href="#" class="iconfont icon-right"></a>
    </li>
</ul>
```

> 大尺寸分页。具体示例：[查看示例](https)

```html
<ul class="pagination pagination-big">
    <li>
        <a href="#" class="iconfont icon-left"></a>
    </li>
    <li>
        <a href="#">1</a>
    </li>
    <li>
        <a href="#">2</a>
    </li>
    <li>
        <a href="#">3</a>
    </li>
    <li>
        <a href="#">4</a>
    </li>
    <li>
        <a href="#">5</a>
    </li>
    <li>
        <a href="#" class="iconfont icon-more"></a>
    </li>
    <li>
        <a href="#" class="iconfont icon-right"></a>
    </li>
</ul>
```

> 小尺寸分页。具体示例：[查看示例](https)

```html
<ul class="pagination pagination-small">
    <li>
        <a href="#" class="iconfont icon-left"></a>
    </li>
    <li>
        <a href="#">1</a>
    </li>
    <li>
        <a href="#">2</a>
    </li>
    <li>
        <a href="#">3</a>
    </li>
    <li>
        <a href="#">4</a>
    </li>
    <li>
        <a href="#">5</a>
    </li>
    <li>
        <a href="#" class="iconfont icon-more"></a>
    </li>
    <li>
        <a href="#" class="iconfont icon-right"></a>
    </li>
</ul>
```

> 带颜色的分页。具体示例：[查看示例](https)

```html
<ul class="pagination border-main">
    <!--禁用-->
    <li class="disabled">
        <a href="#" class="iconfont icon-left"></a>
    </li>
    <li>
        <a href="#">1</a>
    </li>
    <li class="active">
        <a href="#">2</a>
    </li>
    <li>
        <a href="#">3</a>
    </li>
    <li>
        <a href="#">4</a>
    </li>
    <li>
        <a href="#">5</a>
    </li>
    <li>
        <a href="#" class="iconfont icon-right"></a>
    </li>
</ul>
```

> 带颜色的组合分页。具体示例：[查看示例](https)

```html
<ul class="pagination pagination-group border-sub">
    <!--禁用-->
    <li class="disabled">
        <a href="#" class="iconfont icon-left"></a>
    </li>
    <li>
        <a href="#">1</a>
    </li>
    <li class="active">
        <a href="#">2</a>
    </li>
    <li>
        <a href="#">3</a>
    </li>
    <li>
        <a href="#">4</a>
    </li>
    <li>
        <a href="#">5</a>
    </li>
    <li>
        <a href="#" class="iconfont icon-right"></a>
    </li>
</ul>
```

最后更新：2022-03-09

---
