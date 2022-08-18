import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CommentInterface} from "../../interfaces/comment.interface";
import {DataService} from "../../service/data.service";

@Component({
  selector: 'app-comments-block',
  templateUrl: './comments-block.component.html',
  styleUrls: ['./comments-block.component.scss']
})
export class CommentsBlockComponent implements OnInit {

  comments: CommentInterface[] = [];
  // @ts-ignore
  commentsForm: FormGroup;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getComments().subscribe(data => {
      this.comments = data;
      console.log(this.comments);
    })

    this.commentsForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'content': new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    this.service.addComments(this.commentsForm.getRawValue()).subscribe(() => {
      this.commentsForm.reset();
    })
  }

}
