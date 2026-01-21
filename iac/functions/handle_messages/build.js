const { build } = require('esbuild');

build({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  platform: 'node',
  logLevel: 'info',
  outfile: './dist/index.js',
  external: ['@aws-sdk/client-s3'],
}).catch(() => process.exit(1));
