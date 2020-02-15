import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NutrinixService } from '../nutrinix.service';

declare const responsiveVoice;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public calorieSearchForm: FormGroup = this.formBuilder.group({
    food: [''],
  });
  public recipeDetails: any;

  constructor(private router: Router, private formBuilder: FormBuilder, private _nutrinixService: NutrinixService) {

  }

  ngOnInit() {
  }

  onClick() {
    this._nutrinixService
      .getFood(this.calorieSearchForm.controls.food.value)
      .subscribe(data => {
        this.recipeDetails = data;
        console.log(this.recipeDetails);
      });
    responsiveVoice.speak(this.calorieSearchForm.controls.food.value);
  }
 }

