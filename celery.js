const celery = require('celery-node');

const client = celery.createClient(
    "amqps://mwacxgcn:zTe1r_YLYJvBvbL-dt-zQoJN8TQb_bwH@gerbil.rmq.cloudamqp.com/mwacxgcn",
    "amqps://mwacxgcn:zTe1r_YLYJvBvbL-dt-zQoJN8TQb_bwH@gerbil.rmq.cloudamqp.com/mwacxgcn"
);

const task = client.createTask("tasks.add");
const result = task.applyAsync([1, 2]);
console.log(result)
result.get().then(data => {
  console.log(data);
  client.disconnect();
});