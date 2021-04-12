import * as mailchimp from '@mailchimp/mailchimp_marketing';
import * as sgMail from '@sendgrid/mail'

let err;

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: "us17"
});
sgMail.setApiKey(process.env.SG_API_KEY);

export default function handler (req, res) {
  if(req.method === 'POST'){
    const name = req.body.name;
    const email = req.body.email;
    const msg = req.body.msg;
    const listId = "d449b04783";

    async function run() {
      try{
        const response = await mailchimp.lists.addListMember(listId, {
          email_address: email,
          status: "subscribed",
          merge_fields: {
            FNAME: name,
            LNAME: name,
            MESSAGE: msg
          }
        });
        console.log(response);
        
        const msg1 = {
          to: 'reenajain.rj10051976@gmail.com', // Change to your recipient
          from: 'jain.chirag0174@gmail.com', // Change to your verified sender
          subject: 'New Response',
          html: `<h1>Hello Chirag</h1><p>A new response came to you on your website.Find the details below:</p><p>Name: ${name}</p><p>Email: ${email}</p><p>Message: </p><p>&nbsp;&nbsp;&nbsp;&nbsp;${msg}</p>`,
        }  
        const msg2 = {
          to: email, // Change to your recipient
          from: 'jain.chirag0174@gmail.com', // Change to your verified sender
          subject: 'Response Submitted',
          html: `<h1>Success</h1><p>Hello ${name}, thanks for contacting me.</p><p>I will get in touch with you soon.</p>`,
        }
        sgMail
          .send(msg1)
          .then(() => {
            console.log('Email sent')
          })
          .catch((error) => {
            console.error(error)
        })
        sgMail
          .send(msg2)
          .then(() => {
            console.log('Email sent')
            res.end();
          })
          .catch((error) => {
            console.error(error)
            res.status(500).end();
          })
      }catch(error){
        
        console.log(error);
        err = error;
        const msg = {
          to: email, // Change to your recipient
          from: 'jain.chirag0174@gmail.com', // Change to your verified sender
          subject: 'Response Submission Error',
          html: `<h1>ERROR!!</h1><p>Hello ${name}, there was some problem submitting your response.</p><p>Please Try Again Later</p><p>Error Details: </p><p>&nbsp;&nbsp;&nbsp;&nbsp;${JSON.parse(error.response.text).detail}</p>`
        }
        sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent')
        })
        .catch((error) => {
          console.error(error);
          res.status(500).end();

        });
      }
    }
    run();
    // if(err){
    //   res.status(500).end();
    // }else{
    //   res.end();
    // }


  }else{
    res.redirect('/contact');
  }
}
