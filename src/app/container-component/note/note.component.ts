import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { Group } from '../../models/note.model';



@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Output() createNote = new EventEmitter;
  @Output() addNoteEmitter = new EventEmitter;

  addNote = true;


  constructor() {   }

  ngOnInit() {

  }

  onAddNote() {
    this.addNote = false;
    this.addNoteEmitter.emit();
  }

  onCreateNote(postTitle: string, postDescription: string) {
    this.createNote.emit({postTitle, postDescription});
  }

}
