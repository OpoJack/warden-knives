import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

import {
  HeaderContainer,
  HeaderTitle,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <HeaderTitle to="/">WARDEN KNIVES</HeaderTitle>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP ALL</OptionLink>
      <OptionLink to="/contact">SHOP BY MAKER</OptionLink>
      <OptionLink to="/shop">SHOP BY SHAPE</OptionLink>
      <OptionLink to="/shop">ACCESSORIES</OptionLink>
      {
        //If user is logged in, render the Sign Out button
        //else, render the Sign In button
        currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )
      }
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

//Get currentUser value from the user which is destructured from the state. This is done with {}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
