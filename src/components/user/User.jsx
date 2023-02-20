import styles from './User.module.scss';
import Avatar from '../avatar/avatar';


export default function User({name='pedro',info=' awaiting info',avatar='',size=55 ,verified=false}) {
    return (
        <div className={styles.user}>

        <Avatar name={name} info={info} size={size} >

        </Avatar>
        <div className={styles.name}>{name}</div>
        <div className={styles.info}>{info}</div>

        </div>
    );
}