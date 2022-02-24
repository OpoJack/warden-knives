import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <Link className="title" to="/">
      WARDEN KNIVES
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP ALL
      </Link>
      <Link className="option" to="/contact">
        SHOP BY MAKER
      </Link>
      <Link className="option" to="/shop">
        SHOP BY SHAPE
      </Link>
      <Link className="option" to="/shop">
        ACCESSORIES
      </Link>
      {
        //If user is logged in, render the Sign Out button
        //else, render the Sign In button
        currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )
      }
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

//Get currentUser value from the user which is destructured from the state. This is done with {}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
