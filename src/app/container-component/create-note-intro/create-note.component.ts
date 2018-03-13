import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  @Output() addNoteEmitter = new EventEmitter;
  @Input() addNote: boolean;

  constructor() { }

  ngOnInit() {
  }
  onAddNote() {
    this.addNoteEmitter.emit();
  }
}
