import { COMPILER_OPTIONS, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
  ) {}

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

  displayedColumns: string[] = [
    'name',
    'surname',
    'country',
    'sex',
    'competesIn',
    'medalWinner',
  ];

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    console.log(this.currentUser.name);
    if (this.currentUser == null) this.registered = false;
    else this.registered = true;

    this.competitorService
      .getAllCompetitors()
      .subscribe((competitors: Competitor[]) => {
        if (competitors) {
          this.competitors = competitors;
          this.allCompetitors = competitors;
          this.dataSource = new MatTableDataSource<Competitor>(
            this.competitors
          );
          this.dataSource.paginator = this.paginator;
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
          let sorted = Array.from(competitors);

          console.log(sorted);
          // sorted=competitors;
          console.log(this.disciplineName);
          if (this.disciplineName != null) {
            let disc = this.disciplineName;
            sorted = sorted.filter((eachVal) => {
              let opt = eachVal.competesIn.some(
                (discipline) => discipline.disciplineName === disc
              );

              return opt;
            });
          }

          if (this.sportName != null) {
            let sport = this.sportName;
            sorted = sorted.filter((eachVal) => {
              let opt = eachVal.competesIn.some(
                (discipline) => discipline.sportName == sport
              );
              return opt;
            });
          }

          if (this.floatLabelControl.value != '') {
            let sex = this.floatLabelControl.value;
            sorted = sorted.filter((x) => x.sex == sex);
          }

          if (this.medalWinnerFormControl.value != '') {
            let type = this.medalWinnerFormControl.value;
            if (type == "true")
              sorted = sorted.filter((x) => x.medalWinner == true);
            else sorted = sorted.filter((x) => x.medalWinner == false);
          }

          console.log(sorted);
          this.dataSource = sorted;
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
