import { Container, Grid } from '@mui/material';
import Logo from '../logo/Logo';
import styels from './Footer.module.scss';

export default function Footer() {
    return (
        <div>
            <Container >
                <Grid container >
                    <Grid item >
                        <Logo type="muted"/>
                    </Grid>
                    <Grid item >
                        
                    </Grid>
                    <Grid item >
                        
                    </Grid>
                </Grid>

            </Container>
        </div>
    );
}