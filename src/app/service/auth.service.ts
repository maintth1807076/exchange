import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {AngularFirestore} from "@angular/fire/firestore";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL_API_CREATE_USER = 'https://us-central1-afgpaper-4e165.cloudfunctions.net/createUser'

  constructor(private httpCLient: HttpClient, private afs: AngularFirestore) {
  }

  register(object): void {
    this.httpCLient.get(this.URL_API_CREATE_USER, {params: object}).subscribe(data => {
    }, error => {
      console.log(error.error.message);
    });
  }

  login(object): void {
    firebase.auth().signInWithEmailAndPassword(object.email, object.password)
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user;
        // console.log(user);
        // ...
      })
      .catch((error) => {
        console.log(error.message);
      });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.afs.doc('users/' + user.uid).valueChanges().subscribe(data => {
        });
        let obj = {
          uid: user.uid,
          amount: 0.5,
          symbolBalance: 'balanceAfd',
          typeJoint: 'limit',
          type: 'buy',
          price: 0.08682
        };
        this.afs.collection('ordering').doc(user.uid).set(obj).then(() => {
        })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  }
  getUid(): string {
    return firebase.auth().currentUser.uid.toString();
  }
}
