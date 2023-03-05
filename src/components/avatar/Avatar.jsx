import styles from './Avatar.module.scss';
export default function Avatar({size=90, url='/images/avatar.png',verified=false}) {
    let verifiedBadge = {
        display: "none"
    }

    if(verified) {
        verifiedBadge.display = "block";
    }
    return (
        <div>
            <div className={styles.avatar}   style={{height: size,width: size}}  >
                <img src={url}  alt='avatar' className={styles.image} />
                <img  className={styles.badge} style={ verifiedBadge } src='/images/verified.svg' alt='verified avatar' />
              
            </div>
        </div>
    );
}