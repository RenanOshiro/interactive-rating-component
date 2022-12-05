const options = document.querySelectorAll('.option');
let option = '';

options.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (e.currentTarget.classList.contains('selected')) {
      e.currentTarget.classList.toggle('selected');
      e.currentTarget.classList.add(
        'md:hover:bg-mdGray',
        'md:hover:text-white'
      );
      option = '';
    } else if (document.querySelector('.selected') !== null) {
      document.querySelector('.selected').classList.remove('selected');
      document.querySelector('#error').classList.add('hidden');
      e.currentTarget.classList.remove(
        'md:hover:bg-mdGray',
        'md:hover:text-white'
      );
      e.target.classList.add('selected');
      option = e.target.innerHTML;
    } else {
      document.querySelector('#error').classList.add('hidden');
      e.currentTarget.classList.remove(
        'md:hover:bg-mdGray',
        'md:hover:text-white'
      );
      e.target.classList.add('selected');
      option = e.target.innerHTML;
    }
  });
  item.addEventListener('mouseover', (e) => {
    if (e.currentTarget.classList.contains('selected') === false) {
      e.currentTarget.classList.add(
        'md:hover:bg-mdGray',
        'md:hover:text-white'
      );
    }
  });
  item.addEventListener('mouseout', (e) => {
    e.currentTarget.classList.remove(
      'md:hover:bg-mdGray',
      'md:hover:text-white'
    );
  });
});

document.querySelector('button').addEventListener('click', () => {
  if (option !== '') {
    document.querySelector(
      '#rate'
    ).innerHTML = `You selected ${option} out of 5`;
    document.querySelector('#rating').classList.remove('flex');
    document.querySelector('#rating').classList.add('hidden');
    document.querySelector('#ty').classList.remove('hidden');
    document.querySelector('#ty').classList.add('flex');
  } else if (document.querySelector('p.hidden') !== null) {
    document.querySelector('#error').classList.remove('hidden');
  }
});
