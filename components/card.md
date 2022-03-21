?> 卡片一般在博客系统中用作板块分类、文章分类等这类用于内容区分引导。主要是以图文卡片方式展示和面板不同之处在于卡片有一定的动画特效，需要配合列表或网格布局使用。

### 一般卡片

> 一般常用的卡片使用，具体示例：[查看示例](http://localhost:3000/design/view.html?pageurl=http://localhost:3000/examples/component-card-1.html)

<!-- tabs:start -->

#### **css**

```css
<style type="text/css">

/*你的css*/
.yourclass {
    width: 300px;
    height: 200px;
}

.yourclass .img {
    height: 160px;
}

</style>
```

#### **html**

```html
<!-- .yourclass 根据自己的需要调整宽度高度，默认.card宽度，高度根据内容自适应 -->
<div class="card yourclass">
    <a href="#" title="...">
        <div class="img">
            <img src="..." height="150" />
        </div>
        <div class="text">
            时光是沙漏，回忆是里面的沙子
        </div>
    </a>
</div>
```

<!-- tabs:end -->

### 图片卡片

> 图片卡片在瀑布流图片类博客系统中比较常见。具体示例：[查看示例](http://localhost:3000/design/view.html?pageurl=http://localhost:3000/examples/component-card-2.html)

<!-- tabs:start -->

#### **有背景色**

> 带有背景色的卡片，鼠标移动效果失效

```html
<div class="card-bg">
    <a href="..." title="...">
        <div class="img">
            <img src="..." class="img-respond" />
        </div>
    </a>
</div>
```

#### **浮动单行文字**

> 浮在图片上的单行文字

```html
<div class="card">
    <a href="..." title="...">
        <div class="img">
            <img src="..." class="img-respond" />
        </div>
        <!-- 浮在图片上的单行文字 -->
        <div class="text">曾经的爱，曾经的痛，曾经的迷茫</div>
    </a>
</div>
```

#### **多行文字**

> 多行文字，最多3行，3行后会省略

```html
<div class="card">
    <a href="..." title="...">
        <div class="img">
            <img src="..." class="img-respond" />
        </div>
        <!-- 浮在图片上的多行文字，最多3行，3行后会省略 -->
        <div class="more">总有一天我会累、会烦、会躲避、会失去耐心、会歇斯底里、会头也不回……最好别让我有这样一天，因为，谁都拉不回。</div>
    </a>
</div>
```

#### **有主副标题**

> 有主副标题的

```html
<div class="card">
    <a href="..." title="...">
        <div class="img">
            <img src="..." class="img-respond" />
        </div>
        <!-- 有主副标题的 -->
        <div class="content">
            <div class="main-title">扎心语录</div>
            <div class="sub-title">当你选择欺骗我的时候，就像是被你的刀刺入心脏一样；想要爱却又不敢爱，因为留下了阴影；想怨恨却又恨不了，因为还是牵肠挂肚。</div>
        </div>
    </a>
</div>
```

<!-- tabs:end -->

### 板块卡片

> 一般用在博客板块划分，引导用户浏览分类内容时会使用到板块卡片。具体示例：[查看示例](http://localhost:3000/design/view.html?pageurl=http://localhost:3000/examples/component-card-3.html)

<!-- tabs:start -->

#### **css**

```css
<style type="text/css">

/*你的css*/
.yourclass {
    height: 200px;
}

.yourclass .img {
    height: 140px;
}

</style>
```

#### **html**

```html
<!-- 左右两个板块卡片布局 -->
<div class="row">
    <div class="col-lg-6">
        <!-- 默认，无背景的板块卡片 -->
        <div class="card yourclass">
            <a href="#" title="板块标题">
                <div class="img">
                    <!-- 板块图片要指定高度 -->
                    <img src="..." height="140" />
                </div>
                <!-- 板块文字 -->
                <div class="categories">板块标题</div>
            </a>
        </div>
    </div>
    <div class="col-lg-6">
        <!-- 有背景的板块卡片 -->
        <div class="card-bg yourclass">
            <a href="#" title="...">
                <div class="img">
                    <!-- 板块图片要指定高度 -->
                    <img src="..." height="140" />
                </div>
                <div class="categories">...</div>
            </a>
        </div>
    </div>
</div>
```

<!-- tabs:end -->

最后更新：2022-02-03

---
