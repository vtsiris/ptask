import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Group } from '../../models/note.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

@Input() completedNotes: number;
@Input() groups: Group[];
@Output() createGroup = new EventEmitter;
groupTitle = '';

addGroup = true;

  constructor() { }

  ngOnInit() {
  }

  onAddGroup() {
    this.addGroup = false;
  }

  onCreateGroup(groupTitle: string) {
    this.createGroup.emit(groupTitle);
    this.groupTitle = '';
  }

}
