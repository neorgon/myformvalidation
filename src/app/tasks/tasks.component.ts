import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import * as listProjects from '../const/projects';
import * as listIssues from '../const/issues';
import { Task } from './tasks';
import { forbiddenNameValidator } from './forbidden-name.directive';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  //@Input() task : Task;

  private projects = listProjects.PROJECTS;
  private issues = listIssues.ISSUES;

  public taskForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  task = new Task('Project 2', 'Bug', 'Tester', 5, 'Dev');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.task);
  }

  ngOnInit() {
    this.taskForm = this.fb.group({
      environment: [
        this.task.environment,
        [
          Validators.required,
          forbiddenNameValidator(/bob/i)
        ]
      ]
    })
  }

}
