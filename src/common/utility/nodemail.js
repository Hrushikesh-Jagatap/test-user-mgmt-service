const nodemailer = require('nodemailer');
const { PDFDocument, rgb } = require('pdf-lib');

// Function to send email with the data as a PDF attachment
const sendEmailWithPDF = async (data) => {

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    page.drawText(JSON.stringify(data), { x: 10, y: 10 });

 
    const pdfBytes = await pdfDoc.save();

    // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'aryan.amit0824@gmail.com',
            pass: 'gffh ckfq xhwg fgwt'
        }
    });

    // Email content
    let mailOptions = {
        from: 'aryan.amit0824@gmail.com',
        to: 'amit.kumar@intelliedtech.com',
        subject: 'Home Tuition Details',
        text: 'Please find the attached PDF with the Home Tuition Details',
        attachments: [
            {
                filename: 'hometuition_details.pdf',
                content: pdfBytes
            }
        ]
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};


const sendEmailWithPDFPrivate = async (data) => {

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    page.drawText(JSON.stringify(data), { x: 10, y: 100 });

 
    const pdfBytes = await pdfDoc.save();

    // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'aryan.amit0824@gmail.com',
            pass: 'gffh ckfq xhwg fgwt'
        }
    });

    // Email content
    let mailOptions = {
        from: 'aryan.amit0824@gmail.com',
        to: 'amit.kumar@intelliedtech.com',
        subject: 'Private Tuition Details',
        text: 'Please find the attached PDF with the Home Tuition Details',
        attachments: [
            {
                filename: 'privatetuition_details.pdf',
                content: pdfBytes
            }
        ]
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};

module.exports = {
    sendEmailWithPDF,
    sendEmailWithPDFPrivate
};
