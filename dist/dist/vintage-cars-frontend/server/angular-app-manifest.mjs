
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
    'index.csr.html': {size: 25150, hash: '895271c369d65b6f2ee4d95b02bfe02cbb9219b30ff94821cf81044bbddfa571', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 21266, hash: 'e630e70c5a61e9fd436450b44757ef777e3d2bf73d451bd539562ec9e1fb3257', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 55808, hash: '11ac0887c6c33dab8c2a74539833202befb96090e027f096b6761717c576562e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'detail-page/index.html': {size: 55808, hash: '11ac0887c6c33dab8c2a74539833202befb96090e027f096b6761717c576562e', text: () => import('./assets-chunks/detail-page_index_html.mjs').then(m => m.default)},
    'Home-page/index.html': {size: 55808, hash: '11ac0887c6c33dab8c2a74539833202befb96090e027f096b6761717c576562e', text: () => import('./assets-chunks/Home-page_index_html.mjs').then(m => m.default)},
    'add-cars/index.html': {size: 55808, hash: '11ac0887c6c33dab8c2a74539833202befb96090e027f096b6761717c576562e', text: () => import('./assets-chunks/add-cars_index_html.mjs').then(m => m.default)},
    'user-list/index.html': {size: 55808, hash: '11ac0887c6c33dab8c2a74539833202befb96090e027f096b6761717c576562e', text: () => import('./assets-chunks/user-list_index_html.mjs').then(m => m.default)},
    'booking-managements/index.html': {size: 55808, hash: '11ac0887c6c33dab8c2a74539833202befb96090e027f096b6761717c576562e', text: () => import('./assets-chunks/booking-managements_index_html.mjs').then(m => m.default)},
    'cars-list/index.html': {size: 55808, hash: '11ac0887c6c33dab8c2a74539833202befb96090e027f096b6761717c576562e', text: () => import('./assets-chunks/cars-list_index_html.mjs').then(m => m.default)},
    'user-profile/index.html': {size: 55808, hash: '11ac0887c6c33dab8c2a74539833202befb96090e027f096b6761717c576562e', text: () => import('./assets-chunks/user-profile_index_html.mjs').then(m => m.default)},
    'add-slider-content/index.html': {size: 55808, hash: '11ac0887c6c33dab8c2a74539833202befb96090e027f096b6761717c576562e', text: () => import('./assets-chunks/add-slider-content_index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
