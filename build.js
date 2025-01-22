await Bun.build({
  entrypoints: ['./index.js','index2.js'],
  outdir: './build',
  target: 'bun',
  splitting: true
})
