import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { user } from '../user';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  user;

  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
     this.route.paramMap.subscribe(params => {
    this.user = user[params.get('userId')];
  });
  }

}