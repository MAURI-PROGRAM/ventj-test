import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-partial-description',
  templateUrl: './partial-description.component.html',
  styleUrls: ['./partial-description.component.scss'],
})
export class PartialDescriptionComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  description: string;

  constructor() { }

  ngOnInit() {}

}
