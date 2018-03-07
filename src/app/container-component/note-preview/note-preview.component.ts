import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { Note, Group } from '../../models/note.model';
import { ContainerComponentComponent } from '../container-component.component';

@Component({
  selector: 'app-note-preview',
  templateUrl: './note-preview.component.html',
  styleUrls: ['./note-preview.component.css']
})
export class NotePreviewComponent implements OnInit {

  @Input() notes: Note[];
  @Input() groups: Group[];

  @Output() addGroup = new EventEmitter;

  // optionsModel: number[];
  // myOptions: IMultiSelectOption[];

  constructor() { }

  ngOnInit() {
    // this.myOptions = this.groups;
  }

  onChange() {
    // console.log(this.optionsModel);
}

onAddGroup(note: Note, group: Group) {
  this.addGroup.emit({note, group});
}
}
