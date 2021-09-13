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
@NgModule({
  declarations: [AppComponent, HomePageComponent, RegisterComponent, LoginComponent, ChangePasswordComponent, OrganizerComponent, MedalsRepresentComponent, CountriesRepresentComponent],
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
    MatGridListModule
 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
