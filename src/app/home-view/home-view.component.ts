import { Component, OnInit } from '@angular/core';
import { user } from '../user';
@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent{
  user=user;
  constructor() { }

  ngOnInit() {
  }
  liked(){
    window.alert('you have liked');
  }
  disliked(){
    window.alert("Next date on the go");
  }

}