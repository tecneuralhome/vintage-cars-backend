
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
  },
  {
    "renderMode": 2,
    "route": "/add-slider-content"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25159, hash: '897597b4119e1ea266d019413cc54944806d7a92acfa19bd052b2e7e4259f73c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 21275, hash: 'db54ac722c3f5eca89b84a083f23092d55b378dbc650d4aabd01fbc137cca606', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'add-cars/index.html': {size: 60740, hash: '8b4df0392d3bc7e65a91959e483f303ff85024cbbca0422dad0facde6677976e', text: () => import('./assets-chunks/add-cars_index_html.mjs').then(m => m.default)},
    'booking-managements/index.html': {size: 55550, hash: '723299bf496db71252dd95bcddd27e73beaac4f814422dc2453a89a1ec1554b5', text: () => import('./assets-chunks/booking-managements_index_html.mjs').then(m => m.default)},
    'user-list/index.html': {size: 55674, hash: 'd33a0baa85e6080598e876e3bd77dea98986a361a143f1fe8cec25c8ba160a41', text: () => import('./assets-chunks/user-list_index_html.mjs').then(m => m.default)},
    'Home-page/index.html': {size: 93299, hash: 'd11295ef6a4cce480452857907a7d3a49e10369d1ddc9ecedfcbb7c42bfa827e', text: () => import('./assets-chunks/Home-page_index_html.mjs').then(m => m.default)},
    'index.html': {size: 93299, hash: 'd11295ef6a4cce480452857907a7d3a49e10369d1ddc9ecedfcbb7c42bfa827e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'detail-page/index.html': {size: 71227, hash: '017b3962d24d41365412fa78070e68504675d26922acfa7fb8be9f26bcdf3e71', text: () => import('./assets-chunks/detail-page_index_html.mjs').then(m => m.default)},
    'add-slider-content/index.html': {size: 59369, hash: '98d86439ddd9debb51df5e51cd9ee15ae13d1ef25fc5caaabfd02e7dd0003e04', text: () => import('./assets-chunks/add-slider-content_index_html.mjs').then(m => m.default)},
    'cars-list/index.html': {size: 67701, hash: '2ad0a4d9f54846ad90214d1d96ea95488c621f54cd4eab350fae62c365b36553', text: () => import('./assets-chunks/cars-list_index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
