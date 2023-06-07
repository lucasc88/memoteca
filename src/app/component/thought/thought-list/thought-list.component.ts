import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from './../thought.service';

@Component({
  selector: 'app-thought-list',
  templateUrl: './thought-list.component.html',
  styleUrls: ['./thought-list.component.scss'],
})
export class ThoughtListComponent implements OnInit {

  thoughtList: Thought[] = [];

  constructor(private thoughtService: ThoughtService) {}

  //when the component is loaded, ngOnInit is executed
  ngOnInit(): void {
    this.thoughtService.getThoughs().subscribe((thoughts) => {
      this.thoughtList = thoughts;
  });
  }
}
