import { Component } from '@angular/core';

import { PROJECTS } from '../const/projects';
import { ISSUES } from '../const/issues';

@Component({
  selector: 'app-task-template',
  templateUrl: './task-template.component.html'
})
export class TaskTemplateComponent {

  projects = PROJECTS;
  issues = ISSUES;
  task = { project: this.projects[0], issue: this.issues[0], summary: '', points: 1, environment: '' };

}
