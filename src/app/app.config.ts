import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {AngularFireModule } from '@angular/fire/compat';
import {AngularFireDatabaseModule } from '@angular/fire/compat/database';
import {AngularFirestoreModule    } from '@angular/fire/compat/firestore';



export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    importProvidersFrom([
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireModule,
      AngularFireDatabaseModule
    ])     
    
  ],
  
};
