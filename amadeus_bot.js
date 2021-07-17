// Code by Zack_Mayern#1804. 
// Amadeus#4026 Code

const Discord = require('discord.js');
const { get } = require('http');
const client = new Discord.Client();

// Shows connection established and the name of the bot in the terminal

client.on('ready', () => {                                                 
    console.log("Connection Established as " + client.user.tag) 
    
    client.user.setActivity("?help", {type: "PLAYING"})

    // Shows list of servers the bot is connected to and the  number of channels and voice channel in the server

    client.guilds.cache.forEach((guild) => {    
        console.log(guild.name)
        guild.channels.cache.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
        })
    })
    
    // Og Heckors Text Channel ID: 716904829947084808
    // General Text Channel ID: 590797645778386945

    let generalChannel = client.channels.cache.get("716904829947084808")
    const welcomeMessage = new Discord.MessageEmbed()
    .setDescription("Hello! Thank you for adding me to your server! I help you to see the minimum and recommended requirements of a game without having to search it on the internet. To know more type `?help`. I was made by the team")
    .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
   
    .setColor("LUMINOUS_VIVID_PINK")
    .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
    .setImage("https://cdn.discordapp.com/attachments/716904829947084808/748172413568679966/banner1.jpg")
  
    .setTimestamp()
    generalChannel.send(welcomeMessage);
})

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) {
        return
    }
    
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    // Code for Under Constrution.

    /*receivedMessage.channel.send("I am currently under construction. I may respond to your messages later " + receivedMessage.author.toString()) //+receivedMessage.content)

    receivedMessage.react("🛑")
    let customEmoji = receivedMessage.guild.emojis.cache.get("748105323835031582")
    receivedMessage.react(customEmoji)
    receivedMessage.guild.emojis.cache.forEach(customEmoji => {
        console.log(` ${customEmoji.name} ${customEmoji.id}`)
        receivedMessage.react(customEmoji)
    })*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    if (receivedMessage.content.startsWith("Good Bot")) {
        receivedMessage.channel.send("Thank you! 🙂 ")
        receivedMessage.react("👍")
    }

    if (receivedMessage.content.startsWith("Good bot")) {
        receivedMessage.channel.send("Thank you! 🙂 ")
        receivedMessage.react("👍")
    }

    if (receivedMessage.content.startsWith("good bot")) {
        receivedMessage.channel.send("Thank you! 🙂 ")
        receivedMessage.react("👍")
    }

    if (receivedMessage.content.startsWith("Bad Bot")) {
        receivedMessage.channel.send("Sorry! I will do better next time. ☹ ")
        receivedMessage.react("👍")
    }

    if (receivedMessage.content.startsWith("Bad bot")) {
        receivedMessage.channel.send("Sorry! I will do better next time. ☹ ")
        receivedMessage.react("👍")
    }

    if (receivedMessage.content.startsWith("bad bot")) {
        receivedMessage.channel.send("Sorry! I will do better next time. ☹ ")
        receivedMessage.react("👍")
    }

    if (receivedMessage.content.startsWith("?")) {
        processCommand(receivedMessage)
    }
})

//Splits the command input.

function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1)
    let splitCommand = fullCommand.split(" ")
    let primaryCommand = splitCommand[0]
    let arguments = splitCommand.slice(1)

    if (primaryCommand == "help") {
        helpCommand(arguments, receivedMessage)
    }

    else if (primaryCommand == "req") {   
        requirementsCommand(arguments, receivedMessage)
    }

    else if (primaryCommand == "list") {
        listCommand(arguments, receivedMessage)
    }
    
    else {
        let notHelpDesk = new Discord.MessageEmbed()
        .setDescription("❌ Wrong Command! Type `?help` to know the list of commands I know.")
        .setColor("RED")
        receivedMessage.channel.send(notHelpDesk);
        receivedMessage.react("❌")
    }
}

// Help Command Code

function helpCommand(arguments, receivedMessage) {
  
    if (arguments.length == 0) {

        let helpDesk = new Discord.MessageEmbed()
        .setTitle("⚠ Help Desk ⚠ ")
        .setDescription("Hi! Welcome to the help section!")
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        
        .addField("Commands", 
        "You can see the list of games I can provide requirements for by typing `?list` [`PageNumber`] excluding the brackets.\nBy typing `?list` [`PageNumber`] you can see the list of games with their gameID on their left side.\n\nYou can check the requirements of a game by typing `?req` [`gameID`] excluding the brackets.")
        .addField("Other", 
        "You can also me a compliment if I was useful! Try saying Good Bot.\nAnd if I wasn't, then you can say Bad Bot.")
        .addField("Subscribe to our YouTube Channel", 
        "[ENIGMAVERSE](https://www.youtube.com/channel/UCNRpxy935T3Wm9EibrZyFpA)")

        .setColor("GREEN")
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
  
        .setTimestamp()
        receivedMessage.channel.send(helpDesk);

    }

    else if (arguments.length != 0) {
        let notHelpDesk = new Discord.MessageEmbed()
        .setDescription("❌ Sorry! That was an incorrect command. Try typing `?help`")
        .setColor("RED")
        receivedMessage.channel.send(notHelpDesk);
        receivedMessage.react("❌")
    }
}

// Requirement Command Code

function requirementsCommand(arguments, receivedMessage) {
    const argumentsLimit = 300
    
    if (arguments == "1") {
        let one = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/z1tiycf.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(one)
        receivedMessage.react("👍")
    }
    
    if (arguments == "2") {
        let two = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/3iCzrFt.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(two)
        receivedMessage.react("👍")
    }

    if (arguments == "3") {
        let three = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/stz8jLg.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(three)
        receivedMessage.react("👍")
    }

    if (arguments == "4") {
        let four = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/SszCrbn.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(four)
        receivedMessage.react("👍")
    }

    if (arguments == "5") {
        let five = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/KZ1pZug.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(five)
        receivedMessage.react("👍")
    }

    if (arguments == "6") {
        let six = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/fcw1JLF.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(six)
        receivedMessage.react("👍")
    }

    if (arguments == "7") {
        let seven = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/Mag9Z7l.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(seven)
        receivedMessage.react("👍")
    }

    if (arguments == "8") {
        let eight = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/qbQinJw.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(eight)
        receivedMessage.react("👍")
    }

    if (arguments == "9") {
        let nine = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/2NQyYxj.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(nine)
        receivedMessage.react("👍")
    }

    if (arguments == "10") {
        let ten = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/aek9KzC.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(ten)
        receivedMessage.react("👍")
    }

    if (arguments == "11") {
        let eleven = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/LRCxMrz.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(eleven)
        receivedMessage.react("👍")
    }

    if (arguments == "12") {
        let twelve = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/TEY4G4Q.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(twelve)
        receivedMessage.react("👍")
    }

    if (arguments == "13") {
        let thirteen = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/KQmFOzf.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(thirteen)
        receivedMessage.react("👍")
    }

    if (arguments == "14") {
        let fourteen = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/yaR75DM.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(fourteen)
        receivedMessage.react("👍")
    }

    if (arguments == "15") {
        let fifteen = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/ooqBRBo.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(fifteen)
        receivedMessage.react("👍")
    }

    if (arguments == "16") {
        let sixteen = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/2dUB9hB.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(sixteen)
        receivedMessage.react("👍")
    }

    if (arguments == "17") {
        let seventeen = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/79wzfdP.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(seventeen)
        receivedMessage.react("👍")
    }

    if (arguments == "18") {
        let eightteen = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/3ujFIXm.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(eightteen)
        receivedMessage.react("👍")
    }

    if (arguments == "19") {
        let ninteen = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/Rhydpmg.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(ninteen)
        receivedMessage.react("👍")
    }

    if (arguments == "20") {
        let twenty = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/vO06UmO.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(twenty)
        receivedMessage.react("👍")
    }

    if (arguments == "21") {
        let twentyOne = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/uUYIO8c.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(twentyOne)
        receivedMessage.react("👍")
    }

    if (arguments == "22") {
        let twentyTwo = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/0rxEwgS.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(twentyTwo)
        receivedMessage.react("👍")
    }

    if (arguments == "23") {
        let twentyThree = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/RmzEGLg.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(twentyThree)
        receivedMessage.react("👍")
    }

    if (arguments == "24") {
        let twentyFour = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/LmvKrBR.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(twentyFour)
        receivedMessage.react("👍")
    }

    if (arguments == "25") {
        let twentyFive = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/c6fmMf3.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(twentyFive)
        receivedMessage.react("👍")
    }

    if (arguments == "26") {
        let twentySix = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/8MOyZOE.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(twentySix)
        receivedMessage.react("👍")
    }

    if (arguments == "27") {
        let twentySeven = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/PGngfKz.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(twentySeven)
        receivedMessage.react("👍")
    }

    if (arguments == "28") {
        let twentyEight = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/bjQuIs5.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(twentyEight)
        receivedMessage.react("👍")
    }

    if (arguments == "29") {
        let twentyNine = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/M9TCGFJ.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(twentyNine)
        receivedMessage.react("👍")
    }

    if (arguments == "30") {
        let thirty = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/odVt432.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(thirty)
        receivedMessage.react("👍")
    }

    if (arguments == "31") {
        let thirtyOne = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/LmvKrBR.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(thirtyOne)
        receivedMessage.react("👍")
    }

    if (arguments == "32") {
        let thirtyTwo = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/UTxBU9b.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(thirtyTwo)
        receivedMessage.react("👍")
    }

    if (arguments == "33") {
        let thirtyThree = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/Fy0SRQC.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(thirtyThree)
        receivedMessage.react("👍")
    }

    if (arguments == "34") {
        let thirtyFour = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/gHvSRTz.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(thirtyFour)
        receivedMessage.react("👍")
    }

    if (arguments == "35") {
        let thirtyFive = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/5wiOynw.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(thirtyFive)
        receivedMessage.react("👍")
    }

    if (arguments == "36") {
        let thirtySix = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/2pRq5DB.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(thirtySix)
        receivedMessage.react("👍")
    }

    if (arguments == "37") {
        let thirtySeven = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/GPIVBOm.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(thirtySeven)
        receivedMessage.react("👍")
    }

    if (arguments == "38") {
        let thirtyEight = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/CToa2GD.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(thirtyEight)
        receivedMessage.react("👍")
    }

    if (arguments == "39") {
        let thirtyNine = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/yq2cnpc.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(thirtyNine)
        receivedMessage.react("👍")
    }

    if (arguments == "40") {
        let forty = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/7amZ0AZ.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(forty)
        receivedMessage.react("👍")
    }

    if (arguments == "41") {
        let fortyOne = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/AGt07Er.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(fortyOne)
        receivedMessage.react("👍")
    }

    if (arguments == "42") {
        let fortyTwo = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/O16v9Xv.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(fortyTwo)
        receivedMessage.react("👍")
    }

    if (arguments == "43") {
        let fortyThree = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/Zp8Og0q.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(fortyThree)
        receivedMessage.react("👍")
    }

    if (arguments == "44") {
        let fortyFour = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/MOpclV2.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(fortyFour)
        receivedMessage.react("👍")
    }

    if (arguments == "45") {
        let fortyFive = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/mtuP7SC.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(fortyFive)
        receivedMessage.react("👍")
    }

    if (arguments == "46") {
        let fortySix = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/8b7g44H.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(fortySix)
        receivedMessage.react("👍")
    }

    if (arguments == "47") {
        let fortySeven = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/zkOlR7a.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(fortySeven)
        receivedMessage.react("👍")
    }

    if (arguments == "48") {
        let fortyEight = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/ATKYFwP.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(fortyEight)
        receivedMessage.react("👍")
    }

    if (arguments == "49") {
        let fortyNine = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/SJhMh61.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(fortyNine)
        receivedMessage.react("👍")
    }

    if (arguments == "50") {
        let fifty = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/knsgjKP.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(fifty)
        receivedMessage.react("👍")
    }

    if (arguments == "51") {
        let fiftyOne = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/5O8XssO.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(fiftyOne)
        receivedMessage.react("👍")
    }

    if (arguments == "52") {
        let fiftyTwo = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/g4u2cTR.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(fiftyTwo)
        receivedMessage.react("👍")
    }

    if (arguments == "53") {
        let fiftyThree = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/gIdelJK.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(fiftyThree)
        receivedMessage.react("👍")
    }

    if (arguments == "54") {
        let fiftyFour = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/EjgRIPM.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(fiftyFour)
        receivedMessage.react("👍")
    }

    if (arguments == "55") {
        let fiftyFive = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/6o7p1Mv.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(fiftyFive)
        receivedMessage.react("👍")
    }

    if (arguments == "56") {
        let fiftySix = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/kY57SN2.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(fiftySix)
        receivedMessage.react("👍")
    }

    if (arguments == "57") {
        let fiftySeven = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/gFZ2LYo.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(fiftySeven)
        receivedMessage.react("👍")
    }

    if (arguments == "58") {
        let fiftyEight = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/W1ZrZ18.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(fiftyEight)
        receivedMessage.react("👍")
    }

    if (arguments == "59") {
        let fiftyNine = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/cznq48M.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(fiftyNine)
        receivedMessage.react("👍")
    }

    if (arguments == "60") {
        let sixty = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/NWfo1WY.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(sixty)
        receivedMessage.react("👍")
    }

    if (arguments == "61") {
        let sixtyOne = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/VLSfzFC.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(sixtyOne)
        receivedMessage.react("👍")
    }

    if (arguments == "62") {
        let sixtyTwo = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/fOWYkuM.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(sixtyTwo)
        receivedMessage.react("👍")
    }

    if (arguments == "63") {
        let sixtyThree = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/Gi4ky1Y.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(sixtyThree)
        receivedMessage.react("👍")
    }

    if (arguments == "64") {
        let sixtyFour = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/1Id8Vzz.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(sixtyFour)
        receivedMessage.react("👍")
    }

    if (arguments == "65") {
        let sixtyFive = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/16OYDXl.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(sixtyFive)
        receivedMessage.react("👍")
    }

    if (arguments == "66") {
        let sixtySix = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/t7Fb03v.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(sixtySix)
        receivedMessage.react("👍")
    }

    if (arguments == "67") {
        let sixtySeven = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/6nEk69a.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(sixtySeven)
        receivedMessage.react("👍")
    }

    if (arguments == "68") {
        let sixtyEight = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/JWGjerb.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(sixtyEight)
        receivedMessage.react("👍")
    }

    if (arguments == "69") {
        let sixtyNine = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/7CF3HeU.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(sixtyNine)
        receivedMessage.react("👍")
    }

    if (arguments == "70") {
        let seventy = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/LC0gIdF.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(seventy)
        receivedMessage.react("👍")
    }

    if (arguments == "71") {
        let seventyOne = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/7l7MSsQ.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(seventyOne)
        receivedMessage.react("👍")
    }

    if (arguments == "72") {
        let seventyTwo = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/RZZN6bi.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(seventyTwo)
        receivedMessage.react("👍")
    }

    if (arguments == "73") {
        let seventyThree = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/K9K3YYA.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(seventyThree)
        receivedMessage.react("👍")
    }

    if (arguments == "74") {
        let seventyFour = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/ank2yVN.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(seventyFour)
        receivedMessage.react("👍")
    }

    if (arguments == "75") {
        let seventyFive = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/sSS7wHx.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(seventyFive)
        receivedMessage.react("👍")
    }

    if (arguments == "76") {
        let seventySix = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/bMgRbtg.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(seventySix)
        receivedMessage.react("👍")
    }

    if (arguments == "77") {
        let seventySeven = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/Il3ivt4.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(seventySeven)
        receivedMessage.react("👍")
    }

    if (arguments == "78") {
        let seventyeight = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/5G1FsAH.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(seventyeight)
        receivedMessage.react("👍")
    }

    if (arguments == "79") {
        let seventyNine = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/QvPD9Xj.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(seventyNine)
        receivedMessage.react("👍")
    }

    if (arguments == "80") {
        let eighty = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/M1Gk115.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(eighty)
        receivedMessage.react("👍")
    }

    if (arguments == "81") {
        let eightyOne = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/RkWA3lL.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(eightyOne)
        receivedMessage.react("👍")
    }

    if (arguments == "82") {
        let eightyTwo = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/wYclHNL.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(eightyTwo)
        receivedMessage.react("👍")
    }

    if (arguments == "83") {
        let eightyThree = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/nNuv7BU.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(eightyThree)
        receivedMessage.react("👍")
    }

    if (arguments == "84") {
        let eightyFour = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/u1UDqOH.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(eightyFour)
        receivedMessage.react("👍")
    }

    if (arguments == "85") {
        let eightyFive = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/BmWOGV8.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(eightyFive)
        receivedMessage.react("👍")
    }

    if (arguments == "86") {
        let eightySix = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/tJ5hW2y.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(eightySix)
        receivedMessage.react("👍")
    }

    if (arguments == "87") {
        let eightySeven = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/KapaNzg.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(eightySeven)
        receivedMessage.react("👍")
    }

    if (arguments == "88") {
        let eightyEight = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/m5GBbAY.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(eightyEight)
        receivedMessage.react("👍")
    }

    if (arguments == "89") {
        let eightyNine = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/ue6Ax6k.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(eightyNine)
        receivedMessage.react("👍")
    }

    if (arguments == "90") {
        let ninety = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/VVLRCJq.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(ninety)
        receivedMessage.react("👍")
    }

    if (arguments == "91") {
        let ninetyOne = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/CZ4JfIQ.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(ninetyOne)
        receivedMessage.react("👍")
    }

    if (arguments == "92") {
        let ninetyTwo = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/OTCY6WN.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(ninetyTwo)
        receivedMessage.react("👍")
    }

    if (arguments == "93") {
        let ninetyThree = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/pHuA7nC.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(ninetyThree)
        receivedMessage.react("👍")
    }

    if (arguments == "94") {
        let ninetyFour = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/VYkjIpz.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(ninetyFour)
        receivedMessage.react("👍")
    }

    if (arguments == "95") {
        let ninetyFive = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/bDmykJg.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(ninetyFive)
        receivedMessage.react("👍")
    }

    if (arguments == "96") {
        let ninetySix = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/cWWK6rg.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(ninetySix)
        receivedMessage.react("👍")
    }

    if (arguments == "97") {
        let ninetySeven = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/jjzaA7I.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(ninetySeven)
        receivedMessage.react("👍")
    }

    if (arguments == "98") {
        let ninetyEight = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/AkQUmac.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(ninetyEight)
        receivedMessage.react("👍")
    }

    if (arguments == "99") {
        let ninetyNine = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/3wQWZUW.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(ninetyNine)
        receivedMessage.react("👍")
    }

    if (arguments == "100") {
        let hundred = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/EuDzjAu.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(hundred)
        receivedMessage.react("👍")
    }

    if (arguments == "101") {
        let hundredOne = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/5nRnV2y.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(hundredOne)
        receivedMessage.react("👍")
    }

    if (arguments == "102") {
        let hundredTwo = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/f3XRnPO.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(hundredTwo)
        receivedMessage.react("👍")
    }

    if (arguments == "103") {
        let hundredThree = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/EKPQNSK.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(hundredThree)
        receivedMessage.react("👍")
    }

    if (arguments == "104") {
        let hundredFour = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/omyxaqv.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(hundredFour)
        receivedMessage.react("👍")
    }

    if (arguments == "105") {
        let hundredFive = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/uyFOWu0.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(hundredFive)
        receivedMessage.react("👍")
    }

    if (arguments == "106") {
        let hundredSix = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/q1KNx4r.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(hundredSix)
        receivedMessage.react("👍")
    }

    if (arguments == "107") {
        let hundredSeven = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/vXFdZZ4.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(hundredSeven)
        receivedMessage.react("👍")
    }

    if (arguments == "108") {
        let hundredEight = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/v4NnwdW.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(hundredEight)
        receivedMessage.react("👍")
    }

    if (arguments == "109") {
        let hundredNine = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/PQ1Rl8w.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(hundredNine)
        receivedMessage.react("👍")
    }

    if (arguments == "110") {
        let hundredTen = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/M16PQkB.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(hundredTen)
        receivedMessage.react("👍")
    }

    if (arguments == "111") {
        let hundredEleven = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/ATviMK4.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(hundredEleven)
        receivedMessage.react("👍")
    }

    if (arguments == "112") {
        let hundredTwelve = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/p445QIN.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(hundredTwelve)
        receivedMessage.react("👍")
    }

    if (arguments == "113") {
        let hundredThirteen = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/g23Q44d.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(hundredThirteen)
        receivedMessage.react("👍")
    }

    if (arguments == "114") {
        let hundredFourteen = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/CkG8tlP.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(hundredFourteen)
        receivedMessage.react("👍")
    }

    if (arguments == "115") {
        let hundredFifteen = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/WRVZpGG.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(hundredFifteen)
        receivedMessage.react("👍")
    }

    if (arguments == "116") {
        let hundredSixteen = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/uUe9EpU.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(hundredSixteen)
        receivedMessage.react("👍")
    }

    if (arguments == "117") {
        let hundredSeventeen = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/3BGCkc3.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(hundredSeventeen)
        receivedMessage.react("👍")
    }

    if (arguments == "118") {
        let hundredEighteen = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/bVacpF7.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(hundredEighteen)
        receivedMessage.react("👍")
    }

    if (arguments == "119") {
        let hundredNinteen = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/ANApqNF.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(hundredNinteen)
        receivedMessage.react("👍")
    }

    if (arguments == "120") {
        let hundredTwenty = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/bscBR1W.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(hundredTwenty)
        receivedMessage.react("👍")
    }

    if (arguments == "121") {
        let hundredTwentyOne = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://imgur.com/o2gZMvK.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(hundredTwentyOne)
        receivedMessage.react("👍")
    }

    if (arguments == "122") {
        let hundredTwentyTwo = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/477L7UH.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(hundredTwentyTwo)
        receivedMessage.react("👍")
    }

    if (arguments == "123") {
        let hundredTwentyThree = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/xNLSMwJ.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(hundredTwentyThree)
        receivedMessage.react("👍")
    }

    if (arguments == "124") {
        let hundredTwentyFour = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/c83AER3.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(hundredTwentyFour)
        receivedMessage.react("👍")
    }

    if (arguments == "125") {
        let hundredTwentyFive = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/N4GuLwJ.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(hundredTwentyFive)
        receivedMessage.react("👍")
    }

    if (arguments == "126") {
        let hundredTwentySix = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setColor("NAVY")
        .setImage("https://i.imgur.com/yBMBtTh.png")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(hundredTwentySix)
        receivedMessage.react("👍")
    }

    if (arguments == "127") {
        receivedMessage.channel.send("A device that allows a conventional telephone handset to feed its signal into a modem, as opposed to direct couplers, which feed the modulated/demodulated signal directly into the phone line")
        receivedMessage.react("👍")
    }

    if (arguments >= argumentsLimit) {
        let wronggameID = new Discord.MessageEmbed()
        .setDescription("❌ Not a valid gameID!")
        .setColor("RED")
        receivedMessage.channel.send(wronggameID);
        receivedMessage.react("❌")
    }

    else if (arguments.length == 0){
        let nogameID = new Discord.MessageEmbed()
        .setDescription("❌ No game entered. Try typing `?req` [`gameID`].")
        .setColor("RED")
        receivedMessage.channel.send(nogameID);
        receivedMessage.react("❌")
    }
}

// List Command Code. Shows the list of games.

function listCommand(arguments, receivedMessage) {

    if (arguments.length == 0) {
        let listError = new Discord.MessageEmbed()
        .setDescription("Type `?list` [`PageNumber`] excluding brackets. For now I have only `3 pages` of information with me.")
        .setColor("RED")
        receivedMessage.channel.send(listError)
        receivedMessage.react("❌")
    }

    if (arguments == '1') {
        let gameList1 = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setTitle("🖥 Game List Page #1 🖥 ")
        .setDescription("1. CS:GO\n2. Dota 2\n3. PUBG\n4. Fall Guys\n5. Grand Theft Auto V\n6. Team Fortress\n7. Rainbow Six Seige\n8. Warframe\n9. Destiny 2\n10. Football Manager 2020\n11. Ark Survival Evolved\n12. Rust\n13. Dead By Daylight\n14. Monster Hunter World\n15. Risk Of Rain 2\n16. Terraria\n17. Civilization VI\n18. Payday 2\n19. Rocket League\n20. Unturned\n21. Among Us\n22. War Thunder\n23. 7 Days To Die\n24. The Elder Scroll Online\n25. Don't Starve Together\n26. Final Fantasy Online\n27. Factorio\n28. Heart Of Iron\n29. Garry's Mod\n30. Cities Skyline\n31. The Elder Scroll\n32. Rimworld\n33. Star Dew Valley\n34. Civilization V\n35. Dark Souls 3\n36. Dark Soul Remastered\n37. Black Desert Online\n38. Total War: WarHammer 2\n39. Euro Truck Simulator\n40. Dying Light\n41. Red Dead Redemption 2\n42. Flight Simulator\n43. Left 4 Dead 2\n44. VRChat\n45. Witcher 3: Wild Hunt\n46. Fallout 4\n47. Path Of Exile\n48. Gunfire Reborn\n49. World Of Tank Blitz\n50. Europa Universalis 4\n")
        .setColor("GOLD")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(gameList1);
        receivedMessage.channel.send("You can see the requirements of a game by typing `?req` [`gameID`].")
        receivedMessage.react("👍")
    }

    if (arguments == '2') {
        let gameList2 = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setTitle("🖥 Game List Page #2 🖥 ")
        .setDescription("51. DayZ\n52. World Of Warships\n53. Sea of Thieves\n54. SMITE\n55. Brawlhalla\n56. Mount & Blade 2: Bannerlord\n57. Farming Simulator 19\n58. Stellaris\n59. Age OF Empire 2\n60. SpaceWar\n61. Phantasy Star Online 2\n62. PES (2020)\n63. Total War: 3 Kingdoms\n64. Counter Strike 1.6\n65. Star Wars: The Old Republic\n66. Human Fall Flat\n67. SCP: Secret Lab\n68. Divinity: Original Sin\n69. Horizon Zero Dawn\n70. Yu Gi Oh! Duel Links\n71. NGU Idle\n72. Remenant From The Ashes\n73. Halo: The Master Chief Collection\n74. Albion Online\n75. Slay The Spire\n76. Borderlands 3\n77. Satisfactory\n78. Paladins\n79. O2 Not Included\n80. Fallout 76\n81. Frostpunk\n82. Shadowverse\n83. Titanfall 2\n84. Assassin's Creed: Odyssey\n85. Crusader King 2\n86. Dota Underlord\n87. Shop Titans\n88. Hollow Knight\n89. The Elder Scrolls 5: Skyrim\n90. Conan Exiles\n91. Sekiro: Shadows Die Twice\n92. Eve Online\n93. The Binding Of Issac Rebirth\n94. Idle Champions Of Forgotten Realms\n95. Half Life Alyx\n96. Valorant\n97. League Of Legends\n98. Forza Horizon 4\n99. Minecraft\n100. World Of Warcraft\n")
        .setColor("GOLD")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(gameList2);
        receivedMessage.channel.send("You can see the requirements of a game by typing `?req` [`gameID`].")
        receivedMessage.react("👍")
    }

    if (arguments == '3') {
        let gameList3 = new Discord.MessageEmbed()
        .setAuthor("Amadeus", "https://imgur.com/RhOWL9U.png")
        .setTitle("🖥 Game List Page #3 🖥 ")
        .setDescription("101. Diablo 3\n102. Overwatch 2\n103. Hearthstone\n104. Apex Legends\n105. Fortnite\n106. Death Stranding\n107. Call Of Duty: Warzone\n108. Mortal Kombat XI\n109. God Of War 3\n110. Hitman 2\n111. Cyberpunk 2077\n112. Hyper Scape\n113. Tom Clancy's Ghost Recon\n114. Need For Speed Heat\n115. Rogue Company\n116. The Cycle\n117. Rocket League\n118. Predator Hunting Grounds\n119. Mirror's Edge Catalyst\n120. Shadows Of Tomb Raider\n121. The Sins 4\n122. FIFA 21\n123. Star Wars: Battlefront 2\n124. Dragon Age Inquisition\n125. Metal Gear Solid 5\n126. Mass Effect")
        .setColor("GOLD")
        
        .setFooter("© ENIGMAVERSE", "https://imgur.com/4RcHLki.png")
        .setTimestamp()
        receivedMessage.channel.send(gameList3);
        receivedMessage.channel.send("You can see the requirements of a game by typing ?`req` [`gameID`].")
        receivedMessage.react("👍")
    }
}

//Logs into Discord
client.login(process.env.token)