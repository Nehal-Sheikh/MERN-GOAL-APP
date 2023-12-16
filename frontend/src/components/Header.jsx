import { FaSignInAlt, FaUser } from 'react-icons/fa'                          // , FaSignOutAlt
import { Link } from 'react-router-dom'                                       //if we dont your page to reload then use react router, and if you want to reload your webpage then use href link

function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'>GoalSetter</Link>
            </div>
            <ul>
                <li>
                    <Link to='/login'><FaSignInAlt /> Login</Link>
                </li>
                <li>
                    <Link to='/register'><FaUser /> Register</Link>
                </li>
            </ul>
        </header>
    )
}
export default Header