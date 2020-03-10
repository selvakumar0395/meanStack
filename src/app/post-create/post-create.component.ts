import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredValue = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddPost() {
  const addPost = {
    title: this.enteredValue,
    content: this.enteredContent
  };
  this.postCreated.emit(addPost);
  }
}
