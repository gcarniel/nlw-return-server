import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ce0fb4a27c161d",
    pass: "6993cf7b6cb6f8",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe FeedGet <contato@feedget.com.br>",
      to: "Gabriel Carniel <gcarniel@outlook.com>",
      subject,
      html: body,
    });
  }
}
