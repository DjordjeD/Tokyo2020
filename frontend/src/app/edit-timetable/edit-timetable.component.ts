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
  Sport,
  Team,
  teamRound,
  Tournaments,
} from '../models/models';
import { User } from '../models/user';
import { SportService } from '../sport.service';
import { TournamentService } from '../tournament.service';

@Component({
  selector: 'app-edit-timetable',
  templateUrl: './edit-timetable.component.html',
  styleUrls: ['./edit-timetable.component.css'],
})
export class EditTimetableComponent implements OnInit {
  constructor(
    private router: Router,
    private competitorService: CompetitorService,
    private sportService: SportService,
    private countryService: CountryService,
    private tournamentService: TournamentService
  ) {}
  groupRounds: teamRound[] = [];
  quarterFinals: GroupPhaseEvent[] = [];
  semiFinals: GroupPhaseEvent[] = [];
  teamFinals: GroupPhaseEvent;
  teamThird: GroupPhaseEvent;
  currentTournament: Tournaments;
  group1: Array<Team> = [];
  group2: Array<Team> = [];
  playoffGroup1: Array<Team> = [];
  playoffGroup2: Array<Team> = [];
  temp: Array<Team> = [];
  numberShuffle12: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  numberShuffle8: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7];
  numberShuffle4: Array<number> = [0, 1, 2, 3];
  groupRoundsEnded: Array<Boolean> = [true, false, false, false, false, false];
  quarterFinalsStarted: boolean = false;
  semiFinalsStarted: boolean = false;
  thirdPlaceStarted: boolean = false;
  finalsStarted: boolean = false;
  selectedGroups: boolean = false;
  ngOnInit(): void {
    this.currentTournament = JSON.parse(
      localStorage.getItem('currentTournament') || '{}'
    );
    console.log(this.currentTournament)
    if (this.currentTournament.group1==undefined) {
      this.shuffleArray(this.numberShuffle12);
      for (let i = 0; i <= 5; i++) {
        this.group1.push(this.currentTournament.teams[this.numberShuffle12[i]]);
      }
      for (let i = 6; i <= 11; i++) {
        this.group2.push(this.currentTournament.teams[this.numberShuffle12[i]]);
      }
      console.log(this.group1);
      //console.log(this.group2)
      this.currentTournament.group1 = this.group1;
      this.currentTournament.group2 = this.group2;
      localStorage.setItem('currentTournament', JSON.stringify(this.currentTournament)); 
    }
    else {
      this.group1= this.currentTournament.group1;
      this.group2= this.currentTournament.group2;
      this.shuffle()
    }
   
  }

  shuffle() {

    this.selectedGroups = true;
    if (this.currentTournament.individual) {
      //posle
    } else {
      if (
        this.currentTournament.sportName == 'Basketball' ||
        this.currentTournament.sportName == 'Voleyball' ||
        this.currentTournament.sportName == 'Waterpolo'
      ) {
        if (this.currentTournament.teams.length == 12) {
          //let rounds = Math.ceil(this.group1.length / 2);
          for (let i = 0; i < 5; i++) {
            let round = new teamRound();
            let events = new Array<GroupPhaseEvent>();

            round.ended = false;

            for (let event of this.matchParticipants(this.group1))
              events.push(event);

            //console.log(round);

            for (let event of this.matchParticipants(this.group2))
              events.push(event);

            round.teamEvents = events;

            this.groupRounds.push(round);
            this.group1 = this.rotateArray(this.group1);
            this.group2 = this.rotateArray(this.group2);
          }
        } else if (this.currentTournament.teams.length == 8) {
        } else if (this.currentTournament.teams.length == 4) {
        }
      } else if (
        this.currentTournament.sportName == 'Tennis' ||
        this.currentTournament.sportName == 'Tennis Double'
      ) {
      }
    }
   
  }

  finishedEditingRound(index) {
    this.groupRoundsEnded[index + 1] = true;
    if (index == 4) this.playoffs();
  }

  playoffs() {
    this.quarterFinalsStarted = true;
    this.group1.sort((obj1, obj2) => {
      if (obj1.groupPoints > obj2.groupPoints) {
        return 1;
      }

      if (obj1.groupPoints < obj2.groupPoints) {
        return -1;
      }

      return 0;
    });
    this.group2.sort((obj1, obj2) => {
      if (obj1.groupPoints > obj2.groupPoints) {
        return 1;
      }

      if (obj1.groupPoints < obj2.groupPoints) {
        return -1;
      }

      return 0;
    });

    for (let i = 0; i < this.group1.length - 2; i++) {
      this.playoffGroup1.push(this.group1[i]);
      this.playoffGroup2.push(this.group2[i]);
    }

    for (let i = 0, j = this.playoffGroup1.length; i < 4; i++, j--) {
      var event = new GroupPhaseEvent();
      event.homeTeam = this.playoffGroup1[i];
      event.awayTeam = this.playoffGroup2[j];

      this.quarterFinals.push(event);
    }
  }

 
  finishQuarterFinals() {
    //obrada
    var event1 = new GroupPhaseEvent();
    if (this.quarterFinals[0].winner == 1)
      event1.homeTeam = this.quarterFinals[0].homeTeam;
    else event1.homeTeam = this.quarterFinals[0].awayTeam;

    if (this.quarterFinals[3].winner == 1)
      event1.awayTeam = this.quarterFinals[3].homeTeam;
    else event1.awayTeam = this.quarterFinals[3].awayTeam;

    var event2 = new GroupPhaseEvent();

    if (this.quarterFinals[1].winner == 1)
      event1.homeTeam = this.quarterFinals[1].homeTeam;
    else event1.homeTeam = this.quarterFinals[1].awayTeam;

    if (this.quarterFinals[2].winner == 1)
      event1.awayTeam = this.quarterFinals[2].homeTeam;
    else event1.awayTeam = this.quarterFinals[2].awayTeam;

    this.semiFinals.push(event1);
    this.semiFinals.push(event2);
    this.semiFinalsStarted = true;
  }
  finishSemiFinals() {
    var finals = new GroupPhaseEvent();

    var thirdPlace = new GroupPhaseEvent();
    if (this.semiFinals[0].winner == 1) {
      finals.homeTeam = this.semiFinals[0].homeTeam;
      thirdPlace.homeTeam = this.semiFinals[0].awayTeam;
    } else {
      finals.homeTeam = this.semiFinals[0].awayTeam;
      thirdPlace.homeTeam = this.semiFinals[0].homeTeam;
    }

    if (this.semiFinals[1].winner == 1) {
      finals.awayTeam = this.semiFinals[1].homeTeam;
      thirdPlace.awayTeam = this.semiFinals[1].awayTeam;
    } else {
      finals.awayTeam = this.semiFinals[1].awayTeam;
      thirdPlace.awayTeam = this.semiFinals[1].homeTeam;
    }

    this.teamFinals = finals;
    this.teamThird = thirdPlace;
    this.thirdPlaceStarted=true;
  }

  finishThirdPlace() {

    this.finalsStarted=true;
  }

  finishFinals() {

    this.currentTournament.ongoing = false;
  }

  showEdits(index): boolean {
    if (this.groupRoundsEnded[index] == true) return true;
    else return false;
  }

  editEvent(event) {
    localStorage.setItem('currentEvent', JSON.stringify(event));
    this.router.navigate(['/insertResults'])

  }

  matchParticipants(participants: Array<Team>) {
    let events = new Array<GroupPhaseEvent>();

    let p = Array.from(participants);
    while (p.length != 0) {
      let participantA: any = p.shift();
      let participantB: any = p.pop();
      if (participantA != undefined && participantB != undefined) {
        let event = new GroupPhaseEvent();
        event.homeTeam = participantA;
        event.awayTeam = participantB;
        event.date = '';
        event.time = '';
        event.location = '';
        event.resultAway = '';
        event.resultHome = '';
        event.winner = 0;
        events.push(event);
      }
    }
    console.log(events);
    return events;
  }

  rotateArray(array): Array<Team> {
    let firstElement = array.shift();
    let lastElement = array.pop();
    return [firstElement, lastElement, ...array];
  }

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  trackByIndexRound(indexRound: number, obj: any): any {
    return indexRound;
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
    this.router.navigate(['']);
    //potencijalno brisanje
  }
  changePassword() {
    this.router.navigate(['/changePassword']);
  }
}