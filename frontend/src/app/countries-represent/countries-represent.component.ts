import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitorService } from '../competitor.service';
import { CountryService } from '../country.service';
import { Country } from '../models/models';
import { SportService } from '../sport.service';

@Component({
  selector: 'app-countries-represent',
  templateUrl: './countries-represent.component.html',
  styleUrls: ['./countries-represent.component.css']
})
export class CountriesRepresentComponent implements OnInit {

  constructor(
    private router: Router,
    private competitorService: CompetitorService,
    private sportService: SportService,
    private countryService: CountryService
  ) {}

    ngOnInit(): void {

      // this.country=new Country()
      // this.country.flagImage="olympicGames.png"
      // this.country.countryName="srbiija"
      // this.country.numberOfAthletes=25

      // this.countries.push(this.country)

      // console.log(this.countries[0].flagImage)

      this.countryService.getAllCountries().subscribe((countries: Country[]) => {
        if (countries) {
          this.countries = countries;
          console.log(this.countries[0].countryName);
        }
      });

    }
  
  country:Country
  countries: Array<Country> =[]   
  registered:boolean

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
    this.router.navigate(['medalsRepresent'])
  }

  home(){
    this.router.navigate([''])
  }
}
