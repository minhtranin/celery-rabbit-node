"use strict";
const celery = require("celery-node");
const qpmq ="amqps://mwacxgcn:zTe1r_YLYJvBvbL-dt-zQoJN8TQb_bwH@gerbil.rmq.cloudamqp.com/mwacxgcn"
const client = celery.createClient(qpmq, qpmq);

const task = client.createTask("tasks.add");
const taskKwargs = client.createTask("tasks.add_kwargs");
Promise.all([
  task.delay(1, 2).get().then(console.log),
  task.applyAsync([1, 2]).get().then(console.log),
  taskKwargs.delay(1, 2, { c: 3, d: 4 }).get().then(console.log),
  taskKwargs.applyAsync([1, 2], { c: 3, d: 4 }).get().then(console.log),
]).then(() => client.disconnect());