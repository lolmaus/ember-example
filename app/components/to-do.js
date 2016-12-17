import Ember from 'ember';

export default Ember.Component.extend({

  todo: undefined, // {id, title, completed}

  actions: {
    toggleCompleted () {
      this.toggleProperty('todo.completed')
    }
  }
});
