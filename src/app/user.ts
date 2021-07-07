 //Object listed here as defined on the JSON API
 
 export class User {
    constructor(
      public active: boolean,
      public age: number,
      public createdAt: string,
      public firstName: string,
      public id: number,
      public lastName: string,
      public stateOfOrigin: string
    ) {
    }
    
  }