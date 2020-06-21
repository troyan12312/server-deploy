import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-item-text',
  templateUrl: './blog-item-text.component.html',
  styleUrls: ['./blog-item-text.component.scss']
})
export class BlogItemTextComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;
  @Input() id: number;


  constructor() { }

  ngOnInit() {
  }

}
