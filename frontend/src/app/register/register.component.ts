import {  OnInit } from '@angular/core';
import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required]),
    surname: new FormControl('',[Validators.required]),
    country: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    repeatPassword: new FormControl('',[Validators.required]),
    
  });
  isDelegate:boolean
  floatLabelControl = new FormControl('auto', Validators.required);
  message: string ;
  //this.form.getRawValue().username, this.form.getRawValue().password, this.floatLabelControl.value
  submit() {
    if(this.floatLabelControl.value=="delegate") this.isDelegate=true;
    else this.isDelegate=false;

    if(this.form.getRawValue().password==this.form.getRawValue().repeatPassword){
    this.userService.register(this.form.getRawValue().username, this.form.getRawValue().password, this.floatLabelControl.value,
    this.form.getRawValue().country,this.form.getRawValue().name, this.form.getRawValue().surname,this.form.getRawValue().email,this.isDelegate).subscribe((user: User)=>{
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
