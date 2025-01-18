import PortfolioCard from './PortfolioCard';
import styles from '../../styles/Portfolio.module.css';


type Project = {
    title: string;
    description: string;
    image: string;
    project_link: string;
    code_link: string;
};

const Portfolio: React.FC = () => {
    const projects: Project[] = [
        { title: 'Kanjimori (2023)', description: 'Description 1', image: '/portfolio/project1.png', project_link: 'https://kanjimori-stelda.vercel.app/', code_link: 'https://github.com/stelda/kanjimori' },
        { title: 'Feathers (2022)', description: 'Description 2', image: '/portfolio/project2.png', project_link: 'https://fdarre.itch.io/feathers', code_link: 'https://github.com/fdarre/GameJam_GameDevTv_2022' },
        { title: 'Booki (2023)', description: 'Description 3', image: '/portfolio/project3.png', project_link: 'https://stelda.github.io/booki-mockup-integration/', code_link: 'https://github.com/stelda/booki-mockup-integration' },
        { title: 'Oh-my-food (2023)', description: 'Description 4', image: '/portfolio/project4.png', project_link: 'https://stelda.github.io/ohmyfood-animations/', code_link: 'https://github.com/stelda/ohmyfood-animations' },
        { title: 'GameOn (2023)', description: 'Description 5', image: '/portfolio/project5.png', project_link: 'https://gameon-stelda.vercel.app/', code_link: 'https://github.com/stelda/gameon-landing-page' },
        { title: 'Fisheye (2024)', description: 'Description 6', image: '/portfolio/project6.png', project_link: 'https://fisheye-stelda.vercel.app/', code_link: 'https://github.com/stelda/fisheye' },
        { title: 'Les-petits-plats (2024)', description: 'Description 7', image: '/portfolio/project7.png', project_link: 'https://les-petits-plats-stelda.vercel.app/', code_link: 'https://github.com/stelda/les-petits-plats' },
        { title: 'Kasa (2024)', description: 'Description 8', image: '/portfolio/project8.png', project_link: 'https://kasa-stelda.vercel.app/', code_link: 'https://github.com/stelda/kasa' },
        { title: 'SportSee (2024)', description: 'Description 9', image: '/portfolio/project9.png', project_link: 'https://sportsee-stelda.vercel.app/', code_link: 'https://github.com/stelda/sportsee' },
        { title: 'ArgentBank (2024)', description: 'Description 10', image: '/portfolio/project10.png', project_link: 'https://argentbank-app.vercel.app/', code_link: 'https://github.com/stelda/argentbank.git' },
        { title: 'Hrnet (2024)', description: 'Description 11', image: '/portfolio/project11.png', project_link: 'https://hrnet-react-stelda.vercel.app/', code_link: 'https://github.com/stelda/hrnet-react' },
        { title: 'Portfino (2025)', description: 'Description 12', image: '/portfolio/project12.png', project_link: '#', code_link: '#' },
        

    ];

    return (
        <>
            <section id="portfolio" className={styles.portfolio}>
                <div className="section-title">
                    <h2>Portfolio</h2>
                </div>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <PortfolioCard key={index} {...project} />
                    ))}
                </div>
            </section>
        </>    
    );
};

export default Portfolio;
