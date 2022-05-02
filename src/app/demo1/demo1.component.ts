import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
////////
title="I am new to angular";
  course="Angular";
  /////
  //Property Binding
  public image="/assets/butterfly.jpg";

   //Event Binding
   onClick()
   {
     alert("Hello everyone");
   }
   onClick1()
  {
    console.log("Hi everyone")
  }

 
   //Two-way binding
  info=""
    //*ngFor
  places: any[] = [
    {
      "name": "Belur"
    },
    {
      "name": "Bangalore"
    },
    {
      "name": "Chithradurga"
    },
    {
      "name": "Raichur"
    },
    {
      "name": "Mandya"
    }, 
    {
      "name": "Hassan"
    }
  ];

  //Hide place List
  isVisible: boolean = true;
  hideList()
  {
    this.isVisible = !this.isVisible;
  }

   //Pipes
   dateToday: string | undefined;

   name: string | undefined;
 
   amount: number|undefined;

    //Style Binding
  status:string='error';

  getColor() {
    return 'black';
  }

  public isCourse = true;
courses = [
    {
      name: "java",
      level: "Beginner",
      color: "deeppink"
    },
    {
      name: "python",
      level: "Beginner",
      color: "blue"
    },
    {
      name: "HTML",
      level: "Advanced",
      color: "red"
    },
    {
      name: "CSS",
      level: "Advanced",
      color: "red"
    },
    {
      name: "JQUERY",
      level: "Advanced",
      color: "purple"
    }
  ];
  //ngSwitch
  superhero = 'Spiderman';

  Cars: any[] = [
    {
      "name": "Belur",
      "average": 12,
      "color": 'blue'
    },
    {
      "name": "Chickmangalur",
      "age": 15,
      "color": 'yellow'
    },
    {
      "name": "Mandya",
      "age": 18,
      "color": 'silver'
    },
    {
      "name": "Hassan",
      "age": 14,
      "color": 'red'
    },
    {
      "name": "Channarayapattana",
      "age": 8,
      "color": 'green'
    }
  ];
  


}