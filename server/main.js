import { Meteor } from 'meteor/meteor';
// import Tasks from '/imports/api/tasks';

Meteor.startup(() => {

    if (!Accounts.findUserByUsername('aditya')) {
        Accounts.createUser({
            username: 'aditya',
            password: 'password'
        });
    } else {
        // Meteor.users.remove({ username: 'aditya' });
    }

    //   if (Tasks.find().count() === 0) {
    //     [
    //       'First Task',
    //       'Second Task',
    //       'Third Task',
    //       'Fourth Task',
    //       'Fifth Task',
    //       'Sixth Task',
    //       'Seventh Task'
    //     ].forEach(insertTask)
    //   }
});