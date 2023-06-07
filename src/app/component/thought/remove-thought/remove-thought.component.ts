import { ActivatedRoute, Router } from '@angular/router';
import { Thought } from '../thought';
import { ThoughtService } from './../thought.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remove-thought',
  templateUrl: './remove-thought.component.html',
  styleUrls: ['./remove-thought.component.scss'],
})
export class RemoveThoughtComponent implements OnInit {

  thought: Thought = {
    id: 0,
    content: '',
    authorship: '',
    model: '',
  };

  constructor(
    private thoughtService: ThoughtService,
    private router: Router,
    private route: ActivatedRoute //gives the parameters
  ) {}

  ngOnInit(): void {
    //snapshot gives the parameters instantanetly
    const id = this.route.snapshot.paramMap.get('id');

    this.thoughtService.findById(parseInt(id!)).subscribe((thought) => {
      this.thought = thought;
    });
  }

  removeThought() {
    this.thoughtService.remove(this.thought.id!).subscribe(() => {
      this.router.navigate(['/listThoughts']);
    });
  }

  cancel() {
    this.router.navigate(['/listThoughts'])
  }
}
