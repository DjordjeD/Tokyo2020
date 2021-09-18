import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompetitorService } from '../competitor.service';
import { CountryService } from '../country.service';
import { Competitor, Country, DisciplineType, Format, Sport, Tournaments } from '../models/models';
import { User } from '../models/user';
import { SportService } from '../sport.service';
import { TournamentService } from '../tournament.service';

@Component({
  selector: 'app-national-delegation',
  templateUrl: './national-delegation.component.html',
  styleUrls: ['./national-delegation.component.css']
})
export class NationalDelegationComponent implements OnInit {

  constructor(
    private router: Router,
    private competitorService: CompetitorService,
    private sportService: SportService,
    private countryService: CountryService,
    private tournamentService: TournamentService 

  ) {}

    ngOnInit(): void {

      this.tournamentService.getAllTournaments().subscribe((tournaments: Tournaments[]) => {
        if (tournaments) {
          this.tournaments = tournaments;
        }
      });
      //this.nationalDeleagation= localStorage.getItem('currentUser').to
     
      this.sportService.getAllSports().subscribe((sports: Sport[] ) =>{
        if(sports)
        {this.sports=sports}
      })

    }
  
  disciplineFormControl = new FormControl('',Validators.required);
  individualFormControl = new FormControl('',Validators.required);
  typeFormControl = new FormControl('',Validators.required);
  minimumPlayersForm= new FormControl('',Validators.required);
  maximumPlayersForm= new FormControl('',Validators.required);
  roundsFormControl = new FormControl('');
  teamsGroupFormControl = new FormControl('',Validators.required);
  groupsFormControl = new FormControl('',Validators.required);
  
  name:string
  surname:string
  error:string
  disciplineName: string
  resultFormat:string
  competitors:Array<Competitor>
  nationalDeleagation:User
  sports:Sport[];
  currentTournament: Tournaments
  tournaments: Array<Tournaments>
  format: Format
  disciplines:Array<DisciplineType>


  
 addAthlete(){

   let newCompetitor = new Competitor();

   for (let index = 0; index < this.disciplines.length; index++) {
     
     
   }S
   

    for (let index = 0; index < this.tournaments.length; index++) {
      
      for (let j = 0; j < this.disciplines.length; j++) {
     
        if(this.tournaments[index].disciplineName==this.disciplines[j].disciplineName && this.tournaments[index].started==true)
        {this.error="Discipline" + this.disciplines[j].disciplineName + "cannot be added" }
      }
    
    }

 }

  
  overviewSports() {
    this.router.navigate(['/overviewSports']);
  }

  overviewAthletesBySport() {
    this.router.navigate(['/overviewAthletesBySport']);
  }

  addTeam() {
    this.router.navigate(['/addTeam'])
  }

  home(){
    this.router.navigate([''])
  }
  changePassword(){
    this.router.navigate(['/changePassword'])
  }
}
