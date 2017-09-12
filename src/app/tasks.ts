export class Tasks {

  constructor(
    public id: number,
    public project: string,
    public issue: string,
    public summary: string,
    public points: number,
    public environment: string
  ) { }

}
