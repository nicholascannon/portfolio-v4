/* eslint-disable @next/next/no-img-element */
import Section from '../components/Section';
import styles from '../../styles/home.module.css';

const HomeSection: React.FC = () => {
    return (
        <Section className={styles.container}>
            <div className={styles.titleBox}>
                <h1>Nicholas Cannon</h1>
                <p>Full Stack Software Developer</p>
                <span>Perth, Western Australia</span>
            </div>

            <img className={styles.profilePic} src="/imgs/profilePic.jpg" alt="profile picture" />
        </Section>
    );
};

export default HomeSection;