import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseApp from './firebase';
import { getAuth, signOut } from "firebase/auth";


class AuthService {

  login(providerName) {

    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();

    return firebaseApp.auth().signInWithPopup(authProvider);

  }

  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
    }).catch((error) => {
    });

  }
    
   onAuthChange(onAuthChanged) {
     firebase.auth().onAuthStateChanged(user => {
      onAuthChanged(user);
     });
   }

}

export default AuthService;
