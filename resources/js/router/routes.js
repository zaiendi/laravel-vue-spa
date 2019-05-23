function page (path) {
  return () => import(/* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
}

export default [
  { path: '/', name: 'welcome', component: page('welcome.vue') },

  { path: '/login', name: 'login', component: page('auth/login.vue') },
  { path: '/register', name: 'register', component: page('auth/register.vue') },
  { path: '/password/reset', name: 'password.request', component: page('auth/password/email.vue') },
  { path: '/password/reset/:token', name: 'password.reset', component: page('auth/password/reset.vue') },
  { path: '/email/verify/:id', name: 'verification.verify', component: page('auth/verification/verify.vue') },
  { path: '/email/resend', name: 'verification.resend', component: page('auth/verification/resend.vue') },

  { path: '/home', name: 'home', component: page('home.vue'), meta: { breadcrumb: 'Home', 'title': 'Beranda' } },
  { path: '/settings',
    component: page('settings/index.vue'),
    meta: { breadcrumb: 'Settings', 'title': 'Pengaturan' },
    children: [
      { path: '', redirect: { name: 'settings.profile' } },
      { path: 'profile', name: 'settings.profile', component: page('settings/profile.vue'), meta: { breadcrumb: 'Profile', 'title': 'Profil' } },
      { path: 'password', name: 'settings.password', component: page('settings/password.vue'), meta: { breadcrumb: 'Password', 'title': 'Kata Sandi' } }
    ] },

  { path: '*', component: page('errors/404.vue') }
]
