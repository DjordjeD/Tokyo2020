import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompetitorService } from '../competitor.service';
import { CountryService } from '../country.service';
import {
  Competitor,
  Country,
  Format,
  GroupPhaseEvent,
  Sport,
  Team,
  Tournaments,
} from '../models/models';
import { User } from '../models/user';
import { SportService } from '../sport.service';
import { TeamService } from '../team.service';
import { TournamentService } from '../tournament.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-insert-results-individual',
  templateUrl: './insert-results-individual.component.html',
  styleUrls: ['./insert-results-individual.component.css'],
})
export class InsertResultsIndividualComponent implements OnInit {
  constructor(
    private router: Router,
    private competitorService: CompetitorService,
    private sportService: SportService,
    private countryService: CountryService,
    private tournamentService: TournamentService,
    private userService: UserService,
    private teamService: TeamService
  ) {}

  index: number;
  currentTournament: Tournaments;
  tournaments: Array<Tournaments>;
  results: string[] = [];
  error: string;
  message: string = '';

  ngOnInit(): void {
    this.index = JSON.parse(localStorage.getItem('indexToEdit') || '{}').index;
    this.currentTournament = JSON.parse(
      localStorage.getItem('currentTournament') || '{}'
    );
    console.log(this.currentTournament);
    for (let i = 0; i < this.currentTournament.format.numberOfRounds; i++) {
      this.results[i] = '';
    }
    console.log(this.results);
  }

  finishEditing() {
    console.log(this.results);
    console.log(this.index);
    this.currentTournament.individualEvent.results[this.index].results =
      this.results;
    localStorage.setItem(
      'currentTournament',
      JSON.stringify(this.currentTournament)
    );
    this.tournamentService
      .updateTournament(this.currentTournament)
      .subscribe((msg: any) => {
        console.log(msg);
      });
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

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
    this.router.navigate(['/individualEditTimetable']);
    //potencijalno brisanje
  }
  changePassword() {
    this.router.navigate(['/changePassword']);
  }
}
