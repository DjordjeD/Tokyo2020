import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompetitorService } from '../competitor.service';
import { CountryService } from '../country.service';
import { Country, Format, Sport, Tournaments } from '../models/models';
import { SportService } from '../sport.service';
import { TournamentService } from '../tournament.service';

export class Location{
  location: string
  checked: boolean
}

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
  
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  locations:Array<Location>=[{location:"Saporo Arena",checked:false},{location:"Olympic Stadium",checked:false}, 
  {location:"Nippon Budokan",checked:false} ,
  {location:"Ariake Tennis Park",checked:false}, 
  {location:"Tatsumi Waterpolo Centre",checked:false} , 
  {location:"Saitama Super Arena",checked:false} , 
  {location:"Asaka Shooting Range",checked:false}]

  selectedLocations:Array<string>=[]

  disciplineName: string
  resultFormat:string
  countries: Country[];
  registered:boolean
  sportName: string
  sports:Sport[];
  newTournament:Tournaments
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

      this.newTournament= new Tournaments();

      this.newTournament.sportName=this.sportName;
      this.newTournament.disciplineName=this.disciplineName;
      if(this.individualFormControl.value=="team") this.newTournament.individual=false;
      else if(this.individualFormControl.value=="individual") this.newTournament.individual=true;
      this.newTournament.type=this.typeFormControl.value

      for (let i = 0; i < this.locations.length; i++) {
          if(this.locations[i].checked==true) this.selectedLocations.push(this.locations[i].location)
  
      }

      this.newTournament.location= this.selectedLocations;
      this.newTournament.dateBegin=this.range.getRawValue().start;
      this.newTournament.dateEnd= this.range.getRawValue().end;
      
      if(this.roundsFormControl.value ==null) this.newTournament.format.numberOfRounds=1;
      else this.newTournament.format.numberOfRounds= this.roundsFormControl.value

      if(this.individualFormControl.value=="team")
      {
          this.newTournament.format.numberOfGroups= this.groupsFormControl.value;
          this.newTournament.format.numberOfTeamsInGroup= this.teamsGroupFormControl.value;
      }

      this.newTournament.format.resultFormat=this.resultFormat;


      this.newTournament.started=true;
      this.newTournament.ongoing=true;
    
      this.tournamentService.saveTournament(this.newTournament).subscribe((msg:any) => {

        console.log(msg);
      })

  }


  addSport() {
    this.router.navigate(['/addSport']);
  }

  back() {
    this.router.navigate(['/organizer']);
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
