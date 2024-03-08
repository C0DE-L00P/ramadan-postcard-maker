window.addEventListener('load', () => document.getElementById('formBtn').disabled = false)

const frontscreen = document.querySelector('.frontscreen')
const modal = document.getElementById('modal')

async function makePostcard(event) {
  event.preventDefault()

  let formData = new FormData(event.target)
  if (formData.get('name') == '') return alert('برجاء كتابة الاسم')
  document.querySelector('.loader').style.opacity = 1


  document.getElementById('name_res').innerText = formData.get('name')
  document.getElementById('div_res').style.display = 'block'
  document.querySelector('form').style.display = 'none'


  let canvas = await html2canvas(document.getElementById('the_canvas_element_id'))
  document.getElementById('download_link').href= canvas.toDataURL("image/png");
  document.getElementById('download_link').download = 'postcard.jpeg';

  document.querySelector('.card-img').innerHTML = ''
  document.querySelector('.card-img').appendChild(canvas);
  document.querySelector('.loader').style.opacity = 0

  frontscreen.style.display = 'block'
  frontscreen.classList.toggle('blink')
  setTimeout(() => {
    modal.style.display = 'grid';
    frontscreen.style.display = 'none';
    document.getElementById('div_res').style.display = 'none'
    document.querySelector('form').style.display = 'block'
    document.getElementById('name_res').innerText = ''
  }, 700);
}

function closeModal() {modal.style.display = 'none';}