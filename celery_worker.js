"use strict";
const celery = require("celery-node");
const qpmq ="amqps://mwacxgcn:zTe1r_YLYJvBvbL-dt-zQoJN8TQb_bwH@gerbil.rmq.cloudamqp.com/mwacxgcn"

const worker = celery.createWorker(qpmq, qpmq);
worker.register("tasks.add", (a, b) => a + b);
worker.register("tasks.add_kwargs", (a, b, { c, d }) => a + b + c + d);
worker.start();