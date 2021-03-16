import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MusiqueProvider } from '../../providers/musique/musique';

/**
 * Generated class for the MusiquesNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-musiques-new',
  templateUrl: 'musiques-new.html',
})
export class MusiquesNewPage {

  public musique: any = {
    album: null,
    artiste: null,
    nb_musique: null,
    nb_vente: null,
    style: null,
    image: null
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private Musique: MusiqueProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusiquesNewPage');
  }

  onAdd(){
    this.Musique.saveNewMusique(this.musique).subscribe(() => {
      this.musique = {
        album: null,
        artiste: null,
        nb_musique: null,
        nb_vente: null,
        style: null,
        image: null
      };
      this.navCtrl.pop();
    })
  }

}
