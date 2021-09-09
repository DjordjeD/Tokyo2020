import {  OnInit } from '@angular/core';
import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from "../models/user";
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private userService:UserService,private router: Router) { }

  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  floatLabelControl = new FormControl('auto');
  message: string ;
  //this.form.getRawValue().username, this.form.getRawValue().password, this.floatLabelControl.value
  submit() {
    this.userService.login(this.form.getRawValue().username, this.form.getRawValue().password, this.floatLabelControl.value).subscribe((user: User)=>{
      if(user)
      { 
        localStorage.setItem("currentUser", JSON.stringify(user));

        if(user.username="admin"){
        this.router.navigate['organizer'];
        }
        else if(user.isDelegate)
        {
          this.router.navigate(['delegate'])
        }
        else this.router.navigate(['nationalDelegation'])
        console.log(user.password)
      }
      else{
        this.error="Unsuccesfull login";
      }
    })
  }
  
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

}
