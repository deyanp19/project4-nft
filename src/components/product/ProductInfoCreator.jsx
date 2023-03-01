import { Typography } from '@mui/material';
import classNames from 'classnames';
import User from '../user/User';
import styles from './ProductInfoCreator.module.scss';


export default function ProductInfoCreator({name='tipalopa',avatar='',verified=false}) {
    return (

        <div className={classNames(styles["product-info-creator"])} >
        <Typography className={classNames(styles.title)} variant="overline" display="block" >Creator</Typography>
        <User name={name} avatar={avatar} verified={verified} />
    </div>
        );
}