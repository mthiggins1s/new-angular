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

  get imagePath() { // this creates a 'getter'; a function within a class thats usable like a property, so it doesn't need to be called and executed explicitly.
    return './assets/users/' + this.selectedUser.avatar // we add 'this.'; this is how you access properties within the same class. (we use this. to access the userComponent class, from which this getter belongs.)
  }

  onSelectUser() {
   // console.log('clicked!'); logs 'Clicked!' in the console when the user button is clicked on the page.
   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length) // this will change the button img id when the button is clicked.
   this.selectedUser = DUMMY_USERS[randomIndex];
  }
}

// Notes
  // Zone.js (zone); notifies Angular about user events, experied timers, etc.