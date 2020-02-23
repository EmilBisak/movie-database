import {postUrl} from '../config.api/api'

export default function addMovie(naziv, godina, slika, comments = null) {
  fetch(postUrl, {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({naziv, godina, slika, comments})
  })
  .then(res => {
    alert(`Movie " ${naziv.toUpperCase()}" has been added to movie base. Thank you for updating!`)
    window.location.reload()
  })
  .catch(e => alert('Došlo je do greške'))
}