export const fetchApi = (value, amount) => {
  return fetch(`https://pixabay.com/api/?q=${value}&page=${amount}&key=32466802-4e3ba47eee8faf0a044392b81&image_type=photo&orientation=horizontal&per_page=12

`).then(response => {
    if (!response.ok) {
      throw new Error('Oops, there is no images with that query');
    }
    return response.json();
  });
};
