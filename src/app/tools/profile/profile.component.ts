import { Component, Input, OnInit } from '@angular/core';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input() show: boolean |undefined |null;

  firestore: FirebaseTSFirestore;
  auth: FirebaseTSAuth;

  constructor() {
    this.firestore = new FirebaseTSFirestore();
    this.auth = new FirebaseTSAuth();
  }

  ngOnInit(): void {}

  onContinueClick(
    nameInput: HTMLInputElement,
    descriptionInput: HTMLTextAreaElement
  ) {
    let name = nameInput.value;
    let description = descriptionInput.value;
    this.firestore.create({
      path: ["User1",this.auth.getAuth().currentUser.uid],
      data: {
        publicName: name,
        description: description,
      },
      onComplete: (docId) => {
        alert('Profile Created');
        (nameInput.value = ''); (descriptionInput.value = '');
      },
      onFail: (err) => {},
    });
  }
}
