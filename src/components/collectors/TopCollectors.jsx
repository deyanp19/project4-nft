import styles from './TopCollectors.module.scss';
import _ from 'lodash';
import { Container, FormControl, Grid, MenuItem, Select, Stack, Typography } from '@mui/material';
import classNames from 'classnames';
import CollectorColumn from './CollectorColumn';

export default function TopCollectors({collectors=[],fooSort}) {
    const {users,filters} =collectors;
    console.log(users,filters);
return (
    <Container className={classNames(styles.container)}  >
    <Grid container sx={{ justifyContent:"space-between"}} wrap='nowrap' >

        <Grid item   >
            <Typography variant='h1' component='h4' >Top Collectors </Typography>
        </Grid>
        <Grid item   >
            <FormControl  sx={{ m: 1}} size="small" >
                <Select 
                value="" //needs to be here because without value throws Error
                color='secondary'
                label='This week'
                className={classNames(styles.selectBox)} 
                onChange={fooSort}
                >
                     {filters && filters.sort.map((filter) => {
              return (
                 
                <MenuItem key={filter.label} value={filter.value}>
                  {filter.label}
                </MenuItem>
                 
              );
            })}   
                
                {/* </TextField> */}
                </Select>
            </FormControl>
        
        </Grid>
    </Grid>
    <Grid container direction="row"   spacing={1} >
       
            { _.chunk(users,3).map((threeMembers,i)=>{

               return <Grid item key={i*3} justifyContent="center"
               alignItems="center"><CollectorColumn items={threeMembers} keys={i*3} /></Grid>
            }) }
          
    </Grid>
</Container>
);

}