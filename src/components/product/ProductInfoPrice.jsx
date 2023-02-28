import classNames from 'classnames';
import styles from './ProductInfoPrice.module.scss';

export default function ProductInfoPrice({amount=0,currency=''}){
    return (
        <div className={classNames(styles["product-info-price"])}>
        {amount} {currency}
        </div>
    );
}