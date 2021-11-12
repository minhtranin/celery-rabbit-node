const amqp = require("amqplib");

const msg = {number: process.argv[2]}
connect();
async function connect() {
// using customer.cloudamqp.com/
    try {
        const amqpServer = "amqps://mwacxgcn:zTe1r_YLYJvBvbL-dt-zQoJN8TQb_bwH@gerbil.rmq.cloudamqp.com/mwacxgcn"
        const connection = await amqp.connect(amqpServer)
        const channel = await connection.createChannel();
        await channel.assertQueue("jobs");
        await channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)))
        console.log(`Job sent successfully ${msg.number}`);
        await channel.close();
        await connection.close();
    }
    catch (ex){
        console.error(ex)
    }

}   