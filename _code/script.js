document.addEventListener('DOMContentLoaded', function() {
    var stream = document.querySelector('.gallery__stream');
    var items = document.querySelectorAll('.gallery__item');
    var prev = document.querySelector('.gallery__prev');
    var next = document.querySelector('.gallery__next');
  
    prev.addEventListener('click', function() {
      stream.insertBefore(items[items.length - 1], items[0]);
      items = document.querySelectorAll('.gallery__item');
    });
  
    next.addEventListener('click', function() {
      stream.appendChild(items[0]);
      items = document.querySelectorAll('.gallery__item');
    });
  });
/*function sendMail() {
  var link = "mailto:thiagocoelho.coelho2@example.com"
        + "?cc=myCCaddress@example.com"
        + "&subject=" + escape("This is my subject")
        + "&body=" + escape(document.getElementById('myText').value);

  window.location.href = link;
}*/