$(function(){
  function buildHTML(data){
    var image = message.image ? `<img src="${message.image}"> ` : ""
    var html = `<div class="chat-main__message">
                  <div class="chat-main__message-name">
                    ${message.name}
                  </div>
                  <div class="chat-main__message-time">
                    ${message.time}
                  </div>
                  <p class="chat-main__message-text">
                    ${message.body}
                  </p>
                  <p class="chat-main__message-body">
                    ${image}
                  </p>
                  </div>`
    return html;
  }
  $('#send_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      datatype: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-main__list').append(html)
      $('.message').val('')
      $('.chat-main__list').animate({scrollTop: $('.chat-main__list')[0].scrollHeight}, 'fast')
    })
    .fail(function(){
      alert('error');
    })
  })
});
