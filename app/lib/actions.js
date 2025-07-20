'use server';

import { signIn } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { redirect } from "next/navigation";
import nodemailer from 'nodemailer';


export async function sendMessage(formData) {

  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  const callbackUrl = formData.get('callbackUrl');

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  await transporter.sendMail({
    from: `"Web Kontakt" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: 'Nová zpráva z kontaktního formuláře',
    text: `
      Jméno: ${name}
      Email: ${email}
      Zpráva:
      ${message}
    `,
  })
  redirect(`${callbackUrl}?submitted=1`)
}

export async function authenticate(prevState, formData) {
    try {

        await signIn('credentials', formData);

    }  catch (error) {

        if (isRedirectError(error)) {
            throw error; 
            }
            
        if (error) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
    }
    throw error;
  }
}