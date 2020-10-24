export const Routes = {
    home: () => '/',
    recentArticles: () => Routes.home(),
    about: () => '/about',
    login: () => '/login',
    articleDetail: (id: string = ':id') => `/article/${id}`,
};
