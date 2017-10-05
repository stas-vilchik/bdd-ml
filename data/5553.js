{
  await asyncCopyTo(join(reactPath, 'build', 'dist', 'react.production.min.js'), join(__dirname, 'react.production.min.js'));
  await asyncCopyTo(join(reactPath, 'build', 'dist', 'react-dom.production.min.js'), join(__dirname, 'react-dom.production.min.js'));
}