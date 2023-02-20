import styles from './User.module.scss';
import Avatar from '../avatar/avatar';
import { Container } from '@mui/material';


export default function User({name='pablo',info='some info',avatar='',size=55 ,verified=false}) {
    return (
        <Container className={styles.userWrapper} >


        <Avatar name={name} info={info} size={size} >

        </Avatar>
        <div className={styles.user}>
        <div className={styles.name}>{name}</div>
        <div className={styles.info}>{info}</div>

        </div>
        </Container>
    );
}