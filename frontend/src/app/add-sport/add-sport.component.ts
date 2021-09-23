import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompetitorService } from '../competitor.service';
import { Sport } from '../models/models';
import { SportService } from '../sport.service';

@Component({
  selector: 'app-add-sport',
  templateUrl: './add-sport.component.html',
  styleUrls: ['./add-sport.component.css']
})
export class AddSportComponent implements OnInit {

  constructor(
    private router: Router,
    private competitorService: CompetitorService,
    private sportService: SportService,
    
  ) {}

 
  sports: Sport[];
 

  sportName: string;
 

  nameFormControl = new FormControl('',Validators.required);

  addSport(){
    this.sportService.addSport(this.nameFormControl.value).subscribe((msg: any) => {

      console.log(msg);
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/addSport']);
      
    })
  }


  back(): void {
    this.router.navigate(['/organizer'])
  }
  ngOnInit(): void {

    this.sportService.getAllSports().subscribe((sports: Sport[])=>{

      this.sports = sports;
    })
  }

}
