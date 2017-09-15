export class Task {
  constructor(
    public project: string,
    public issue: string,
    public summary: string,
    public points: number,
    public environment: string
  ) { }
}
