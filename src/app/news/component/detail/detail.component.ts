
import { Component, OnInit } from '@angular/core';
import { ListDataService } from '../../../core/service/listData.service';
import { Subscription } from 'rxjs/Subscription';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls:  ['./detail.component.scss']
})


export class DetailComponent implements OnInit {

  public currentId: any;
  public news: any;

  public currentUser: any;
  public userSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private dataServ: ListDataService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.currentId = params['id'];
        this.news = this.dataServ.getNewsById(this.currentId);
      }
    );

    this.userSubscription = this.dataServ.getUser().subscribe(
      data => {
        if (data) {
          this.currentUser = data;
        }
      }
    );

  }

  public isLike: boolean = true;
  public isDislike: boolean = false;

  itLikes() {
    console.log("like");
    this.isLike = false;
    this.isDislike = true;

    //todo : Add +50.
  }

  itDislikes() {
    console.log("dislike");
    this.isLike = true;
    this.isDislike = false;

    //todo : substract -20.
  }

}

