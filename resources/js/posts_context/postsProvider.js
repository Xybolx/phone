import React, { useState, useMemo } from 'react';
import PostsContext from './index';

const PostsProvider = ({ children }) => {

    const [posts, setPosts] = useState([]);

    const postsValue = useMemo(() => ({ posts, setPosts }), [posts, setPosts]);

    return (
        <PostsContext.Provider value={postsValue}>
            {children}
        </PostsContext.Provider>
    );
};

export default PostsProvider;