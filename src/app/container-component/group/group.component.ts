import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  addGroup = true;

  constructor(public noteService: NotesService) { }

  ngOnInit() {
  }

  onCreate() {
    this.addGroup = false;
  }
  onCreateGroup(groupTitle: string) {
    this.noteService.createGroup(groupTitle);
  }
}
