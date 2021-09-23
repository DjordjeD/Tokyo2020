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
  selector: 'app-overview-disciplines',
  templateUrl: './overview-disciplines.component.html',
  styleUrls: ['./overview-disciplines.component.css'],
})
export class OverviewDisciplinesComponent implements OnInit {
  constructor(
    private router: Router,
    private competitorService: CompetitorService,
    private sportService: SportService,
    private countryService: CountryService,
    private tournamentService: TournamentService,
    private teamService: TeamService
  ) {}

  sport: Sport;
  sportName: any;
  ngOnInit(): void {
    this.sportName = localStorage.getItem('sportName')
    console.log(this.sportName);
    this.sportService.getAllSports().subscribe((sports: Sport[]) => {
      if (sports) {
        for (let i = 0; i < sports.length; i++) {
          if ((sports[i].sportName == this.sportName)) {
            this.sport = sports[i];
            //console.log(this.sport);
          }
        }
      }
    });
  }
  sports: Sport[] = [];
  countries: Country[] = [];

  trackByIndex(index: number, obj: any): any {
    return index;
  }


  viewAthletesByDiscipline(discipline) {
    localStorage.setItem('discipline', JSON.stringify(discipline));
    console.log(discipline);
    this.router.navigate(['viewAthletesByDiscipline']);
  }

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
    this.router.navigate(['/login']);
  }
  changePassword() {
    this.router.navigate(['/changePassword']);
  }
  nationalDelegate() {
    this.router.navigate(['/nationalDelegation']);
  }
}
