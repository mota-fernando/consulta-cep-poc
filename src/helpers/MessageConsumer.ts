import amqp from 'amqplib';
import { getAddressByCep } from './services/CepService';

class MessageConsumer {
  private connection!: amqp.Connection;
  private channel!: amqp.Channel;
  private queue: string;

  constructor(queue: string) {
    this.queue = queue;
  }

  async connect() {
    this.connection = await amqp.connect('amqp://localhost');
    this.channel = await this.connection.createChannel();
    await this.channel.assertQueue(this.queue);
    await this.channel.prefetch(1);
  }

  async consumeMessages() {
    console.log('Aguardando mensagens...');

    this.channel.consume(this.queue, async (message) => {
      const cep = message.content.toString();

      try {
        const address = await getAddressByCep(cep);

        console.log(address);

        // Aqui você pode fazer o que desejar com as informações do endereço, como salvar em um banco de dados, enviar por e-mail, etc.

        this.channel.ack(message);
      } catch (error) {
        console.error(`Erro ao processar consulta de CEP ${cep}:`, error);
      }
    });
  }

  async disconnect() {
    await this.channel.close();
    await this.connection.close();
  }
}

const consumer = new MessageConsumer('cep_queue');
consumer.connect().then(() => consumer.consumeMessages());