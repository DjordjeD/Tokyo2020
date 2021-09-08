import {  OnInit } from '@angular/core';
import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from "../models/user";
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private userService:UserService) { }

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
        localStorage.setItem("user", JSON.stringify(user));
        console.log(user.password)
      }
    })
  }
  
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

}
