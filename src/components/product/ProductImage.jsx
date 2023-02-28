import { ImageList, ImageListItem } from '@mui/material';
import classNames from 'classnames';
import styles from './ProductImage.module.scss';


export default function ProductImage({url}) {
    return (
        <div  className="product-image" >
            <ImageList >
                <ImageListItem >
                <img
        src= {url} 
         className="image"
        alt={url}
        loading="lazy"
      />
                </ImageListItem>
            </ImageList>
        </div>
    );
}