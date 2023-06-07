import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';

@Component({
  selector: 'app-thought-list',
  templateUrl: './thought-list.component.html',
  styleUrls: ['./thought-list.component.scss'],
})
export class ThoughtListComponent implements OnInit {

  thoughtList: Thought[] = [];

  constructor() {}

  ngOnInit(): void {}
}
