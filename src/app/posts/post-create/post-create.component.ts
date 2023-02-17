import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  public enteredValue='Type your thoughts here...';
  public txt = ''
  constructor() {

  }

  // OnAddPost_OneWayDataBinding(txtArea: HTMLInputElement): void {
  //   //console.dir(txtArea);
  //   this.txt = txtArea.value;
  // }

  OnAddPost(): void {
    this.txt = this.enteredValue;
  }
}
