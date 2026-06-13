import {Link} from 'react-router-dom';
function Navbar() {
return(
<div>
<Link to="/">Home</Link> ||
<Link to="/signin">SignIn</Link> ||
<Link to="/signup">SignUp</Link> ||
<Link to="/create-account">createAccount</Link>||
<Link to ="/formsHandleSelectRadioCheckBox">FormsHandleSelectRadioCheckBox</Link>
</div>
);
}
export default Navbar;