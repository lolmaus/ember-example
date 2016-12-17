import Ember from 'ember';

export default Ember.Route.extend({
  model ({amount}) {
    amount = amount ? parseInt(amount, 10) : 500000
    console.log("started generating array")

    const result =
      new Array(amount)
        .fill(0)
        .map((item, index) => ({
          title:     `Todo #${index + 1}`,
          completed: Math.random() > 0.5,
        }))

    console.log("finished generating array")

    return result
  }
});
