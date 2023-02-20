import styles from './User.module.scss';
import Avatar from '../avatar/avatar';


export default function User({name='',info='',avatar='',size='55',verified=false}) {
    return (
        <div calssName={styles.user}>

        <Avatar >

        </Avatar>
        <div className={styles.name}>{name}</div>
        <div className={styles.info}>{info}</div>

        </div>
    );
}