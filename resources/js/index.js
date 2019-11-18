import React from 'react';
import ReactDOM from 'react-dom';
import App from './phoneApp';
import PostsProvider from './posts_context/postsProvider';
import SuccessProvider from './success_context/successProvider';

ReactDOM.render(
    <PostsProvider>
        <SuccessProvider>
            <App />
        </SuccessProvider>
    </PostsProvider>,
    document.getElementById('index'));