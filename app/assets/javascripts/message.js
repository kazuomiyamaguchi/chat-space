$(function(){
  function buildHTML(message) {
    var image = message.image ? `<img src="${message.image}"> ` : ""
    var html = `<div class="chat-main__message" deta-message-id="${message.id}">
                  <div class="chat-main__message-name">
                    ${message.user_name}
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

  function clearBox(html) {
    $('.chat-main__list').append(html);
    $('.message').val('');
    $('.chat-main__content').animate({scrollTop: $('.chat-main__content')[0].scrollHeight}, 'fast');
  }

  $('#send_message').on('submit', function(e) {
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
    .done(function(data) {
      var html = buildHTML(data);
      clearBox(html);
    })
    .fail(function() {
      alert('error');
    })
  })

  var interval = setInterval(function() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)) {
      if ($('.chat-main__message')[0]) {
        var messageId = $('.chat-main__message:last').data('messageId');
      } else {
        var messageId = 0;
      }
      $.ajax({
        url: location.href,
        type: 'GET',
        data: {id: messageId},
        dataType: 'json'
      })
      .done(function(messages) {
        var insertHTML = "";
        messages.forEach(function(message) {
          insertHTML += buildHTML(message);
        });
        clearBox(html);
      })
      .fail(function() {
        alert("自動更新に失敗しました");
      })
    } else {
      clearInterval(interval);
    }
  }, 5000);
});
