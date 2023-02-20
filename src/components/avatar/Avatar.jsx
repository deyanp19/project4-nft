import styles from './Avatar.module.scss';
 

console.log('hello');
export default function Avatar({size=90,url='/images/avatar.png',verified=false}) {
        
       console.log(styles);
    //    avatarSize.height=size;
    //    avatarSize.width=size;
    return (
        <div>
            <div className={styles.avatar}   style={{height: size,width: size}}  >
                <img src='/images/avatar.png'  alt='avatar' className={styles.image} />
                
             
                    <img  className={styles.badge} src='/images/verified.svg' alt='verified avatar' />
              
            </div>
        </div>
    );
}