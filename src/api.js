// import axios from "axios"

// const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/recipes/popular'

// const getPopularRecipes = async (value) => {
//     await axios(BASE_URL)
// }

// export { getPopularRecipes };

// // Функція для виконання запиту на бекенд
// async function fetchData(endpoint) {
//   const baseUrl = 'https://example.com/api'; // Замініть на свій базовий URL
//   const url = `${baseUrl}/${endpoint}`;

//   try {
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     console.error('Помилка при виконанні запиту:', error);
//     throw error;
//   }
// }

// // Виклик асинхронної функції
// async function main() {
//   try {
//     const data = await fetchData('resource'); // Замініть 'resource' на ваш ресурс
//     console.log('Отримані дані:', data);
//   } catch (error) {
//     console.error('Помилка у головній функції:', error);
//   }
// }

// main();



import axios from "axios";

const popularRecipes = document.querySelector('.popular-recipes-js');

// Функція для отримання популярних рецептів
async function getPopularRecipes(endpoint) {
  const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';
  const url = `${BASE_URL}/${endpoint}`;

  try {
    const response = await axios.get(url);
    const recipes = response.data; // Отримані рецепти з відповіді сервера
    const markup = createPopularRecipesMarkup(recipes); // Створення HTML-розмітки з отриманими рецептами
    popularRecipes.innerHTML = markup; // Вставка HTML-розмітки на сторінку
    return recipes; // Повертаємо отримані рецепти
  } catch (error) {
    console.error('Помилка при отриманні даних:', error);
    throw error;
  }
}

// Головна функція
async function main() {
  try {
    const endpoint = 'recipes/popular';
    const data = await getPopularRecipes(endpoint);
    console.log('getPopularRecipes:', data);
  } catch (error) {
    console.error('Виникла помилка:', error);
  }
}

// Виклик головної функції
main();

// Функція для створення HTML-розмітки рецептів
function createPopularRecipesMarkup(recipes) {
  return recipes.map(({ title, description, preview }) => {
    return `
      <ul>
        <li>
          <img src="${preview}" alt="${title}">
          <h3>${title}</h3>
          <p>${description}</p>
        </li>
      </ul>`;
  }).join("");
}

//=======================
import axios from 'axios';

// Знаходження DOM-елемента, в який будуть вставлені популярні рецепти
const popularRecipes = document.querySelector('.popular-recipes-js');

// Асинхронна функція для отримання популярних рецептів
async function getPopularRecipes() {
  const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/recipes/popular';

  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Функція для створення розмітки популярних рецептів
function createPopularRecipesMarkup(recipes) {
  return recipes.map(({ title, description, preview }) => {
    return `
      <ul>
        <li>
          <img src="${preview}" alt="${title}">
          <h3>${title}</h3>
          <p>${description}</p>
        </li>
      </ul>
    `;
  }).join('');
}

// Виклик асинхронної функції та вставка розмітки в DOM
async function main() {
  try {
    const data = await getPopularRecipes();
    const markup = createPopularRecipesMarkup(data);
    popularRecipes.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Виклик головної функції для отримання та вставки даних
main();