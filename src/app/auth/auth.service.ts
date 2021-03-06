import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Injectable()
export class AuthService {
    token: string;

    constructor( private router: Router) {}
    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(
            error => console.log(error)
        );
    }
    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
            response => {
                this.router.navigate(['/recipes']);
                firebase.auth().currentUser.getToken()
                .then(
                    (token: string) => this.token = token
                );
                swal(
                    'Good job!',
                    'You clicked the button!',
                    'success'
                  )
            }
        ).catch(
            error => console.log(error + swal(
                'Oops...',
                'Something went wrong!',
                'error'
              ))
        );
}
    logout() {
        firebase.auth().signOut();
        this.token = null;

    }

    getToken() {
        firebase.auth().currentUser.getToken()
        .then(
            (token: string) => this.token = token
        );
        return this.token;
    }
    isAuthenticated() {
        return this.token != null;
    }
}
