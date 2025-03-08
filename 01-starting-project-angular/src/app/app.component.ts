import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component"; // unlocked through imports

@Component({ // this is a 'decorator'; a ts feature that adds metadata to the thing its attached to. Angular uses this to add extra metadata to the class. We are importing this from the Angular framework core package.
  selector: 'app-root', // tells Angular what elements it should look for so they can be replaced by this component and its markup (stored in templateUrl).
  standalone: true,
  imports: [HeaderComponent], // works together with the standalone property.
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {} // this is what it being imported to the bootstrap application in the main.ts file.
