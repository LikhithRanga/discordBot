QR Generation Discord Bot

--This Code is able to set up a discord bot and do basic interactions and also QR code generation from text and get png image.--

Phase-01 Setup Discord bot on "https://discord.com/developers/applications":
    Click on Create New Application ; Setup Name and Create;
    Then go to your application->bots and select three button "ON" in "PRIVILEGED GATEWAY INTENTS" after setting bot to private by turning OFF public bot
    Go To OAuth2, in scopes select "bot" & "applications.commands"
    Give permissions for basic give "Administrator" Copy Generated URL and paste it in your server
    Go To Bot section, Select Reset TOKEN and put it in .env file==>"TOKEN=<<TOKEN VALUE>>" + I added .gitignore-->cat==>".env" to ignore the file into Github.
    Also Added GUILD_ID=Server ID and CLIENT_ID=BOT ID from discord.. 

QR CODE GET REQUEST GUIDE DOC:https://developers.google.com/chart/infographics/docs/qr_codes
