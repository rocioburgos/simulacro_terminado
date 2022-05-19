import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ActoresService {
 

  itemsCollection: AngularFirestoreCollection<any>; 
  public items: Observable<any[]>;

  constructor(public afs: AngularFirestore, private storage: AngularFireStorage,
  ) {
    this.itemsCollection = afs.collection<any>('actores');

    this.items = this.itemsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as unknown as any;
        return data;
      });
    }));
  }

  
  addItem(item: any) {
    return this.itemsCollection.add(JSON.parse(JSON.stringify(item)));
  }

  traerTodos() {
    return this.itemsCollection.valueChanges({ idField: "doc_id" });
  }
}
