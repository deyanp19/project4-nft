import { Stack } from '@mui/material';
import styles from './ActivityList.module.scss';
import ActivityListItem from './ActivityListItem';
import classNames from 'classnames';

export default function ActivityList({items=[]}){
    return (
        <div className={classNames(styles["activity-list"])}>
            <Stack spacing={2} alignItems='center' direction="column" >
            {items.map((item)=> (<ActivityListItem key={item.name+item.created_at}
                  user={item.user} 
                  created_at={item.created_at} 
                  nft={item.nft} 
                  type={item.type} />) )}
            </Stack>
        </div>
    );
}


