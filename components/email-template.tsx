import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
    email: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
    email,
    message,
}) => (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', color: '#111' }}>
        <h1 style={{ color: '#05dc80' }}>Nuevo Mensaje desde Pixel Flux Website</h1>
        <p><strong>De:</strong> {firstName} ({email})</p>
        <hr style={{ borderColor: '#eee' }} />
        <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
    </div>
);
