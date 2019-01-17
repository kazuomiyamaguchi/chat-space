$(function(){
  function buildHTML(message){
    var image = message.image ? `<img src="${message.image}"> ` : ""
    var html = `<div class="chat-main__message">
                  <div class="chat-main__message-name">
                    ${message.name}
                  </div>
                  <div class="chat-main__message-time">
                    ${message.time}
                  </div>
                  <p class="chat-main__message-text">
                    ${message.content}
                  </p>
                  ${image}
                  </div>`
    return html;
  }

  function clearBox(html){
    $('.chat-main__list').append(html)
    $('.message').val('')
    $('.chat-main__content').animate({scrollTop: $('.chat-main__content')[0].scrollHeight}, 'fast')
  }

  $('#send_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      clearBox(html);
    })
    .fail(function(){
      alert('error');
    })
  })
});
