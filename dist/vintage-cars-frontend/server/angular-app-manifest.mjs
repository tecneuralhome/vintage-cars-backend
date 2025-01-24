
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
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
    'index.csr.html': {size: 25160, hash: '386017dc807e2e4ece03b6b5a93664919510eaa76e5dda9fc1842143dce9111e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 21276, hash: 'cf3b1fdc53f895cdbb701ed7e6375bec12b409c6d60187d18d7af0cd50fd97f4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 95054, hash: '74977211a180436f310967fe1cdf25cd2ec6ae3181a48ada03e86e81469fd95d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 57904, hash: '8f6d95dd147805f989bc24266cf7278431796d531e5880b2b5d78d67d838aac8', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 58195, hash: 'efc19bc9c353796d98b5528c0cf1209fc019039cb056e9b48efb959cf0848883', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'detail-page/index.html': {size: 73174, hash: 'a9ac4cee9eec732958fba660de7c4f790b2575d75b98d741c84cd204e95e7239', text: () => import('./assets-chunks/detail-page_index_html.mjs').then(m => m.default)},
    'add-cars/index.html': {size: 60437, hash: '2924de5ec56f1256b844a69a342e7882d5340d0c9f1ac36a73838060bb717090', text: () => import('./assets-chunks/add-cars_index_html.mjs').then(m => m.default)},
    'notifications/index.html': {size: 56229, hash: '51dbfe364ae45d9b97fcde56d56fbc652f32ac130871ebda48a8fe20d9357b66', text: () => import('./assets-chunks/notifications_index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
