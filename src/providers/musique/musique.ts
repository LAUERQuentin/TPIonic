import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
/*
  Generated class for the musiqueProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MusiqueProvider {

  private musiques:any = [];
  musiqueSubject = new Subject<any[]>();

  constructor(private db: AngularFirestore) {
    this.getAllMusiques();
  }

  emitMusiqueSubject(){
    this.musiqueSubject.next(this.musiques.slice());
  }

  getMusiqueById(id : string){
    for (const musique of this.musiques) {
      if (musique.id == id) return musique;
    }
  }

  saveNewMusique(musique: any){
    return new Observable(obs => {
      this.db.collection('musique').add(musique).then(() => {
        console.log('parfait');
        obs.next();
      })
    })
  }

  getAllMusiques() {
    return this.db.collection('musique').snapshotChanges().pipe(
      map((changes : any) => {
        return changes.map(doc => {
          return {
            id : doc.payload.doc.id,
            data : doc.payload.doc.data()
          }
        })
      })
    ).subscribe(res => {
      this.musiques = res;
      this.emitMusiqueSubject();
    })
  }

  update(musique: any, id: string){
    console.log(id);
    return new Observable(obs => {
      this.db.doc(`musique/${id}`).update(musique);
      obs.next();
    })
  }

  delete(id: any){
    this.db.doc(`musique/${id}`).delete();
  }
  
}
