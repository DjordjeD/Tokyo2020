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
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  constructor(
    private router: Router,
    private competitorService: CompetitorService,
    private sportService: SportService,
    private countryService: CountryService,
    private tournamentService: TournamentService,
    private teamService: TeamService,
  ) {}


  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    console.log(this.currentUser.nationality)
    
    this.currentTeam= new Team();
    this.currentTeam.teamMembers=[]
    //this.nationalDeleagation= localStorage.getItem('currentUser').to
    
    this.sportService.getAllSports().subscribe((sports: Sport[]) => {
      if (sports) {
        this.sports = sports;
      }
    });

    this.competitorService
      .getAllCompetitors()
      .subscribe((competitors1: Competitor[]) => {
        if (competitors1) {

          

          for (let i = 0; i < competitors1.length; i++) {
            const element = competitors1[i];
            if( competitors1[i].country.countryName==this.currentUser.nationality)
            {
              this.competitors.push(competitors1[i])
            
            }
         
          }


          //problem je ako vidi neke koji su vec u timu this.disciplineFormControl.value== competitors1[i].competesIn[j].disciplineName &&
           
        }
      });

  }

  disciplineFormControl = new FormControl('', Validators.required);
  selectedAthletes = new FormControl('', Validators.required);

  //teamName:string
  currentUser: User;
  name: string;
  surname: string;
  error: string;
  disciplineName: string;
  resultFormat: string;
  competitors: Array<Competitor>= []
  notSelectedAthletes: Array<Competitor> =[]
  currentTeam:Team;

  sports: Sport[];

  disciplines: Array<DisciplineType>;
  newCompetitor: Competitor = new Competitor()
  
  addTeam() {
    
    this.currentTeam.teamName= this.disciplineFormControl.value + " of " + this.currentUser.nationality
    this.currentTeam.groupPoints=0;
    this.currentTeam.teamMembers=this.selectedAthletes.value;

    this.teamService.addTeam(this.currentTeam).subscribe((msg:any) => {
      console.log(msg)
    })
  
  }

  overviewSports() {
    this.router.navigate(['/overviewSports']);
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
  nationalDelegate(){
    this.router.navigate(['/nationalDelegate'])
  }
}
