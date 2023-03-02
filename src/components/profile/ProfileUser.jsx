import { Typography } from '@mui/material';
import Avatar from '../avatar/Avatar';
import styles from './ProfileUser.module.scss';

export default function ProfileUser({name, info,avatar,verified,...others}) {
    return (
        <div className={styles["profile-user"]}>
            <Avatar url={avatar} verified={verified} />
             <Typography variant="h3">{name}</Typography>
             <Typography variant="body1">{info}</Typography>
        </div>
    );
}