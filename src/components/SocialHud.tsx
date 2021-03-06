import styles from '../../styles/hud.module.css';

const SocialHud: React.FC = () => {
    return (
        <div className={styles.hud}>
            <a href="mailto:nicholas.cannon1@gmail.com">
                <img src="/imgs/socials/email.svg" alt="email" />
            </a>
            <a href="https://www.linkedin.com/in/niccannon1" target="_blank" rel="noopener noreferrer">
                <img src="/imgs/socials/linkedin.svg" alt="linkedin" />
            </a>
            <a href="https://github.com/nicholascannon" target="_blank" rel="noopener noreferrer">
                <img src="/imgs/socials/github.svg" alt="github" />
            </a>
        </div>
    );
};

export default SocialHud;
