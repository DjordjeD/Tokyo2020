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
  GroupPhaseEvent,
  IndividualEvent,
  Medal,
  Result,
  Sport,
  Team,
  teamRound,
  Tournaments,
} from '../models/models';
import { User } from '../models/user';
import { SportService } from '../sport.service';
import { TournamentService } from '../tournament.service';

@Component({
  selector: 'app-individual-edit-timetable',
  templateUrl: './individual-edit-timetable.component.html',
  styleUrls: ['./individual-edit-timetable.component.css'],
})
export class IndividualEditTimetableComponent implements OnInit {
  constructor(
    private router: Router,
    private competitorService: CompetitorService,
    private sportService: SportService,
    private countryService: CountryService,
    private tournamentService: TournamentService
  ) {}
  currentTournament: Tournaments;
  editTime: boolean = false;
  time: string;
  date: string;
  location: string;
  headers: string[] = [];
  ngOnInit(): void {
    this.currentTournament = JSON.parse(
      localStorage.getItem('currentTournament') || '{}'
    );

    if (this.currentTournament.individualEvent == null) {
      let newEvent: IndividualEvent = new IndividualEvent();
      newEvent.results = [];

      for (let i = 0; i < this.currentTournament.competitors.length; i++) {
        let newResult = new Result();
        newResult.results = [];
        newResult.athlete = this.currentTournament.competitors[i];

        for (let j = 0; j < this.currentTournament.format.numberOfRounds; j++) {
          newResult.results.push('');
        }

        newEvent.results.push(newResult);
        console.log(newEvent);
      }

      console.log(this.currentTournament);
      this.currentTournament.individualEvent = newEvent;
    }
    console.log(this.currentTournament);
    if (
      this.currentTournament.individualEvent.time == null ||
      this.currentTournament.individualEvent.date == null ||
      this.currentTournament.individualEvent.location == null
    ) {
      this.editTime = true;
      console.log('editTime: ' + this.editTime);
    } else this.editTime = false;

    for (
      let index = 0;
      index < this.currentTournament.format.numberOfRounds;
      index++
    ) {
      this.headers.push('Result' + index);
    }
  }

  addInfo() {
    //provera za lokaciju

    this.currentTournament.individualEvent.location = this.location;
    this.currentTournament.individualEvent.time = this.time;

    this.currentTournament.individualEvent.date = this.date;

    this.editTime = false;

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
  editResults(results, index) {
    let tmp = {
      index: index,
    };

    localStorage.setItem('indexToEdit', JSON.stringify(tmp));
    localStorage.setItem(
      'currentTournament',
      JSON.stringify(this.currentTournament)
    );
    this.tournamentService
      .updateTournament(this.currentTournament)
      .subscribe((msg: any) => {
        console.log(msg);
      });

    this.router.navigate(['/insertResultsIndividual']);
  }

  finishTournament() {
    if (this.currentTournament.format.resultFormat == 'SS:MS') {
      this.currentTournament.individualEvent.results.sort((obj1, obj2) => {
        var result1 = obj1.results[0].split(':');
        var result2 = obj2.results[0].split(':');

        var time1 = parseInt(result1[0]) * 100 + parseInt(result1[1]);
        var time2 = parseInt(result2[0]) * 100 + parseInt(result2[1]);

        if (time1 < time2) {
          return -1;
        }

        if (time1 > time2) {
          return 1;
        }

        return 0;
      });

      console.log(this.currentTournament.individualEvent.results);

      this.currentTournament.individualEvent.goldMedal =
        this.currentTournament.individualEvent.results[0].athlete;
      this.currentTournament.individualEvent.silverMedal =
        this.currentTournament.individualEvent.results[1].athlete;
      this.currentTournament.individualEvent.bronzeMedal =
        this.currentTournament.individualEvent.results[2].athlete;

    } else if ((this.currentTournament.format.resultFormat = 'points')) {
      this.currentTournament.individualEvent.results.sort((obj1, obj2) => {
        var best1 = 0;
        for (let result of obj1.results) {
          if (parseInt(result) > best1) best1 = parseInt(result);
        }

        var best2 = 0;
        for (let result of obj2.results) {
          if (parseInt(result) > best2) best2 = parseInt(result);
        }

        if (best1 < best2) {
          return -1;
        }

        if (best1 > best2) {
          return 1;
        }

        return 0;
      });

      console.log(this.currentTournament.individualEvent.results);
      
      this.currentTournament.individualEvent.goldMedal =
        this.currentTournament.individualEvent.results[0].athlete;
      this.currentTournament.individualEvent.silverMedal =
        this.currentTournament.individualEvent.results[1].athlete;
      this.currentTournament.individualEvent.bronzeMedal =
        this.currentTournament.individualEvent.results[2].athlete;

        
    }

    this.competitorService
      .medalWinner(this.currentTournament.individualEvent.goldMedal)
      .subscribe((msg: any) => {
        console.log(msg);
      });

    this.competitorService
      .medalWinner(this.currentTournament.individualEvent.silverMedal)
      .subscribe((msg: any) => {
        console.log(msg);
      });

    this.competitorService
      .medalWinner(this.currentTournament.individualEvent.bronzeMedal)
      .subscribe((msg: any) => {
        console.log(msg);
      });

      var gold = new Medal();

      gold.athlete = this.currentTournament.individualEvent.goldMedal;
      gold.type = 'gold';
      gold.country = this.currentTournament.individualEvent.goldMedal.country;

      var silver = new Medal();

      silver.athlete = this.currentTournament.individualEvent.silverMedal;
      silver.type = 'silver';
      silver.country = this.currentTournament.individualEvent.silverMedal.country;

      var bronze = new Medal();

      bronze.athlete = this.currentTournament.individualEvent.bronzeMedal;
      bronze.type = 'bronze';
      bronze.country = this.currentTournament.individualEvent.bronzeMedal.country;

      this.sportService.getAllSports().subscribe((sports: Sport[]) => {
        if (sports) {
          for (let i = 0; i < sports.length; i++) {
            for (let j = 0; j < sports[i].disciplines.length; j++) {
              if (
                sports[i].disciplines[j].discipline.disciplineName ==
                this.currentTournament.individualEvent.bronzeMedal.competesIn[0].disciplineName
              ) {
                if (sports[i].disciplines[j].medals == null) {
                  sports[i].disciplines[j].medals = [];
                }
                sports[i].disciplines[j].medals.push(bronze);
                sports[i].disciplines[j].medals.push(silver);
                sports[i].disciplines[j].medals.push(gold);

                this.sportService.addMedal(sports[i]).subscribe((msg: any) => {
                  console.log(msg);
                });
              }

            
              
            }
          }
        }
      });

    this.currentTournament.ongoing = false;
    

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
    this.router.navigate(['/delegatePage']);
    //potencijalno brisanje
  }
  changePassword() {
    this.router.navigate(['/changePassword']);
  }
}
