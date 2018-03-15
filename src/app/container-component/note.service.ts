import { Note, Group } from '../models/note.model';
import { EventEmitter } from '@angular/core';

export class NoteService {

  // emit my Note[]
  notesChanged = new EventEmitter<Note[]>();

  // manage our note list in the service
  // we make it private so we can't access it from outside
  private notes: Note[] = [];
  private noteId = 0;
  showNotes = false;
  private groups: Group[] = [];

  // make a method to access it from outside.
  // I call slice to return an exact copy of the first array
  getNotes() {
    return this.notes.slice();
  }

  getGroups() {
    return this.groups;
  }

  getNoteId() {
    return this.noteId;
  }

  getShowNotes() {
    return this.showNotes;
  }



  // I emit the copy of the original array
  createNote(noteTitle, noteDescription) {
    this.noteId += 1;
    const note = new Note();
    note.id = this.noteId;
    note.title = noteTitle;
    note.description = noteDescription;
    this.notes.push(note);
    this.notesChanged.emit(this.notes.slice());
    this.showNotes = true;
    console.log(this.notes);
  }

  setCompleted(note, group) {
    const groupSel = this.groups.find(c => c.id === group.id);
    const noteIndex = groupSel.notes.findIndex(c => c.id === note.id);

    groupSel.notes.splice(noteIndex, 1);
  }

  setRemoved(note, group) {
    const groupSel = this.groups.find(c => c.id === group.id);
    const noteIndex = groupSel.notes.findIndex(c => c.id === note.id);

    groupSel.notes.splice(noteIndex, 1);
  }
}
