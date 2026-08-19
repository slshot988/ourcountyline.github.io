// trackData.js

const trackDatabase = {
    "our-county-line": {
        title: "Our County Line",
        spotify: "https://open.spotify.com/track/6tVW0rYV9Uzyq4GpzvFHUf?si=4c01548192f6413f",
        apple: "https://music.apple.com/us/song/our-county-line/6771050819",
        youtube: "https://youtu.be/vCrAoEmcExY?si=vVz6bwEN32zRCbd5",
        linerImage: "images/01_OurCountyLine.jpg",
        linerText: "You know exactly where your line is drawn. You live in the friction between the heavy weight of where you’ve been and the fierce freedom of where you’re heading next. This isn’t just a track; it's the soundtrack for the moments you choose to stand your ground. Built on driving kick drums, heavy acoustic downstrokes, and a haunting Celtic fiddle that cuts straight through your darkest nights, this music was forged from the dirt of Ohio and the ancient echoes of the Highlands to give a voice to your story. When the world tries to quiet you down, this anthemic stomp is your front porch, your backroads, and your raw truth. Welcome to your country line."
    },
    "what-sets-you-on-fire": {
        title: "What Sets You on Fire",
        spotify: "https://open.spotify.com/track/1vmjihwY9L5Vw97l7PFNT4?si=579aeba154d14aee",
        apple: "https://music.apple.com/us/song/what-sets-you-on-fire/6771050823",
        youtube: "https://youtu.be/NHxvNlWC66s?si=XQeUGREjCjG2EM08",
        linerImage: "images/02_WhatSetsYouOnFire.jpg",
        linerText: "You’ve given everyone else their piece of you all week long. The clock, the obligations, the expectations... they’ve had their turn. But at the end of the week the line is drawn. Time to step into the freedom of who you want to be. Driven by a relentless, heavy kick drum, guitar, and a fierce Celtic fiddle that cuts through the noise of the daily grind, this music is your Friday Night Bonfire. Turn it up loud, let the sparks fly, and remember exactly what it feels like to be completely alive."
    },
    "barbed-wire-and-a-sunday-dress": {
        title: "Barbed Wire and a Sunday Dress",
        spotify: "https://open.spotify.com/track/6SsWtL9ZNtp1jEdCPPyHFc?si=705347ee95984625",
        apple: "https://music.apple.com/us/song/barbed-wire-and-a-sunday-dress/6771050824",
        youtube: "https://youtu.be/SNdKKAcZ2kk?si=-GfbDhHNoh5tg2K0",
        linerImage: "images/03_BarbedWireandaSundayDress.jpg",
        linerText: "You spent your whole life letting everyone else decide who you are. You played by their rules and wore what they told you to wear. But today, you draw the line as you cut through that muddy creek and climb over that barbed wire fence. This music is for the moment you choose your wild and that rusty fence over their expectations. Fueled by heavy acoustic downstrokes, a driving kick drum, and a fierce Celtic fiddle, this track is the soundtrack to your freedom. It is your grit and your grace. Your Barbed Wire and a Sunday Dress."
    },
    "the-first-bloom-in-april": {
        title: "The First Bloom in April",
        spotify: "https://open.spotify.com/track/6nBsLVt7BjiY47mwM5Q05H?si=40c4ea6fde704d50",
        apple: "https://music.apple.com/us/song/the-first-bloom-in-april/6771050825",
        youtube: "https://youtu.be/ef02C0vL4Zc?si=O_sM8xZ20O6V3u5d",
        linerImage: "images/04_TheFirstBloominApril.jpg",
        linerText: "You spent years memorizing every step, every laugh, and every quiet corner of her world. You have always tried to protect her, but you always knew a day would come when you would have to watch her take flight. This music is for the bittersweet moment you choose to let her go so she can finally grow. An intimate, acoustic piece with a fiddle that carries the weight of your unspoken hopes, this track is the soundtrack to your faith. You are giving her the wings to find her own path, knowing the bond you share will always guide her back home. How far will your First Bloom in April fly?"
    },
    "get-out": {
        title: "Get Out",
        spotify: "https://open.spotify.com/track/6ckChorSLNyPcDKt85jsek?si=39f89125d20e492a",
        apple: "https://music.apple.com/us/song/get-out/6771050826",
        youtube: "https://youtu.be/fnEMdl9ef-E?si=hfWpQfvCO_tMZq5G",
        linerImage: "images/05_GetOut.jpg",
        linerText: "You spent the last few months giving everyone else your time, your energy, and your focus. You answered the calls, clocked the hours, and carried the routine until your tank was completely empty. But this week is yours. You do not need their permission to finally take a breath and remember who you are when the pressure is off. This music is the soundtrack to your vacation self! Turn it up loud, watch the horizon open up, and remember exactly what it feels like to be completely alive. Pack your bags... AND GET OUT!"
    },
    "piece-of-you": {
        title: "Piece of You",
        spotify: "https://open.spotify.com/track/6pri282usAJ0jjZQMOKnac?si=5c455e60e2544fbb",
        apple: "https://music.apple.com/us/song/piece-of-you/6771050827",
        youtube: "https://youtu.be/nrtHSC6DdCY?si=9UbVsDFda5N6nm30",
        linerImage: "images/06_PieceofYou.jpg",
        linerText: "There are always going to be days that are too heavy. However, when you find someone that is your missing piece, the only peace you need is a piece of them. This song celebrates finding that one person that completes you."
    },
    "we-dont-need-to-run": {
        title: "We Don't Need to Run",
        spotify: "https://open.spotify.com/track/0N6FHBpIcfexStNFAaQqvF?si=e6e164c4bd1f40d3",
        apple: "https://music.apple.com/us/song/we-dont-need-to-run/6771051008",
        youtube: "https://youtu.be/soc1kxOda-4?si=V6vBKXVaetRBgUul",
        linerImage: "images/07_WeDontNeedtoRun.jpg",
        linerText: "They look at your life and call it reckless because it doesn’t look like theirs. They tell you that you are out of time, out of place, or out of your mind. But you stopped looking to them for permission a long time ago. This music is for the moment you stop looking over your shoulder and put your feet wherever you want them to be. The world can keep on spinning as fast as it wants, but it will never shake you from the truth of who you are. You know your roots, you know your ground, and you know you don't need to run."
    },
    "cut-me-off": {
        title: "Cut Me Off",
        spotify: "https://open.spotify.com/track/3XVeEmh2bEC0RXdNxtHkYR?si=4d96d677b90e4d96",
        apple: "https://music.apple.com/us/song/cut-me-off/6771051009",
        youtube: "https://youtu.be/9VbJQrHXXXQ?si=HEyDvtWdxdT3GOCk",
        linerImage: "images/08_CutMeOff.png",
        linerText: "You spent months walking the edge of a flawed circle, waiting for a clean break that never comes on its own. Tonight, you stop looking for a way out and finally face the hard truth at the bottom of a glass. This music is for the exhausting friction of a love that begs to be poured out but refuses to let go. The soundtrack to the moment you beg to be cut off... or beg not to be..."
    },
    "dont-take-the-bait": {
        title: "Don't Take the Bait",
        spotify: "https://open.spotify.com/track/6iaG7Q8gZp2ymztY7LuRcg?si=9676b1339a9f4f6d",
        apple: "https://music.apple.com/us/song/dont-take-the-bait/6771051010",
        youtube: "https://youtu.be/hxlah4u-HWE?si=NxnaGO7ffBHTAWG6",
        linerImage: "images/09_DontTakeTheBait.jpg",
        linerText: "No. Don't do it. The warning echoes in your head the exact second you see the trap opening up again. The bait is always too heavy to resist. This exhausting mental fight is on the absolute brink of explosion. It is the unvarnished soundtrack to the moment you plant your feet, stare down the chaos, and actively choose one way or another. The trap is set, but what will you do?"
    },
    "whered-them-brown-eyes-go": {
        title: "Where'd Them Brown Eyes Go",
        spotify: "https://open.spotify.com/track/5aiPrVdlWH3xDJwsX2DVdT?si=c3a868ae7b2b4c9b",
        apple: "https://music.apple.com/us/song/whered-them-brown-eyes-go/6771051011",
        youtube: "https://youtu.be/kXRmAzQXp9o?si=iQpNhWafwwOKiidU",
        linerImage: "images/10_WheredThemBrownEyesGo.jpg",
        linerText: "You still find yourself looking back at the quiet corners of the world you used to share. You hold onto every memory, every golden hour laugh, and every trace of the life you built together, recognizing that the sweetness of those moments is worth the ache they leave behind. This music is for the quiet, bittersweet reflection on a flawed love that you can finally look back on without pain. The melody carries the weight of a timeless hope, a gentle acknowledgment that the bond you shared was real, even if your paths had to separate. You are peaceful where you stand, simply sending a quiet wish across the distance. I hope you found what you were looking for."
    },
    "not-written-yet": {
        title: "Not Written Yet",
        spotify: "https://open.spotify.com/track/7zlddXxb8Rou15lpDp7iLa?si=bff529f834ec470f",
        apple: "https://music.apple.com/us/song/not-written-yet/6771051012",
        youtube: "https://youtu.be/D9mRC5P4pc4?si=fmPyDvqs9FPZdDdK",
        linerImage: "images/11_NotWrittenYet.jpg",
        linerText: "We're a dog eared page in a dusty book. A long shot bet and a second look. The world may think it has us figured out. But we're not done. We're not saying goodbye. The best is yet to come. The best. It's just not written yet."
    },
    "your-amazing-grace": {
        title: "Your Amazing Grace",
        spotify: "https://open.spotify.com/track/7MaoqJJo8lUSFC4o5iYi7P?si=01acb8feae28496a",
        apple: "https://music.apple.com/us/song/your-amazing-grace/6771051013",
        youtube: "https://youtu.be/emwh1czSH-k?si=sm1yEmDvULrO9XtO",
        linerImage: "images/12_YourAmazingGrace.png",
        linerText: "Dear sweet Grace, we can't wait to meet you. Every sunrise. Every sunset. Every white bird. We carry you wherever we go, and we hope that one day, we too will share in your Amazing grace. Love, Your Mom and Dad.<br><br>In Loving Memory of Grace Marie - 5/13/2020"
    },
    "fight-like-we-mean-it": {
        title: "Fight (Like We Mean It)",
        spotify: "https://open.spotify.com/track/1Plcvi1XkW89IdHQO3cCwy",
        apple: "https://music.apple.com/us/song/fight-like-we-mean-it/6797954255",
        youtube: "https://youtu.be/qYIjLy7FuuE?si=BFA-v-drf8vF12pv",
        linerImage: "images/FightCoverjpg.jpg",
        linerText: "So many fights start out as just a little thing.  Somehow that little thing is like a fuse that can set a whole bomb off.  We know that feeling all too well.  Here on Our County Line, we fight like we mean it.  But we make up like we mean it too."
    },
    "18-summers": {
        title: "18 Summers",
        spotify: "#",
        apple: "#",
        youtube: "#",
        linerImage: "images/18SummersCover.png",
        linerText: "18 Summers is a celebration of the experience of watching your child grow.  It starts from the moment they join the world.  Time seems endless.  As they grow, the time sure does feel like it is slipping away, but the pride and joy you feel... that is something that truly lasts forever."
    },
    "out-of-range": {
        title: "Out of Range",
        spotify: "#",
        apple: "#",
        youtube: "#",
        linerImage: "images/OutOfRange.jpg",
        linerText: "Our range was never meant to be limited by cell phone towers.  Some times you and the one that matters most just need to hop into that Chevy, roll the windows down, and drive until the bars run out."
    },
    "who-we-were-back-then": {
        title: "Who We Were Back Then",
        spotify: "https://open.spotify.com/track/6tZUYBPUB7QdFTLodx6jst",
        apple: "https://music.apple.com/us/song/who-we-were-back-then/6784398123",
        youtube: "https://www.youtube.com/playlist?list=OLAK5uy_n8Ajlgx7LpRz__r7lRaRC2FbbjGL8GLcI",
        linerImage: "images/WhoWeWereCover.jpeg",
        linerText: "A nostalgic country song of a love lost to time, but not forgotten. What went wrong? Why did they part? Who they were back then... it just wasn't who they were meant to be."
    },
    
    // Placeholder & Upcoming Tracks
    "go-ahead-and-leave": {
        title: "Go Ahead and Leave - Coming Soon",
        spotify: "#",
        apple: "#",
        youtube: "#",
        linerImage: "images/GoAheadTile.jpeg",
        linerText: "Details coming soon..."
    },
    "tba": {
        title: "TBA",
        spotify: "#",
        apple: "#",
        youtube: "#",
        linerImage: "images/TBAAlbumCoverUpscale.png", // Generic placeholder
        linerText: "Track details coming soon..."
    }
};

