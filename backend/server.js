
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const showInfo = {
  title: "Victorious",
  creator: "Dan Schneider",
  network: "Nickelodeon",
  firstAired: "March 27, 2010",
  lastAired: "February 2, 2013",
  seasons: 4,
  episodes: 60,
  description: "Victorious is an American sitcom created by Dan Schneider that originally aired on Nickelodeon from March 27, 2010, to February 2, 2013. The series revolves around aspiring singer Tori Vega, a teenager who attends a performing arts high school called Hollywood Arts High School, after taking her older sister Trina's place in a showcase while getting into screwball situations on a daily basis.",
  schoolName: "Welcome to Hollywood Arts High School!",
  schoolTagline: "Where talent is mandatory, and sanity is optional",
  showTagline: "VICTORIOUS: Because regular high school wasn't dramatic enough!",
  extendedDescription: "Step into the spotlight with Tori Vega, a totally normal teen thrust into the totally abnormal world of Hollywood Arts High School. It's like your average high school, except everyone can sing, dance, and have mental breakdowns – all at the same time!"
};

const characters = [
  {
    id: 1,
    name: 'Tori Vega',
    portrayer: 'Victoria Justice',
    description: 'Our accidental starlet with a voice that could make Simon Cowell smile (maybe).',
    traits: ['Talented', 'Kind', 'Determined', 'Sometimes insecure'],
    imageUrl: 'https://static.wikia.nocookie.net/victorious/images/f/f1/Tori_Season_4.jpg/revision/latest'
  },
  {
    id: 2,
    name: 'André Harris',
    portrayer: 'Leon Thomas III',
    description: "Musical genius and Tori's bestie. He's got 99 problems, but a tune ain't one.",
    traits: ['Musically gifted', 'Loyal', 'Calm', 'Supportive'],
    imageUrl: 'https://static.wikia.nocookie.net/victorious/images/5/57/Andre_Season_4.jpg'
  },
  {
    id: 3,
    name: 'Jade West',
    portrayer: 'Elizabeth Gillies',
    description: 'The girl who puts the "mean" in "meaningful character development".',
    traits: ['Talented', 'Sarcastic', 'Possessive', 'Brutally honest'],
    imageUrl: 'https://static.wikia.nocookie.net/victorious/images/1/13/Jade_Season_4.jpg'
  },
  {
    id: 4,
    name: 'Cat Valentine',
    portrayer: 'Ariana Grande',
    description: "Living proof that the air up there isn't always the freshest.",
    traits: ['Bubbly', 'Easily distracted', 'Sensitive', 'Talented singer'],
    imageUrl: 'https://static.wikia.nocookie.net/victorious/images/9/9f/Cat_Valentine.jpg'
  },
  {
    id: 5,
    name: 'Robbie Shapiro',
    portrayer: 'Matt Bennett',
    description: 'Ventriloquist extraordinaire. His puppet Rex has more game than he does.',
    traits: ['Nerdy', 'Insecure', 'Ventriloquist', 'Kind-hearted'],
    imageUrl: 'https://static.wikia.nocookie.net/victorious/images/3/3e/Robbie_Season_4.jpg'
  },
  {
    id: 6,
    name: 'Beck Oliver',
    portrayer: 'Avan Jogia',
    description: 'The guy every girl wants and every guy wants to be. Hair game: strong.',
    traits: ['Cool', 'Talented', 'Level-headed', 'Charming'],
    imageUrl: 'https://static.wikia.nocookie.net/victorious/images/e/e1/Beck_Season_4.png'
  }
];

