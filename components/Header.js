/**
 * Created by huk on 2017/12/17.
 */
import Link from 'next/link'

const linkStyle = {
    marginRight: 15
}

const Header = () => {
    return <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
    </div>
}

export default Header