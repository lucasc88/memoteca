import { ThoughtService } from './../thought.service';
import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.scss'],
})
export class CreateThoughtsComponent implements OnInit {

  thought: Thought = {
    content: '',
    authorship: '',
    model: '',
  };

  constructor(
    private thoughtService: ThoughtService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createThought(){
    this.thoughtService.create(this.thought).subscribe(() => {
      this.router.navigate(['/listThoughts']);
    });
  }

  cancelThought(){
    this.router.navigate(['/listThoughts']);
  }
}
