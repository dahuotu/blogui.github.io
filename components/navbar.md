?> 这里提供的导航为常见的响应式导航，在博客中常见的两种方式：一种以站点名文字作为LOGO的导航，一种最常见的LOGO导航，无站点名。

> 文字标题导航，具体示例：[查看示例](http://localhost:3000/design/view.html?pageurl=http://localhost:3000/examples/component-navbar-1.html)

```html
<div class="navbar">
    <input type="checkbox" id="checkmenu">
    <label for="checkmenu" class="checkbtn">
    </label>
    <label class="logo">大火兔</label>
    <ul class="menu">
        <li>
            <a href="#" class="active">首页</a>
        </li>
        <li>
            <a href="#">相册</a>
            <ul class="dropdown-menu">
                <li>
                    <a href="#">萌娃</a>
                </li>
                <li>
                    <a href="#">萌宠</a>
                </li>
                <li>
                    <a href="#">萝莉</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">随笔</a>
        </li>
        <li>
            <a href="#">日记</a>
        </li>
        <li>
            <a href="#">说说</a>
        </li>
        <li>
            <a href="#">分享</a>
        </li>
        <li>
            <a href="#">留言板</a>
        </li>
    </ul>
</div>
```

> 带有LOGO的导航，具体示例：[查看示例](http://localhost:3000/design/view.html?pageurl=http://localhost:3000/examples/component-navbar-2.html)

```html
<div class="navbar">
    <input type="checkbox" id="checkmenu">
    <label for="checkmenu" class="checkbtn">
    </label>
    <label class="logo">
        <img src="/assets/400x400.jpeg" />
    </label>
    <ul class="menu">
        <li>
            <a href="#" class="active">首页</a>
        </li>
        <li>
            <a href="#">相册</a>
            <ul class="dropdown-menu">
                <li>
                    <a href="#">萌娃</a>
                </li>
                <li>
                    <a href="#">萌宠</a>
                </li>
                <li>
                    <a href="#">萝莉</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">随笔</a>
        </li>
        <li>
            <a href="#">日记</a>
        </li>
        <li>
            <a href="#">说说</a>
        </li>
        <li>
            <a href="#">分享</a>
        </li>
        <li>
            <a href="#">留言板</a>
        </li>
    </ul>
</div>
```

最后更新：2022-03-15

---
