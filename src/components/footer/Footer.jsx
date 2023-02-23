import { Container, Grid } from '@mui/material';
import styels from './Footer.module.scss';

export default function Footer() {
    return (
        <div>
            <Container >
                <Grid container lg={3}>
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