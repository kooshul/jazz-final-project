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

    // count up the occurrences for each genre
    var one = 0, two = 0, three = 0, four = 0;
    for (var i = 0; i < choices.length; i++) {
      switch(Number(choices[i])) {
        case 1:
          one++;
          break;
        case 2:
          two++;
          break;
        case 3:
          three++;
          break;
        case 4:
          four++;
      }
    }

    var max = one;
    var result = "1";

    if (two > max) {
      result = "2";
      max = two;
    }

    if (three > max) {
      result = "3";
      max = three;
    }

    if (four > max) {
      result = "4";
    }

    // different results depending on score
    var player_name, player_img;
    switch(result) {
      case "1":
        player_name = "Free Jazz";
        player_img = "cecil.jpg";
        break;
      case "2":
        player_name = "New Orleans Brass Bands";
        player_img = "rebirth.jpg";
        break;
      case "3":
        player_name = "Latin Jazz";
        player_img = "titopuente.jpg";
        break;
      case "4":
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