const episodes = [
  {
    id: 1,
    title: "Pilot",
    season: 1,
    episodeNumber: 1,
    description: "Tori accidentally gets thrust into Hollywood Arts after her sister's tongue swells up like a balloon. Apparently, talent is contagious - who knew?"
  },
  {
    id: 2,
    title: "The Bird Scene",
    season: 1,
    episodeNumber: 2,
    description: "Tori learns that sometimes, the best way to pass a test is to fail it repeatedly. Hollywood Arts: where logic goes to die."
  },
  {
    id: 3,
    title: "Stage Fighting",
    season: 1,
    episodeNumber: 3,
    description: "Jade and Tori engage in a fake fight that turns into a real rivalry. In other news, water is wet."
  },
  {
    id: 4,
    title: "The Birthweek Song",
    season: 1,
    episodeNumber: 4,
    description: "Tori learns that writing a song is easier than buying a gift. Trina learns nothing, as usual."
  },
  {
    id: 5,
    title: "Jade Dumps Beck",
    season: 1,
    episodeNumber: 5,
    description: "Jade dumps Beck, immediately regrets it, then tries to win him back. It's like a soap opera, but with more singing and less evil twins."
  },
  {
    id: 6,
    title: "Tori the Zombie",
    season: 1,
    episodeNumber: 6,
    description: "Tori the Zombie, Tori gets stuck in zombie makeup right before a big performance. Turns out, being the walking dead isn't great for your singing career."
  },
  {
    id: 7,
    title: "Robarazzi",
    season: 1,
    episodeNumber: 7,
    description: "Robarazzi, Robbie becomes a gossip blogger and suddenly has friends. Popularity: you're doing it wrong, Robbie."
  },
  {
    id: 8,
    title: "Survival of the Hottest",
    season: 1,
    episodeNumber: 8,
    description: "Survival of the Hottest, The gang gets trapped in an RV on the hottest day of the year. It's like a sauna, but with more teen drama and less relaxation."
  },
  {
    id: 9,
    title: "Wi-Fi in the Sky",
    season: 1,
    episodeNumber: 9,
    description: "Wi-Fi in the Sky, Tori tries to write a script over video chat. Spoiler alert: the internet is not conducive to productivity. Shocking, we know."
  },
  {
    id: 10,
    title: "Beck's Big Break",
    season: 1,
    episodeNumber: 10,
    description: "Beck's Big Break, Beck gets a movie role, Tori accidentally gets him fired. Hollywood: where dreams come true... and then get crushed by well-meaning friends."
  },
  {
    id: 11,
    title: "The Great Ping Pong Scam",
    season: 1,
    episodeNumber: 11,
    description: "The Great Ping Pong Scam, The gang has a secret ping pong team that's actually a front for fancy dinners. Finally, a sport that involves eating lobster!"
  },
  {
    id: 12,
    title: "Cat's New Boyfriend",
    season: 1,
    episodeNumber: 12,
    description: "Cat's New Boyfriend, Cat dates Tori's ex, drama ensues. In Hollywood Arts, even dating comes with a soundtrack."
  },
  {
    id: 13,
    title: "Freak the Freak Out",
    season: 1,
    episodeNumber: 13,
    description: "Freak the Freak Out, Trina gets her wisdom teeth removed, Tori has to take care of her. Suddenly, facing a pack of wild hyenas doesn't seem so bad."
  },
  {
    id: 14,
    title: "Rex Dies",
    season: 1,
    episodeNumber: 14,
    description: "Rex Dies, Robbie's puppet, Rex, gets 'injured' and the gang stages a fake funeral. Just another Tuesday at Hollywood Arts."
  },
  {
    id: 15,
    title: "The Diddly-Bops",
    season: 1,
    episodeNumber: 15,
    description: "The Diddly-Bops, The gang performs as singing foods for children. Because nothing says 'future star' like dressing up as a hamburger."
  },
  {
    id: 16,
    title: "Rex Dies",
    season: 1,
    episodeNumber: 16,
    description: "Tori helps Jade produce her play by making a deal with a Chinese restaurant owner."
  },
  {
    id: 17,
    title: "The Wood ",
    season: 1,
    episodeNumber: 17,
    description: "A reality show films at Hollywood Arts, creating false drama between Tori and Beck."
  },
  {
    id: 18,
    title: "A Film by Dale Squires",
    season: 1,
    episodeNumber: 18,
    description: "The gang helps a famous director make a short film, but he takes all the credit."
  },
  {
    id: 19,
    title: "Sleepover at Sikowitz's ",
    season: 1,
    episodeNumber: 19,
    description: "Sikowitz challenges the gang to stay in character during a sleepover at his house."
  }
];



app.get('/api/episodes', (req, res) => {
  res.json(episodes);
});


app.get('/api/show-info', (req, res) => {
  res.json(showInfo);
});

app.get('/api/characters', (req, res) => {
  res.json(characters);
});

app.get('/api/characters/:id', (req, res) => {
  const character = characters.find(char => char.id === parseInt(req.params.id));
  if (character) {
    res.json(character);
  } else {
    res.status(404).json({ message: 'Character not found' });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));