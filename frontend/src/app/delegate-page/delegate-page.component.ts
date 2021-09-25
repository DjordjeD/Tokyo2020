import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
  selector: 'app-delegate-page',
  templateUrl: './delegate-page.component.html',
  styleUrls: ['./delegate-page.component.css']
})
export class DelegatePageComponent implements OnInit {

  constructor(
    private router: Router,
    private competitorService: CompetitorService,
    private sportService: SportService,
    private countryService: CountryService,
    private tournamentService: TournamentService
  ) {}

  dataSource:any

  @ViewChild(MatPaginator) paginator:MatPaginator

  displayedColumns: string[] = ['name', 'surname','country','sex','competesIn','medalWinner'];


  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    console.log(this.currentUser.nationality)
    this.tournamentService
      .getAllTournaments()
      .subscribe((tournaments: Tournaments[]) => {
        if (tournaments) {
          
         
          for (let i = 0; i < tournaments.length; i++) {
            if(tournaments[i].delegate.username==this.currentUser.username)
            {
              this.tournaments.push(tournaments[i])
            }

          }
        }
      });
    

  }

  insertResults()
  {
    
    localStorage.setItem('currentTournament',JSON.stringify(this.tournamentFormControl.value))
    this.router.navigate(['/editTimetable'])
  }

  tournamentFormControl = new FormControl('', Validators.required);

  currentUser: User;
  name: string;
  surname: string;
  error: string;


  sports: Sport[];
  currentTournament: Tournaments;
  tournaments: Array<Tournaments>=[]
  format: Format;
  disciplines: Array<DisciplineType>;
  newCompetitor: Competitor = new Competitor()

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
    this.router.navigate(['/home']);
  }
  changePassword() {
    this.router.navigate(['/changePassword']);
  }
}
