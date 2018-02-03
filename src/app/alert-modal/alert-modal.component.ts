import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {

  public isModalShown = false;
  constructor() { 
    
  }

  ngOnInit() {
    console.log('inside blur');
    window.onblur = () => {
      this.isModalShown = true;
    };
  }

  hide= function(event?){
    this.isModalShown = false;
  };

}
