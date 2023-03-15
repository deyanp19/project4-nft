import styles from './User.module.scss';
import Avatar from '../avatar/Avatar';
import { Container, Grid } from '@mui/material';
import classNames from 'classnames';


export default function User({name='',info='',avatar ,size=55 ,verified=false}) {
    return (
        <Container className={styles.userWrapper} >
        <div className={styles.user}>
            <Grid container direction="row" wrap='nowrap' spacing={2}>
                <Grid item >
                    <Avatar name={name} info={info} size={size} verified={verified} url={avatar.url} /> 
                </Grid>
                <Grid item>
                    <div className={classNames(styles.info)}>
                        <div className={styles.name}>{name}</div>
                        <div className={styles.info}>{info}</div>
                    </div>
                </Grid>

        
            </Grid>
        </div>

        </Container>
    );
}