import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CompetitorService } from '../competitor.service';
import { CountryService } from '../country.service';
import { Country, RepresentRow, Sport } from '../models/models';
import { SportService } from '../sport.service';

@Component({
  selector: 'app-medals-represent',
  templateUrl: './medals-represent.component.html',
  styleUrls: ['./medals-represent.component.css'],
})
export class MedalsRepresentComponent implements OnInit {
  constructor(
    private router: Router,
    private competitorService: CompetitorService,
    private sportService: SportService,
    private countryService: CountryService
  ) {}

  rows: RepresentRow[] = [];

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe((countries: Country[]) => {
      if (countries) {
        this.countries = countries;

        this.sportService.getAllSports().subscribe((sports: Sport[]) => {
          if (sports) {
            for (let country of countries) {
              var numberOfGold: number = 0;
              var numberOfSilver: number = 0;
              var numberOfBronze: number = 0;
              var totalNumber: number;

              for (let sport of sports) {
                for (let discipline of sport.disciplines) {
                  if (discipline.medals != null) {
                    for (let i = 0; i < discipline.medals.length; i++) {
                      if (
                        discipline.medals[i].country.countryName ==
                        country.countryName
                      ) {
                        if (discipline.medals[i].type == 'bronze') {
                          numberOfBronze++;
                        }
                        if (discipline.medals[i].type == 'silver') {
                          numberOfSilver++;
                        }
                        if (discipline.medals[i].type == 'gold') {
                          numberOfGold++;
                        }
                      }
                    }
                  }
                }
              }

              totalNumber = numberOfGold + numberOfSilver + numberOfBronze;

              var row = new RepresentRow();

              row.countryName = country.countryName;
              row.numberOfBronze = numberOfBronze;
              row.numberOfSilver = numberOfSilver;
              row.numberOfGold = numberOfGold;
              row.totalNumber = totalNumber;
              console.log(row);
              this.rows.push(row);
              numberOfBronze = 0;
              numberOfSilver = 0;
              numberOfGold = 0;
            }
            this.rows.sort((obj1, obj2) => {
              if (obj1.totalNumber > obj2.totalNumber) {
                return -1;
              }

              if (obj1.totalNumber < obj2.totalNumber) {
                return 1;
              }

              return 0;
            });
            console.log(this.rows);
            this.dataSource = this.rows;
          }
        });
      }
    });
  }

  // this.dataSource = new MatTableDataSource<Country>(this.countries);
  // this.dataSource.paginator = this.paginator;
  // console.log(this.countries[0].countryName);

  displayedColumns: string[] = [
    'countryName',
    'numberOfGold',
    'numberOfSilver',
    'numberOfBronze',
    'totalNumber',
  ];

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  country: Country;
  countries: Array<Country> = [];
  registered: boolean;

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

  home() {
    this.router.navigate(['']);
  }
}
