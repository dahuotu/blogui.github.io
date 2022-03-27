### 文章列表

> 这里的文章列表一般特指博客中的博文列表，一般包含文章封面、文章标题、文章简介以及发布时间、评论数量、浏览数量等。具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/component-article-list.html)

```html
<ul class="article-list">
    <li>
        <div class="imgs">
            <a href="#">
                <img src="images/400x400.jpeg" class="img-respond" />
            </a>
        </div>
        <div class="contents">
            <div class="title">
                <a href="#">BlogUi介绍</a>
            </div>
            <div class="intro">
                <a href="#">BlogUi框架，基于拼图响应式前端框1.0架精简分支开发。优秀的HTML、CSS、JS跨屏响应式开源前端框架，使用最新浏览器技术，专为博客系统（Blog System）打造的前端页面Ui框架，占用资源小、风格极简而优雅、用户只需简单的配置便可随意定制主题风格。</a>
            </div>
            <div class="other">
                <div class="day">2022-03-08</div>
                <div class="view">138</div>
            </div>
        </div>
        <div class="clear"></div>
    </li>
    <li>...</li>
</ul>
```

### 文章详情

> 使用文章详情时，只要给div标签添加 `.article-detail` 样式即可。具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/component-article-detail.html)

```html
<div class="article-detail">
    <h2>>标题</h2>
    <p class="text-center">时间：2015-1-1 作者：佚名 来源：网络</p>
    <p>正文详情...</p>
</div>
```

验证版本：version 1.0.1
最后更新：2022-03-26

---
