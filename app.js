var socials;


socials = ['Instagram', 'Facebook', 'Twitter', 'WhatsApp', 'Linked'];


document.getElementById('button').addEventListener('click', (event) => {
  if (!!socials.length) {
    let element_list = document.getElementById('list');
    let new_li = document.createElement('li');
    new_li.innerText = socials.shift();

    element_list.appendChild(new_li);
  }

});