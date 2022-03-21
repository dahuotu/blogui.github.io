?> 评论是博客系统中最常见的元素，主要由评论列表、评论框组成，当评论超过指定条数时需要配合分页使用。

### 评论列表

> 这里展示的评论列表主要包含主评论和回复评论，默认主评论使用`item`样式控制，回复评论使用`li`样式控制。具体示例：[查看示例](http://localhost:3000/design/view.html?pageurl=http://localhost:3000/examples/component-comments-list.html)

```html
<div class="comments-list">
    <!--主评论-->
    <div class="item">
        <div class="face">
            <img src="../docs/assets/400x400.jpeg" />
        </div>
        <div class="info">
            <div class="name">
                <span class="nickname">大火兔</span><span class="days">2022-03-10</span>
                <a class="reply">回复</a>
            </div>
            <div class="contents">
                只如初见，顾惜邂逅情缘。那一瞥，是惊鸿素颜。半点轻砂，万种娇妍。卿若不负，浮华一世夜无眠。琵琶语，古道幽情，莫道黯然魂。
            </div>
        </div>
    </div>
    <div class="item">
        <div class="face">
            <img src="../docs/assets/400x400.jpeg" />
        </div>
        <div class="info">
            <div class="name">
                <span class="nickname">大火兔</span><span class="days">2022-03-10</span>
                <a class="reply">回复</a>
            </div>
            <div class="contents">
                只如初见，顾惜邂逅情缘。那一瞥，是惊鸿素颜。半点轻砂，万种娇妍。卿若不负，浮华一世夜无眠。琵琶语，古道幽情，莫道黯然魂。
            </div>
        </div>
    </div>
    <div class="item">
        <div class="face">
            <img src="../docs/assets/400x400.jpeg" />
        </div>
        <div class="info">
            <div class="name">
                <span class="nickname">大火兔</span><span class="days">2022-03-10</span>
                <a class="reply">回复</a>
            </div>
            <div class="contents">
                只如初见，顾惜邂逅情缘。那一瞥，是惊鸿素颜。半点轻砂，万种娇妍。卿若不负，浮华一世夜无眠。琵琶语，古道幽情，莫道黯然魂。
                <!--回复评论-->
                <div class="li">
                    <div class="face">
                        <img src="../docs/assets/400x400.jpeg" />
                    </div>
                    <div class="info">
                        <div class="name">
                            <span class="nickname">大火兔</span><span class="days">2022-03-10</span>
                            <a class="reply">回复</a>
                        </div>
                        <div class="contents">
                            只如初见，顾惜邂逅情缘。那一瞥，是惊鸿素颜。半点轻砂，万种娇妍。卿若不负，浮华一世夜无眠。琵琶语，古道幽情，莫道黯然魂。
                        </div>
                    </div>
                </div>
                <div class="li">
                    <div class="face">
                        <img src="../docs/assets/400x400.jpeg" />
                    </div>
                    <div class="info">
                        <div class="name">
                            <span class="nickname">大火兔</span><span class="days">2022-03-10</span>
                            <a class="reply">回复</a>
                        </div>
                        <div class="contents">
                            只如初见，顾惜邂逅情缘。那一瞥，是惊鸿素颜。半点轻砂，万种娇妍。卿若不负，浮华一世夜无眠。琵琶语，古道幽情，莫道黯然魂。
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

### 评论框

> 发布评论，默认最多可以评论200字符并且BlogUi评论框会自动统计评论字数。具体示例：[查看示例](http://localhost:3000/design/view.html?pageurl=http://localhost:3000/examples/component-comments-box.html)

```html
<form>
    <div class="comments-box">
        <textarea class="input" maxlength="200" placeholder="评论"></textarea>
        <div class="tools">
            <span class="num">0</span>/<span class="sum">200</span>
            <button type="submit" class="button">发表评论</button>
        </div>
    </div>
</form>
```

最后更新：2022-03-02

---
