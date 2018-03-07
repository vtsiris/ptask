export class Note {
  id: number;
  title: string;
  description: string;
}

export class Group {
  id: number;
  label: string;
}

export class GroupNote {
  group: Group;
  note: Note;
}
