export const Routes = {
  home: () => '/',
  recentArticles: () => Routes.home(),
  login: () => '/login',
  articles: {
    my: () => '/article/my',
    create: () => '/article/create',
    edit: (id: string = ':id') => `/article/${id}/edit`,
    detail: (id: string = ':id') => `/article/${id}`,
  },
};
