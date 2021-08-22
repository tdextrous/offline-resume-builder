export interface IExperienceContent {
  id: string;
  content: string;
  itemId: string;
}

export class ExperienceContent implements IExperienceContent {

  constructor(
    private _id: string,
    private _content: string,
    private _itemId: string
  ) { }

  get id(): string {
    return this._id;
  }

  get content(): string {
    return this._content;
  }

  get itemId(): string {
    return this._itemId;
  }
}
