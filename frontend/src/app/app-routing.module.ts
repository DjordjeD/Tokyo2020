import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSportComponent } from './add-sport/add-sport.component';
import { AddTournamentComponent } from './add-tournament/add-tournament.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CountriesRepresentComponent } from './countries-represent/countries-represent.component';
import { EditTournamentComponent } from './edit-tournament/edit-tournament.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { MedalsRepresentComponent } from './medals-represent/medals-represent.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
