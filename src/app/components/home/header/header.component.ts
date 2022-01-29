import { Component, OnInit } from '@angular/core';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  faTimes = faTimes;
  isShown: boolean = false ;
  isShow: boolean = true ;

  constructor() { }

  ngOnInit(

  ): void {
  }

  toggleShow() {
      this.isShown = true;
      this.isShow = false
    }


  toggleShow2() {
    this.isShown = false;
    this.isShow = true;
  }

}
