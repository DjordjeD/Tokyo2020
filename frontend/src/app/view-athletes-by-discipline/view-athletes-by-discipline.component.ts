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
  Team,
  Tournaments,
} from '../models/models';
import { User } from '../models/user';
import { SportService } from '../sport.service';
import { TeamService } from '../team.service';
import { TournamentService } from '../tournament.service';

@Component({
  selector: 'app-view-athletes-by-discipline',
  templateUrl: './view-athletes-by-discipline.component.html',
  styleUrls: ['./view-athletes-by-discipline.component.css']
})
export class ViewAthletesByDisciplineComponent implements OnInit {

  constructor(
    private router: Router,
    private competitorService: CompetitorService,
    private sportService: SportService,
    private countryService: CountryService,
    private tournamentService: TournamentService,
    private teamService: TeamService
  ) {}


  dataSource:any=[]
  discipline:DisciplineType
  @ViewChild(MatPaginator) paginator:MatPaginator

  displayedColumns: string[] = ['name', 'surname','country','sex','competesIn','medalWinner'];

  ngOnInit(): void {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.competitorService
    .getAllCompetitors()
    .subscribe((competitors: Competitor[]) => {
      if (competitors) {
        this.discipline=JSON.parse(localStorage.getItem('discipline') || '{}')
        for (let i = 0; i < competitors.length; i++) {
          
          for (let j = 0; j < competitors[i].competesIn.length; j++) {
            
            if(competitors[i].competesIn[j].disciplineName==this.discipline.disciplineName && competitors[i].country.countryName== this.currentUser.nationality)
            {
            
              this.competitors.push(competitors[i]);
            }
            this.sport=competitors[i].competesIn[j].sportName
            
          }
          
        }
       
        this.dataSource = new MatTableDataSource<Competitor>(this.competitors);
        this.dataSource.paginator = this.paginator;
      }
    });

   
  }
  sport:string
  sports: Sport[]=[];
  countries: Country[] = [];
  competitors:Competitor[] = [];
  currentUser: User;
  
  trackByIndex(index: number, obj: any): any {
    return index;
  }

  viewDisciplines(sportName:string){
        console.log(sportName)
        localStorage.setItem('sportName', sportName)
        this.router.navigate(['overviewDisciplines'])
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
