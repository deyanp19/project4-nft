import { ImageList, ImageListItem } from '@mui/material';
import classNames from 'classnames';
import styles from './ProductImage.module.scss';


export default function ProductImage({url}) {
    return (
        <div  className={classNames(styles["product-image"])} >
            
                <img src={url} className={classNames(styles.image)} />
              
        </div>
    );
}