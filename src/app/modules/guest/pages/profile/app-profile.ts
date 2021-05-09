export interface AppProfile {
  profile: string;
  frameworks: AppFramework[];
  languages: AppLanguage[];
  others: AppOther[];
  tongues: AppTongue[];
  experiences: AppExperience[];
  educations: AppEducation[];
}

export interface AppFramework {
  name: string;
  logo: string;
}

export interface AppLanguage {
  name: string;
  logo: string;
}

export interface AppOther {
  name: string;
  logo: string;
}

export interface AppTongue {
  name: string;
}

export interface AppExperience {
  name: string;
  company: string;
  city: string;
  country: string;
  start: Date;
  end?: Date;
  description: string;
}

export interface AppEducation {
  date: Date;
  name: string;
  mention?: string;
  school: string;
}

export const PROFILE: AppProfile = {
  profile: `
    3 ans d'expérience dans le développement de solutions informatiques, du front-end, au back-end en passant par l'architecture afin de fournir une solution rapide, fiable et durable.
  `,
  frameworks: [
    {
      name: 'Angular',
      logo: './assets/logos/angular.svg'
    },
    {
      name: 'Symfony',
      logo: './assets/logos/symfony.svg'
    },
    {
      name: '.NET Core',
      logo: './assets/logos/netcore.svg'
    },
    {
      name: 'NestJS',
      logo: './assets/logos/nestjs.svg'
    },
    {
      name: 'Xamarin',
      logo: './assets/logos/xamarin.svg'
    },
    {
      name: 'jQuery',
      logo: './assets/logos/jquery.svg'
    },
    {
      name: 'Bootstrap',
      logo: './assets/logos/bootstrap.svg'
    }
  ],
  languages: [
    {
      name: 'TypeScript',
      logo: './assets/logos/typescript.svg'
    },
    {
      name: 'JavaScript',
      logo: './assets/logos/javascript.svg'
    },
    {
      name: 'HTML',
      logo: './assets/logos/html.svg'
    },
    {
      name: 'Sass',
      logo: './assets/logos/sass.svg'
    },
    {
      name: 'CSS',
      logo: './assets/logos/css.svg'
    },
    {
      name: 'PHP',
      logo: './assets/logos/php.svg'
    },
    {
      name: 'C#',
      logo: './assets/logos/csharp.svg'
    },
    {
      name: 'TSQL',
      logo: './assets/logos/tsql.svg'
    },
    {
      name: 'MySQL',
      logo: './assets/logos/mysql.svg'
    },
    {
      name: 'PostgreSQL',
      logo: './assets/logos/postgresql.svg'
    }
  ],
  others: [
    {
      name: 'Firebase',
      logo: './assets/logos/firebase.svg'
    },
    {
      name: 'Azure Devops',
      logo: './assets/logos/azuredevops.svg'
    }
  ],
  tongues: [
    {
      name: 'Français (bilingue ou langue natale)'
    },
    {
      name: 'Anglais (compétence professionnelle complète)'
    },
    {
      name: 'Italien (notions élémentaires)'
    }
  ],
  experiences: [
    {
      name: `INGÉNIEUR D'ÉTUDES ET DE DÉVELOPPEMENT`,
      company: `Ellyos`,
      city: `Witry-Lès-Reims`,
      country: `France`,
      start: new Date(2019, 9),
      description: `
      <ul>
        <li>
          Maintenance évolutive et corrective d'une application de gestion de demandes interopérables le tout sur le fournisseur cloud Azure, utilisant :
          <ul>
            <li>Angular pour la partie web front-end</li>
            <li>Xamarin pour iOS et Android front-end</li>
            <li>ASP .NET pour l'API back-end</li>
            <li>TSQL pour la sauvegarde des données</li>
          </ul>
        </li>
        <li>
          Mise en place d'un environnement de test "preprod" similaire à la production
        </li>
        <li>
          Développement du site vitre responsive de l'application web de gestion de demandes
        </li>
        <li>
          Référent du contrôle qualité de la version web de l'application de gestion de demandes
        </li>
        <li>
          Mise en place d'un processus Git pour la gestion des branches (pull requests, merges)
        </li>
        <li>
          Mise en place d'un CI et CD pour l'application web et l'API
        </li>
      </ul>`
    },
    {
      name: `STAGIAIRE DÉVELOPPEUR`,
      company: `Ellyos`,
      city: `Witry-Lès-Reims`,
      country: `France`,
      start: new Date(2019, 3),
      end: new Date(2019, 8),
      description: `
      <ul>
        <li>
          Maintenance évolutive et corrective d’une API REST ASP.NET Core avec une application Xamarin
        </li>
        <li>
          Initialisation du projet web de gestion de demandes Angular
        </li>
      </ul>`
    },
    {
      name: `STAGIAIRE DÉVELOPPEUR`,
      company: `Reims`,
      city: `Witry-Lès-Reims`,
      country: `France`,
      start: new Date(2018, 4),
      end: new Date(2018, 7),
      description: `
      <ul>
        <li>
          Maintenance évolutive et corrective d'une application de gestion de CE :
          <ul>
            <li>AngularJS pour le front-end</li>
            <li>Symfony 2 pour le back-end</li>
          </ul>
        </li>
      </ul>`
    },
    {
      name: `STAGIAIRE DÉVELOPPEUR`,
      company: `Laon`,
      city: `Internet Boutique`,
      country: `France`,
      start: new Date(2015, 11),
      end: new Date(2016, 0),
      description: `
      <ul>
        <li>
          Maintenance évolutive et corrective de modules Prestashop
        </li>
        <li>
        Mise à jour de Prestashop vers sa dernière version en date fluide pour les clients, sans aucun arrêt des services ou du site
        </li>
      </ul>`
    },
    {
      name: `STAGIAIRE DÉVELOPPEUR`,
      company: `Laon`,
      city: `Internet Boutique`,
      country: `France`,
      start: new Date(2015, 4),
      end: new Date(2015, 5),
      description: `
      <ul>
        <li>
          Maintenance évolutive et corrective de modules Prestashop
        </li>
      </ul>`
    }
  ],
  educations: [
    {
      date: new Date(2019, 0),
      name: `M2 DÉVELOPPEMENT & ADMINISTRATION DE SERVICES`,
      mention: `MENTION BIEN`,
      school: `UNIVERSITÉ REIMS CHAMPAGNE-ARDENNE`
    },
    {
      date: new Date(2017, 0),
      name: `L3 INFORMATIQUE`,
      mention: `MENTION ASSEZ BIEN`,
      school: `UNIVERSITÉ REIMS CHAMPAGNE-ARDENNE`
    },
    {
      date: new Date(2016, 0),
      name: `BTS INFORMATIQUE OPTION SLAM`,
      school: `LYCÉE PAUL CLAUDEL`
    },
    {
      date: new Date(2014, 0),
      name: `BAC S`,
      school: `LYCÉE PAUL CLAUDEL`
    }
  ]
};
