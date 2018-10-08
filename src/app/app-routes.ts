import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { EditorComponent } from './modules/fattura-elettronica/editor/editor.component';
import { UploadComponent } from './upload/upload.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'compila', component: EditorComponent },
    { path: 'carica', component: UploadComponent },
];
