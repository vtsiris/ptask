import { Component, OnInit } from '@angular/core';
import {Note, Group, GroupNote} from '../models/note.model';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-container-component',
  templateUrl: './container-component.component.html',
  styleUrls: ['./container-component.component.css']
})
export class ContainerComponentComponent implements OnInit {


  constructor() { }

  ngOnInit() {

  }

}
