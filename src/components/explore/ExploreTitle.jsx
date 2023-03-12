import { Typography } from '@mui/material';
import classNames from 'classnames'
import styles from './ExploreTitle.module.scss';

export default function ExploreTitle({text}){
    return (
        <div className={styles["explore-title"]}>
            <Typography variant='h1'>{text}</Typography>
        </div>
    );
}