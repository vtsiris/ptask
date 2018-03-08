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
    // tslint:disable-next-line:no-shadowed-variable
    const group = new Group();
    group.id = this.groupId;
    group.name = groupTitle;
    this.groups.push(group);
    // this.groups.push({id: this.groupId, name: groupTitle});
    console.log(groupTitle);
  }

  onCreateNote(obje: any) {
    this.noteId += 1;
    const note = new Note();
    note.id = this.noteId;
    note.title = obje.postTitle;
    note.description = obje.postDescription;
    this.notes.push(note);
    // this.notes.push({id: this.noteId, title: obje.postTitle, description: obje.postDescription});
    console.log(this.notes);
  }

  onAddNoteEmitter() {
 this.showGroups = true;
  }


  onAddGroup(obje: any) {
    // obje.note.group = obje.group;
    this.groupnotes.push({group: obje.group, note: obje.note});
    console.log(this.notes);
  }


}
