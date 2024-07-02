#!/bin/bash

cat >dist/cjs/package.json <<!EOF
{
    "type": "commonjs"
}
!EOF

cat >dist/mjs/package.json <<!EOF
{
    "type": "module"
}
!EOF

find dist/mjs -name '*.d.ts' | while read -r file; do
    mv "$file" "${file%.d.ts}.d.mts"
done

find dist/mjs -name '*.js' | while read -r file; do
    mv "$file" "${file%.js}.mjs"
done