// Organized Tab Playlists
const tabLists = {
    "popular": {
        name: "Popular Releases",
        image: "#", // Hides the image container entirely
        tracks: [
            "fight-like-we-mean-it",
            "dont-take-the-bait",
            "barbed-wire-and-a-sunday-dress",
            "piece-of-you",
            "who-we-were-back-then",
            "what-sets-you-on-fire",
            "cut-me-off",
            "our-county-line",
            "the-first-bloom-in-april",
            "not-written-yet"
        ]
    },
    "latest": {
        name: "Latest Music",
        image: "#", // Hides the image container entirely
        tracks: [
            "fight-like-we-mean-it",
            "18-summers",
            "out-of-range",
            "who-we-were-back-then",
            "cut-me-off",
            "get-out"
        ]
    },
    "deluxe": {
        name: "Barbed Wire and a Sunday Dress (Deluxe Edition)",
        image: "images/DeluxeBarbedWireCover.png", // Displays the album art
        tracks: [
            "our-county-line",
            "what-sets-you-on-fire",
            "barbed-wire-and-a-sunday-dress",
            "piece-of-you",
            "18-summers",
            "the-first-bloom-in-april",
            "get-out",
            "we-dont-need-to-run",
            "out-of-range",
            "cut-me-off",
            "dont-take-the-bait",
            "who-we-were-back-then",
            "whered-them-brown-eyes-go",
            "not-written-yet",
            "your-amazing-grace"
        ]
    },
    "upcoming-album": {
        name: "Upcoming Album - TBA",
        image: "images/TBAAlbumCoverUpscale.png", // Displays the placeholder art
        tracks: [
            "tba",
            "tba",
            "go-ahead-and-leave",
            "tba",
            "tba",
            "tba",
            "tba",
            "fight-like-we-mean-it",
            "tba",
            "tba",
            "tba",
            "tba"
        ]
    }
};