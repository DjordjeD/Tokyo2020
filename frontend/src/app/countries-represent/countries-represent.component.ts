import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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

 
      this.countryService.getAllCountries().subscribe((countries: Country[]) => {
        if (countries) {
          this.countries = countries;
          this.dataSource = new MatTableDataSource<Country>(this.countries);
          this.dataSource.paginator = this.paginator;
          console.log(this.countries[0].countryName);
        }
      });

    }


    
  displayedColumns: string[] = ['name', 'flag','number'];

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  dataSource:any

  @ViewChild(MatPaginator) paginator:MatPaginator

  
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
