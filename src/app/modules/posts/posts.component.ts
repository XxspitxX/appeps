import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  model : NgbDateStruct;
  date : {year : number, month : number}
  constructor(private calendar : NgbCalendar) { }


  ngOnInit() {
  }

}
