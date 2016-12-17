import Ember from 'ember';

export default Ember.Controller.extend({
  newTitle: '',

  isCreateDisabled: Ember.computed('newTitle', function () {
    return this.get('newTitle').trim().length === 0
  }),

  actions: {
    createTodo () {
      const title = this.get('newTitle')
      if (!title) return
      const newTodo = Ember.Object.create({
        title,
        completed: false
      })
      this.get('model').unshiftObject(newTodo)
    },

    deleteTodo (todo) {
      this
        .get('model')
        .removeObject(todo)
    }
  }
});
