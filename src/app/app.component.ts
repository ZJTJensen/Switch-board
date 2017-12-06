import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  buttons: Array<boolean>=[]
  ngOnInit(){
      for(var i=0;i<11;i++){
         this.buttons[i]= false;
     }
     
}
click(i){
this.buttons[i] = !this.buttons[i];
}
}
