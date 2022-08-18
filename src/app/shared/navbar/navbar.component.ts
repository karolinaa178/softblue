import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() scroll: EventEmitter<any> = new EventEmitter();
  activeRoute: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.activeRoute = this.router.routerState.snapshot.url.split(/[?,#]+/)[0];
    this.activeRoute = this.activeRoute.slice(-1) === '.' ? this.activeRoute.slice(0, -1) : this.activeRoute;
  }

  logoClick(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/']);
  }

  commentClick(): void {
    this.scroll.emit(true);
  }

}
