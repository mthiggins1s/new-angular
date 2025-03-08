// Naming Convention for this file.
  // header; name that descibes the job of the file
  // component; name of what will be stored in the file.

import { Component } from "@angular/core"; // this gets added by targeting the component (below).

@Component({  // added by using this.
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {}