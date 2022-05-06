import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../core/service/user.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  formDelete: FormGroup

  constructor(private service: UserService, private fb: FormBuilder) {
    this.formDelete = fb.group({
      'id': fb.control('', [Validators.required])
    })

  }

  ngOnInit(): void {
  }

}
