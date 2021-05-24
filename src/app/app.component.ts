import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  stickers: any[] = []
  now:any;
  text = "";
  @ViewChild('TextInput') textInput!: ElementRef;
  idCounter = 0;
  deleteSticker(id:any){
    console.log(id);
    for(let i = 0;i<this.stickers.length;i++){
      if(this.stickers[i].id == id){
        this.stickers.splice(i, 1)
      }
    }
  }
  addNote(title:string,text:string){
    let buf = title.split("")
    buf[0] = buf[0].toUpperCase()
    title = buf.join("")
    this.now = Date.now();
    this.stickers.push( { title: title, text: text , id : ++this.idCounter, date: this.now})
    this.title = ""
    this.text = ""
  }
}
