import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faAngleDoubleLeft, faCheckCircle, faChevronCircleUp, faLevelDownAlt, faLocationArrow, faMailBulk, faMap, faMapPin, faMarker, faPhoneSquare, faPlusCircle, faSearchLocation, faTty } from '@fortawesome/free-solid-svg-icons';

const activities1 = [ {id:'1', name:"climbing walls" },{id:'2', name:"ball pools"},{id:'3', name:"trampolines"}]
const birthdayactivities = [{id:"1", name:"cake cutting"},{id:"2",name:"Ample environment"},{id:"3", name:"speeches"}]
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  arrow = faAngleDoubleLeft;
  constructor(private router: Router){}
  ngOnInit(): void { 
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll to the top when navigation is complete
      }
    });
  }
arrowdown = faLevelDownAlt;
marker = faMarker;
circlecheck = faCheckCircle;
  activities = activities1;
  birthdays = birthdayactivities;
  circleup = faChevronCircleUp; //we will use this when offline now
 
  public visible = "";
  public invisible = "none";
  backtoentertainment(){
    this.invisible = "none";
    this.visible = "";
  }
  showbirthday(){
    this.invisible = "";
    this.visible = "none";
  }
  showholiday(){
    
  }

}
