import { Component, OnInit } from '@angular/core';
import {UserService} from "../../core/service/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-get-id',
  templateUrl: './get-id.component.html',
  styleUrls: ['./get-id.component.scss']
})
export class GetIDComponent implements OnInit {

  formInput: FormGroup

  constructor(private service: UserService, private fb: FormBuilder) {
    this.formInput = fb.group({
      'id': fb.control('', [Validators.required])
    })

  }


  onSubmitId(){
    this.service.getUserById(this.formInput.value).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }


  ngOnInit(): void {
  }


}
