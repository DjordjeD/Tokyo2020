import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompetitorService } from '../competitor.service';
import { CountryService } from '../country.service';
import { Competitor, Country, Format, Sport, Team, Tournaments } from '../models/models';
import { User } from '../models/user';
import { SportService } from '../sport.service';
import { TeamService } from '../team.service';
import { TournamentService } from '../tournament.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-tournament',
  templateUrl: './edit-tournament.component.html',
  styleUrls: ['./edit-tournament.component.css']
})
export class EditTournamentComponent implements OnInit {

  constructor(
    private router: Router,
    private competitorService: CompetitorService,
    private sportService: SportService,
    private countryService: CountryService,
    private tournamentService: TournamentService,
    private userService: UserService, 
    private teamService: TeamService

  ) {}

    ngOnInit(): void {
      //  this.currentTournament.individual=true;
      this.currentTournament = JSON.parse(localStorage.getItem('currentTournament') || '{}')
      console.log(this.currentTournament.sportName)
      console.log(this.currentTournament.individual)
      

      this.tournamentService.getAllTournaments().subscribe((tournaments: Tournaments[]) => {
        if (tournaments) {
          this.tournaments = tournaments;
        }
      });

      this.userService.getDelegates().subscribe((delegates:User[])=>{
        if(delegates) {this.delegates=delegates;}
      })


      this.competitorService.getAllCompetitors().subscribe((competitors: Competitor[]) => {
        if (competitors) {
            for (let index = 0; index <competitors.length; index++) {
              
                for (let j = 0; j < competitors[index].competesIn.length; j++) {
                  
                    if(competitors[index].competesIn[j].disciplineName==this.currentTournament.disciplineName)
                    {
                      this.athletes.push(competitors[index])
                    }
                }
              
            }
        }
      });

      this.teamService.getAllTeams().subscribe((timovi:Team[])=>{
        if(timovi)
        {
          //this.teams=timovi;
            for (let index = 0; index < timovi.length; index++) {

               var split = timovi[index].teamName.split(" of ",2)
              // console.log(this.currentTournament.disciplineName)
              // console.log(split[0])
                if(this.currentTournament.disciplineName==split[0])
                {
                  this.teams.push(timovi[index]);
                }
               // this.teams.push(timovi[index]);
              //  console.log(timovi[index].teamName)
              
            }
        }
      })

      
      

    }
  delegateSelected:boolean=false;
  delegate:User
  delegates:Array<User>
  disciplineFormControl = new FormControl('',Validators.required);
  individualFormControl = new FormControl('',Validators.required);
  typeFormControl = new FormControl('',Validators.required);
  minimumPlayersForm= new FormControl('',Validators.required);
  maximumPlayersForm= new FormControl('',Validators.required);
  roundsFormControl = new FormControl('');
  selectedTeamsForm = new FormControl('',Validators.required);
  selectedAthletesForm= new FormControl('',Validators.required);
  delegateForm = new FormControl('',Validators.required);

  athletes:Array<Competitor>=[]
  teams:Array<Team>=[]
  sports:Array<Sport>
  
  currentTournament: Tournaments
  tournaments: Array<Tournaments>
  
  error:string;
  message:string=""

  allCompetitors:Array<Competitor>
  selectedCompetitors:Array<Competitor>=[]

  allTeams:Array<Team>
  selectedTeams: Array<Team>=[]
  
  selectDelegate()
  {
    this.message =""
    this.error="";
    var cnt=0;
    this.delegate=this.delegateForm.value
    console.log(this.delegate)
    console.log(this.delegateForm.value)
    for (let i = 0; i < this.tournaments.length; i++) {
      if(this.tournaments[i].delegate!=null)
      if(this.delegate.name==this.tournaments[i].delegate.name)
      {
        cnt++;
      }
      
    }
    if(cnt>=3) this.error="Delegate can't be assigned"
    else {this.currentTournament.delegate=this.delegate;
      this.delegateSelected=true;
    }
    this.message="Delegate Selected " + this.delegate.name
    console.log(this.delegate.name)
  }

  login() {
    this.router.navigate(['/login']);
  }

  // addCompetitors() {

  //   for (let index = 0; index < this.athletes.length; index++) {
  //     if(this.athletes[index].checked==true)
  //     this.selectedCompetitors.push(this.athletes[index]);
  //   }

  //   if(this.selectedCompetitors.length!=0)
  //   this.currentTournament.competitors = this.selectedCompetitors;
  // }

  // addTeams() {

  //   for (let index = 0; index < this.teams.length; index++) {
  //     if(this.teams[index].checkedTeam==true)
  //     this.selectedTeams.push(this.teams[index]);
  //   }

  //   if(this.selectedTeams.length!=0)
  //   this.currentTournament.teams = this.selectedTeams
  // }

  saveTournament() {
    console.log(this.currentTournament.individual)
    if(!this.currentTournament.individual) this.currentTournament.teams=this.selectedTeamsForm.value
    else this.currentTournament.competitors= this.selectedAthletesForm.value;
    
    console.log(this.currentTournament.teams[0].teamName)
    console.log(this.currentTournament.delegate.name)
    if(this.error!="Delegate can't be assigned")
    this.tournamentService.updateTournament(this.currentTournament).subscribe((msg:any)=>{
      console.log(msg);
    })
  }


  addSport() {
    this.router.navigate(['/addSport']);
  }


  

  back() {
    this.router.navigate(['/addTournament'])
  }
  
  home(){
    this.router.navigate([''])
  }
}
