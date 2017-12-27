import Layout from '../components/MyLayout.js'
import Link from 'next/link'

const PostLink = (props) => {
    return (
        <li>
            <Link href={`/post?title=${props.title}`}>
                <a>{props.title}</a>
            </Link>
        </li>
    )

}

export default () => (
    <Layout>
        <h1>my blog</h1>
        <ul>
            <PostLink title="Hello next.js"/>
            <PostLink title="gogogo next"/>
            <PostLink title="I konw it's easy"/>
        </ul>
    </Layout>
)
