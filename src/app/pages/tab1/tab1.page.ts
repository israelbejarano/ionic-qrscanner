import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  ionViewDidEnter() {
    console.log('viewDidEnter');
  }

  ionViewDidLeave() {
    console.log('viewDidLeave');
  }

  ionViewDidLoad() {
    console.log('viewDidLoad');
  }

  ionViewWillEnter() {
    console.log('viewWillEnter');
  }

  ionViewWillLeave() {
    console.log('viewWillLeave');
  }
}
