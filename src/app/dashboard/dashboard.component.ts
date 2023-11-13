import { Component, OnInit } from '@angular/core';
import { CardService } from '../core/service/card.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: Array<any>;
  loading: boolean = true;

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cardService.getSkillsCards().subscribe((response) => {
      this.loading = false;
      this.cards = response;
    });
  }
}
