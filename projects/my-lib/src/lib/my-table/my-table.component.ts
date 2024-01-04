import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {

  @Input() data?: any;

  constructor() { }

  ngOnInit() {
   console.log('my component works');
  }

}
