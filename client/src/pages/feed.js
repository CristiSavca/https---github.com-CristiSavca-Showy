import Axios from 'axios';
import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';

import FeedPosts from "../components/FeedComponents/FeedPosts";

const Feed = ({currentUser}) => {
    const [postsData, setPostsData] = useState([]);

    useEffect(() => {
        async function getPostsData() {
            await Axios.get("http://localhost:5000/getPosts")
            .then((response) => {
                setPostsData(response.data);
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
            });
        }
        
        getPostsData();
    }, []);

    return (
        <div>
            <h1>
                Welcome to the feed!
            </h1>
            {currentUser && <Link to={`/posts/create-post`}><button>Create post</button></Link>}
            {postsData && <FeedPosts currentUser={currentUser} postsData={postsData} />}
        </div>
    );
};
 
export default Feed;