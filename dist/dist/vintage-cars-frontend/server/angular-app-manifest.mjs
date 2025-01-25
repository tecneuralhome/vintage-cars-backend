
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/register"
  },
  {
    "renderMode": 2,
    "route": "/detail-page"
  },
  {
    "renderMode": 2,
    "route": "/add-cars"
  },
  {
    "renderMode": 2,
    "route": "/notifications"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25159, hash: 'b5ae4d1b33da5252ec8f95ef857fea90d73eb487c9ef9350ed6c7a6fe8f77819', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 21275, hash: '1df501ec2f9647cfbfbbdd8b0bef26a6f4110c4dd9137ad6151c1d5ec0331852', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 93032, hash: '12de92fa6a85eac8915bdab99e9a7d7b468dcd417f51586a7b43c9f82c7d59f7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 58519, hash: '8f43c24cea7381374f0ec6ee93f7d05c94bdc1fe2c65af8c301eae2272e02361', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 58810, hash: '312f12e2938cd70f391d2d4263eb1c3a6634cecf260a7b7ba15db8812bdd7940', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'add-cars/index.html': {size: 61052, hash: 'b1d8b73fd97fe6fbbdbb9d2f55c5974a6925c2d887a165b319949e5ad9c90815', text: () => import('./assets-chunks/add-cars_index_html.mjs').then(m => m.default)},
    'detail-page/index.html': {size: 71152, hash: '39763ca774924dbc9a9773617a79a5465dba0500fc7814f184370f8923562ba9', text: () => import('./assets-chunks/detail-page_index_html.mjs').then(m => m.default)},
    'notifications/index.html': {size: 56844, hash: 'e19aabbf9c972458fab9480d0c3dcd21ce0ed9e6252543680248ef2ef603ce06', text: () => import('./assets-chunks/notifications_index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
