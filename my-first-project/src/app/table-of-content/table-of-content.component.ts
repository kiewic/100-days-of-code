import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-of-content',
  templateUrl: './table-of-content.component.html',
  styleUrls: ['./table-of-content.component.css']
})
export class TableOfContentComponent implements OnInit {
  title = 'My #100DaysOfCode project';

  constructor() { }

  ngOnInit(): void {
  }

}
