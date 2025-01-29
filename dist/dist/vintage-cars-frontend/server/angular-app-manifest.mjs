
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
    "route": "/Home-page"
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
    "route": "/booking-managements"
  },
  {
    "renderMode": 2,
    "route": "/user-list"
  },
  {
    "renderMode": 2,
    "route": "/cars-list"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25159, hash: '1152759b7a8e5ec7c291774ea0540726db3b59a5ea4ce5d77ba70b53cb2d5b78', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 21275, hash: 'e31bff105ad5b5a365956798db9fbeef748915a676233d44fbd8120885317f10', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Home-page/index.html': {size: 93548, hash: 'c09fed4ec88d759015959ebfb3a1a70b3d5b52573816ca14d9803638e7a25537', text: () => import('./assets-chunks/Home-page_index_html.mjs').then(m => m.default)},
    'detail-page/index.html': {size: 67725, hash: '8bcc0aecc6ac70baa2c7f4669e015b868d3a13053b9d0ea5f25e6d4a96ee0e87', text: () => import('./assets-chunks/detail-page_index_html.mjs').then(m => m.default)},
    'index.html': {size: 93548, hash: 'c09fed4ec88d759015959ebfb3a1a70b3d5b52573816ca14d9803638e7a25537', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'add-cars/index.html': {size: 60586, hash: 'd99ea08308d7e03b73504b10a150d3dadacf742fc7c604dcfcd2a01156adba48', text: () => import('./assets-chunks/add-cars_index_html.mjs').then(m => m.default)},
    'booking-managements/index.html': {size: 54802, hash: 'f9b27695a3f013bd724360f9987402e1d3f5a3cd678f1690a61769ed92494259', text: () => import('./assets-chunks/booking-managements_index_html.mjs').then(m => m.default)},
    'user-list/index.html': {size: 54833, hash: '9dad8fd787df6e44d8211afaa3392ce6865c95b6700fa7d84eb854b1af6b8e45', text: () => import('./assets-chunks/user-list_index_html.mjs').then(m => m.default)},
    'cars-list/index.html': {size: 60428, hash: 'bda029a67d355709dc56558e54bf9c0b67980527a73f7b64cb9c73f806326173', text: () => import('./assets-chunks/cars-list_index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
