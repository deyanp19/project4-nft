import { Button, Container, Grid, Typography } from '@mui/material';
import classNames from 'classnames';
import Link from '../link/Link';
import Logo from '../logo/Logo';
import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <div>
            <Container >
                <Grid 
                container 
                className={classNames(styles.footerContainer)} maxWidth="xl"
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                columns={{md:12}}
                >
                    <Grid item xs={4} >
                        <Logo type="muted"/>
                    </Grid>
                    <Grid item xs={4} >
                        <Typography className={styles.rights} variant='p'> Bum All Rights Reserved 2021</Typography>
                    </Grid>
                    <Grid item xs={4} >
                        <Link href='/' className={classNames(styles.policy)}>Privacy Policy</Link>
                        <Link href='/' className={classNames(styles.policy)}>Cookie Policy</Link>
                    </Grid>
                </Grid>

            </Container>
        </div>
    );
}