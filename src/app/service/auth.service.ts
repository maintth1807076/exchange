import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL_API_CREATE_USER = 'https://us-central1-afgpaper-4e165.cloudfunctions.net/createUser'

  constructor(private httpCLient: HttpClient) {
  }

  register(object): void {
    this.httpCLient.get(this.URL_API_CREATE_USER, {params: object}).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error.error.message);
    });
  }

  login(object): void {
    firebase.auth().signInWithEmailAndPassword(object.email, object.password)
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
}
