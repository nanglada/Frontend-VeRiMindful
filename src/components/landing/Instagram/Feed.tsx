import React from 'react'
import { Link } from 'react-router-dom';

interface Props {
    feed: any
}

const Feed = ({ feed }: Props ) => {
    let post = (
        <Link to={feed.permalink}>
        <img 
            width='100%'
            height='auto'
            id={feed.id} 
            src={feed.media_url} 
            alt={feed.caption} 
        />
        </Link>
    );     

    return (
        <React.Fragment>
            {post}
        </React.Fragment>
    );
}

export default Feed;