
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
    'index.csr.html': {size: 25159, hash: '9159631fd5edf636feb4c58fa1edbe654ff24522bd361c4d367eaccd1ee998fd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 21275, hash: '648e0f9ba2ee02515d5dd470501b881a84c85288f2dfd44a7aacc14f883f298a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 55077, hash: '2e17e4bb2c60241cebd1a26dd6b7149452bf47e578b4552f5ccc5a0f5f6ea1e8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'add-cars/index.html': {size: 55077, hash: '2e17e4bb2c60241cebd1a26dd6b7149452bf47e578b4552f5ccc5a0f5f6ea1e8', text: () => import('./assets-chunks/add-cars_index_html.mjs').then(m => m.default)},
    'Home-page/index.html': {size: 55077, hash: '2e17e4bb2c60241cebd1a26dd6b7149452bf47e578b4552f5ccc5a0f5f6ea1e8', text: () => import('./assets-chunks/Home-page_index_html.mjs').then(m => m.default)},
    'booking-managements/index.html': {size: 55077, hash: '2e17e4bb2c60241cebd1a26dd6b7149452bf47e578b4552f5ccc5a0f5f6ea1e8', text: () => import('./assets-chunks/booking-managements_index_html.mjs').then(m => m.default)},
    'detail-page/index.html': {size: 55077, hash: '2e17e4bb2c60241cebd1a26dd6b7149452bf47e578b4552f5ccc5a0f5f6ea1e8', text: () => import('./assets-chunks/detail-page_index_html.mjs').then(m => m.default)},
    'user-list/index.html': {size: 55077, hash: '2e17e4bb2c60241cebd1a26dd6b7149452bf47e578b4552f5ccc5a0f5f6ea1e8', text: () => import('./assets-chunks/user-list_index_html.mjs').then(m => m.default)},
    'cars-list/index.html': {size: 55077, hash: '2e17e4bb2c60241cebd1a26dd6b7149452bf47e578b4552f5ccc5a0f5f6ea1e8', text: () => import('./assets-chunks/cars-list_index_html.mjs').then(m => m.default)},
    'add-slider-content/index.html': {size: 55077, hash: '2e17e4bb2c60241cebd1a26dd6b7149452bf47e578b4552f5ccc5a0f5f6ea1e8', text: () => import('./assets-chunks/add-slider-content_index_html.mjs').then(m => m.default)},
    'user-profile/index.html': {size: 55077, hash: '2e17e4bb2c60241cebd1a26dd6b7149452bf47e578b4552f5ccc5a0f5f6ea1e8', text: () => import('./assets-chunks/user-profile_index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
