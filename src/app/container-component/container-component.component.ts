import { Component, OnInit, group } from '@angular/core';
import {Note, Group, GroupNote} from '../models/note.model';

@Component({
  selector: 'app-container-component',
  templateUrl: './container-component.component.html',
  styleUrls: ['./container-component.component.css']
})
export class ContainerComponentComponent implements OnInit {

  showGroups = false;
  notes: Note[] = [];
  noteId = 0;
  groups: Group[] = [];
  groupId = 0;
  groupnotes: GroupNote[] = [];

  constructor() { }

  ngOnInit() {

  }

  onCreateGroup(groupTitle: string) {
    this.groupId += 1;
    this.groups.push({id: this.groupId, name: groupTitle});
    console.log(groupTitle);
  }

  onCreateNote(obje: any) {
    this.noteId += 1;
    this.notes.push({id: this.noteId, title: obje.postTitle, description: obje.postDescription});
    console.log(this.notes);
  }

  onAddNoteEmitter() {
 this.showGroups = true;
  }

  // tslint:disable-next-line:no-shadowed-variable
  onAddGroup(note: Note, group: Group) {
    this.groupnotes.push({group: group, note: note});
    console.log(this.groupnotes);
  }

}
