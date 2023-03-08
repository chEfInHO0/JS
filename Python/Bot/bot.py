import discord
import dotenv
from secret import token

intents = discord.Intents.default()
intents.message_content = True
intents.members = True
target_message_id = 1067638696175747152

async def send_message(message, user_message, is_private):
    try:
        response = dotenv.handle_response(user_message)
        await message.author.send(response) if is_private else await message.channel.send(response)

    except Exception as e:
        print(e)

def run_discord_bot():
    client = discord.Client(intents=intents)

    @client.event
    async def on_ready():
        print(f'{client.user} is now running!')

    @client.event
    async def on_message(message):
        # Make sure bot doesn't get stuck in an infinite loop
        if message.author == client.user:
            return
        else:
            print(message)
            # Get data about the user
            username = str(message.author)
            user_message = str(message.content)
            channel = str(message.channel)

            # Debug printing
            print(f"{username} said: '{user_message}' ({channel})")

            # If the user message contains a '?' in front of the text, it becomes a private message
            if user_message[0] == '?':
                user_message = user_message[1:]  # [1:] Removes the '?'
                await send_message(message, user_message, is_private=True)
            else:
                await send_message(message, user_message, is_private=False)
    
    @client.event
    async def on_raw_reaction_add(payload):
        if payload.message_id != target_message_id:
            pass
        else:
            guild = client.get_guild(payload.guild_id)
            if payload.emoji.name == '🤡':
                role = discord.utils.get(guild.roles, name='Palhaço')
                await payload.member.add_roles(role)
    
    
    @client.event
    async def on_raw_reaction_remove(payload):
        if payload.message_id != target_message_id:
            pass
        else:
            guild = client.get_guild(payload.guild_id)
            member = guild.get_member(payload.user_id)
            if payload.emoji.name == '🤡':
                role = discord.utils.get(guild.roles, name='Palhaço')
                await member.remove_roles(role)
    # Remember to run your bot with your personal TOKEN
    client.run(token)

run_discord_bot()