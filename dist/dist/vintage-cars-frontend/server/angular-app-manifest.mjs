
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
    'index.csr.html': {size: 25150, hash: '7379842b3e5a21652c2e4f46453d7d24cbc43c6e0d6daae67a55961f2479fea8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 21266, hash: 'dd935a9955b83806e84d2c7b007bafa075d9ec056a367371899067bba95c8ece', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 55808, hash: 'b0186864f5ace0cc9eb0f2e1cc7cce27c7377e37a3a2d6d49a2c987f7b956f33', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'Home-page/index.html': {size: 55808, hash: 'b0186864f5ace0cc9eb0f2e1cc7cce27c7377e37a3a2d6d49a2c987f7b956f33', text: () => import('./assets-chunks/Home-page_index_html.mjs').then(m => m.default)},
    'detail-page/index.html': {size: 55808, hash: 'b0186864f5ace0cc9eb0f2e1cc7cce27c7377e37a3a2d6d49a2c987f7b956f33', text: () => import('./assets-chunks/detail-page_index_html.mjs').then(m => m.default)},
    'add-cars/index.html': {size: 55808, hash: 'b0186864f5ace0cc9eb0f2e1cc7cce27c7377e37a3a2d6d49a2c987f7b956f33', text: () => import('./assets-chunks/add-cars_index_html.mjs').then(m => m.default)},
    'booking-managements/index.html': {size: 55808, hash: 'b0186864f5ace0cc9eb0f2e1cc7cce27c7377e37a3a2d6d49a2c987f7b956f33', text: () => import('./assets-chunks/booking-managements_index_html.mjs').then(m => m.default)},
    'user-list/index.html': {size: 55808, hash: 'b0186864f5ace0cc9eb0f2e1cc7cce27c7377e37a3a2d6d49a2c987f7b956f33', text: () => import('./assets-chunks/user-list_index_html.mjs').then(m => m.default)},
    'cars-list/index.html': {size: 55808, hash: 'b0186864f5ace0cc9eb0f2e1cc7cce27c7377e37a3a2d6d49a2c987f7b956f33', text: () => import('./assets-chunks/cars-list_index_html.mjs').then(m => m.default)},
    'add-slider-content/index.html': {size: 55808, hash: 'b0186864f5ace0cc9eb0f2e1cc7cce27c7377e37a3a2d6d49a2c987f7b956f33', text: () => import('./assets-chunks/add-slider-content_index_html.mjs').then(m => m.default)},
    'user-profile/index.html': {size: 55808, hash: 'b0186864f5ace0cc9eb0f2e1cc7cce27c7377e37a3a2d6d49a2c987f7b956f33', text: () => import('./assets-chunks/user-profile_index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
