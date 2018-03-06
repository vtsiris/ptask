import { Component, OnInit, Input } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { Group } from '../../models/note.model';



@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  addNote = true;
  groups: Group[] = [];

  constructor(public noteService: NotesService) { }

  ngOnInit() {
    this.groups = this.noteService.groups;
  }

  onAddNote() {
    this.addNote = false;
  }

  onCreateNote(postTitle: string, postDescription: string) {
    this.noteService.createNote(postTitle, postDescription);
  }

}
