import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompetitorService } from '../competitor.service';
import { CountryService } from '../country.service';
import { Competitor, Country, Format, GroupPhaseEvent, Sport, Team, Tournaments } from '../models/models';
import { User } from '../models/user';
import { SportService } from '../sport.service';
import { TeamService } from '../team.service';
import { TournamentService } from '../tournament.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-insert-results',
  templateUrl: './insert-results.component.html',
  styleUrls: ['./insert-results.component.css']
})
export class InsertResultsComponent implements OnInit {

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

   var tmp= JSON.parse(localStorage.getItem('currentEvent') || '{}');

    if(tmp!=null){
      this.currentEvent=tmp.event;
      this.index=tmp.index;
      this.indexRound=tmp.indexRound;
      this.part=tmp.part;
    }
    

    this.currentTournament= JSON.parse(localStorage.getItem('currentTournament') || '{}');
    console.log(this.currentTournament);
  }

  winnerForm= new FormControl('', Validators.required);
  resultHome:string;
  resultAway:string;
  time:string;
  date:string;
  location:string;
  currentEvent:GroupPhaseEvent

  index:number;
  indexRound:number;
  part:string;

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

  finishEditing(){

    this.currentEvent.resultHome= this.resultHome;
    this.currentEvent.resultAway=this.resultAway;
    this.currentEvent.date=this.date
    this.currentEvent.location=this.location
    //provera
    this.currentEvent.time=this.time;
    if(this.winnerForm.value=="home") this.currentEvent.winner=1;
    else this.currentEvent.winner=2;

    //console.log(this.currentEvent)


    

      if (this.part == 'finals') {
        
        this.currentTournament.teamFinals=this.currentEvent;
      } else if (this.part == 'third') {
        this.currentTournament.teamThird=this.currentEvent;
      } else if (this.part == 'semi'){

        this.currentTournament.semiFinals[this.index]=this.currentEvent;

      } else if (this.part == 'quarter'){
        this.currentTournament.quarterFinals[this.index]=this.currentEvent;

      }else {
        console.log(this.currentTournament.groupRounds)
        this.currentTournament.groupRounds[this.indexRound].teamEvents[this.index] = this.currentEvent;

      }
      
      localStorage.setItem('currentTournament',JSON.stringify(this.currentTournament));

   

  }

  overviewSports() {
    this.router.navigate(['/overviewSports']);
  }

  overviewAthletesBySport() {
    this.router.navigate(['/overviewAthletesBySport']);
  }

  addTeam() {
    this.router.navigate(['/addTeam']);
  }

  home() {
    this.router.navigate(['']);
  }
  back() {
    this.router.navigate(['/editTimetable']);
    //potencijalno brisanje
  }
  changePassword() {
    this.router.navigate(['/changePassword']);
  }

}
