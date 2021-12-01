# gulp-plugin-rem2px
gulp plugin for rem2px

## Installation

Run `npm install gulp-plugin-rem2px`

## Usage

```js
const rem2px = require('gulp-plugin-rem2px');

gulp.task('css', function () {
    gulp.src(['css/**/*.css'])
        .pipe(rem2px())
        .pipe(gulp.dest('css'));
});
```

## Options

Pass in the base size as Number

```js
const rem2px = require('gulp-plugin-rem2px');

const baseSize = 100;

gulp.task('css', function() {
    gulp.src('css/**/*.css')
        .pipe(rem2px(baseSize))
        .pipe(gulp.dest('css'));
});
```
# License
MIT © 2021 Duzhijie Inc.

