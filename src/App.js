import React from 'react';
import './App.css';
import { Route, Routes, Navigate} from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser} from './redux/user/user.actions';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  unsubscribeFromAuth = null;

  //This is a lifecycle method that runs when the component mounts
  //We use it to set up the listener for authentication
  //We also use it to set the current user in the state
  //We also use it to create a user profile document for the user
  //If the user is signed in, we will create a user profile document for them
  //If the user is signed out, we will delete the user profile document for them
  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
        });
      }

      //If user logs out, the user is signed out and currentUser becomes null
      setCurrentUser(userAuth);
    });
  }

  //Clean up the listener when the component unmounts
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header/>
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route path='/shop' element={<ShopPage/>}/>
          <Route exact path='/signin' element={
            this.props.currentUser ?
              <Navigate to="/" /> : <SignInAndSignUpPage/>}
          />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
