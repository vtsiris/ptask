import { Component, OnInit } from '@angular/core';
import {Note, Group, GroupNote} from '../models/note.model';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-container-component',
  templateUrl: './container-component.component.html',
  styleUrls: ['./container-component.component.css']
})
export class ContainerComponentComponent implements OnInit {

  showGroups = false;
  groups = [];

  constructor(private noteService: NotesService) { }

  ngOnInit() {
    this.groups = this.noteService.groups.map(x => {
      return {id: x.id, name: x.label};
    });
  }

  onCreateGroup(groupTitle: string) {
    this.noteService.createGroup(groupTitle);
    this.groups = this.noteService.groups;
  }

  onCreateNote(obje: any) {
    this.noteService.createNote(obje.postTitle, obje.postDescription);
  }

  onAddNoteEmitter() {
 this.showGroups = true;
  }


}
