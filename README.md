# PostCSS Extend Class

[PostCSS] plugin extend classes for each rule.

[PostCSS]: https://github.com/postcss/postcss

```css
.foo {
    /* Input example */
}

.foo, .bar {
    /* Input example */
}
```

```css
.__prefix__foo {
  /* Output example */
}

.__prefix__foo, .__prefix__bar {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-extend-class')( { prefix: '__prefix__' } ) ])
```

See [PostCSS] docs for examples for your environment.
