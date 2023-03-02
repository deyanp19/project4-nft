import Avatar from '../avatar/Avatar';
import styles from './ProfileUser.module.scss';

export default function ProfileUser({name, info,avatar,verified,...others}) {
    return (
        <div className={styles["profile-user"]}>
            <Avatar />
            {others.children}
        </div>
    );
}