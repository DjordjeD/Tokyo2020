import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Record } from '../models/models';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  constructor(private recordService:RecordsService, private router:Router) { }

  ngOnInit(): void {

    this.recordService.getAllRecords().subscribe((records:Record[]) => {
      this.records=records;
    })
  }
  records:Array<Record>

  back(): void {
    this.router.navigate(['/organizer'])
  }

  home(){
    this.router.navigate([''])
  }
}
