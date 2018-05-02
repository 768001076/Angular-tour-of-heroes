import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  public messages: string[] = [];

  add(message: string): void {
    this.messages.push(message);
  }
  clear(): void {
    this.messages = [];
  }

  constructor() { }

}
