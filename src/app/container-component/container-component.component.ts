import { Component, OnInit, group } from '@angular/core';
import {Note, Group} from '../models/note.model';
import { NoteService } from './note.service';

@Component({
  selector: 'app-container-component',
  templateUrl: './container-component.component.html',
  styleUrls: ['./container-component.component.css']
})
export class ContainerComponentComponent implements OnInit {

  showGroups = false;
  showGroupsCreation = false;
  addNote = true;
  showNotes: boolean;
  // showNotes = false;
  notes: Note[];
  noteId: number;
  // groups: Group[] = [];
  groups: Group[];
  groupId = 0;
  completedNotes = 0;



  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.notes = this.noteService.getNotes();
    this.noteId = this.noteService.getNoteId();
    this.showNotes = this.noteService.getShowNotes();
    this.noteService.notesChanged
    .subscribe(
      (notes: Note[]) => {
        this.notes = notes;
      }
    );
    this.groups = this.noteService.getGroups();
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


  onAddNoteToGroup(obje: any) {
   const groupSel = this.groups.find(c => c.id === obje.group.id);
   const note = new Note();
    note.id = obje.note.id;
    note.title = obje.note.title;
    note.description = obje.note.description;
   groupSel.notes.find(x => x.id === note.id) ? alert('You have already selected this group!!') : groupSel.notes.push(note) ;
  }

  createNote(obje: any) {
    const noteTitle = obje.noteTitle;
    const noteDescription = obje.noteDescription;
    this.noteService.createNote(noteTitle, noteDescription);
  }

  setCompleted(obje: any) {
    this.completedNotes += 1;
    const note = obje.note;
    const group_ = obje.group;
    this.noteService.setCompleted(note, group_);
  }

  setRemoved(obje: any) {
    const note = obje.note;
    const group_ = obje.group;
    this.noteService.setRemoved(note, group_);
  }

}
