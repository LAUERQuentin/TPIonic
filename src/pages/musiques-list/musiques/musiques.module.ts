import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusiquesPage } from './musiques';

@NgModule({
  declarations: [
    MusiquesPage,
  ],
  imports: [
    IonicPageModule.forChild(MusiquesPage),
  ],
})
export class MusiquesPageModule {}
