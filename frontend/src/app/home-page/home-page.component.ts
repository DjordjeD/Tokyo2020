import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CompetitorService } from '../competitor.service';
import { CountryService } from '../country.service';
import { Competitor, Country, Sport } from '../models/models';
import { User } from '../models/user';
import { SportService } from '../sport.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(
    private router: Router,
    private competitorService: CompetitorService,
    private sportService: SportService,
    private countryService: CountryService
  ) { }

  competitors: Competitor[];
  sports: Sport[];
  countries: Country[];

  sportName: string;
  disciplineName: string;
  countryName: string;
  name: string;
  surname: string;
  sex: string;
  medalWinner: boolean;

  registered: boolean;
  currentUser: User;
  allCompetitors: Array<Competitor>;

  floatLabelControl = new FormControl('');
  medalWinnerFormControl = new FormControl('');
  nameFormControl = new FormControl('');
  surnameFormControl = new FormControl('');
  ngOnInit(): void {
    this.currentUser = JSON.parse(
      localStorage.getItem('currentUser') || '{}'
    );
   console.log(this.currentUser.name);
    if (this.currentUser == null) this.registered = false;
    else this.registered = true;

    this.competitorService
      .getAllCompetitors()
      .subscribe((competitors: Competitor[]) => {
        if (competitors) {
          this.competitors = competitors;
          this.allCompetitors = competitors;
        }
      });

    this.sportService.getAllSports().subscribe((sports: Sport[]) => {
      if (sports) {
        this.sports = sports;
      }
    });

    this.countryService.getAllCountries().subscribe((countries: Country[]) => {
      if (countries) {
        this.countries = countries;
        console.log(this.countries[0].countryName);
      }
    });
  }

  search() {
    this.competitorService
      .searchCompetitors(
        this.nameFormControl.value,
        this.surnameFormControl.value,
        this.countryName,
        this.sportName,
        this.disciplineName,
        this.floatLabelControl.value,
        this.medalWinnerFormControl.value
      )
      .subscribe((competitors: Competitor[]) => {
        if (competitors) {
          if (this.disciplineName != '') {
            let sorted: Array<Competitor> = [];

            console.log(this.disciplineName);

            for (let i = 0; i < this.allCompetitors.length; i++) {
              for (
                let j = 0;
                j < this.allCompetitors[i].competesIn.length;
                j++
              ) {
                if (
                  this.allCompetitors[i].competesIn[j].disciplineName ==
                  this.disciplineName
                ) {
                  console.log(this.allCompetitors[i]);
                  sorted.push(this.allCompetitors[i]);
                }
              }
            }
            this.competitors = sorted;
          } else {
            this.competitors = competitors;
          }
        }
      });
  }

  login() {
    this.router.navigate(['/login']);
  }

  register() {
    this.router.navigate(['/register']);
  }

  changePassword() {
    this.router.navigate(['/changePassword']);
  }

  medalsRepresent() {
    this.router.navigate(['medalsRepresent']);
  }

  countriesRepresent() {
    this.router.navigate(['countriesRepresent']);
  }
}
