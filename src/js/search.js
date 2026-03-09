import { makeMarkupCards } from './exercises';
import fetchSportEnergy from './api/apiSport';
import * as pagination from './pagination/pagination';
import { message } from './toasts/message';
import { loader } from './loader/loader';

const form = document.querySelector('.form-js');
const paginationNumbers = document.querySelector('.pagination-numbers');

form.addEventListener('submit', handlerSearch);

async function handlerSearch(e) {
  e.preventDefault();

  const value = e.target.elements.search.value.trim().toLowerCase();
  if (!value) return;

  try {
    loader.open();

    // 1. Знаходимо активний фільтр через клас btn-filter-active
    const activeBtn = document.querySelector('.btn-filter-active');
    const filterName = activeBtn ? activeBtn.dataset.name : 'Body parts';
    
    // Перетворюємо data-name у ключ для бекенду
    let apiKey = 'bodypart';
    if (filterName === 'Muscles') apiKey = 'muscles';
    if (filterName === 'Equipment') apiKey = 'equipment';

    // 2. Знаходимо назву категорії (наприклад, "cardio")
    const targetElement = document.querySelector('#tagret-js');
    
    // Зазвичай ви туди вставляєте текст типу "/ Cardio", тому ми видаляємо слеш, 
    // зайві пробіли і переводимо все у нижній регістр:
    // 2. Більш надійний спосіб: читаємо весь заголовок H2
    const titleElement = document.querySelector('.title-exercises');
    let categoryValue = '';

    if (titleElement) {
      const fullText = titleElement.textContent; // Отримаємо щось типу "Exercises / Cardio"
      
      // Якщо в тексті є слеш, беремо все, що після нього
      if (fullText.includes('/')) {
        categoryValue = fullText.split('/')[1].trim().toLowerCase();
      }
    }

    // Для перевірки, щоб ви бачили в консолі браузера, що саме ми знайшли:
    console.log("Категорія для пошуку:", categoryValue);


    // Перевірка: якщо категорія з якихось причин порожня, ми не можемо шукати
    if (!categoryValue) {
        message.info('Please select a category first.');
        return;
    }

    // 3. Формуємо динамічний об'єкт запиту для API
    const dataExercises = {
      [apiKey]: categoryValue, // Наприклад: { bodypart: "cardio" }
      keyword: value,          // Наприклад: "run"
      page: 1,
      limit: 10,
    };

    // 4. Робимо запит до API
    const exercises = await fetchSportEnergy.getByFilterCategory(dataExercises);

    // Якщо нічого не знайдено
    if (!exercises?.results?.length) {
      message.info('Nothing was found for this query');
      paginationNumbers.innerHTML = '';
      return;
    }

    // Відмальовуємо знайдені картки
    makeMarkupCards(exercises);

    // Оновлюємо пагінацію
    paginationNumbers.innerHTML = '';
    pagination.getPaginationNumbers(1, dataExercises);
    pagination.setCurrentPage(1);

    form.reset();

  } catch (err) {
    console.log(err);
    message.error(err?.message || String(err));
  } finally {
    loader.close();
  }
}

