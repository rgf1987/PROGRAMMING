import { Component, Inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ResponseBoxUserDto } from './models/boxUser.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crossfitmieres_front';
  http = Inject(HttpClient);
  boxUsers: ResponseBoxUserDto[] = [];

  changeTitle(){
    this.title = 'changed';
  }

  ngOnInit(){
    this.http.get('https://localhost:4200/api/boxUsers/findAllBoxUsers')
      .subscribe((data: any) => {
        this.boxUsers = data;
      });
  }
}
