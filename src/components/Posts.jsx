import React from 'react';
import { connect } from 'react-redux';
import Post from "./Post";

const Posts = ({ syncPosts }) => {

    return syncPosts.length ? (

        syncPosts.map(post => <Post post={post} key={post.id} />)

    ) : <p className='text-center'>There are no posts yet.</p>
};

const mapStateToProps = state => ({
    syncPosts: state.posts.posts
});

export default connect(mapStateToProps, null)(Posts);
