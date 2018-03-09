import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GroupComponent } from '../group/group.component';
import { Group, Note } from '../../models/note.model';

@Component({
  selector: 'app-groupnote',
  templateUrl: './groupnote.component.html',
  styleUrls: ['./groupnote.component.css']
})
export class GroupnoteComponent implements OnInit {

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSetComplete = new EventEmitter;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSetRemove = new EventEmitter;
  @Input() groups: Group[];

  constructor() { }

  ngOnInit() {
  }

 readColor(color, groupid) {
  console.log(groupid, color);
 this.groups.find(x => x.id === groupid).color = color;
 }

 setCompleted(note: Note, group: Group) {
  this.onSetComplete.emit({note, group});
 }

 setRemove(note: Note, group: Group) {
  this.onSetRemove.emit({note, group});
 }
}
