import { getAll } from './../services/ingredients';
import { ingredients } from './../prisma/constants';
import { Ingredient } from '@prisma/client';
import React, { useEffect } from 'react';
import { Api } from '@/services/api-client';

interface ReturnProps {
  ingredients: Ingredient[];
}

export const useFilterIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  useEffect(() => {
    async function fetchIngredients() {
      try {
        const ingredients = await Api.ingredients.getAll();
        setIngredients(ingredients);
      } catch (e) {
        console.log(e);
      }
    }

    fetchIngredients();
  }, []);

  return { ingredients };
};
