
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
    'index.csr.html': {size: 25150, hash: '05dd982e66ac7d461e7c09c3ab8da9467deba6a1910f2054e9f1f3221e32a955', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 21266, hash: '2457aa626b957e01e44b3652707981243832a6f1998bc5c3624367e29928cfdb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Home-page/index.html': {size: 55809, hash: '77792c0ec8f7557cb27cb7d0e280a06e9ba4d9309acebd49cf015f446b1b4a45', text: () => import('./assets-chunks/Home-page_index_html.mjs').then(m => m.default)},
    'detail-page/index.html': {size: 55809, hash: '77792c0ec8f7557cb27cb7d0e280a06e9ba4d9309acebd49cf015f446b1b4a45', text: () => import('./assets-chunks/detail-page_index_html.mjs').then(m => m.default)},
    'index.html': {size: 55809, hash: '77792c0ec8f7557cb27cb7d0e280a06e9ba4d9309acebd49cf015f446b1b4a45', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'add-cars/index.html': {size: 55809, hash: '77792c0ec8f7557cb27cb7d0e280a06e9ba4d9309acebd49cf015f446b1b4a45', text: () => import('./assets-chunks/add-cars_index_html.mjs').then(m => m.default)},
    'booking-managements/index.html': {size: 55809, hash: '77792c0ec8f7557cb27cb7d0e280a06e9ba4d9309acebd49cf015f446b1b4a45', text: () => import('./assets-chunks/booking-managements_index_html.mjs').then(m => m.default)},
    'cars-list/index.html': {size: 55809, hash: '77792c0ec8f7557cb27cb7d0e280a06e9ba4d9309acebd49cf015f446b1b4a45', text: () => import('./assets-chunks/cars-list_index_html.mjs').then(m => m.default)},
    'user-list/index.html': {size: 55809, hash: '77792c0ec8f7557cb27cb7d0e280a06e9ba4d9309acebd49cf015f446b1b4a45', text: () => import('./assets-chunks/user-list_index_html.mjs').then(m => m.default)},
    'user-profile/index.html': {size: 55809, hash: '77792c0ec8f7557cb27cb7d0e280a06e9ba4d9309acebd49cf015f446b1b4a45', text: () => import('./assets-chunks/user-profile_index_html.mjs').then(m => m.default)},
    'add-slider-content/index.html': {size: 55809, hash: '77792c0ec8f7557cb27cb7d0e280a06e9ba4d9309acebd49cf015f446b1b4a45', text: () => import('./assets-chunks/add-slider-content_index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
