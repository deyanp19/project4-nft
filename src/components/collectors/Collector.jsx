import styles from './Collector.module.scss';
import User from '../user/User';

export default function Collector({name,avatar,verified=true,type='darker',nftsCount}) {
    return (
        <div>
            <User name={name} info={nftsCount} verified={verified} type={type} />
        </div>
    );
}