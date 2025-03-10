import { Component } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length) // this will give me a random number between 0 and the highest available index in the array.

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html', // we can now access selectedUser through this template. All properties being defined in the component class will be available in the template of the component.
  styleUrl: './user.component.css'
})
export class UserComponent { // we can add data that will be inputted on the screen.
  selectedUser = DUMMY_USERS[randomIndex]; // square brackets allow us to target random user id's.
}
