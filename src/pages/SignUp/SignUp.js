import './SignUp.css'
import {Link} from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
      <Link to="/signup/user">
        User
      </Link>
      <Link to="/signup/ong">
        ONG
      </Link>
    </div>
  )
}

export default SignUp;