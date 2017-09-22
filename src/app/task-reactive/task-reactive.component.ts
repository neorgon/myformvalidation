import { Component, OnInit }                  from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { forbiddenValidator } from '../shared/forbidden.directive';
import { PROJECTS } from '../const/projects';
import { ISSUES } from '../const/issues';

@Component({
  selector: 'app-task-reactive',
  templateUrl: './task-reactive.component.html'
})
export class TaskReactiveComponent implements OnInit {

  projects = PROJECTS;
  issues = ISSUES;
  task = { project: this.projects[0], issue: this.issues[0], summary: '', points: 1, environment: '' };

  TaskForm: FormGroup;

  ngOnInit(): void {
    console.log('OnInit task: ', this.task);
    this.TaskForm = new FormGroup({
      'project': new FormControl(this.task.project, Validators.required),
      'issue': new FormControl(this.task.issue, Validators.required),
      'summary': new FormControl(this.task.summary, Validators.required),
      'points': new FormControl(this.task.points),
      'environment': new FormControl(this.task.environment, [
        Validators.required,
        forbiddenValidator(/dev/i)
      ]),
    });
  }

  get project() { return this.TaskForm.get('project'); }
  get issue() { return this.TaskForm.get('issue'); }
  get summary() { return this.TaskForm.get('summary'); }
  get points() { return this.TaskForm.get('points'); }
  get environment() { return this.TaskForm.get('environment'); }
}
