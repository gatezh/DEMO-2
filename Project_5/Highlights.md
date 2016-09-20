##Flex-box

To align flex container vertically all of it's parents must have height property set.

>**All** means including `body` and `html`

####**HTML**

```html
    <div class="wrapper">
        <div class="flex-container">
            <div class="flex-item"></div>
        </div>
    </div>
```

####CSS

```css
html, body {
    height: 100%;
}

.wrapper {
    height: 100%;
}

.flex-container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.flex-item {
    background-color: tomato;
    height: 100px;
    width: 100px;
}
```
