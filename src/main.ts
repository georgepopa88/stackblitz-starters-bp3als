import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from './app/app.module';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, AppModule],
  template: `<my-smart-input></my-smart-input>`,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
