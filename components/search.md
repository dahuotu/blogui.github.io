?> 搜索框在博客中是最常见的一种简易表单，这里仅提供最原始简单的搜索框。

搜索框主要分为2种：
* 搜索按钮是以文字形式呈现
* 搜索按钮是以图标形式呈现

### 文字搜索按钮

> 搜索按钮是文字形式的搜索框。具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/component-search.html)

```html
<div class="search">
    <input class="inp" type="text" placeholder="搜索.." name="search">
    <button class="btn" type="submit">搜索</button>
</div>
```

### 图标搜索按钮

> 搜索按钮是图标形式的搜索框。具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/component-search.html)

```html
<div class="search">
    <input class="inp" type="text" placeholder="搜索.." name="search">
    <button class="btn" type="submit"><i class="iconfont icon-search"></i></button>
</div>
```

### 超大搜索

> 超大搜索相比默认的搜索框更大，搜索按钮也更大；超大搜索使用`search-big`样式来展示。具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/component-search.html)

```html
<div class="search-big">
    <input class="inp" type="text" placeholder="搜索.." name="search">
    <button class="btn" type="submit"><i class="iconfont icon-search"></i></button>
</div>
```

验证版本：version 1.0.1
最后更新：2022-03-02

---
