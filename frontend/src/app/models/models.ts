import { User } from "./user";
export class Tournaments {
  sportName: string;
  disciplineName: string;
  individual: boolean;
  type: string;
  dateEnd: string;
  dateBegin: string;
  location: string[];
  teams: Team[];
  competitors: Competitor[];
  groupPhaseEvents: GroupPhaseEvent[];
  individualEvents: IndividualEvent[];
  delegate: User;
  format:Format;
  started: boolean;
  ongoing: boolean;
}

// Generated by https://quicktype.io

export class Format {
  numberOfRounds:       number;
  numberOfGroups:       number;
  numberOfTeamsInGroup: number;
  resultFormat:         string;
}


export class Competitor {
  name: string;
  surname: string;
  sex: string;
  country: Country;
  competesIn: DisciplineType[];
  medalWinner: boolean;
  checked:boolean;
}

export class DisciplineType {
  disciplineName: string;
  sportName: string;
  individual: boolean;
  min: number;
  max: number;
}

export class Country {
  countryName: string;
  flagImage: string;
  numberOfAthletes: number;
}


export class GroupPhaseEvent {
  homeTeam: Team;
  awayTeam: Team;
  resultHome: string;
  resultAway: string;
  winner: number;
  time: string;
  date: string;
  location: string;
}

export class IndividualEvent {
  results: Result[];
  goldMedal: Competitor;
  silverMedal: Competitor;
  bronzeMedal: Competitor;
  time: string;
  date: string;
  location: string;
}

export class Result {
  athlete: Competitor;
  result: string;
}

export class Team {
  teamName: string;
  teamMembers: Competitor[];
  groupPoints: number;
  checkedTeam: boolean;
}

export class Sport {
  sportName: string;
  disciplines: Discipline[];
}

export class Discipline {
  discipline: DisciplineType;
  medals: Medal[];
}

export class Medal {
  athlete: Competitor;
  team: Team[];
  country: Country;
  type: string;
}

export interface Record {
  discipline: DisciplineType;
  date: string;
  athleteName: string;
  athleteCountry: Country;
  result: string;
}
