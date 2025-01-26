
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
    "route": "/notifications"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25159, hash: '69585e45dc09538bbe6bf43a8b7771975e019160687d383e246dfa047383b023', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 21275, hash: 'b16139519dfad0e9b13ab72edbb0dfe4a9bb8d2889a2bfb695f96b70b01fe06c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'add-cars/index.html': {size: 60600, hash: '003bd57e77e1e45d0acb2902c3a45ce24495b3882b68c128af30a00dbbe018ad', text: () => import('./assets-chunks/add-cars_index_html.mjs').then(m => m.default)},
    'notifications/index.html': {size: 56930, hash: '8ee916cb9ce216f5630ff507bedb74c41ea877835f2cdfe8643c25aca2f4f2d6', text: () => import('./assets-chunks/notifications_index_html.mjs').then(m => m.default)},
    'Home-page/index.html': {size: 92778, hash: '855562b0843c78cf7418701be592cbb170238b6fc5a723728eda8aba6c8c1961', text: () => import('./assets-chunks/Home-page_index_html.mjs').then(m => m.default)},
    'index.html': {size: 92778, hash: '855562b0843c78cf7418701be592cbb170238b6fc5a723728eda8aba6c8c1961', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'detail-page/index.html': {size: 66923, hash: '9417fe1c1c4ffa7104429f36b6a578d9fb2f7310e9b826cad427881ca9eb451e', text: () => import('./assets-chunks/detail-page_index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
