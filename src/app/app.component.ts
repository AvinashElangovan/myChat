import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthenticatorComponent } from './tools/authenticator/authenticator.component';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { Router} from '@angular/router';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'myChat';
  auth = new FirebaseTSAuth();
  // isLoggedIn = false;

  constructor(private loginSheet: MatBottomSheet, private router: Router) {
    this.auth.listenToSignInStateChanges((user) => {
      this.auth.checkSignInState({
        whenSignedIn: (user) => {
          // alert('Logged In');
          // this.isLoggedIn = true;
        },
        whenSignedOut: (user) => {
          // alert("logged out")
        },
        whenSignedInAndEmailNotVerified: (user) => {
          this.router.navigate(["emailVerification"]);
        },
        whenSignedInAndEmailVerified: (user) => {
          
        },
        whenChanged: user =>{

        }
      });
    }); 
    {
    }
    
  }

  getUserProfile(){
  
  }

  loggedIn(){
    return this.auth.isSignedIn();   
  }

  onLoginClick(){
    this.loginSheet.open(AuthenticatorComponent)
  }

  onLogoutClick(){
    this.auth.signOut();
  }
}

