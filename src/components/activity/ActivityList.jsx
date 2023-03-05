import { Stack } from '@mui/material';
import styles from './ActivityList.module.scss';
import ActivityListItem from './ActivityListItem';
import classNames from 'classnames';

export default function ActivityList({items}){
    console.log(items.map(x=>console.log(x)));
    return (
        <div className={classNames(styles["activity-list"])}>
            <Stack spacing={3} >
            {items.map((item)=> <ActivityListItem {...item} /> )}
            </Stack>
        </div>
    );
}

// =[{ user:{
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