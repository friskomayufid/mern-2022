import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import Link from 'next/link'

function Header() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <Link href="/">
            <a>GoalSetter</a>
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/login">
              <a>
                <FaSignInAlt /> Login
              </a>
            </Link>
          </li>
          <li>
            <Link href="/register">
              <a>
                <FaUser /> Register
              </a>
            </Link>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Header
