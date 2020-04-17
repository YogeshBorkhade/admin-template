import { Component, OnInit } from '@angular/core';
import { idLocale } from 'ngx-bootstrap';


enum Gender { 'male', 'female', 'other' }

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  title = 'About';
  technologies = [ ' Android ', ' Angular ',  'C/C ++ ', 'C # ', ' Cassandra ', ' GraphQL ',
                   'HTML/ CSS ', ' Java ', ' JavaScript ', 'Mongo  DB ', ' MySQL ', 'Node  JS ',
                   ' PHP ', ' Python ', 'React  JS ', ' Ruby ', ' Rust ', ' Swift ' ];
  userGender: Gender;

  user = {
    name: 'Yogesh',
    lastname: 'Borkhade',
    empId: 'Z003PFFE',
    userGender: 'other',
    department: 'IOT DS AA DTS DIGI IT',
    contact: '0123456789',
    yearOfExp: '3.9',
    technology:  '',
    designation: 'Software Developer',
    email: 'yogesh.borkhade@gmail.com.com'
  };

  imagePath = '../../../assets/user.svg';

  ngOnInit() {
  }

  // function to collect user input data
  userDetail() {
    console.log(this.user);
  }

  userGenderIs(event) {
    const userGender = event.target.value;
    if (userGender === 'male') {
      this.imagePath = '../../../assets/male.svg';
    } else if (userGender === 'female') {
      this.imagePath = '../../../assets/female.svg';
    } else {
      this.imagePath = '../../../assets/user.svg';
    }
  }
}
