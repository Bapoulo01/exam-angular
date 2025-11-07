import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Appro } from './pages/appro/appro';
import { ApproNew } from './pages/appro-new/appro-new';


export const routes: Routes = [
    {
        path: 'appro',
        component: Appro,
    },
     {
        path: 'appro-new',
        component: ApproNew,
    },

];
