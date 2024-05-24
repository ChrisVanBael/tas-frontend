export class ResponseError extends Error {

  public response: Response;

  constructor(message: string, res: Response) {
    super(message);
    this.response = res;
  }
  
}
