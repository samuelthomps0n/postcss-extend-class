import postcss from 'postcss';
import test from 'ava';

import plugin from './';

function run(t, input, output, opts = {}) {
    return postcss([plugin(opts)]).process(input)
        .then(result => {
            t.is(result.css, output);
            t.is(result.warnings().length, 0);
        });
}

const prefix = '__prefix__';


test('Prepend prefixs', t =>
  run(t, '.example{ }', '.__prefix__example{ }', { prefix })
);

test('Should not prepend if class is already there', t =>
  run(t, '.__prefix__example{ }', '.__prefix__example{ }', { prefix })
);

test('Should skip body and html rules', t =>
    run(t, 'html,body{ }', 'html,body{ }', { prefix })
);

test('Skip keyframe rules', t =>
  run(t, '0%, from {} 100%, to {}', '0%, from {} 100%, to {}', { prefix })
);
