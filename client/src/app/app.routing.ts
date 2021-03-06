﻿import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_guards/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { LogoutComponent } from './logout/index';
import { RegisterComponent,VerificationComponent } from './register/index';
import { ProfileComponent } from './profile/index';
import { SearchComponent} from './search/index';
import { ContactUsComponent, AboutUsComponent, FAQsComponent} from './foundation/index';

const appRoutes: Routes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'search', component: SearchComponent },
    { path: 'contactus', component: ContactUsComponent },
    { path: 'faqs', component: FAQsComponent },
    { path: 'aboutus', component: AboutUsComponent },
    { path: 'verification', component: VerificationComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
