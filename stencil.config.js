exports.config = {
  bundles: [
    { components: ['my-app', 'app-home'] },
    { components: ['video-call'] },
    { components: ['lazy-img'] }
  ],
  collections: [
    { name: '@stencil/router' },
    { name: '@ionic/core' }
  ],
  /*serviceWorker: {
    swSrc: 'src/sw.js'
  }*/
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
