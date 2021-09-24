import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompetitorService } from '../competitor.service';
import { CountryService } from '../country.service';
import {
  Competitor,
  Country,
  DisciplineType,
  Format,
  Sport,
  Team,
  Tournaments,
} from '../models/models';
import { User } from '../models/user';
import { SportService } from '../sport.service';
import { TeamService } from '../team.service';
import { TournamentService } from '../tournament.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-accept-users',
  templateUrl: './accept-users.component.html',
  styleUrls: ['./accept-users.component.css']
})
export class AcceptUsersComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService,
  ) {}

  selectedUsersForm = new FormControl('', Validators.required);
  error: string;
  message:string;
  selectedUsers:Array<User> = []
  userRequests:Array<User> = []
  tempArray:Array<User>=[]
  ngOnInit(): void {

      this.userService.getAllUserRequests().subscribe((users:User[])=>{
        if(users){
          this.userRequests=users;
        }
        
      })

  }

  acceptUsers(){
    this.selectedUsers=this.selectedUsersForm.value
  
    for (let i = 0; i < this.selectedUsers.length; i++) {
      
        this.userService.acceptUser(this.selectedUsers[i]).subscribe((msg: any)=>{
          console.log(msg);
        })
    
      
    }

    for (let i = 0; i < this.userRequests.length; i++) {

      let elem= this.selectedUsers.find(element=> element == this.userRequests[i])
        
      if(elem==undefined)
      {
          this.tempArray.push(this.userRequests[i])
      }

    }

  

    this.userRequests=this.tempArray;
    this.tempArray=[];
    this.selectedUsers=[];
    
  }

  overviewSports() {
    this.router.navigate(['/overviewSports']);
  }

  overviewAthletesBySport() {
    this.router.navigate(['/overviewAthletesBySport']);
  }

  home() {
    this.router.navigate(['']);
  }
  back() {
    this.router.navigate(['/organizer']);
  }
  changePassword() {
    this.router.navigate(['/changePassword']);
  }
 
}
