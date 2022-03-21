?> 面板在多数博客系统中是最常见的基础组件。面板默认宽度100%，面板的宽度由父容器控制。

**主要分为以下3种用途**：

* 标准面板（含有头部、含有内容部分）
* 只有头部（只含有头部，一般主要作为特殊的醒目提示用）
* 只有内容（只含有内容部分，多数情况下只作为胶囊内容使用）

### 标准面板

> 标准面板（含有头部、含有内容部分）。具体示例：[查看示例](http://localhost:3000/design/view.html?pageurl=http://localhost:3000/examples/component-panel-1.html)

```html
<div class="panel">
    <div class="head">
        标准面板
    </div>
    <div class="body">
        头部和内容部分组合
    </div>
</div>
```

### 只有头部

> 只有头部（只含有头部，一般主要作为特殊的醒目提示用）。具体示例：[查看示例](http://localhost:3000/design/view.html?pageurl=http://localhost:3000/examples/component-panel-2.html)

```html
<div class="panel">
    <div class="head">
        特殊面板，只有头部没有内容
    </div>
</div>
```

### 只有内容

> 只有内容（只含有内容部分，多数情况下只作为胶囊内容使用）。具体示例：[查看示例](http://localhost:3000/design/view.html?pageurl=http://localhost:3000/examples/component-panel-3.html)

```html
<div class="panel">
    <div class="body">
        特殊面板，只有内容没有头部
    </div>
</div>
```

最后更新：2022-02-03

---
