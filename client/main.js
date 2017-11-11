Messages = new Mongo.Collection('messages');
var messagesLimit = 5;
  Meteor.subscribe('messages', messagesLimit);

Template.chat.helpers({
    messages: function () {
      return Messages.find({}, {
        sort: { timestamp: 1 }
      });
    }
  });
Template.chat.events({
    'click .clickable': function () {
      var message = $('textarea').val();
      $('textarea').val('');

      console.log('inserting message: ', message);

      Meteor.call('addMessage', message, function(err, result) {
        if (err) {
          console.log(err);
        }
      });
    }
  });