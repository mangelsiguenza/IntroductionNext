import Title from "../../components/title";
import Layout from "../../components/layout";
import React from "react";
import Link from "next/link";

export default function Posts({posts}){
    // const [posts, setPosts] = React.useState([]);
    // React.useEffect(() => {
    //     const fetchPosts = async () => {
    //         const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    //         const  newPost =  await res.json();
    //         setPosts(newPost);
    //     };
    //     fetchPosts();
    // }, [])

    return(
        <Layout>
            <Title> Lista de Post</Title>
            <div className='grid'>
                {
                    posts.map(post => {
                        return (
                            <Link href='/posts/[id]' as={`/posts/${post.id}`} key={ post.title}>
                                <a className='card' id={post.id}>
                                    <h3>{post.title}</h3>
                                    <p>{post.body}</p>
                                </a>
                            </Link>
                        )
                    })
                }
            </div>
            <style jsx>
                {`
                  .grid {
                    display: flex;
                    flex-wrap: wrap;
                    max-width: 800px;
                    margin-top: 2rem;
                  }
                  .card {
                    margin: 1rem;
                    flex-basis: 45%;
                    padding: 1.5rem;
                    color: black;
                    text-decoration: none;
                    border: 2px solid #eaeaea;
                    border-radius: 10px;
                    box-shadow: 7px 7px 15px #eaeaea;
                    transition: color 0.15s ease, border-color 0.15s ease;
                  }
                  .card:hover,
                  .card:focus,
                  .card:active {
                    color: #0070f3;
                    border-color: #0070f3;
                  }
                  .card h3 {
                    margin: 0 0 1rem 0;
                    font-size: 1.5rem;
                  }
                  .card p {
                    margin: 0;
                    font-size: 1.25rem;
                    line-height: 1.5;
                  }
                `}
            </style>
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts =  await res.json();

    return{
        props: {
            posts
        }
    }
}
