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


@Component({
  selector: 'app-overview-athletes-by-sport',
  templateUrl: './overview-athletes-by-sport.component.html',
  styleUrls: ['./overview-athletes-by-sport.component.css']
})
export class OverviewAthletesBySportComponent implements OnInit {

  constructor(
    private router: Router,
    private competitorService: CompetitorService,
    private sportService: SportService,
    private countryService: CountryService,
    private tournamentService: TournamentService,
    private teamService: TeamService
  ) { }

  ngOnInit(): void {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.sportService.getAllSports().subscribe((sports: Sport[]) => {

      if (sports) {
        this.sports = sports;
      }

      this.countryService.getAllCountries().subscribe((countries: Country[]) => {
        if (countries) {
          this.countries = countries;
        }

        for (let i = 0; i < countries.length; i++) {
          if (this.currentUser.nationality == countries[i].countryName) {
            this.totalNumber = countries[i].numberOfAthletes
          }
        }
      });

      this.competitorService.getAllCompetitors().subscribe((competitors: Competitor[]) => {
        if (competitors) {

          for (let i = 0; i < competitors.length; i++) {
            
            if(competitors[i].country.countryName==this.currentUser.nationality)
            this.competitors.push(competitors[i]);
            
          }
          

        }



        for (let i = 0; i < this.sports.length; i++) {
          let cnt = 0;
          let sport: string = this.sports[i].sportName;
          for (let j = 0; j < this.competitors.length; j++) {
            if (sport == this.competitors[j].competesIn[0].sportName) {
              cnt++;
            }
          }
        
          this.sportNumber.push([sport, cnt]);
    
        }

      });


    
  

    });


  }
  sportNumber: any=[]
  competitors: Competitor[] = [];
  totalNumber: number;
  sports: Sport[] = [];
  countries: Country[] = [];
  currentUser: User

  addTeam() {
    this.router.navigate(['/addTeam']);
  }

  overviewAthletesBySport() {
    this.router.navigate(['/overviewAthletesBySport']);
  }

  home() {
    this.router.navigate(['']);
  }
  back() {
    this.router.navigate(['/nationalDelegation']);
  }
  changePassword() {
    this.router.navigate(['/changePassword']);
  }
  nationalDelegate() {
    this.router.navigate(['/nationalDelegation']);
  }
}
