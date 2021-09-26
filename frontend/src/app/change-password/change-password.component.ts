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
        let regex=new RegExp("^(?=(.*[a-z]){3,})(?=.*[A-Z])(?=(.*[0-9]){2,})(?=(.*[!@#\$%\^&\*\/]){2,})(?=.{8,12})");
        if(this.form.getRawValue().password==this.form.getRawValue().newPassword)
        { this.error="New password cannot be the same as the old password"}
        
        if(!regex.test(this.form.getRawValue().newPassword)){
          this.error="Password must meet password requirements"
        }
    
        else
        {
          

          
          this.userService.changePassword(user.username,user.password,this.form.getRawValue().newPassword).subscribe((user:User) => {
            console.log(user);
          })
          this.router.navigate(['login']);
        }
        //localStorage.setItem("user", JSON.stringify(user));
       
      }
    })
  }
  
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
}
