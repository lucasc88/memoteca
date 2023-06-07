import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from './../thought.service';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.scss'],
})
export class EditThoughtComponent implements OnInit {

  thought: Thought = {
    id: 0,
    content: '',
    authorship: '',
    model: '',
  };

  constructor(
    private thoughtService: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.thoughtService.findById(parseInt(id!)).subscribe((thought) => {
      this.thought = thought;
    });
  }

  editThought() {
    this.thoughtService.edit(this.thought).subscribe(() => {
      this.router.navigate(['/listThoughts']);
    });
  }

  cancelThought() {
    this.router.navigate(['/listThoughts']);
  }
}
