### 文章列表

> 这里的文章列表一般特指博客中的博文列表，一般包含文章封面、文章标题、文章简介以及发布时间、评论数量、浏览数量等。具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/component-article-list.html)

```html
<ul class="article-list">
    <li>
        <div class="imgs">
            <a href="#">
                <img src="..." />
            </a>
        </div>
        <div class="contents">
            <div class="title">
                <a href="#">标题...</a>
            </div>
            <div class="intro">
                <a href="#">简介...</a>
            </div>
            <div class="other">
                <div class="day">2022-03-08</div>
                <div class="comment">993</div>
                <div class="view">138</div>
            </div>
        </div>
    </li>
    <li>...</li>
</ul>
```

### 文章详情

> 使用文章详情时，只要给div标签添加 `.article-detail` 样式即可。具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/component-article-detail.html)

```html
<div class="article-detail">
    <h1>标题</h1>
    <p class="text-center">时间：2015-1-1 作者：佚名 来源：网络</p>
    <p>正文详情...</p>
</div>
```
