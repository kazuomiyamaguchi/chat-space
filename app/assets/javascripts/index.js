$(function() {
  function appendUser(user) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="ユーザー名">追加</a>
                  </div>`
  };

  $('#user-search-field').on('keyup', function() {
    var input = $(this).val();

    $.ajax({
      type: 'GET',
      url: '/users',
      data: {keyword: input},
      dataType: 'json'
    })

    .done(function(users) {
      if (users.length !== 0) {
        users.forEach(function(user) {
          appendUser(user);
        });
      }
    })
    .fail(function(){
      alert('error');
    })
  });
});
