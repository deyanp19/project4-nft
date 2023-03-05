import { Stack } from '@mui/material';
import styles from './ActivityList.module.scss';
import ActivityListItem from './ActivityListItem';

export default function ActivityList({items}){
    return (
        <div className={styles["activity-list"]}>
            <Stack spacing={3} >
            {items.map((item)=><Item><ActivityListItem {...item} /> </Item>)}
            </Stack>
        </div>
    );
}