import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserModel} from "../../../shared/model/User-model";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  users: UserModel | undefined;
  userId: number | undefined;


  constructor(private router: ActivatedRoute)
{
  router.params.subscribe(param => this.userId + param['id']);
}

  ngOnInit(): void {
   // this.users = this.users.find(us => us.id === this.userId);
  }
}
