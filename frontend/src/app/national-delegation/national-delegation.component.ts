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
  Tournaments,
} from '../models/models';
import { User } from '../models/user';
import { SportService } from '../sport.service';
import { TournamentService } from '../tournament.service';

@Component({
  selector: 'app-national-delegation',
  templateUrl: './national-delegation.component.html',
  styleUrls: ['./national-delegation.component.css'],
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
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    console.log(this.currentUser.nationality)
    this.tournamentService
      .getAllTournaments()
      .subscribe((tournaments: Tournaments[]) => {
        if (tournaments) {
          this.tournaments = tournaments;
        }
      });
    //this.nationalDeleagation= localStorage.getItem('currentUser').to

    this.sportService.getAllSports().subscribe((sports: Sport[]) => {
      if (sports) {
        this.sports = sports;
      }
    });

    this.competitorService
      .getAllCompetitors()
      .subscribe((competitors: Competitor[]) => {
        if (competitors) {
          this.competitors = competitors;
         
        }
      });

      
  }

  disciplineFormControl = new FormControl('', Validators.required);
  individualFormControl = new FormControl('', Validators.required);
  typeFormControl = new FormControl('', Validators.required);
  minimumPlayersForm = new FormControl('', Validators.required);
  maximumPlayersForm = new FormControl('', Validators.required);
  roundsFormControl = new FormControl('');
  teamsGroupFormControl = new FormControl('', Validators.required);
  groupsFormControl = new FormControl('', Validators.required);

  currentUser: User;
  name: string;
  surname: string;
  error: string;
  disciplineName: string;
  resultFormat: string;
  competitors: Array<Competitor>;

  sports: Sport[];
  currentTournament: Tournaments;
  tournaments: Array<Tournaments>;
  format: Format;
  disciplines: Array<DisciplineType>;
  newCompetitor: Competitor = new Competitor()
  addAthlete() {
   

    let add = true;
    this.disciplines=this.disciplineFormControl.value;
    for (let index = 0; index < this.tournaments.length; index++) {
      for (let j = 0; j < this.disciplines.length; j++) {
        if (
          this.tournaments[index].disciplineName ==
          this.disciplines[j].disciplineName
        ) {
          if (this.tournaments[index].started == true) {
            this.error =
              'Discipline' +
              this.disciplines[j].disciplineName +
              'cannot be added';
            add = false;
          }
        }
      }
    }

    if (add == true) {
      this.countryService
        .getAllCountries()
        .subscribe((countries: Country[]) => {
          if (countries) {
            for (let i = 0; i < countries.length; i++) {
              if (this.currentUser.nationality == countries[i].countryName) {
                this.newCompetitor.country = countries[i];
                //console.log(countries[i])
              }
            }
            this.newCompetitor.name = this.name;
            this.newCompetitor.surname = this.surname;
            this.newCompetitor.sex = this.typeFormControl.value;
            this.newCompetitor.competesIn=[]
            var data= this.disciplineFormControl.value
            for (let i = 0; i < data.length; i++) {
            
              this.newCompetitor.competesIn.push(data[i].discipline)
            }
            this.newCompetitor.medalWinner = false;
            console.log(this.newCompetitor);
       
            this.competitorService.addCompetitor(this.newCompetitor).subscribe((msg:any)=>{
              console.log("ok");
              this.router.routeReuseStrategy.shouldReuseRoute = () => false;
              this.router.onSameUrlNavigation = 'reload';
              this.router.navigate(['/nationalDelegation']);
            })
          
          
          
          }
        });
     
    }
    
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
    this.router.navigate(['/login']);
  }
  changePassword() {
    this.router.navigate(['/changePassword']);
  }
}
