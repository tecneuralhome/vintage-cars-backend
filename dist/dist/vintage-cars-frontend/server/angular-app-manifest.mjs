
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
    'index.csr.html': {size: 25159, hash: 'eab4e6d0ff7a4e3efbe2ae496362f27fb31058f69877e5cbe9a468f1ab5dc366', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 21275, hash: '37394d3b42ed1cda37130772e3a17cfcef5b8396a6c31cb99ab3c15222179318', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 58558, hash: 'b3f9cead5a3fd93c38d587e10d5d57a749a5583d5527d0ba8bade99a64c1add6', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'index.html': {size: 93071, hash: 'a1ccda566d6b1e8db84a5cafae3dce8e9d393e2eedc793d9b01de2630c3630dc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'add-cars/index.html': {size: 61091, hash: '246840c6114bff938672496126812d6efc39ee8cf817694ac9d394c0130bc378', text: () => import('./assets-chunks/add-cars_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 58849, hash: '2e9144ae7afe1f88880733211ce4f6586c7d31d9faa61368fc887e98395984c7', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'notifications/index.html': {size: 56883, hash: 'b38b289e46d6264bdd14237c58084b43a838a4e7ad4d1b2787f601ebdc2e9d20', text: () => import('./assets-chunks/notifications_index_html.mjs').then(m => m.default)},
    'detail-page/index.html': {size: 71191, hash: '41e34104325834ce3aefcb8695bb93236635283296aac2c7fe93b69f1ed28b43', text: () => import('./assets-chunks/detail-page_index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
