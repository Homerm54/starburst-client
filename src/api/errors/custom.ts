// TypeScript how to pass error types to this class
// Check https://javascript.plainenglish.io/custom-error-handler-using-nodejs-typescript-2ab744aa4ef7

export abstract class CustomError extends Error{
  abstract statusCode: number;
  code: any;

  constructor(message: string, code: any){
    super(message);
    this.code = code;
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): {
      message: string,
      field?: string
  } [];
}
