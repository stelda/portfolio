export type Project = {
    title: string;
    description: string;
    image: string;
    project_link: string;
    code_link: string;
    type: 'personnel' | 'formation' | 'collaboration';
};

export const projects: Project[] = [
    { title: 'Kanjimori (2023)', 
        description: 'A memory game crafted using React, featuring a dynamic array of Kanji cards to test your recall skills.', 
        image: '/portfolio/project1.png', 
        project_link: 'https://kanjimori-stelda.vercel.app/', 
        code_link: 'https://github.com/stelda/kanjimori', 
        type: 'personnel' },
    
    { title: 'Feathers (2022)',
        description: 'A captivating platformer game built with Unity and C#, developed as part of GameDevTV GameJam 2022', 
        image: '/portfolio/project2.png', 
        project_link: 'https://fdarre.itch.io/feathers', 
        code_link: 'https://github.com/fdarre/GameJam_GameDevTv_2022', 
        type: 'collaboration' },
    
    { title: 'Booki (2023)', 
        description: 'A travel booking website designed from scratch using HTML & CSS, created from a mock-up.', 
        image: '/portfolio/project3.png',
        project_link: 'https://stelda.github.io/booki-mockup-integration/', 
        code_link: 'https://github.com/stelda/booki-mockup-integration', 
        type: 'formation' },
    
    { title: 'Oh-my-food (2023)',
        description: 'A crafted mobile version of a foodtech website, enriched with CSS animations.',
        image: '/portfolio/project4.png', 
        project_link: 'https://stelda.github.io/ohmyfood-animations/',
        code_link: 'https://github.com/stelda/ohmyfood-animations',
        type: 'formation' },
    
    { title: 'GameOn (2023)', 
        description: 'A dynamic landing page built from scratch for the gaming company using JavaScript.', 
        image: '/portfolio/project5.png', 
        project_link: 'https://gameon-stelda.vercel.app/', 
        code_link: 'https://github.com/stelda/gameon-landing-page', 
        type: 'formation' },
    
    { title: 'Fisheye (2024)', 
        description: 'An accessible freelance photographer platform built using JavaScript.', 
        image: '/portfolio/project6.png', 
        project_link: 'https://fisheye-stelda.vercel.app/', 
        code_link: 'https://github.com/stelda/fisheye', 
        type: 'formation' },
    
    { title: 'Les-petits-plats (2024)',
        description: 'A sophisticated search algorithm developed for a recipe website, utilizing advanced JavaScript and Tailwind CSS.', 
        image: '/portfolio/project7.png', 
        project_link: 'https://les-petits-plats-stelda.vercel.app/', 
        code_link: 'https://github.com/stelda/les-petits-plats', 
        type: 'formation' },
    
    { title: 'Kasa (2024)',
        description: 'A dynamic real-estate rental application, developed using React and React Router for impeccable front-end implementation.', 
        image: '/portfolio/project8.png',
        project_link: 'https://kasa-stelda.vercel.app/',
        code_link: 'https://github.com/stelda/kasa',
        type: 'formation' },
    
    { title: 'SportSee (2024)', 
        description: 'A consumer dashboard for a sports analytics platform, developed with React, featuring dynamic data visualizations fetched from an API.', 
        image: '/portfolio/project9.png',
        project_link: 'https://sportsee-stelda.vercel.app/', 
        code_link: 'https://github.com/stelda/sportsee', 
        type: 'formation' },
    
    { title: 'ArgentBank (2024)',
        description: 'A project for a bank website that establishes front-end to back-end connectivity through REST API calls and design of new API endpoints using React.',
        image: '/portfolio/project10.png',
        project_link: 'https://argentbank-app.vercel.app/',
        code_link: 'https://github.com/stelda/argentbank.git',
        type: 'formation' },
    
    { title: 'Hrnet (2024)', 
        description: 'A project involving the refactoring of an existing website by converting a jQuery library into a React plugin, with performance monitoring using LightHouse.',
        image: '/portfolio/project11.png',
        project_link: 'https://hrnet-react-stelda.vercel.app/', 
        code_link: 'https://github.com/stelda/hrnet-react', 
        type: 'formation' },
    
    { title: 'Portfino (2025)', 
        description: 'A wealth management application developed using Next.js that includes features for dynamic rebalancing and secure authentication. -currently in development- ',
        image: '/portfolio/project12.png',
        project_link: '#', 
        code_link: '#',
        type: 'personnel' }
    
];