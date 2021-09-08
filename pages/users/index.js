import Title from "../../components/title";
import Layout from "../../components/layout";
import Link from "next/link";

export default function Users({ users }){
    return(
        <Layout>
            <Title>Lista de usuarios</Title>
            <div className='grid'>
                {
                    users.map(user => {
                        return(
                            <Link href={'users/[id]'} as={`/users/${user.id}`} key={user.name}>
                                <a className='card' id={user.id}>
                                    <h3>User</h3>
                                    <p>Name: {user.name}</p>
                                    <p>Email: {user.email}</p>
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

export async function getStaticProps () {
    const rest= await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await rest.json();
    return {
        props: {
            users
        }
    }
}
