
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'

import Feed from './Feed'

function InstagramFeed() {
    const [feeds, setFeedsData] = useState([])
    const token = import.meta.env.VITE_TOKEN;
    const imageAmount = 24;
    
    const tokenProp = useRef(token);
    tokenProp.current = token;

    useEffect(() => {
    
        const abortController = new AbortController();

        async function fetchInstagramPost () {
          try{
            axios
                .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink&limit=${imageAmount}&access_token=${token}`)
                .then((resp) => {
                    const imagePosts = resp.data.data.filter((post: { media_type: string; }) => post.media_type !== 'VIDEO');
                    setFeedsData(imagePosts)
                })
          } catch (err) {
              console.log('error', err)
          }
        }
  
        fetchInstagramPost();
  
        return () => {
            // cancel pending fetch request on component unmount
            abortController.abort(); 
        };
    }, [imageAmount])

    return (
        <>
            <div className="grid place-items-center mt-16 mb-6">
                <h1 className="font-logo text-3xl mb-6">¡Encuentrános en Instagram!</h1>
            </div>
            <div className="px-12 pb-4 flex">
                {feeds.slice(0, 5).map((feed, index) => (
                <div key={index} className='px-2'>
                    <Feed feed={feed} />
                </div>
                ))}
            </div>
            <div className="px-12 pb-8 flex">
                {feeds.slice(5, 10).map((feed, index) => (
                <div className='px-2' key={index}>
                    <Feed feed={feed} />
                </div>
                ))}
            </div>
        </>
    );
}

export default InstagramFeed;