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
  styleUrls: ['./add-team.component.css'],
})
export class AddTeamComponent implements OnInit {
  constructor(
    private router: Router,
    private competitorService: CompetitorService,
    private sportService: SportService,
    private countryService: CountryService,
    private tournamentService: TournamentService,
    private teamService: TeamService
  ) {}

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    //console.log(this.currentUser.nationality)
    this.currentTeam=new Team()
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
            if (
              competitors1[i].country.countryName ==
              this.currentUser.nationality
            ) {
              this.competitors.push(competitors1[i]);
            }
          }

          //problem je ako vidi neke koji su vec u timu this.disciplineFormControl.value== competitors1[i].competesIn[j].disciplineName &&
        }
      });
  }

  disciplineFormControl = new FormControl('', Validators.required);
  selectedAthletesForm = new FormControl('', Validators.required);
  disciplineSelected: boolean = false;
  //teamName:string
  currentUser: User;
  name: string;
  surname: string;
  error: string;
  disciplineName: string;
  resultFormat: string;
  competitors: Array<Competitor> = [];
  selectedAthletes: Array<Competitor> = [];
  eliminateAlreadyInTeam: Array<Competitor> = [];
  currentTeam: Team;

  sports: Sport[];

  disciplines: Array<DisciplineType>;
  newCompetitor: Competitor = new Competitor();
  newTeam:boolean = true;
  selectDiscipline() {
    this.disciplineSelected = true;
    this.disciplineName = this.disciplineFormControl.value;
   
    this.selectedAthletes = [];
    this.eliminateAlreadyInTeam = [];
    
    this.teamService.getAllTeams().subscribe((teams: Team[]) => {
      var disName: string;
      if (teams) {
        for (let i = 0; i < teams.length; i++) {
          var name = teams[i].teamName.split(' of ', 2);
          console.log(name[0]);
          console.log(this.disciplineName);
          if (this.disciplineName == name[0] && this.currentUser.nationality==name[1]) {
            this.currentTeam = teams[i];
            this.newTeam=false;
          }
        }
      }

      console.log(this.currentTeam);
      for (let i = 0; i < this.competitors.length; i++) {
        let found = false;
        for (let j = 0; j < this.currentTeam.teamMembers.length; j++) {
          if (this.currentTeam.teamMembers[j].name == this.competitors[i].name && this.currentTeam.teamMembers[j].surname == this.competitors[i].surname) {
            found = true;
            console.log(this.currentTeam.teamMembers[j])
          }
        }
        if (!found) this.eliminateAlreadyInTeam.push(this.competitors[i]);
      }

      for (let i = 0; i < this.eliminateAlreadyInTeam.length; i++) {
        for (
          let j = 0;
          j < this.eliminateAlreadyInTeam[i].competesIn.length;
          j++
        ) {
          if (
            this.eliminateAlreadyInTeam[i].competesIn[j].disciplineName ==
            this.disciplineName
          )
            this.selectedAthletes.push(this.eliminateAlreadyInTeam[i]);
        }
      }
    });
  }

  addTeam() {
    this.currentTeam.teamName =
      this.disciplineFormControl.value + ' of ' + this.currentUser.nationality;
    this.currentTeam.groupPoints = 0;
    for (let i = 0; i < this.selectedAthletesForm.value.length; i++) {
      this.currentTeam.teamMembers.push(this.selectedAthletesForm.value[i])
    }
     

    console.log(this.currentTeam);
    if(this.newTeam)
    {
      this.teamService.addTeam(this.currentTeam).subscribe((msg: any) => {
        console.log(msg);
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/addTeam']);
  
      });
    }
    else{ 
      this.teamService.updateTeam(this.currentTeam).subscribe((msg: any) => {
        console.log(msg);
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/addTeam']);
      });

    }
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
    this.router.navigate(['/nationalDelegation']);
  }
  changePassword() {
    this.router.navigate(['/changePassword']);
  }
  nationalDelegate() {
    this.router.navigate(['/nationalDelegation']);
  }
}
