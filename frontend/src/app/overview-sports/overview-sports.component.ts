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
  selector: 'app-overview-sports',
  templateUrl: './overview-sports.component.html',
  styleUrls: ['./overview-sports.component.css']
})
export class OverviewSportsComponent implements OnInit {
  constructor(
    private router: Router,
    private competitorService: CompetitorService,
    private sportService: SportService,
    private countryService: CountryService,
    private tournamentService: TournamentService,
    private teamService: TeamService
  ) {}

  ngOnInit(): void {
    this.sportService.getAllSports().subscribe((sports: Sport[]) => {
      if (sports) {
        this.sports = sports;
      }
    });

    this.countryService.getAllCountries().subscribe((countries: Country[]) => {
      if (countries) {
        this.countries = countries;
       
      }
    });
  }
  sports: Sport[]=[];
  countries: Country[] = [];

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
