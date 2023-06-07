import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thought-list',
  templateUrl: './thought-list.component.html',
  styleUrls: ['./thought-list.component.scss'],
})
export class ThoughtListComponent implements OnInit {

  thoughtList = [
    {
      content: 'Angular is so nice',
      authorship: 'Jhon',
      model: 'modelo2',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
