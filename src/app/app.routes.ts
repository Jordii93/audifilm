import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PersonListComponent } from './person-list/person-list.component';
import { FavoritesModalComponent } from './favorites-modal/favorites-modal.component';

export const routes: Routes = [
    {path:'person-list', component: PersonListComponent},
    {path:'favorites', component:FavoritesModalComponent},
    {path:'', redirectTo: '/person-list', pathMatch: 'full'}
];
