import { Component, OnInit } from '@angular/core';
import { faSearch, faMapMarker, faRoute } from '@fortawesome/free-solid-svg-icons';
import { AboutUsComponent } from '../../about-us/about-us.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    const primaryNav = document.querySelector('.primary-navigation');
const navMobile = document.querySelector('.mobile-nav-toggle');

navMobile?.addEventListener('click', () =>{
  const visibility = primaryNav?.getAttribute("data-visible");

  if (!visibility ||(visibility === "false")){
    primaryNav?.setAttribute("data-visible", "true");
    navMobile.setAttribute("aria-expanded", "true");
  }
  else{
    primaryNav?.setAttribute("data-visible" , "false");
    navMobile.setAttribute("aria-expanded", "false");
  }
})
    
  }
  search = faSearch;
  maps = faRoute;
}
