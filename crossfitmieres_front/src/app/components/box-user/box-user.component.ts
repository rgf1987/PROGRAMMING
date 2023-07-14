import { Component, Input } from '@angular/core';
import {ResponseBoxUserDto} from './../../models/boxUser.model'
@Component({
  selector: 'app-boxuser',
  templateUrl: './box-user.component.html',
  styleUrls: ['./box-user.component.css']
})
export class BoxUserComponent {
  @Input() responseBoxUserDto!: ResponseBoxUserDto;
}
