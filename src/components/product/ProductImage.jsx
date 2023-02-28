import { ImageList, ImageListItem } from '@mui/material';
import classNames from 'classnames';
import styles from './ProductImage.module.scss';


export default function ProductImage({url}) {
    console.log(url);
    return (
        <div  className={classNames("product-image")} >
            
                <img src={url} className={classNames(styles.image)} />
              
        </div>
    );
}