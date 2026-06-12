import {Link} from 'react-router-dom';
function Navbar() {
return(
<div>
<Link to="/">Home</Link>
<Link to="/signin">SignIn</Link>
<Link to="/signup">SignUp</Link>
</div>
);
}
export default Navbar;