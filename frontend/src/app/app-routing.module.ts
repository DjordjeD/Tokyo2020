import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceptUsersComponent } from './accept-users/accept-users.component';
import { AddSportComponent } from './add-sport/add-sport.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { AddTournamentComponent } from './add-tournament/add-tournament.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CountriesRepresentComponent } from './countries-represent/countries-represent.component';
import { DelegatePageComponent } from './delegate-page/delegate-page.component';
import { EditTournamentComponent } from './edit-tournament/edit-tournament.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { MedalsRepresentComponent } from './medals-represent/medals-represent.component';
import { NationalDelegationComponent } from './national-delegation/national-delegation.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { OverviewAthletesBySportComponent } from './overview-athletes-by-sport/overview-athletes-by-sport.component';
import { OverviewDisciplinesComponent } from './overview-disciplines/overview-disciplines.component';
import { OverviewSportsComponent } from './overview-sports/overview-sports.component';
import { RecordsComponent } from './records/records.component';
import { RegisterComponent } from './register/register.component';
import { ViewAthletesByDisciplineComponent } from './view-athletes-by-discipline/view-athletes-by-discipline.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // {
  //   path: 'home',
  //   component: HomePageComponent,
  //   children: [
  //     { path: 'medalsRepresent', component: MedalsRepresentComponent },
  //     { path: 'countriesRepresent', component: CountriesRepresentComponent },
  //   ],
  // },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'changePassword', component: ChangePasswordComponent },
  // {
  //   path: 'organizer',
  //   component: OrganizerComponent,
  //   children: [
  //     { path: 'addSport', component: AddSportComponent },
  //     {
  //       path: 'addTournament',
  //       component: AddTournamentComponent,
  //       children: [
  //         { path: 'editTournament', component: EditTournamentComponent },
  //       ],
  //     },
  //     { path: 'records', component: RecordsComponent },
  //   ],
  // },

  // { path: 'delegatePage', component: DelegatePageComponent },
  // { path: 'nationalDelegation', component: NationalDelegationComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'changePassword', component: ChangePasswordComponent },
  { path:'organizer', component: OrganizerComponent},
  {path:'medalsRepresent',component: MedalsRepresentComponent},
  {path: 'countriesRepresent',component: CountriesRepresentComponent},
  {path: 'addSport', component: AddSportComponent},
  {path:'addTournament', component: AddTournamentComponent},
  {path:'editTournament', component: EditTournamentComponent},
  {path:'records',component: RecordsComponent},
  {path:'delegatePage',component: DelegatePageComponent},
  {path:'nationalDelegation',component: NationalDelegationComponent },
  {path:'overviewSports',component:OverviewSportsComponent},
  {path:'overviewAthletesBySport',component:OverviewAthletesBySportComponent},
  {path:'addTeam',component: AddTeamComponent},
  {path:'overviewDisciplines',component:OverviewDisciplinesComponent},
  {path:'viewAthletesByDiscipline',component:ViewAthletesByDisciplineComponent},
  {path:'acceptUsers',component:AcceptUsersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
