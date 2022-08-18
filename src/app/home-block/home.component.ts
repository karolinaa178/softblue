import {Component, Inject, OnInit} from '@angular/core';
import {AboutInterface} from "../interfaces/about.interface";
import {QualificationsInterface} from "../interfaces/qualifications.interface";
import {DataService} from "../service/data.service";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  abouts: AboutInterface[] = [];
  qualifications: QualificationsInterface[] = [];

  constructor(private service: DataService,
              private pageScrollService: PageScrollService,
              @Inject(DOCUMENT) private document: any) {
  }

  ngOnInit(): void {
    this.service.getExperience().subscribe(data => {
      this.qualifications = data;
    })

    this.service.getServices().subscribe(data => {
      this.abouts = data;
    })
  }

  onScroll(target): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: target,
    })
  }
}
