?> 公告在博客系统中一般主要用作公示、通知等用途。在BlogUi中只提供最简单和最基础的固定公告、滚动公告。即可以单独使用（一般放置在横向导航菜单下方）也可以和顶部条或底部条配合使用。

**注意：**公告依赖图标，请勿删除BlogUi中的图标css代码。

### 单行公告

> 单行公告即只有一行文字的简短公告，也是最常见的公告形式。具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/component-notice.html)

```html
<div class="notice">
    <div class="icon">
        <span class="iconfont icon-notification"></span>
    </div>
    <div class="single">默认单行简短公告演示</div>
</div>
```

### 多行公告

> 多行公告，超过2行自动省略，一般用于公告文字较多的情况下。具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/component-notice-more.html)

```html
<div class="notice">
    <div class="icon">
        <span class="iconfont icon-notification"></span>
    </div>
    <div class="more">多行公告演示，超过2行自动省略，一般用于公告文字较多的情况下...</div>
</div>
```

### 列表公告

列表公告也是常见公告的一种形式，只有列表公告才有滚动效果，一般分为垂直滚动和水平滚动。

#### 垂直滚动

> 垂直滚动即上下滚动，列表内的文字可以长度超过后会自行省略。使用 `.roll` 样式开启滚动效果，使用 `.list-y` 样式开启垂直滚动。具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/component-notice-list.html)

```html
<div class="notice">
    <div class="icon">
        <span class="iconfont icon-notification"></span>
    </div>
    <div class="roll">
        <ul class="list-y">
            <li>
                <a href="#" target="_blank">白天做老板秘书，晚上做老板老婆是什么感受？</a>
            </li>
            <li>
                <a href="#" target="_blank">娘家拆迁分了两套新房，婆婆让我把房本写上小叔子的名</a>
            </li>
            <li>
                <a href="#" target="_blank">外卖员口述：夜班最怕女客户提出这种要求</a>
            </li>
            <li>
                <a href="#" target="_blank">前任一哭，现任必输</a>
            </li>
        </ul>
    </div>
</div>
```

#### 水平滚动

> 水平滚动即向左滚动，列表内的文字可以长度超过后会自行省略。使用 `.roll` 样式开启滚动效果，使用 `.list-x` 样式开启水平滚动。具体示例：[查看示例](https://www.blogui.cn/design/view.html?pageurl=https://www.blogui.cn/examples/component-notice-list.html)

```html
<div class="notice">
    <div class="icon">
        <span class="iconfont icon-notification"></span>
    </div>
    <div class="roll">
        <ul class="list-x">
            <li>
                <a href="#" target="_blank">白天做老板秘书，晚上做老板老婆是什么感受？</a>
            </li>
            <li>
                <a href="#" target="_blank">娘家拆迁分了两套新房，婆婆让我把房本写上小叔子的名</a>
            </li>
            <li>
                <a href="#" target="_blank">外卖员口述：夜班最怕女客户提出这种要求</a>
            </li>
            <li>
                <a href="#" target="_blank">前任一哭，现任必输</a>
            </li>
        </ul>
    </div>
</div>
```

验证版本：version 1.0.1
最后更新：2022-02-03

---
