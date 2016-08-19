##Side menu implementation

Makes П-shape border


```css
.nav-left {
    width: 240px;
    float:left;
    border: 1px solid #C9C9C9;
    border-bottom: 0;
}
``` 

Each `li` element has it's own bottom border so it doesn't result in dobling borders.

```css
.nav-left li {
    height: 40px;
    border-bottom: 1px solid #C9C9C9;
    display: block;
}
```

##Footer copyright

Implemented as the last element of the list.  
Styled as `:last-child` pseudo class.
