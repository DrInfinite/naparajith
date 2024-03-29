'use server';

import EmailTemplate from '@/components/email/email-template';
import { getErrorMessage, validateString } from '@/lib/utils';
import React from 'react';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormData {
    senderEmail: string;
    senderName: string;
    message: string;
}

export async function sendEmail({
    senderEmail,
    senderName,
    message,
}: ContactFormData) {
    // const senderEmail = formData.get("senderEmail");
    // const message = formData.get("message");
    // const senderName = formData.get("senderName");

    // simple server-side validation
    if (!validateString(senderEmail, 100)) {
        return {
            error: 'Invalid sender email',
        };
    }
    if (!validateString(message, 2500)) {
        return {
            error: 'Invalid message',
        };
    }
    if (!validateString(senderName, 100)) {
        return { error: 'Invalid Name' };
    }

    let data;
    try {
        data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: process.env.EMAIL_ADDRESS as string,
            subject: `Message from ${senderName}`,
            reply_to: senderEmail,
            tags: [{ name: 'contact', value: 'contact_form_message' }],
            react: React.createElement(EmailTemplate, {
                message: message,
                senderEmail: senderEmail,
                senderName: senderName,
            }),
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        };
    }

    return {
        data,
    };
}
