import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusiquesNewPage } from './musiques-new';

@NgModule({
  declarations: [
    MusiquesNewPage,
  ],
  imports: [
    IonicPageModule.forChild(MusiquesNewPage),
  ],
})
export class MusiquesNewPageModule {}
