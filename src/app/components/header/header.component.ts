import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderService } from '../../shared/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ],
})
export class HeaderComponent implements OnInit {
  headerTitle$: Observable<string>;

  constructor(private readonly headerService: HeaderService) { }

  ngOnInit() {
    this.headerTitle$ = this.headerService.getHeader();
  }

}
