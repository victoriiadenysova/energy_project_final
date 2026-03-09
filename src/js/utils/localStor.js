

// 2. Ініціалізуємо масив одразу з localStorage (або порожнім, якщо там нічого немає)
let favoriteCards = JSON.parse(localStorage.getItem('favorites')) || [];

export function addLocalFavorites(card) {
  // Перевіряємо, чи картка вже є в улюблених, щоб уникнути дублікатів
  const existingIndex = favoriteCards.findIndex(item => item._id === card._id);

  if (existingIndex >= 0) {
    // Якщо картка вже є — просто оновлюємо її дані
    favoriteCards[existingIndex] = card;
  } else {
    // Якщо немає — додаємо в масив
    favoriteCards.push(card);
  }

  // Зберігаємо оновлений масив
  localStorage.setItem('favorites', JSON.stringify(favoriteCards));
}

export const deleteLocalFavorites = id => {
  // Відфільтровуємо масив, залишаючи всі елементи, крім видаленого
  favoriteCards = favoriteCards.filter(item => item._id !== id);

  // Зберігаємо новий масив
  localStorage.setItem('favorites', JSON.stringify(favoriteCards));
};

// Додамо функцію для отримання актуального списку, якщо вона вам знадобиться в інших файлах
export const getLocalFavorites = () => {
  return favoriteCards;
};