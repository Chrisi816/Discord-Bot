// Copyright by ꧁☬ℭ𝔥𝔯𝔦𝔰𝔦☬꧂#0001 \\

const Discord = require('discord.js')

module.exports = {
    commands: ['kurzwitz', 'kwitze'],
    callback: async (message, args, text) => {
        console.log('Witze wurde ausgeführt!')
        let replies = ["Warum musste der Bäcker ins Gefängnis? Weil er zu viele Eier geschlagen hat.","Ein Beamter zum anderen: Was haben die Leute nur, wir tun doch nichts.","Im Rezept stand „Ofen auf 90 Grad stellen“. Und wie kriege ich jetzt den Ofen auf?",
        "Was hat vier Beine und kann fliegen? Zwei Vögel", "Meine Frau hat mich beschuldigt, ein Transvestit zu sein. Also habe ich ihre Sachen gepackt und bin gegangen.","Die meisten Leute schauen mich schockiert an, wenn sie herausfinden, was für ein schlechter Elektriker ich bin.",
        "Lache und die Welt lacht mit dir. Furze und die Welt hört auf zu lachen.","Mein Kollege wollte sich einen Labrador anschaffen. Ich musste ihm das dann ausreden. Ich meine: „Schau dir mal die vielen Besitzer an, die blind geworden sind!",
        "Was haben Frauen und Tornados gemeinsam: Erst feucht, dann stürmisch und hinterher ist das Haus weg.","Was haben Frauen und Tornados gemeinsam: Erst feucht, dann stürmisch und hinterher ist das Haus weg.",
        "Kürzester Witz aller Zeiten: Brennholzverleih","Wollte heute mal ganz sexy kucken. Wurde dann mit Verdacht auf Schlaganfall ins Krankenhaus gebracht.",
        "Pick Dich!"-"Pick Dich selbst! Wenn Spatzen sich streiten.","Archäologe bei einer Ausgrabung: Das Skelet ist eindeutig weiblich. Die Kiefergelenke sind stark abgenutzt.","Papi, was ist ein Transvestit? - Da musst du die Mama fragen, der weiß das!",
        "Wie nennt man das Weiße in Vogelscheiße? Auch Vogelscheiße!","Wie nennt man Tim und Struppi auf Chinesisch? - Tim und Mittagessen!","Bitte lesen Sie folgendes Wort rückwärts: Lagerregal!","Konfuzius sagt: Gehst du mit juckendem Arsch ins Bett, wachst du mit stinkendem Finger auf.",
        "Eine Wolke zur anderen: Hast du einen Wolkenkratzer gesehen, habe schlimmen Juckreiz.","Polizist: Papiere. - Fahrer: Schere.","Ich habe gerade in der Heliumfabrik gekündigt. Es hat mir endgültig gereicht, dass man in diesem Ton mit mir gesprochen hat.",
        "Der Postbote geht erst zum einen Schlitz und dann zum anderen bis der ganze Postboten-Sack leer ist.","Ein Schwein schaut eine Steckdose an und sagt: Wer hat dich den eingemauert?",
        "Meine Frau meinte zu mir, dass ich endlich aufhören soll mit dem Funkgerät zu spielen, oder sie verlässt mich - OVER.","Heute habe ich mich summend neben eine Mücke gesetzt, damit die mal nicht einschlafen kann.",
        "Dieser Moment, wenn man im Gespräch pupst und einfach weiterredet, ohne die Miene zu verziehen.","Altes chinesisches Sprichwort: In jeden Topf passt ein Dackel.","Was macht ein Eskimo auf einer Eisscholle? - Frieren.","Wie wird eine Zahnarzt zum Gehirnchirurgen? - Indem er ausrutscht.","Lass uns mal wieder anstoßen - Mein Tischbein zum kleinen Zeh.",
        "Lass uns mal wieder anstoßen - Mein Tischbein zum kleinen Zeh.- Immer","Wie unterscheidet man deutsches Bier und einen holländischen Elfmeter: Das deutsche Bier geht immer rein.","Dicke sind schwerer zu kidnappen.","Zeitungsmeldung: Beim Bahnunglück gab es 67 Tote und ein paar Zerquetschte.","Der Spruch Frauen gehören hinter den Herd ist echt daneben. Die Knöpfe sind schließlich vorne!",
        "Blondine: Wie weit ist es eigentlich von Bayern nach München?","Patient zum Arzt: Ich bin so vergesslich geworden.- Doktor: Ok, verstehe. - Patient: Was verstehen Sie?","Patient zum Arzt: Ich bin so vergesslich geworden.- Doktor: Ok, verstehe. - Patient: Was verstehen Sie?","Eine Pickel zum anderen: Mein Nachbar ist letzte Woche abgekratzt.",
        "Wie nennt man ein Boot ohne Leine? - Boot.","Warum haben Eskimos die höchste Lebenserwartung? - Sie können nicht ins Gras beißen.","Lustiger Anmachspruch: Hey Süße, ich bin Elektriker von Beruf. Hast du Lust auf'nen Wackelkontakt.","Geld allein macht niemanden glücklich. Man sollte es schon besitzen.",
        "Kannibale auf dem Kloh: Immer diese Darmträgheit. Sollte aufhören Beamte zu essen.","Vorname vom Ritter ohne Rüstung: Wilhelm.","Ich möchte nie Pinguin sein. Selbst wenn ich stinksauer bin, finden mich andere immer noch niedlich."
    ]

        let result = Math.floor((Math.random() * replies.length))

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`)
        .setColor("GREEN")
        .addField("Kleiner kurz Witz:", replies[result])
        .setFooter("Wallah unlustig!")

        message.channel.send(embed)
    },
}