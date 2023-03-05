import { Stack } from '@mui/material';
import styles from './ActivityList.module.scss';
import ActivityListItem from './ActivityListItem';
import classNames from 'classnames';

export default function ActivityList({items=[]}){
    return (
        <div className={styles["activity-list"]}>
            <Stack spacing={2} alignItems='center' direction="column" >
            {items.map((item)=> <ActivityListItem key={item.name+item.created_at} {...item} /> )}
            </Stack>
        </div>
    );
}



// [{ user:{
//     "avatar": {
//         "url": '/images/avatar.png'
//      },
//      "verified": false,
//      "name":'Cupcat nft'
  
//  },
//  created_at:"+02023065",
//  nft:{
//   "name": 'dog bone',
//   "owner": {
//      "username": "antonio banderas",
//       "avatar": {
//          "url": '/images/avatar.png'
//       },
//      "verified": false
//   }
//  },
//  type : "like",
//  },{ user:{
//   "avatar": {
//      "url": '/images/profilePic.jpg'
//   },
//   "verified": false,
//   "name":'Cupcat nft'
 
//  },
//  created_at:"+02023065",
//  nft:{
//  "name": 'dog bone',
//  "owner": {
//   "username": "bunga lunga",
//    "avatar": {
//       "url": '/images/ntf.png'
//    },
//   "verified": false
//  }
//  },
//  type : "like",
//  }]