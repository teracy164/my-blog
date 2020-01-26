import { Component, OnInit } from '@angular/core';
import { TwitterService } from 'src/services/twitter/twitter.service';

@Component({
  selector: 'app-top-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})
export class TopTwitterComponent implements OnInit {
  constructor(private twitterService: TwitterService) { }
  ngOnInit() {
    this.twitterService.widgetsLoad();
  }
}
