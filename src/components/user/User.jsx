import styles from './User.module.scss';
import Avatar from '../avatar/Avatar';
import { Container } from '@mui/material';
import classNames from 'classnames';


export default function User({name='',info='',avatar='',size=55 ,verified=false}) {
    return (
        <Container className={styles.userWrapper} >
        <div className={styles.user}>
            <Avatar name={name} info={info} size={size} >

            </Avatar>
            <div className={classNames(styles.info)}>
                <div className={styles.name}>{name}</div>
                <div className={styles.info}>{info}</div>
            </div>

        

        </div>
        </Container>
    );
}