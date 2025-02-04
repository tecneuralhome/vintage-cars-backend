
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
    "route": "/user-profile"
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
  },
  {
    "renderMode": 2,
    "route": "/add-slider-content"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25150, hash: '960494ce9168f2246b8ccc91dc481342255c0c7edd85cf2633dffd6004856c6d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 21266, hash: 'e045bf93333b27e8693c021b0d21dceeff64603c1e6b1c8da7e6715ee9480954', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 55809, hash: '075410c6f97a8aaf0dad173c7e696f0a482978af4c744fd132fd73456a5f5d66', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'Home-page/index.html': {size: 55809, hash: '075410c6f97a8aaf0dad173c7e696f0a482978af4c744fd132fd73456a5f5d66', text: () => import('./assets-chunks/Home-page_index_html.mjs').then(m => m.default)},
    'add-cars/index.html': {size: 55809, hash: '075410c6f97a8aaf0dad173c7e696f0a482978af4c744fd132fd73456a5f5d66', text: () => import('./assets-chunks/add-cars_index_html.mjs').then(m => m.default)},
    'detail-page/index.html': {size: 55809, hash: '075410c6f97a8aaf0dad173c7e696f0a482978af4c744fd132fd73456a5f5d66', text: () => import('./assets-chunks/detail-page_index_html.mjs').then(m => m.default)},
    'booking-managements/index.html': {size: 55809, hash: '075410c6f97a8aaf0dad173c7e696f0a482978af4c744fd132fd73456a5f5d66', text: () => import('./assets-chunks/booking-managements_index_html.mjs').then(m => m.default)},
    'add-slider-content/index.html': {size: 55809, hash: '075410c6f97a8aaf0dad173c7e696f0a482978af4c744fd132fd73456a5f5d66', text: () => import('./assets-chunks/add-slider-content_index_html.mjs').then(m => m.default)},
    'user-list/index.html': {size: 55809, hash: '075410c6f97a8aaf0dad173c7e696f0a482978af4c744fd132fd73456a5f5d66', text: () => import('./assets-chunks/user-list_index_html.mjs').then(m => m.default)},
    'cars-list/index.html': {size: 55809, hash: '075410c6f97a8aaf0dad173c7e696f0a482978af4c744fd132fd73456a5f5d66', text: () => import('./assets-chunks/cars-list_index_html.mjs').then(m => m.default)},
    'user-profile/index.html': {size: 55809, hash: '075410c6f97a8aaf0dad173c7e696f0a482978af4c744fd132fd73456a5f5d66', text: () => import('./assets-chunks/user-profile_index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
