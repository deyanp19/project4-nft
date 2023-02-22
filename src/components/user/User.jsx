import styles from './User.module.scss';
import Avatar from '../avatar/Avatar';
import { Container } from '@mui/material';


export default function User({name='',info='',avatar='',size=55 ,verified=false}) {
    return (
        <Container className={styles.userWrapper} >
        <div className={styles.user}>
            <div className={styles.name}>{name}</div>
            <div className={styles.info}>{info}</div>

            <Avatar name={name} info={info} size={size} >

            </Avatar>
        

        </div>
        </Container>
    );
}