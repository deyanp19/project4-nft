import { Button, Container, Grid, Typography } from '@mui/material';
import classNames from 'classnames';
import styles from './How.module.scss';
import Step from './Step';
import theme from './../../theme';

const propInfo=[{title:'digital currency',description:'You can get ETH, the ditital crrency that fuels transactrios on the Ethereum blockchain, from a digital currency exchange'},{title:'crypto wallet',description:'Acrypto wallet,such as MetaMask, stores your ETH and processes transacrions on the Ethereum lockchain.'},{title:'BUM',description:'Let\'s connect your wallet to BUM,edit your profile, and begin interacting in the space.'}]

export default function How({description="",title="", items=[],link="/about"}) {
    return (
        <div className={classNames(styles.wrapper)}>
            <Container >
                <Grid  container 
                className={classNames(styles.container)} 
                 maxWidth="xl" 
                 spacing={2} 
                 alignItems="center"
                  column={2}
                  rowSpacing={1}
                  wrap='nowrap'
                  >
                    <Grid color='secondary' item xs={6}>
                        <Typography 
                        sx={{ textTransform: 'uppercase' }} 
                        variant='h2' 
                        component='h1'
                        textAlign="center" >how it works</Typography>
                        <Typography >
                            Discover, collect, and sell extraordinary NFT's on the world's first & largest NFT marketplace. There are three things you'll need in place to open your account and start bying or selling NFTs on BUM.
                        </Typography>
                        <Button href={link}  sx={{color:'white'}}  textTransform='capitalize' > Learn more </Button>
                    </Grid>
                    <Grid item xs={6}>
                      { items.map((item,i)=><Step number={i+1} key={title+i} title={item.title} description={item.description}/>) }
                    </Grid>
                </Grid>
            </Container>
        
        </div>
    );
}