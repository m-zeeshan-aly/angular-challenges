import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-twitter-post',
  standalone: true,
  imports: [],
  templateUrl: './twitter-post.component.html',
  styleUrl: './twitter-post.component.scss'
})
export class TwitterPostComponent {
  @Input() public baseHref ='https://www.linkedin.com/in/mohammad-zeeshan-a9b17a199/';
  @Input() public hashTags: string[] =["MuhammadZeeshan","Javascript","Typescript","Angular","100AngularChallenges"];


  constructor(public titleService:Title){

  }
  public get twitterUrl(): string {

    const base =this.getBaseWithHashTagsAndRoute()
    const message =encodeURIComponent(`Check out ${this.titleService.getTitle()} and become Coding Idol`)
    return `${base}${message}`;

  }

  private getBaseWithHashTagsAndRoute(){
    const route = encodeURI(this.baseHref);
    const hashTags = this.hashTags.join(",");
    return `https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(hashTags)}&related=pizzapokerguy&url=${route}`
  }

  public get linkedInUrl(): string {
    const base =this.getBaseWithHashTagsAndRouteForLinkedIn()
    const message =encodeURIComponent(`Check out ${this.titleService.getTitle()} and become Coding Idol Post On LinkedIn`)
    return `${base}${message}`;

  }

  private getBaseWithHashTagsAndRouteForLinkedIn(){
    const route = encodeURI(this.baseHref);
    const hashTags = this.hashTags.join(",");


    return `https://www.linkedin.com/sharing/share-offsite/?hashtags=${encodeURIComponent(hashTags)}&related=mohammad-zeeshan&url`;
  }


}

