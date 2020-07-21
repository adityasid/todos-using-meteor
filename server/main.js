import { Meteor } from 'meteor/meteor';
import '/imports/api/tasks';

Meteor.startup(() => {
  if (!Accounts.findUserByUsername('aditya')) {
    Accounts.createUser({
      username: 'aditya',
      password: 'pass'
    });
  } else {
    // Remove user one user
    // Meteor.users.remove({ username: 'aditya' });

    // Remove user one user
    // Meteor.users.remove({});
  }
});
