import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipes.module";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', "This is simply a test", 'https://en.wikipedia.org/wiki/Lasagne#/media/File:Lasagne_-_stonesoup.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
