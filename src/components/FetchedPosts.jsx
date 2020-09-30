import React, {useEffect} from 'react';
import Post from "./Post";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../redux/actions";
import Loader from "./Loader";

const FetchedPosts = () => {

    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.fetchedPosts);
    const isFetching = useSelector(state => state.app.loading);

    if (isFetching) {
        return <Loader/>;
    }

    return posts.length ? (
        posts.map(post => <Post post={post} key={post.id} />)

    ) : <button
        className='btn btn-primary'
        onClick={() => dispatch(fetchPosts())}
        > Load </button>
};

export default FetchedPosts;
