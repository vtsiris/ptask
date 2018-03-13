import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { Group } from '../../models/note.model';



@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  noteTitle = '';
  noteDescription = '';
  @Output() createNote = new EventEmitter;
  @Input() addNote: boolean;



  constructor() {   }

  ngOnInit() {

  }


  onCreateNote(noteTitle: string, noteDescription: string) {
    this.createNote.emit({noteTitle, noteDescription});
    this.noteTitle = '';
    this.noteDescription = '';
  }

}
