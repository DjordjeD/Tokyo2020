import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { HomePageComponent } from './home-page/home-page.component';
import {MatMenuModule} from '@angular/material/menu';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component'
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { OrganizerComponent } from './organizer/organizer.component';
import { MedalsRepresentComponent } from './medals-represent/medals-represent.component';
import { CountriesRepresentComponent } from './countries-represent/countries-represent.component'
import {MatGridListModule} from '@angular/material/grid-list';
import { AddSportComponent } from './add-sport/add-sport.component';
import { AddTournamentComponent } from './add-tournament/add-tournament.component';
import { EditTournamentComponent } from './edit-tournament/edit-tournament.component';
import { RecordsComponent } from './records/records.component';
import { NationalDelegationComponent } from './national-delegation/national-delegation.component';
import { DelegatePageComponent } from './delegate-page/delegate-page.component';
import {MatCheckbox, MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepicker, MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { OverviewSportsComponent } from './overview-sports/overview-sports.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { OverviewAthletesBySportComponent } from './overview-athletes-by-sport/overview-athletes-by-sport.component';
//import {NgbdTableCompleteModule} from './app/table-complete.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { OverviewDisciplinesComponent } from './overview-disciplines/overview-disciplines.component';
import { ViewAthletesByDisciplineComponent } from './view-athletes-by-discipline/view-athletes-by-discipline.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, RegisterComponent, LoginComponent, ChangePasswordComponent, OrganizerComponent, MedalsRepresentComponent, CountriesRepresentComponent, AddSportComponent, AddTournamentComponent, EditTournamentComponent, RecordsComponent, NationalDelegationComponent, DelegatePageComponent, OverviewSportsComponent, AddTeamComponent, OverviewAthletesBySportComponent, OverviewDisciplinesComponent, ViewAthletesByDisciplineComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatGridListModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatTableModule
   
    //NgbdTableCompleteModule
   
 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
