import { Component, OnInit } from '@angular/core';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  pages: any;
  constructor(public pageServic: PageService) { }

  ngOnInit() {
    this.pageServic.getPages().subscribe(pages => {
      this.pageServic.pagesBS.next(pages);
      this.pages = this.pageServic.pagesBS;
    });
  }

}
