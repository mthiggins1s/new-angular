import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err)); // typically, you only call the bootstrapApplication once, with the one main root component, and then use other components in that template.
