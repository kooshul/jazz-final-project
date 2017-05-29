// gray out unselected answers
$('input[type="radio"]').change(function(e) {
  $(this).parent().css('opacity','1.0');
  $('input[type="radio"][name="' + $(this).attr("name") + '"]:not(:checked)')
  .parent().css('opacity','0.6');
});

// quiz submit button
$('#submit').on('click', function(e) {
  // gather all checked radio-button values
  var choices = $("input[type='radio']:checked").map(function(i, radio) {
    return $(radio).val();
  }).toArray();

  // display error message if quiz is incomplete
  if (choices.length < 7) {
    $('#error').show();

    // http://stackoverflow.com/questions/18334866/jump-to-
    // the-bottom-of-the-page-with-jquery-without-animation
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");

  } else {
    $('#error').hide();

    // sum the integer values of the choices
    var score = 0, player_name, player_img;
    for (var i = 0; i < choices.length; i++) {
      score += Number(choices[i]);
    }

    // different results depending on score
    if (score < 13) {
      player_name = "Russell Westbrook";
      player_img = "westbrook.jpg";
    } else if (score < 19) {
      player_name = "Klay Thompson";
      player_img = "klay.jpg";
    } else if (score < 25) {
      player_name = "Kawhi Leonard";
      player_img = "kawhi.jpg";
    } else if (score < 31) {
      player_name = "Lebron James";
      player_img = "lebron.jpg";
    } else if (score < 37) {
      player_name = "James Harden";
      player_img = "harden.jpg";
    } else {
      player_name = "Stephen Curry";
      player_img = "curry.jpg";
    }

    // display results in modal
    $('#player-name').html(player_name + '!');
    $('#player-img').attr('src','images/' + player_img);
    $('.modal').css('opacity', '1');
    $('.modal').css('visibility', 'visible');
  }
});

// close modal if x button is clicked
$('.modal i').on('click', function(e) {
  $('.modal').css('visibility', 'hidden');
  $('.modal').css('opacity', '0');
});
