import { Component, OnInit, Input } from '@angular/core';
import { CardService } from 'src/app/core/service/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() card;

  likeButtonColorClass = 'like-button-gray';

  constructor(private cardService: CardService) { }


  onLike() {
    this.card.likes++;

    this.likeButtonColorClass = this.card.likes < 5 ? 'like-button-gray'
      : this.card.likes > 10 ? 'like-button-custom' : 'like-button-blue';

    this.cardService.postLikeSkill(this.card.likes);
  }

  onShare() {
    window.open('https://www.linkedin.com/in/douglas-silva94/', '_blank');
  }
}
