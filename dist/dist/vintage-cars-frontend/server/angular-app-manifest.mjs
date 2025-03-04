
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
    'index.csr.html': {size: 25150, hash: '580b81a915f03610e1cdde5adf48036519af6c83861a89e2f7d645fba0c0369d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 21266, hash: '1c2393d612165c09a52d0cc38d3a0207ff7cdb8de7cf98e401cf9df4c45ad38f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Home-page/index.html': {size: 55808, hash: 'de1ec39ee103ac77f88d1a18dbca77d84b44f725ea63e7a6e93d29e22db06284', text: () => import('./assets-chunks/Home-page_index_html.mjs').then(m => m.default)},
    'index.html': {size: 55808, hash: 'de1ec39ee103ac77f88d1a18dbca77d84b44f725ea63e7a6e93d29e22db06284', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'add-cars/index.html': {size: 55808, hash: 'de1ec39ee103ac77f88d1a18dbca77d84b44f725ea63e7a6e93d29e22db06284', text: () => import('./assets-chunks/add-cars_index_html.mjs').then(m => m.default)},
    'booking-managements/index.html': {size: 55808, hash: 'de1ec39ee103ac77f88d1a18dbca77d84b44f725ea63e7a6e93d29e22db06284', text: () => import('./assets-chunks/booking-managements_index_html.mjs').then(m => m.default)},
    'cars-list/index.html': {size: 55808, hash: 'de1ec39ee103ac77f88d1a18dbca77d84b44f725ea63e7a6e93d29e22db06284', text: () => import('./assets-chunks/cars-list_index_html.mjs').then(m => m.default)},
    'user-list/index.html': {size: 55808, hash: 'de1ec39ee103ac77f88d1a18dbca77d84b44f725ea63e7a6e93d29e22db06284', text: () => import('./assets-chunks/user-list_index_html.mjs').then(m => m.default)},
    'add-slider-content/index.html': {size: 55808, hash: 'de1ec39ee103ac77f88d1a18dbca77d84b44f725ea63e7a6e93d29e22db06284', text: () => import('./assets-chunks/add-slider-content_index_html.mjs').then(m => m.default)},
    'user-profile/index.html': {size: 55808, hash: 'de1ec39ee103ac77f88d1a18dbca77d84b44f725ea63e7a6e93d29e22db06284', text: () => import('./assets-chunks/user-profile_index_html.mjs').then(m => m.default)},
    'detail-page/index.html': {size: 55808, hash: 'de1ec39ee103ac77f88d1a18dbca77d84b44f725ea63e7a6e93d29e22db06284', text: () => import('./assets-chunks/detail-page_index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
