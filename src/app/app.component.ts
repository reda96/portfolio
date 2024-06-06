import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Database } from '@angular/fire/database';
import { Firestore, collectionData } from '@angular/fire/firestore';

import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'portfolio';
  private dbPath = '/skills';
  dbRef!:AngularFireList<any>;
  constructor(private db:AngularFireDatabase) {
    this.dbRef = db.list(this.dbPath);
  }


  ngOnInit(): void {

  this.getAll().snapshotChanges().subscribe((res)=>console.log(res.map((r)=>r.payload.toJSON())))
  }
  getAll()
  {
    return this.dbRef;
  }
  getSkill(key:string)
  {
    return this.db.object(`${this.dbPath}/${key}`)
  }
  
}
