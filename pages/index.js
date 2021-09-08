import Title from "../components/title";
import Layout from "../components/layout";
export default function Home(){
    return (
        <Layout>
            <Title> Home Page </Title>
            <style>
                {`
                  p{
                    color: darkgray;
                  }
                  p:hover {
                    color: darkred;
                  }
                }
                `}
            </style>
        </Layout>
    )
}
