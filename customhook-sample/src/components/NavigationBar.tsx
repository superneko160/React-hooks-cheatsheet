import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/post'>Post</Link>
        </li>
        <li>
          <Link to='/user'>User</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationBar
