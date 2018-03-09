export class Group {
  id: number;
  name: string;
  color: string;
  notes: Note[];
}

export class Note {
  id: number;
  title: string;
  description: string;
}

// export class GroupNote {
//   group: Group;
//   note: Note;
// }
