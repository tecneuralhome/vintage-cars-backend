
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
    'index.csr.html': {size: 25159, hash: '47bbacdd6e33a5e825e4b4660af9b4920be6f50e5ac5e4b4d369667dbd1e278b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 21275, hash: 'd42ef86902fd915a6b933aa7f91990d115fbfa06921cfd10ea31a3c4fbbd80b8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'add-cars/index.html': {size: 60600, hash: '375a3b553fe50577135668ef742162d854e103c5dc84682cb0217ab19e4edd29', text: () => import('./assets-chunks/add-cars_index_html.mjs').then(m => m.default)},
    'booking-managements/index.html': {size: 54816, hash: 'fbe4cfd66a8df4705e1ae08d8e1d9c74052ebe57e1d150f868552f518fbed3e5', text: () => import('./assets-chunks/booking-managements_index_html.mjs').then(m => m.default)},
    'user-list/index.html': {size: 54847, hash: 'e5c7aaeaa8495ce6bd67555626071786faa7087998518dd715ae2dd865997da4', text: () => import('./assets-chunks/user-list_index_html.mjs').then(m => m.default)},
    'index.html': {size: 93258, hash: '5bd9db86485867bf1f3b09534abeae9b57b36405221952561c1a0c1929ede5a9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'Home-page/index.html': {size: 93258, hash: '5bd9db86485867bf1f3b09534abeae9b57b36405221952561c1a0c1929ede5a9', text: () => import('./assets-chunks/Home-page_index_html.mjs').then(m => m.default)},
    'detail-page/index.html': {size: 67435, hash: '7dd00ffb515b1850d853d2eadba7a68e82a7cd82b88670849f0b2f3751560bc8', text: () => import('./assets-chunks/detail-page_index_html.mjs').then(m => m.default)},
    'cars-list/index.html': {size: 61081, hash: 'b3b2e33d2f2d5278ba8dedc8e65f028c4eaa15d06d66ecd57a2e2ab5af3b6fe2', text: () => import('./assets-chunks/cars-list_index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
