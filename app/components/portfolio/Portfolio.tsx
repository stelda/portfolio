import PortfolioCard from './PortfolioCard';
import styles from '../../styles/Portfolio.module.css';
import { projects } from '../../data/projects';


const Portfolio: React.FC = () => {
    

    return (
        <>
            <>
                <section id="portfolio" className={styles.portfolio}>
                    <div className="section-title">
                        <h2>My Portfolio</h2>
                    </div>

                    <div className="section-title">
                        <h3>Personal projects</h3>
                    </div>
                    <div className={styles.grid}>
                        {projects.filter(project => project.type === 'personnel').map((project, index) => (
                            <PortfolioCard key={index} {...project} />
                        ))}
                    </div>

                    <div className="section-title">
                        <h3>Educational projects</h3>
                    </div>
                    <div className={styles.grid}>
                        {projects.filter(project => project.type === 'formation').map((project, index) => (
                            <PortfolioCard key={index} {...project} />
                        ))}
                    </div>

                    <div className="section-title">
                        <h3>Collaborations</h3>
                    </div>
                    <div className={styles.grid}>
                        {projects.filter(project => project.type === 'collaboration').map((project, index) => (
                            <PortfolioCard key={index} {...project} />
                        ))}
                    </div>

                </section>
            </>
        </>    
    );
};

export default Portfolio;
