export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
}

export class User implements IUser {

  constructor(
    private _id: string,
    private _firstName: string,
    private _lastName: string
  ) { }

  get id(): string {
    return this._id;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }
}
