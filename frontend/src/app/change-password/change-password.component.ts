import {  OnInit } from '@angular/core';
import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from "../models/user";
import { UserService } from '../user.service';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit( ): void {
  }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    newPassword: new FormControl('')
  });
  floatLabelControl = new FormControl('auto');
  message: string ;
  //this.form.getRawValue().username, this.form.getRawValue().password, this.floatLabelControl.value
  submit() {
    this.userService.getUser(this.form.getRawValue().username, this.form.getRawValue().password).subscribe((user: User)=>{
      if(user)
      { 
        if(this.form.getRawValue().password!=this.form.getRawValue().newPassword)
        { this.error="passwords do not match"}
        else
        {
          this.userService.changePassword(user.username,user.password,this.form.getRawValue().newPassword)
          this.router.navigate(['login']);
        }
        //localStorage.setItem("user", JSON.stringify(user));
       
      }
    })
  }
  
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
}
