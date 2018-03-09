import { Component, OnInit, group } from '@angular/core';
import {Note, Group} from '../models/note.model';

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
  completedNotes = 0;

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
    console.log(groupTitle);
  }

  onCreateNote(obje: any) {
    this.noteId += 1;
    const note = new Note();
    note.id = this.noteId;
    note.title = obje.postTitle;
    note.description = obje.postDescription;
    this.notes.push(note);
    console.log(this.notes);
  }

  onAddNoteEmitter() {
 this.showGroups = true;
  }


  onAddNoteToGroup(obje: any) {
   const groupSel = this.groups.find(c => c.id === obje.group.id);
   console.log('onAddNoteToGroup' + groupSel);
    const note = new Note();
    note.id = obje.note.id;
    note.title = obje.note.title;
    note.description = obje.note.description;
    groupSel.notes.push(note);


    // if (groupSel.notes.findIndex(c => c.id === obje.note.id) < 0 ) {
    //   groupSel.notes.push(obje.note);
    // }

  }

  onSetCompleted(obje: any) {
    this.completedNotes += 1;
    const groupSel = this.groups.find(c => c.id === obje.group.id);
    groupSel.notes.splice(obje.note.id, 1);
  }

  onSetRemoved(obje: any) {
    const groupSel = this.groups.find(c => c.id === obje.group.id);
    groupSel.notes.splice(obje.note.id, 1);

    // const noteSel = groupSel.notes.find(c => c.id === obje.note.id);
    // groups.find(c => c.id === obje.group.id).notes.find(c => c.id === obje.note.id);
  }
}
