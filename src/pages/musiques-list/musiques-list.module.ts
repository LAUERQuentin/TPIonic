import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusiquesListPage } from './musiques-list';

@NgModule({
  declarations: [
    MusiquesListPage,
  ],
  imports: [
    IonicPageModule.forChild(MusiquesListPage),
  ],
})
export class MusiquesListPageModule {}
