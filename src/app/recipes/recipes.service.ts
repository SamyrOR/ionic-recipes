import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'i1',
      title: 'Strogonoff',
      imageUrl:
        'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/Strogonoff-frango.jpg',
      ingredients: [
        'Chicken Meat',
        'Table Cream',
        'Mustard',
        'Shoestring Potatoes',
      ],
    },
    {
      id: 'i2',
      title: 'Pizza',
      imageUrl:
        'https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2021/10/17/1533441312-shutterstock378226756.jpg',
      ingredients: ['Pizza Dough', 'Tomato Sauce', 'Cheese', 'Pepperoni'],
    },
    {
      id: 'a44',
      title: 'Spaghetti',
      imageUrl:
        // eslint-disable-next-line max-len
        'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcS887QL8LFGyuC1KffTpkaUBjW__Q0jPybk7oNTmilTZAYJNT7gsrPwlEBC-nbSjF18DNmgpWq88BtVH85fncA',
      ingredients: ['Spaghetti', 'Onion', 'Tomato Sauce', 'Bacon', 'Olive Oil'],
    },
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find((recipe) => recipe.id === recipeId),
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter((recipe) => recipe.id !== recipeId);
  }
}
