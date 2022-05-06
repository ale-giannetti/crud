import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../core/service/user.service";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

 insertForm: FormGroup

  constructor(private fb: FormBuilder, private service: UserService) {

    this.insertForm = fb.group({
      'name': fb.control('', [Validators.required]),
      'surname': fb.control('', [Validators.required]),
    })
  }

  submitForm(){
    this.service.insertUser(this.insertForm.value).subscribe(
         data => {
           console.log(data)
         })
    this.insertForm.reset()
  };

  ngOnInit(): void {}

}
