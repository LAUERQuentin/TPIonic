import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs';
import { MusiqueProvider } from '../../providers/musique/musique';
import { MusiquesNewPage } from '../musiques-new/musiques-new';
import { MusiquesPage } from './musiques/musiques';

/**
 * Generated class for the MusiquesListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-musiques-list',
  templateUrl: 'musiques-list.html',
})
export class MusiquesListPage implements OnInit {

  public musiques:any = [];
  musiqueSubscription: Subscription;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public Musique: MusiqueProvider
    ) {
  }
  ngOnInit(): void {
    this.musiqueSubscription = this.Musique.musiqueSubject.subscribe((listMusique) => {
      this.musiques = listMusique;
    })
  }

  onGoToCreate()
  {
    this.navCtrl.push(MusiquesNewPage); 
  }

  onGoToMusique(musiqueAlbum:string, id:number)
  {
    this.navCtrl.push(MusiquesPage, {album: musiqueAlbum, id: id}); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusiquesListPage');
  }

}
