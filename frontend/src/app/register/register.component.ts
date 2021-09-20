import {  OnInit } from '@angular/core';
import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CountryService } from '../country.service';
import { Country } from '../models/models';
import { User } from "../models/user";
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService, private router:Router, private countryService:CountryService) { }

  ngOnInit(): void {

    this.countryService.getAllCountries().subscribe((countries: Country[]) => {
      if (countries) {
        this.countries = countries;
        console.log(this.countries[0].countryName);
      }
    });
  }
  countryName:string
  countries:Array<Country>
  form: FormGroup = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required]),
    surname: new FormControl('',[Validators.required]),
   
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
      //console.log(this.countryName)
    this.userService.register(this.form.getRawValue().username, this.form.getRawValue().password, this.floatLabelControl.value,
    this.countryName,this.form.getRawValue().name, this.form.getRawValue().surname,this.form.getRawValue().email,this.isDelegate).subscribe((user: User)=>{
      if(user)
      { 
        localStorage.setItem("currentUser", JSON.stringify(user));
        console.log("dodat user");
        if (user.isDelegate)
        this.router.navigate(['/delegate']);
        if (!user.isDelegate)
        this.router.navigate(['/nationalDelegation']);
      }
    })
   }
   else 
   {
     this.error="Passwords don't match";
   }
  }
  
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();


}
