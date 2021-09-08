import {useRouter} from "next/router";
import Navbar from "../../components/navbar";
import Title from "../../components/title";
import Layout from "../../components/layout";

export default function User({ user }){
    // const router = useRouter();
    // console.log('router.isFallback', router.isFallback)
    // if (router.isFallback){
    //     return (
    //         <div>cargando</div>
    //     );
    // }
    return(
        <Layout>
            <Title>User Details</Title>
            <div className='card'>
                <h3>{user.name}</h3>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
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

export async function getStaticPaths() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await res.json();

    const paths = users.map(user => {
        return {
            params: {id: `${user.id}`}
        }
    });

    return{
        paths,
        fallback: true
    }
}

export async function getStaticProps(context) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`)
    const user = await res.json();

    return {
        props: {
            user
        }
    }
}
