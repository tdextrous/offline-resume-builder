export interface IResume {
  id: string;
  title: string;
  contactItems: string[];
  sections: string[];
  items: string[];
  content: string[];
}

export class Resume implements IResume {

  constructor(
    private _id: string,
    private _title: string,
    private _contactItems: string[],
    private _sections: string[],
    private _items: string[],
    private _content: string[],
  ) { }

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get contactItems(): string[] {
    return this._contactItems;
  }

  set contactItems(newVal: string[]) {
    this._contactItems = newVal;
  }

  get sections(): string[] {
    return this._sections;
  }

  get items(): string[] {
    return this._items;
  }

  get content(): string[] {
    return this._content;
  }
}
