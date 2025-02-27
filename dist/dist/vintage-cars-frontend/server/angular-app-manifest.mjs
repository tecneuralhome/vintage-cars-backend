
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
    'index.csr.html': {size: 25150, hash: '8bacb1951c69e7bb0134682259882d77a19d20a14c9f86465ff4013a0e314b09', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 21266, hash: '3cc0875e817dfeedcf893b2e4ef6d17311ccf1fdf6b8d11b40affe17529dc598', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Home-page/index.html': {size: 55808, hash: 'a8c990bdbc4aa6663d3e014c5c32a80bedeefbcec1c97dae122eefa9c3209c9a', text: () => import('./assets-chunks/Home-page_index_html.mjs').then(m => m.default)},
    'index.html': {size: 55808, hash: 'a8c990bdbc4aa6663d3e014c5c32a80bedeefbcec1c97dae122eefa9c3209c9a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'detail-page/index.html': {size: 55808, hash: 'a8c990bdbc4aa6663d3e014c5c32a80bedeefbcec1c97dae122eefa9c3209c9a', text: () => import('./assets-chunks/detail-page_index_html.mjs').then(m => m.default)},
    'add-cars/index.html': {size: 55808, hash: 'a8c990bdbc4aa6663d3e014c5c32a80bedeefbcec1c97dae122eefa9c3209c9a', text: () => import('./assets-chunks/add-cars_index_html.mjs').then(m => m.default)},
    'booking-managements/index.html': {size: 55808, hash: 'a8c990bdbc4aa6663d3e014c5c32a80bedeefbcec1c97dae122eefa9c3209c9a', text: () => import('./assets-chunks/booking-managements_index_html.mjs').then(m => m.default)},
    'user-list/index.html': {size: 55808, hash: 'a8c990bdbc4aa6663d3e014c5c32a80bedeefbcec1c97dae122eefa9c3209c9a', text: () => import('./assets-chunks/user-list_index_html.mjs').then(m => m.default)},
    'cars-list/index.html': {size: 55808, hash: 'a8c990bdbc4aa6663d3e014c5c32a80bedeefbcec1c97dae122eefa9c3209c9a', text: () => import('./assets-chunks/cars-list_index_html.mjs').then(m => m.default)},
    'add-slider-content/index.html': {size: 55808, hash: 'a8c990bdbc4aa6663d3e014c5c32a80bedeefbcec1c97dae122eefa9c3209c9a', text: () => import('./assets-chunks/add-slider-content_index_html.mjs').then(m => m.default)},
    'user-profile/index.html': {size: 55808, hash: 'a8c990bdbc4aa6663d3e014c5c32a80bedeefbcec1c97dae122eefa9c3209c9a', text: () => import('./assets-chunks/user-profile_index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
