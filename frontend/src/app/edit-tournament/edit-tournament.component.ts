import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompetitorService } from '../competitor.service';
import { CountryService } from '../country.service';
import { Competitor, Country, Format, Sport, Team, Tournaments } from '../models/models';
import { User } from '../models/user';
import { SportService } from '../sport.service';
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
    private userService: UserService

  ) {}

    ngOnInit(): void {
      //  this.currentTournament.individual=true;
      //this.currentTournament = localStorage.getItem('tournament')
      this.tournamentService.getAllTournaments().subscribe((tournaments: Tournaments[]) => {
        if (tournaments) {
          this.tournaments = tournaments;
        }
      });

      this.userService.getDelegates().subscribe((delegates:User[])=>{
        if(delegates) {this.delegates=delegates;}
      })



    }
  
  delegate:User
  delegates:Array<User>
  disciplineFormControl = new FormControl('',Validators.required);
  individualFormControl = new FormControl('',Validators.required);
  typeFormControl = new FormControl('',Validators.required);
  minimumPlayersForm= new FormControl('',Validators.required);
  maximumPlayersForm= new FormControl('',Validators.required);
  roundsFormControl = new FormControl('');
  teamsGroupFormControl = new FormControl('',Validators.required);
  groupsFormControl = new FormControl('',Validators.required);

  sports:Sport[];
  currentTournament: Tournaments
  tournaments: Array<Tournaments>
  


  allCompetitors:Array<Competitor>
  selectedCompetitors:Array<Competitor>

  allTeams:Array<Team>
  selectedTeams: Array<Team>
  
  selectDelegate()
  {
    this.currentTournament.delegate=this.delegate;
  }

  login() {
    this.router.navigate(['/login']);
  }

  addCompetitors() {
    if(this.selectedCompetitors.length!=0)
    this.currentTournament.competitors = this.selectedCompetitors;
  }

  addTeams() {
    if(this.selectedTeams.length!=0)
    this.currentTournament.teams = this.selectedTeams
  }

  saveTournament() {
    this.tournamentService.saveTournament(this.currentTournament).subscribe((msg:any)=>{
      console.log(msg);
    })
  }


  addSport() {
    this.router.navigate(['/addSport']);
  }


  register() {
    this.router.navigate(['/register']);
  }

  changePassword() {
    this.router.navigate(['/changePassword']);
  }

  medalsRepresent() {
    this.router.navigate(['medalsRepresent'])
  }

  home(){
    this.router.navigate([''])
  }
}
