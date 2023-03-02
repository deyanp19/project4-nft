import styles from './ProfileHero.module.scss';

export default function ProfileHero({image='/images/profilePic.jpg'}) {
    return (
        <div className={styles["profile-hero"]}>
            <img src={image} alt="picture of hero" className={styles.image}></img>

        </div>
    );
}