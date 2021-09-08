import {  OnInit } from '@angular/core';
import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from "../models/user";
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
    surname: new FormControl(''),
    country: new FormControl(''),
    email: new FormControl(''),
    repeatPassword: new FormControl(''),
    
  });
  floatLabelControl = new FormControl('auto');
  message: string ;
  //this.form.getRawValue().username, this.form.getRawValue().password, this.floatLabelControl.value
  submit() {
    if(this.form.getRawValue().password==this.form.getRawValue().repeatPassword){
    this.userService.register(this.form.getRawValue().username, this.form.getRawValue().password, this.floatLabelControl.value,
    this.form.getRawValue().country,this.form.getRawValue().name, this.form.getRawValue().surname,this.form.getRawValue().email).subscribe((user: User)=>{
      if(user)
      { 
       // localStorage.setItem("user", JSON.stringify(user));
        console.log("dodat user");
      }
    })
   }
   else
   {
     this.error="passwords dont match";
   }
  }
  
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();


}
