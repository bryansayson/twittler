$(document).ready(

    function updateTweets () {
        var $body = $('.tweetbox');
        var index = streams.home.length - 1;
        while(index >= 0){
          var tweet = streams.home[index];
          var $tweet = $('<div class = "tweet"> </div>');
          var ago = moment().startOf(tweet.created_at).fromNow();
          $tweet.html('@<span class="user_class">' + tweet.user + '</span>: ' + tweet.message + " tweeted " + ago);
          $tweet.appendTo($body);
          index -= 1;
          }
    }
);

$(document).ready(function () {

  $('.newtweets').on('click', function() {
      var $body = $('.tweetbox');
      $body.html('');
      var index = streams.home.length -1
      while(index >= 0){
          var tweet = streams.home[index];
          var $tweet = $('<div class = "tweet"> </div>');
          var ago = moment().startOf(tweet.created_at).fromNow();
          $tweet.html('@<span class="user_class">' + tweet.user + '</span>: ' + tweet.message + " tweeted " + ago);
          $tweet.appendTo($body);
          index -= 1;
          }
    });
});

$(document).ready(function () {

  $('.user_class').on('click', function() {
      var username = $(this).text();
      var $body = $('.tweetbox');
      $body.html('');
      var index = streams.home.length -1
      while(index >= 0) {
      var tweet = streams.home[index];
          if (username == tweet.user) {
          var $tweet = $('<div class = "tweet"> </div>');
          var ago = moment().startOf(tweet.created_at).fromNow();
          $tweet.html('@<span class="user_class">' + tweet.user + '</span>: ' + tweet.message + " tweeted " + ago);
          $tweet.appendTo($body);
          index -= 1;
          }
      }
    });
});