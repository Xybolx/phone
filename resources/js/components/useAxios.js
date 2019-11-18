import { useContext, useEffect }from 'react';
import axios from 'axios';
import PostsContext from '../posts_context';
import useArray from './useArray';

const useAxios = search => {

    const { posts, setPosts } = useContext(PostsContext);

    const [results, setResults] = useArray([]);

    const getPosts = () => {
        axios.get('/api/posts')
            .then(res => setPosts(res.data))
            .catch(err => console.log(err))
    };

    const deletePost = id => {
        axios.delete('/api/posts/' + id)
            .then(res => setPosts(res.data))
            .catch(err => console.log(err))
    };

    useEffect(() => {
        getPosts();
    }, []);

    useEffect(() => {
        if (search) {
        setResults(posts.filter(post =>
            post.lname.toLowerCase() === search.toLowerCase() ||
            post.fname.toLowerCase() === search.toLowerCase() ||
            post.title.toLowerCase() === search.toLowerCase()))
        }
    }, [search]);

    return [results, setResults, deletePost];
};

export default useAxios;