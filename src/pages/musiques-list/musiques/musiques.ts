import { Component, OnInit } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MusiqueProvider } from '../../../providers/musique/musique';

/**
 * Generated class for the MusiquesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-musiques',
  templateUrl: 'musiques.html',
})
export class MusiquesPage implements OnInit {

  public modif: boolean = false;
  public album: string;
  public id: string;
  public musique: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private Musique : MusiqueProvider,
    private Toast: ToastController
    ) {
  }
  
  ngOnInit(): void {
    this.album = this.navParams.get('album');
    this.id = this.navParams.get('id');
    this.musique = this.Musique.getMusiqueById(this.id)  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusiquesPage');
  }

  onModif(){
    this.Musique.update(this.musique.data, this.musique.id).subscribe(()=>{
      const toast = this.Toast.create({
        message: 'Vos changelent ont été sauvegardées',
        duration: 2000
      })
      toast.present();
      this.modif = false
    })
  }

  onGoAccessModif(){
    let alert = this.alertCtrl.create({
      title:"Etes-vous sur de vouloir modifier ?",
      subTitle: 'Vous rendrez possible la modification',
      buttons: [
        {
          text: 'Annuler',
          role: 'Cancel'
        },
        {
          text:'Confimer',
          handler: () => {
            this.modif = !this.modif;
          }
       }
      ]
    })
    alert.present();
  }

  onGoDelete(){
    this.Musique.delete(this.musique.id);
    this.navCtrl.pop()
  }
}