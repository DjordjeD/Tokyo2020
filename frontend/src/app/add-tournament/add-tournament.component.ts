import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompetitorService } from '../competitor.service';
import { CountryService } from '../country.service';
import { Country, Format, Sport, Tournaments } from '../models/models';
import { SportService } from '../sport.service';
import { TournamentService } from '../tournament.service';


@Component({
  selector: 'app-add-tournament',
  templateUrl: './add-tournament.component.html',
  styleUrls: ['./add-tournament.component.css']
})
export class AddTournamentComponent implements OnInit {

  constructor(
    private router: Router,
    private competitorService: CompetitorService,
    private sportService: SportService,
    private countryService: CountryService,
    private tournamentService: TournamentService 

  ) {}

    ngOnInit(): void {

      this.sportService.getAllSports().subscribe((sports: Sport[]) => {
        if (sports) {
          this.sports = sports;
        }
      });
      

      this.tournamentService.getAllTournaments().subscribe((tournaments: Tournaments[]) => {
        if (tournaments) {
          this.tournaments = tournaments;
        }
      });

    }
  
  disciplineFormControl = new FormControl('',Validators.required);
  individualFormControl = new FormControl('',Validators.required);
  typeFormControl = new FormControl('',Validators.required);
  minimumPlayersForm= new FormControl('',Validators.required);
  maximumPlayersForm= new FormControl('',Validators.required);
  roundsFormControl = new FormControl('');
  teamsGroupFormControl = new FormControl('',Validators.required);
  groupsFormControl = new FormControl('',Validators.required);
  
  disciplineName: string
  resultFormat:string
  countries: Country[];
  registered:boolean
  sportName: string
  sports:Sport[];
  currentTournament: Tournaments
  tournaments: Array<Tournaments>
  format: Format
  addDiscipline() {
      this.sportService.addDiscipline(this.sportName,this.disciplineFormControl.value,this.individualFormControl.value,this.minimumPlayersForm.value,this.maximumPlayersForm.value)
  }

  editTournament(tournament:Tournaments)
  {
    console.log(tournament.sportName);
    this.currentTournament=tournament;
    localStorage.setItem('currentTournament',JSON.stringify(this.currentTournament));
    this.router.navigate(['/editTournament'])
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  login() {
    this.router.navigate(['/login']);
  }


  addTournament() {
    this.router.navigate(['/addTournament']);
  }


  addSport() {
    this.router.navigate(['/addSport']);
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
