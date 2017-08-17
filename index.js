var postcss = require('postcss');

module.exports = postcss.plugin('postcss-extend-class', function (opts) {
    opts = opts || {};
    return function (css) {
        css.walkRules(function (rule) {
            rule.selectors = rule.selectors.map( function (selector) {

                if (selector.startsWith('.' + opts.prefix)) {
                    return selector;
                }

                if (selector.startsWith('.')) {
                    return '.' + opts.prefix + selector.replace('.', '');
                }

                return selector;
            });
        });
    };
});
