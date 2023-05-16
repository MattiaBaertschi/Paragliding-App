import smtplib, ssl

from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

from utils.Models import Creds

# define function to send an e-mail
def sendmail(reciver, username, register_token):

  msg = MIMEMultipart('alternative')
  msg['Subject'] = "Bestätigung Ihrer Emailadresse"
  msg['From'] = Creds.MAIL_ADDRESS
  msg['To'] = reciver
  

  html = f"""
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Cloudy - Bestätigen Sie Ihre E-mail</title>
          <style>
              /* CSS styles go here */
              body {{
                  font-family: Arial, sans-serif;
                  font-size: 16px;
                  color: #333;
              }}
              h1 {{
                  color: #007bff;
              }}
              p {{
                  margin-bottom: 20px;
              }}
              .container {{
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                  border: 1px solid #ccc;
                  border-radius: 5px;
              }}
              .button {{
                  display: inline-block;
                  background-color: #007bff;
                  color: #fff;
                  text-decoration: none;
                  padding: 10px 20px;
                  border-radius: 5px;
              }}
          </style>
      </head>
      <body>
          <div class="container">
              <h1>Herzlich Wilkommen {username} zu Cloudy!</h1>
              <p>Bitte drücken Sie auf den untenstehenden Knopf, um ihre E-mailadresse zu bestätigen.</p>
              <a href="https://hoemknoebi.internet-box.ch/api/verify/{register_token}" style="display: inline-block; background-color: #007bff; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 5px; border: 1px solid #007bff;">Jetzt Bestätigen</a>
              <p>Wenn der Knopf nicht funktieren sollte, kopieren Sie bitte den untenstehenden Link in ihren Browser:</p>
              <p style="textsitze">https://hoemknoebi.internet-box.ch/api/verify/{register_token}</p>
              <p>Wenn Sie sich nicht auf der Website von Cloudy registriert haben bitte ingnorieren Sie diese E-mail</p>
              <p>Danke, dass Sie sich für Cloudy registriert haben!</p>
          </div>
      </body>
      </html>
      """

  #html = html.encode("utf-8")
  msg.attach(MIMEText(html, 'html'))
    
  # Create a secure SSL context
  context = ssl.create_default_context()

  with smtplib.SMTP(host="mail.cyon.ch", port=587) as server:
      server.ehlo()
      server.starttls(context=context)
      server.ehlo()
      server.login(Creds.MAIL_ADDRESS, Creds.MAIL_PASS)
      server.sendmail(Creds.MAIL_ADDRESS, reciver, msg.as_string())
      print("Email sent successfully.")
