export interface IExperienceItem {
  id: string;
  heading: string;
  location: string;
  subheading: string;
  startDate: Date | null;
  endDate: Date | null;
  sectionId: string;
}

export class ExperienceItem implements IExperienceItem {

  constructor(
    private _id: string,
    private _heading: string,
    private _location: string,
    private _subheading: string,
    private _startDate: Date | null,
    private _endDate: Date | null,
    private _sectionId: string
  ) { }

  get id(): string {
    return this._id;
  }

  get heading(): string {
    return this._heading;
  }

  get location(): string {
    return this._location;
  }

  get subheading(): string {
    return this._subheading;
  }

  get startDate(): Date | null {
    return this._startDate;
  }

  get endDate(): Date | null {
    return this._endDate;
  }

  get sectionId(): string {
    return this._sectionId;
  }
}
