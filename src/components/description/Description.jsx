import { Typography } from '@mui/material';
import styles from './Description.module.scss';

export default function Description({text,image}) {
    return (
        <div className={styles.description}>
            <Typography variant="body1" className={styles.text}>{text}</Typography>
            <img className={styles.image} src={image}/>
        </div>
    );
}