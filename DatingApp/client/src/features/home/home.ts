import { Component, Input, signal } from '@angular/core';
import { Resgister } from "../account/resgister/resgister";
import { User } from '../../types/user';
import { required } from '@angular/forms/signals';

@Component({
  selector: 'app-home',
  imports: [Resgister],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected registerMode = signal(false);

  showRegister(value: boolean){
    this.registerMode.set(value);
  }
}
