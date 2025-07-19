//  kita buat transisi saat load


window.addEventListener('load', function(event) {
    // kita ambil object

    const cards = document.getElementsByClassName('card')
    
   console.log(cards);
   [...cards].forEach(function(card,indeks) {
        setTimeout(function() {
            card.classList.add('scale')
        },100)

        setTimeout(function() {
            card.classList.add('hover')
        },3000)
    
   })


})