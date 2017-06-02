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
  if (choices.length < 5) {
    $('#error').show();
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  } else {
    $('#error').hide();

    // sum the integer values of the choices
    var score = 0, player_name, player_img;
    for (var i = 0; i < choices.length; i++) {
      score += Number(choices[i]);
    }

    // different results depending on score
    if (score < 9) {
      player_name = "Free Jazz";
      player_img = "cecil.jpg";
    } else if (score < 13) {
      player_name = "New Orleans Brass Bands";
      player_img = "rebirth.jpg";
    } else if (score < 17) {
      player_name = "Latin Jazz";
      player_img = "titopuente.jpg";
    } else {
      player_name = "Soul Jazz";
      player_img = "eddieharris.jpg";
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
