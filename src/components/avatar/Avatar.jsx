import styles from './Avatar.module.scss';


export default function Avatar({size={width:"90",heigth:"90"},url='/images/avatar.png',verified=false}) {
    return (
        <div >
            <div className={styles.avatar} height= {size.heigth}  width= {size.height}>
                <img src='/images/avatar.png'  alt='avatar' className={styles.image} />
            </div>
            <div className={styles.badge}>
                <img src='/image/verified.svg' ald='verified avatar' />
            </div>
        </div>
    );
}