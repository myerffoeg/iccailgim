export interface AppContact {
    type: string;
    icon: string;
    link: string;
    tooltip: string;
}

export const CONTACT_ITEMS: AppContact[] = [
    {
        type: 'fas',
        icon: 'paper-plane',
        link: 'mailto:geoffrey.migliacci@gmail.com',
        tooltip: 'E-mail'
    },
    {
        type: 'fas',
        icon: 'phone-alt',
        link: 'tel:+33618514026',
        tooltip: 'Téléphone'

    },
    {
        type: 'fab',
        icon: 'linkedin-in',
        link: 'https://www.linkedin.com/in/geoffrey-migliacci/',
        tooltip: 'LinkedIn'
    }
];
