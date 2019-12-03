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
            const lowerCaseSearch = search.toLowerCase();
        setResults(posts.filter(post =>
            post.phone === search ||
            post.lname.toLowerCase() === lowerCaseSearch ||
            post.fname.toLowerCase() === lowerCaseSearch ||
            (post.fname + " " + post.lname).toLowerCase() === lowerCaseSearch ||
            (post.lname + " " + post.fname).toLowerCase() === lowerCaseSearch ||
            post.title.toLowerCase() === lowerCaseSearch))
        }
    }, [search]);

    return [results, setResults, deletePost];
};

export default useAxios;