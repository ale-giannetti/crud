import { Component, OnInit } from '@angular/core';
import {UserService} from "../../core/service/user.service";
import {UserModel} from "../../shared/model/User-model";

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.scss']
})
export class GetAllComponent implements OnInit {

  users: UserModel[] = [];


  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.getUser().subscribe(data => {
     this.users = data;
    }, error => {
      console.log(error);
    });
  }

}
