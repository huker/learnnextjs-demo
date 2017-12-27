/**
 * Created by huk on 2017/12/27.
 */

import Layout from "../components/MyLayout"

// export default (props) => {
//     return (<Layout>
//         <h1>{props.url.query.title}</h1>
//         <p>this is blog article page</p>
//     </Layout>)
// }

const Content = (props) => (
    <div>
        <h1>{props.url.query.title}</h1>
        <p>This is the blog post content.</p>
    </div>
)

export default (props) => (
    <Layout>
        <Content url={props.url} />
    </Layout>
)