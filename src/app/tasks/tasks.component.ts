import { Component, OnInit } from '@angular/core';

import * as listProjects from '../const/projects';
import * as listIssues from '../const/issues';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  private projects = listProjects.PROJECTS;
  private issues = listIssues.ISSUES;

  constructor() { }

  ngOnInit() {
  }

}
