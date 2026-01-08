import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { ClassesComponent } from './pages/classes.component';
import { TrainersComponent } from './pages/trainers.component';
import { MembershipComponent } from './pages/membership.component';
import { ContactComponent } from './pages/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'trainers', component: TrainersComponent },
  { path: 'membership', component: MembershipComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
