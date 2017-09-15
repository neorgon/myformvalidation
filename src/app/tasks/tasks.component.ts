import { Component, OnInit } from '@angular/core';

import * as listProjects from '../const/projects';
import * as listIssues from '../const/issues';
import { Task } from './tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  private projects = listProjects.PROJECTS;
  private issues = listIssues.ISSUES;

  constructor() { }

  model = new Task('Project 2', 'Bug', 'Tester', 5, 'Dev');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  ngOnInit() {
  }

}
