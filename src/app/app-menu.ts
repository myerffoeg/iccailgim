export interface AppMenu {
    icon: string;
    link: string;
    tooltip: string;
}

export const MENU_ITEMS: AppMenu[] = [
    {
        icon: 'face',
        link: '/profile',
        tooltip: 'Profil'
    },
    {
        icon: 'work',
        link: '/projects',
        tooltip: 'Projets'
    },
    {
        icon: 'send',
        link: '/contact',
        tooltip: 'Contact'
    }
];
