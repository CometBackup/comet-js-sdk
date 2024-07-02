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

# rename .d.ts -> .d.mts so that TS consumers get the right module resolution
find dist/mjs -name '*.d.ts' | while read -r file; do
    mv "$file" "${file%.d.ts}.d.mts"
done
# and for .js -> .mjs
find dist/mjs -name '*.js' | while read -r file; do
    mv "$file" "${file%.js}.mjs"
done

# rewrite imports to add explicit extensions for the esmodule export
# without this TS looks for the wrong file
find dist/mjs \( -name '*.mjs' -o -name '*.d.mts' \) \
    -exec sed -Ei 's#from "(\./[^"]+)"#from "\1.mjs"#g' {} \;