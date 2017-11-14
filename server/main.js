Meteor.publish('messages', function(limit) {
    return Messages.find({}, {
      limit: limit,
      sort: { timestamp: -1 }
    });
  });

Meteor.methods({
    addMessage: function(text) {
      Messages.insert({
        text: text,
        timestamp: new Date()
      });
    }
  });