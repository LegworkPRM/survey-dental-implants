// When yes-no div is clicked...
$('.yes-no').click(function() {
  // Remove the class 'yes-no-clicked' from any items that currently have it applied
  $('.yes-no-clicked').removeClass('yes-no-clicked');
  // Add the class 'yes-no-clicked' to the object that was clicked
  $(this).addClass('yes-no-clicked');
});

// When a checkmark is clicked...
$('.checkmark').click(function() {
  // Toggle the class 'checkmark-clicked'
  $(this).toggleClass('checkmark-clicked');
});

// When an .option-container is clicked...
$('.option-container').click(function() {
  // Remove the class 'option-container-clicked' from any items that currently have it applied
  $('.option-container-clicked').removeClass('option-container-clicked');
  // Add the class 'option-container-clicked' to the object that was clicked
  $(this).addClass('option-container-clicked');
});
$('.option-container-type-2').click(function() {
  $('.option-container-type-2-clicked').removeClass('option-container-type-2-clicked');
  $(this).addClass('option-container-type-2-clicked');
});

$('.checkmark-type-2').click(function() {
  $(this).toggleClass('checkmark-clicked');
});

$('.deselect-others').click(function() {
  $('.select-multiple').not(this).removeClass('checkmark-clicked');
});

$('.select-multiple').click(function() {
  $('.deselect-others').removeClass('checkmark-clicked');
});