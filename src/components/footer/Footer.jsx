import { Button, Container, Grid, Typography } from '@mui/material';
import classNames from 'classnames';
import Logo from '../logo/Logo';
import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <div>
            <Container >
                <Grid 
                container 
                className={classNames(styles.container)} maxWidth="xl"
                direction='row'
                justifyContent='space-between'
                alignItems='center'

                >
                    <Grid item >
                        <Logo type="muted"/>
                    </Grid>
                    <Grid item >
                        <Typography className={styles.rights} variant='p'> Bum All Rights Reserved 2021</Typography>
                    </Grid>
                    <Grid item  >
                        <Button className={classNames(styles.policy)}>Privacy Policy</Button>
                        <Button className={classNames(styles.policy)}>Cookie Policy</Button>
                    </Grid>
                </Grid>

            </Container>
        </div>
    );
}