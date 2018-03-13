import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GroupComponent } from '../create-group/group.component';
import { Group, Note } from '../../models/note.model';

@Component({
  selector: 'app-groupnote',
  templateUrl: './groupnote.component.html',
  styleUrls: ['./groupnote.component.css']
})
export class GroupnoteComponent implements OnInit {

  @Output() setCompleted = new EventEmitter;
  @Output() setRemoved = new EventEmitter;
  @Input() groups: Group[];

  constructor() { }

  ngOnInit() {
  }

 readColor(color, groupid) {
  console.log(groupid, color);
 this.groups.find(x => x.id === groupid).color = color;
 }

 setComplete(note: Note, group: Group) {
  this.setCompleted.emit({note, group});
 }

 setRemove(note: Note, group: Group) {
  this.setRemoved.emit({note, group});
 }
}
