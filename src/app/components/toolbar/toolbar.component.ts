import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService,
    private router:Router) { }

  ngOnInit() {
  }
logOut(){
  this.authenticationService.logOut()
  .toPromise()
  .then(v=>{
    console.log(v)
    this.router.navigate(["/home"]);
  })
}
}
