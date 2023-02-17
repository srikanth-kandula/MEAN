import { Component } from "@angular/core";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent {

  posts = [
    { title: 'firstPost', content: 'this is the first post' },
    { title: 'secondPost', content: 'this is the second post' },
    { title: 'thirdPost', content: 'this is the third post' }
  ]

}
