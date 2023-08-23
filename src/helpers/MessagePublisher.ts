import amqp from 'amqplib';

export class MessagePublisher {
  private connection!
  : amqp.Connection;
  private channel!: amqp.Channel;
  private queue: string;

  constructor(queue: string) {
    this.queue = queue;
  }

  async connect() {
    this.connection = await amqp.connect('amqp://localhost');
    this.channel = await this.connection.createChannel();
    await this.channel.assertQueue(this.queue);
  }

  async publishMessage(message: string) {
    try {
      await this.channel.sendToQueue(this.queue, Buffer.from(message));
      console.log(`Mensagem enviada: ${message}`);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }
  }

  async disconnect() {
    await this.channel.close();
    await this.connection.close();
  }
}