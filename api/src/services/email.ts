import nodemailer from 'nodemailer';
import nodemailerSendgrid from 'nodemailer-sendgrid';

export const emailSender = nodemailer.createTransport(
  nodemailerSendgrid({
    apiKey: process.env.SENDGRID_API_KEY as string
  })
);
