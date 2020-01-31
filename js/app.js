
$('document').ready(function() {
    $('.timeline-item').each(function(i,v) {
    v.classList.add('timeline-item--active');
    
    })
})

// Get the modal
var modal = document.getElementById("details-modal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("timeline-item");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
// $('.timeline-item').on('shown.bs.modal', function () {
//   console.log('clicked');
//   var details = {}
//    details = $(this).data('details');
//   console.log(details);
  
//   $.each(details, function(k,v){
//       if(k == 'img')
//           $('#'+k).css("background-image",`url(${v}`)
//       else
//           $('#'+k).text(v)

//   })
// })
$('.timeline-item').on('click', function () {
    console.log('clicked');
    var details = {}
     details = $(this).data('details');
    console.log(details);
    
    $.each(details, function(k,v){
        if(k == 'img')
        $('#'+k).css("background-image",`url(${v}`)
        else
            $('#'+k).text(v)

    })
    
    $("#details-modal").css('display', "block");
}) 
  
  


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}