import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  public enteredTitle = 'Type post title here';
  public enteredContent='Type post content here...';

  public txt = '';
  @Output() postCreated = new EventEmitter<Post>();

  constructor() {

  }

  // OnAddPost_OneWayDataBinding(txtArea: HTMLInputElement): void {
  //   //console.dir(txtArea);
  //   this.txt = txtArea.value;
  // }

  OnAddPost(): void {
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    }
    this.postCreated.emit(post)
  }
}
