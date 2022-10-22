export const filterUsers = () => {
  const search = document.querySelector('#search');
  const users = document.querySelectorAll('[data-user]');

  search.addEventListener('keyup', (e) => {
    let text = e.target.value;
    let pat = new RegExp(text, 'i');

    users.forEach((item) => {
      const user = item;

      if(pat.test(user.innerText)) {
        user.parentElement.classList.remove('visually-hidden');
      } else {
        user.parentElement.classList.add('visually-hidden');
      }
    });

  });
};
