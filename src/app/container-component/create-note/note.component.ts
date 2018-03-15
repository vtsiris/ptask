import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { Group, Note } from '../../models/note.model';
import { NoteService } from '../note.service';



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
  @Input() notes: Note[];



  constructor(private noteService: NoteService) {   }

  ngOnInit() {

  }


  onCreateNote(noteTitle: string, noteDescription: string) {
    this.noteService.createNote(noteTitle, noteDescription);
    // this.createNote.emit({noteTitle, noteDescription});
    this.noteTitle = '';
    this.noteDescription = '';
  }

}
