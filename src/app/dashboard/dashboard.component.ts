import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: Array<any>;
  private subscription: Subscription;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.subscription = this.httpClient.get('/api/skills').subscribe((ret: Array<any>) => this.cards = ret);
  }

  onCardLiked(updatedCard: any) {
    const index = this.cards.findIndex(card => card.id === updatedCard.id);
    if (index !== -1) {
      this.cards[index] = updatedCard;
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
