export interface IContactItem {
  id: string;
  content: string;
}

export class ContactItem implements IContactItem {

  constructor(
    private _id: string,
    private _content: string
  ) { }

  get id(): string {
    return this._id;
  }

  get content(): string {
    return this._content;
  }
}
