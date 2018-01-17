import { Component , OnInit } from '@angular/core';
import { } from '@angular/core/src/metadata/lifecycle_hooks';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Recipes';
ngOnInit() {
  firebase.initializeApp({
    apiKey: 'AIzaSyAduG_pOetncvlBN47WxfhViOdYO9pvlg0',
    authDomain: 'my-pro-db.firebaseapp.com',
  });
}
}
