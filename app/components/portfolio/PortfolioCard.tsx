import styles from '../../styles/Portfolio.module.css';

type PortfolioCardProps = {
    title: string;
    description: string;
    image: string;
    project_link: string;
    code_link: string;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, description, image, project_link, code_link }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={project_link}>View project</a>
            <a href={code_link}>View code</a>
        </div>
    );
};

export default PortfolioCard;
