import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  //This is a lifecycle method that runs when the component mounts
  //We use it to set up the listener for authentication
  //We also use it to set the current user in the state
  //We also use it to create a user profile document for the user
  //If the user is signed in, we will create a user profile document for them
  //If the user is signed out, we will delete the user profile document for them
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state)
        });
      }
      //If user logs out, the user is signed out and currentUser becomes null
      this.setState({ currentUser: userAuth });
    });
  }

  //Clean up the listener when the component unmounts
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/shop/' element={<ShopPage/>}/>
          <Route path='/signin' element={<SignInAndSignUpPage/>}/>
        </Routes>
      </div>
    );
  }
}

export default App;
