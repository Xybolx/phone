import React, { useState, useMemo } from 'react';
import useArray from '../components/useArray';
import PostsContext from './index';

const PostsProvider = ({ children }) => {

    const [posts, setPosts] = useArray([]);

    const postsValue = useMemo(() => ({ posts, setPosts }), [posts, setPosts]);

    return (
        <PostsContext.Provider value={postsValue}>
            {children}
        </PostsContext.Provider>
    );
};

export default PostsProvider;