import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from './../thought.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.scss'],
})
export class EditThoughtComponent implements OnInit {

  form!: FormGroup;

  thought: Thought = {
    id: 0,
    content: '',
    authorship: '',
    model: '',
  };

  constructor(
    private thoughtService: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.thoughtService.findById(parseInt(id!)).subscribe((thought) => {
      this.thought = thought;

      this.form = this.formBuilder.group({
        id: [this.thought.id, [Validators.required]],
        content: [this.thought.content, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ])],
        authorship: [this.thought.authorship, Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        model: [this.thought.model, [Validators.required]]
      });

    });
  }

  editThought() {
    if(this.form.valid){
      this.thoughtService.edit(this.form.value).subscribe(() => {
        this.router.navigate(['/listThoughts']);
      });
    }
  }

  cancelThought() {
    this.router.navigate(['/listThoughts']);
  }

  activeButton(): string {
    if(this.form.valid){
      return 'botao';
    }
    return 'botao__desabilitado';
  }
}
