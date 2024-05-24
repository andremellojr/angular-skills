import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;
  @Output() cardLiked: EventEmitter<any> = new EventEmitter<any>();
  loading: boolean = false;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  onLike(card: any) {
    this.loading = true;
    const cardCopy = { ...card };
    cardCopy.likes++;
    this.httpClient.put('/api/skills/' + cardCopy.id, cardCopy)
    .subscribe(() => {
      this.cardLiked.emit(cardCopy);
      this.loading = false;
    });
  }

  onShare() {
    window.open('https://www.linkedin.com/', '_blank');
  }

}
