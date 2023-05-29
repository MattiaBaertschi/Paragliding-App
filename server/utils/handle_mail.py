import smtplib, ssl

from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

from utils.functions import *
from utils.Models import *

# define function to send an e-mail
def sendmail(reciver, username, register_token):

  msg = MIMEMultipart('alternative')
  msg['Subject'] = "Bestätigung Ihrer Emailadresse"
  msg['From'] = MAIL_ADDRESS
  msg['To'] = reciver
  

  html = f"""
            <html lang="de">

            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Cloudy - Aktiviere deinen Account</title>
                <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
            </head>

            <body style="background-color: #f5f5f5; font-family: 'Poppins', sans-serif;">
                <div class="p-12">
                    <div class="flex justify-center items-center flex-col my-16 bg-white p-8 rounded-xl mx-auto">
                        <div class="text-center">
                            <div class="w-48 mx-auto">
                                <!-- <img src="login.png" class="w-full"> -->
                            </div>
                            <h1 class="text-3xl mb-4 ">Herzlich Wilkommen {username} zu Cloudy!</h1>
                            <p class="">Bestätige deine E-Mail-Adresse mit folgendem Button um deinen Account zu aktivieren:</p>
                            <div class="my-8">
                            <a href="https://hoemknoebi.internet-box.ch/api/verify/{register_token}"
                                class="bg-black text-white px-6 py-3 rounded-xl tracking-wider hover:underline">Account
                                aktivieren</a>
                            </div>

                            <p class="font-normal text-base">Falls der Button nicht funktioniert koppiere folgenden Link:</p>
                            <p class="font-mono text-base whitespace-pre-wrap break-words">https://hoemknoebi.internet-box.ch/api/verify/{register_token}</p>
                            <p class="font-normal text-sm mt-8 text-blach-200">Wenn Sie sich nicht auf der Website von Cloudy registriert haben bitte ingnorieren Sie diese E-Mail</p>
                        </div>
                    </div>
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
      server.login(MAIL_ADDRESS, MAIL_PASS)
      server.sendmail(MAIL_ADDRESS, reciver, msg.as_string())
      print("Email sent successfully.")
