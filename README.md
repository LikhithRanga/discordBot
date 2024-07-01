# QR Generation Discord Bot

This code sets up a Discord bot that can perform basic interactions and generate QR codes from text, returning them as PNG images.

## Phase-01: Setup Discord Bot on [Discord Developer Portal](https://discord.com/developers/applications)

1. **Create a New Application**
    - Click on **Create New Application**.
    - Set up the name and create the application.

2. **Configure the Bot**
    - Go to your application, navigate to the **Bot** section.
    - Set the bot to private by turning off **Public Bot**.
    - Enable the following **Privileged Gateway Intents**:
        - `PRESENCE INTENT`
        - `SERVER MEMBERS INTENT`
        - `MESSAGE CONTENT INTENT`

3. **OAuth2 Setup**
    - Go to the **OAuth2** section, under **Scopes**, select:
        - `bot`
        - `applications.commands`
    - Under **Bot Permissions**, grant the **Administrator** permission.
    - Copy the generated URL and paste it into your server's invite link.

4. **Bot Token Setup**
    - Go to the **Bot** section, select **Reset Token** and copy the token.
    - Create a `.env` file in your project directory and add the following:
      ```
      TOKEN=<<TOKEN VALUE>>
      GUILD_ID=<<SERVER ID>>
      CLIENT_ID=<<BOT ID>>
      ```
    - Add `.env` to your `.gitignore` file to ensure it is not pushed to GitHub:
      ```
      .env
      ```

## QR Code Get Request Guide

Refer to the official documentation for generating QR codes: [Google Charts QR Code API](https://developers.google.com/chart/infographics/docs/qr_codes)
