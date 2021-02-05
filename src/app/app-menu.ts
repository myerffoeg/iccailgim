export interface AppMenu {
    type: string;
    icon: string;
    link: string;
    tooltip: string;
}

export const MENU_ITEMS: AppMenu[] = [
    {
        type: 'fas',
        icon: 'home',
        link: '/',
        tooltip: 'Accueil'
    },
    {
        type: 'fas',
        icon: 'user',
        link: '/profile',
        tooltip: 'Profil'
    },
    {
        type: 'fas',
        icon: 'briefcase',
        link: '/projects',
        tooltip: 'Projets'
    },
    {
        type: 'fas',
        icon: 'envelope',
        link: '/contact',
        tooltip: 'Contact'
    }
];
