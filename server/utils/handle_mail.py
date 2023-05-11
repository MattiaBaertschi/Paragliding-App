import smtplib, ssl
from Models import Creds

def sendmail(reciver):
  html = """
  <html>
    <body>
      <h1>Hello miss Hauser</h1>
      <p>Sie haben einen <strong>Preis</strong> gewonnen.</p>
      <p>Bitte klicken Sie auf den link</p>
      <a>https://piratelol.ytmnd.com/</a>
      <p>Mit Freundlichsten Gegrüssen</p>
      <p>Ihr Trolololo</p>
    </body>
  </html>
  """


  message = f"""\
  From: {Creds.MAIL_ADDRESS}
  To: {reciver}
  Subject: Test Email
  Content-Type: text/html

  {html}
  """

  message = message.encode("utf-8")

  # Create a secure SSL context
  context = ssl.create_default_context()

  with smtplib.SMTP(host="smtp.office365.com", port=587) as server:
      server.ehlo()
      server.starttls(context=context)
      server.ehlo()
      server.login(Creds.MAIL_ADDRESS, Creds.MAIL_PASS)
      server.sendmail(Creds.MAIL_ADDRESS, reciver, message)
      print("Email sent successfully.")
