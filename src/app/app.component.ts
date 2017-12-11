
//imnport 
import { Component, OnInit } from '@angular/core';
import { Con } from './con';
// mew line 1
import { Observable } from 'rxjs';
import { AppService } from "./app.service";
import { Post } from "./post";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit {

  //get property
  postsArray: Post[];
  //post properties
  contitle: String;
  conbody: String;
  con = new Con();


// texbox1
  added = [];
  addlist(list: string) {
    if (list) {
      this.added.push(list);
      console.log(list)
    }
  }
  
  constructor(private appService: AppService) { }

  // ----texbox 2----

  // get method
  getPosts(): void {
    this.appService.getPosts()
      .subscribe(
      resultArray => this.postsArray = resultArray,
      error => console.log("Error :: " + error)
      )
  }


  ngOnInit(): void {
    this.getPosts();
  }

  //post method
  conadd(): void {
    this.appService.addc(this.con)
      .subscribe(con => {
      this.contitle = con.title;
      this.conbody = con.body;
      },
    );
  }
}
