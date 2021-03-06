import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompetitorService } from '../competitor.service';
import { CountryService } from '../country.service';
import { Country, Sport } from '../models/models';
import { SportService } from '../sport.service';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css'],
})
export class OrganizerComponent implements OnInit {
  constructor(
    private router: Router,
    private competitorService: CompetitorService,
    private sportService: SportService,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.sportService.getAllSports().subscribe((sports: Sport[]) => {
      if (sports) {
        this.sports = sports;
      }
    });
  }

  disciplineFormControl = new FormControl('', Validators.required);
  individualFormControl = new FormControl('', Validators.required);
  minimumPlayersForm = new FormControl('', Validators.required);
  maximumPlayersForm = new FormControl('', Validators.required);
  countries: Country[];
  registered: boolean;
  sportName: string;
  min: number;
  max: number;
  sports: Array<Sport>=[];
  type: boolean;

  addDiscipline() {
    if (this.individualFormControl.value == 'individual') {
      this.type = true;
      this.min = 1;
      this.max = 1;
    } else if (this.individualFormControl.value == 'team') {
      this.type = false;
      this.min = this.minimumPlayersForm.value;
      this.max = this.maximumPlayersForm.value;
    }

    this.sportService.addDiscipline(
      this.sportName,
      this.disciplineFormControl.value,
      this.type,
      this.min,
      this.max
    ).subscribe((sports: Sport) => {
      if (sports) {
        console.log("dodata disciplina")
      }
      else{
        console.log("disciplina vec postoji")
      }
    });;

    console.log("front")
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/organizer']);
  }

  acceptUserRequests(){
    this.router.navigate(['/acceptUsers']);
  }

  login() {
    this.router.navigate(['/login']);
  }

  records() {
    this.router.navigate(['/records']);
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
    this.router.navigate(['medalsRepresent']);
  }

  home() {
    this.router.navigate(['']);
  }
}
