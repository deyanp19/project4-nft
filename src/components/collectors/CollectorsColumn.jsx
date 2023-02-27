import Collector from './Collector';
import styles from './Collector.module.scss';

  

export default function CollectorsColumn({itms=[]}) {

const items={
    "items": [
      {
        "name": 'jhon',
        "nftsCount": "Number 3",
        "avatar": "/images/nft.jpg",
        "verified": Boolean,
        "id": 33
      }
    ]
  }
console.log({items});
    return (
        <div>
          {items.items.map(()=> <Collector />) }
        </div>
    );
}