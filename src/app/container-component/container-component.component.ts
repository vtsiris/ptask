import { Component, OnInit, group } from '@angular/core';
import {Note, Group} from '../models/note.model';

@Component({
  selector: 'app-container-component',
  templateUrl: './container-component.component.html',
  styleUrls: ['./container-component.component.css']
})
export class ContainerComponentComponent implements OnInit {

  showGroups = false;
  showGroupsCreation = false;
  addNote = true;
  note = false;
  notes: Note[] = [];
  noteId = 0;
  groups: Group[] = [];
  groupId = 0;
  completedNotes = 0;

  constructor() { }

  ngOnInit() {

  }


    onAddNoteEmitter() {
      this.addNote = false;
      this.showGroups = true;
    }

  onCreateGroup(groupTitle: string) {
    this.groupId += 1;

    const nGroup = new Group();
    nGroup.id = this.groupId;
    nGroup.name = groupTitle;
    nGroup.notes = [];
    this.groups.push(nGroup);
    this.showGroupsCreation = true;
    console.log(groupTitle);
  }

  onCreateNote(obje: any) {
    this.noteId += 1;
    const note = new Note();
    note.id = this.noteId;
    note.title = obje.noteTitle;
    note.description = obje.noteDescription;
    this.notes.push(note);
    this.note = true;
    console.log(this.notes);
  }


  onAddNoteToGroup(obje: any) {
   const groupSel = this.groups.find(c => c.id === obje.group.id);
   const note = new Note();
    note.id = obje.note.id;
    note.title = obje.note.title;
    note.description = obje.note.description;
   groupSel.notes.find(x => x.id === note.id) ? alert('You have already selected this group!!') : groupSel.notes.push(note) ;
  }

  onSetCompleted(obje: any) {
    this.completedNotes += 1;
    const groupSel = this.groups.find(c => c.id === obje.group.id);
    const noteIndex = groupSel.notes.findIndex(c => c.id === obje.note.id);

    groupSel.notes.splice(noteIndex, 1);
  }

  onSetRemoved(obje: any) {
    const groupSel = this.groups.find(c => c.id === obje.group.id);
    const noteIndex = groupSel.notes.findIndex(c => c.id === obje.note.id);
    groupSel.notes.splice(noteIndex, 1);

  }
}
