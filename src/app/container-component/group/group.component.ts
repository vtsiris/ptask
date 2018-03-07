import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

addGroup = true;
@Output() createGroup = new EventEmitter;

  constructor(public noteService: NotesService) { }

  ngOnInit() {
  }

  onAddGroup() {
    this.addGroup = false;
  }

  onCreateGroup(groupTitle: string) {
    this.createGroup.emit(groupTitle);
  }

}
