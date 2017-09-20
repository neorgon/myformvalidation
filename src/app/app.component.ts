import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup;
  post: any;
  description: string = '';
  name: string;
  titleAlert:string = 'This field is required';

  constructor(
    private fb: FormBuilder
  ) {
    this.myForm = fb.group({
      'name': [
        null,
        Validators.required
      ],
      'description': [
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(50)
        ])
      ],
      'validate': ''
    });
  }

  addPost(post) {
    this.description = post.description;
    this.name = post.name;
  }

  ngOnInit() {
    this.myForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.myForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'You need to specify at least 3 characters';
        } else {
          this.myForm.get('name').setValidators(Validators.required);
        }
        this.myForm.get('name').updateValueAndValidity();
      });
  }
}
