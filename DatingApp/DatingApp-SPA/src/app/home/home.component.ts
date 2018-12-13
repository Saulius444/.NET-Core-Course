import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;

  // learnMore
  bodyPart = ['face', 'foot', 'nose', 'hand', 'head'];
  adjective = ['hairy and', 'extremely', 'insultingly', 'astonishingly'];
  adjectiveTwo = ['stupid', 'gigantic', 'fat', 'horrid', 'scary'];
  animal = ['baboon', 'sasquatch', 'sloth', 'naked cat', 'warthog'];
  // end learnMore

  constructor(private http: HttpClient, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  registerToggle() {
    this.registerMode = true;
  }

  // learnMore
  randomInsult() {
    const rand1 = this.bodyPart[Math.floor(Math.random() * this.bodyPart.length)];
    const rand2 = this.adjective[Math.floor(Math.random() * this.adjective.length)];
    const rand3 = this.adjectiveTwo[Math.floor(Math.random() * this.adjectiveTwo.length)];
    const rand4 = this.animal[Math.floor(Math.random() * this.animal.length)];

      return 'Your' + ' ' + rand1 + ' ' + 'is more' + ' ' + rand2 + ' '
        + rand3 + ' ' + 'than a' + ' ' + rand4 + '\'s' + ' ' + rand1 + '.';
  }

  learnMore() {
    this.alertify.success(this.randomInsult());
  }
  // end learnMore

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }
}
