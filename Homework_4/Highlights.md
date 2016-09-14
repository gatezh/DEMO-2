##[Clearing the float](https://css-tricks.com/all-about-floats/#article-header-id-2)

To position two elements with `float: right` one on another we need to clear a property float.

![](https://css-tricks.com/wp-content/csstricks-uploads/directionalclearing.png)

>**Side notes**  
>That's why float elements goes first in HTML 

##[:first-child](https://css-tricks.com/almanac/selectors/f/first-child/)

There must be a space between selector and `:first-child` attribute if applide to a parent (line 10), but no space if applied to the specific element (line 14).

```css
body {
  font-family: Palatino, Georgia, serif;
  max-width: 32em;
  padding: 1em 0 0 1em;
  line-height: 1.4;
}

/* by formatting the selector this way, we are less specific than `article p:first-child`
 this means ANY element that is the first child of `article` can be styled */
article :first-child {
color: red;
}

p:last-child {
  font-size: 0.75em;
  font-style: italic;
}
```

>**Side notes**  
>There is a mistake on line 43 in css file with an example.


