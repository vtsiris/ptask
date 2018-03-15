import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Group } from '../../models/note.model';
import { NoteService } from '../note.service';

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

  // completedNotes: number;

  addGroup = true;

  constructor(public noteService: NoteService) { }

  ngOnInit() {
    // this.completedNotes = this.noteService.getCompletedNotes();
  }

  onAddGroup() {
    this.addGroup = false;
  }

  onCreateGroup(groupTitle: string) {
    this.createGroup.emit(groupTitle);
    this.groupTitle = '';
  }

}
