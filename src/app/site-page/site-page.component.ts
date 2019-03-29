import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'site-page',
  templateUrl: './site-page.component.html',
  styleUrls: ['./site-page.component.scss']
})
export class SitePageComponent implements OnInit {

  @Input() title: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.title = '';
  }

  ngOnInit() {
    this.title = this.route.snapshot.paramMap.get('page-name');
  }

}
