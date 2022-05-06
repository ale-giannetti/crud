import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  getId: string = 'Get ID';
  getAll: string = 'Get All';
  put: string = 'Put';
  post: string = 'Post';
  delete: string = 'Delete';


  goToPost(route: string) {
    this.router.navigateByUrl('post')
  }

  goToGetAll(route: string) {
    this.router.navigateByUrl('getAll')
  }
  goToGetId(route: string) {
    this.router.navigateByUrl('getId')
  }

  goToDelete(route: string) {
    this.router.navigateByUrl('delete')
  }


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
