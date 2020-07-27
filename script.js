$('.wrapper').on('click', 'button', function(){
  let text = $(this).text();
  $.ajax({
    url: 'https://cat-fact.herokuapp.com/facts/random',
    context: $(this),
    beforeSend: changeButtonsState($(this), 'Пожалуйста, подождите...'),
    success: function(res){
      console.log(res.text);
      changeButtonsState($(this), text);
      refreshContainers($(this));
    }
  })
})

function changeButtonsState(button, text) {
  button.prop('disabled', !button.prop('disabled'));
  button.text(text);
}

function refreshContainers(button) {
  button.parent().siblings().each(function(index, element) {
    let reserv = $(element).html();
    $(element).empty();
    $(element).html(reserv)
  })
}
