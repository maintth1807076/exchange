import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL_API_CREATE_USER = 'https://us-central1-afgpaper-4e165.cloudfunctions.net/createUser'

  constructor(private httpCLient: HttpClient, private afs: AngularFirestore, private router: Router) {
  }

  register(object): void {
    this.httpCLient.get(this.URL_API_CREATE_USER, {params: object}).subscribe(data => {
      this.router.navigate(['login']);
    }, error => {
      console.log(error.error.message);
    });
  }

  login(object): void {
    firebase.auth().signInWithEmailAndPassword(object.email, object.password)
      .then((userCredential) => {
        this.router.navigate(['home']);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  logout(): void {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });

  }

  getUid(): string {
    // console.log(firebase.auth().currentUser.uid);
    // return firebase.auth().currentUser.uid.toString();
    let user = firebase.auth().currentUser;
    if (user != null) {
      return user.uid;
    }
    return '';
  }
}
