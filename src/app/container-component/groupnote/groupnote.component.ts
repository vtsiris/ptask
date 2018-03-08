import { Component, OnInit, Input } from '@angular/core';
import { GroupComponent } from '../group/group.component';
import { GroupNote } from '../../models/note.model';

@Component({
  selector: 'app-groupnote',
  templateUrl: './groupnote.component.html',
  styleUrls: ['./groupnote.component.css']
})
export class GroupnoteComponent implements OnInit {

  @Input() groupnotes: GroupNote[];


  constructor() { }

  ngOnInit() {
  }

  // readColor(value) {
  //   this.color = value.srcElement.style['background-color'];
  //   console.log(value.srcElement.stylep['bacgkround-color']);
  // }

}
