
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
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/register"
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
    'index.csr.html': {size: 25159, hash: '6bfc80d649e800ab080cf6bae52c2d353c7b92dd8c12a99f837c656e75cb9c92', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 21275, hash: '968912a5877242385c8bb8ba42ab712acd5b20c987c2e75f9d4beb7cb3d7ceaf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 57903, hash: '5476d907c1f381c4147515d227af6839303ac417083bb94bc2d56c8e498a5bde', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'index.html': {size: 95053, hash: '705f9bf683a8d4172d65fa30668a72b7b9a45ca2e40c1f3dcdc2a6cfae1db30d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'add-cars/index.html': {size: 60436, hash: '572b41bb022b31ef90d57ba684226583c1d5e0aae1e35c358ad83517ad634b86', text: () => import('./assets-chunks/add-cars_index_html.mjs').then(m => m.default)},
    'notifications/index.html': {size: 56228, hash: '25a02a38dd083a0d6b9d8218c231c99e95c69dab3da2a9c055e9da540e18f4d8', text: () => import('./assets-chunks/notifications_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 58194, hash: '9cb4bd0127a78bfdaa481f7496e6ceaa636a7de7009e71a5dfb6d29d01219857', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'detail-page/index.html': {size: 73173, hash: '09d4e242aefa048c76403df25e986b478fcc0ac7fc3fc09688eaaf4491616c67', text: () => import('./assets-chunks/detail-page_index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
