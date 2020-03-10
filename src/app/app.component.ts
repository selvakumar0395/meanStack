import { Component} from '@angular/core';
import { Post } from './post.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meanStack';
  StoredPosts: Post[] = [];
  onPostAdded(post) {
    this.StoredPosts.push(post);
  }
}
