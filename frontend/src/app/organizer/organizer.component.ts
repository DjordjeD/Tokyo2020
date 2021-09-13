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
  styleUrls: ['./organizer.component.css']
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
  
  disciplineFormControl = new FormControl('',Validators.required);
  individualFormControl = new FormControl('',Validators.required);
  minimumPlayersForm= new FormControl('',Validators.required);
  maximumPlayersForm= new FormControl('',Validators.required);
  countries: Country[];
  registered:boolean
  sportName: string
  sports:Sport[];

  addDiscipline() {
    
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
    this.router.navigate(['medalsRepresent'])
  }

  home(){
    this.router.navigate([''])
  }

}
