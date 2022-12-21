
const links = [
    "https://media.discordapp.net/attachments/534841376609665054/1054446214583697498/lecturePhotoID.jpg",
    "https://media.discordapp.net/attachments/534841376609665054/1054439244459937812/lecturePhotoID_1.jpg",
    "https://media.discordapp.net/attachments/534841376609665054/1054439244631908444/lecturePhotoID_2.jpg",
    "https://media.discordapp.net/attachments/534841376609665054/1054439244896157746/lecturePhotoID_3.jpg",
    "https://media.discordapp.net/attachments/534841376609665054/1054439245164580994/lecturePhotoID_4.jpg",
    "https://media.discordapp.net/attachments/534841376609665054/1054439245500137573/lecturePhotoID_5.jpg",
    "https://media.discordapp.net/attachments/534841376609665054/1054439245726621736/lecturePhotoID_6.jpg",
    "https://media.discordapp.net/attachments/534841376609665054/1054439246011830282/lecturePhotoID_7.jpg",
    "https://media.discordapp.net/attachments/534841376609665054/1054439246259298304/lecturePhotoID_8.jpg",
    "https://media.discordapp.net/attachments/534841376609665054/1054439246544519268/lecturePhotoID_9.jpg",
    "https://media.discordapp.net/attachments/534841376609665054/1054439244241846362/lecturePhotoID_10.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054440362254553108/lecturePhotoID_11.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054440362535559330/lecturePhotoID_12.jpg",
    "https://media.discordapp.net/attachments/534841376609665054/1054440362795618315/lecturePhotoID_13.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054440363093401670/lecturePhotoID_14.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054440363332472952/lecturePhotoID_15.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054440363563176087/lecturePhotoID_16.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054440363819012096/lecturePhotoID_17.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054440364062298154/lecturePhotoID_18.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054440364272001044/lecturePhotoID_19.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054440362040627230/lecturePhotoID_20.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054441832177741824/lecturePhotoID_21.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054441832412631141/lecturePhotoID_22.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054441832647495770/lecturePhotoID_23.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054441832966271108/lecturePhotoID_24.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054441833222131722/lecturePhotoID_25.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054441833536696331/lecturePhotoID_26.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054441834044215406/lecturePhotoID_27.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054441834358771762/lecturePhotoID_28.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054441834589466645/lecturePhotoID_29.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054441834794979398/lecturePhotoID_30.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054442538012000256/lecturePhotoID_31.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054442538200739840/lecturePhotoID_32.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054442538427240549/lecturePhotoID_33.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054442538917969920/lecturePhotoID_34.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054442539152846988/lecturePhotoID_35.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054442539425484860/lecturePhotoID_36.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054442539643584532/lecturePhotoID_37.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054442539861684224/lecturePhotoID_38.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054442540113350828/lecturePhotoID_39.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054442537756151909/lecturePhotoID_40.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054443096710070312/lecturePhotoID_41.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054443096995287071/lecturePhotoID_42.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054443097242742794/lecturePhotoID_43.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054443097481822298/lecturePhotoID_44.jpg",
    'https://cdn.discordapp.com/attachments/534841376609665054/1054443098090000404/lecturePhotoID_45.jpg',
    'https://cdn.discordapp.com/attachments/534841376609665054/1054443098366820423/lecturePhotoID_46.jpg',
    'https://cdn.discordapp.com/attachments/534841376609665054/1054443098752700578/lecturePhotoID_47.jpg',
    'https://cdn.discordapp.com/attachments/534841376609665054/1054443099046293574/lecturePhotoID_48.jpg',
    'https://cdn.discordapp.com/attachments/534841376609665054/1054443099419590676/lecturePhotoID_49.jpg',
    'https://cdn.discordapp.com/attachments/534841376609665054/1054443096475185202/lecturePhotoID_50.jpg',
    'https://cdn.discordapp.com/attachments/534841376609665054/1054443785536421969/lecturePhotoID_51.jpg',
    'https://cdn.discordapp.com/attachments/534841376609665054/1054443785901314049/lecturePhotoID_52.jpg',
    'https://cdn.discordapp.com/attachments/534841376609665054/1054443786232676422/lecturePhotoID_53.jpg',
    'https://cdn.discordapp.com/attachments/534841376609665054/1054443786509496400/lecturePhotoID_54.jpg',
    'https://cdn.discordapp.com/attachments/534841376609665054/1054443786836656188/lecturePhotoID_55.jpg',
    'https://cdn.discordapp.com/attachments/534841376609665054/1054443783615426590/lecturePhotoID_56.jpg',
    'https://cdn.discordapp.com/attachments/534841376609665054/1054443783909019648/lecturePhotoID_57.jpg',
    'https://cdn.discordapp.com/attachments/534841376609665054/1054443784202633246/lecturePhotoID_58.jpg',
    'https://cdn.discordapp.com/attachments/534841376609665054/1054443784743694366/lecturePhotoID_59.jpg',
    'https://cdn.discordapp.com/attachments/534841376609665054/1054443785020510279/lecturePhotoID_60.jpg',
    "https://cdn.discordapp.com/attachments/534841376609665054/1054444540389490698/lecturePhotoID_61.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054444540582432808/lecturePhotoID_62.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054444540817317928/lecturePhotoID_63.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054444541001859162/lecturePhotoID_64.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054444541219967137/lecturePhotoID_65.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054444541643595837/lecturePhotoID_66.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054444541819748372/lecturePhotoID_67.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054444542016884757/lecturePhotoID_68.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054444542218215475/lecturePhotoID_69.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054444542402756759/lecturePhotoID_70.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445223817781309/lecturePhotoID_71.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445224014921810/lecturePhotoID_72.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445224258187315/lecturePhotoID_73.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445224535007272/lecturePhotoID_74.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445224727953498/lecturePhotoID_75.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445224933470268/lecturePhotoID_76.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445225168347268/lecturePhotoID_77.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445225420013579/lecturePhotoID_78.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445225671663707/lecturePhotoID_79.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445223620653106/lecturePhotoID_80.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445742493798482/lecturePhotoID_81.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445742753853481/lecturePhotoID_82.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445742988730459/lecturePhotoID_83.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445743248773160/lecturePhotoID_84.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445743529799700/lecturePhotoID_85.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445743810813962/lecturePhotoID_86.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445744297349210/lecturePhotoID_87.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445744528044042/lecturePhotoID_88.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445744720973934/lecturePhotoID_89.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054445744972640296/lecturePhotoID_90.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054446214768234627/lecturePhotoID_91.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054446214956994580/lecturePhotoID_92.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054446215154122883/lecturePhotoID_93.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054446215368020058/lecturePhotoID_94.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054446215607107655/lecturePhotoID_95.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054794010117541938/lecturePhotoID_96.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054794010331467856/lecturePhotoID_97.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054794010536968274/lecturePhotoID_98.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054794010750881942/lecturePhotoID_99.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054794010985779300/lecturePhotoID_100.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054794011191279747/lecturePhotoID_101.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054794011409387620/lecturePhotoID_102.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054794011640090634/lecturePhotoID_103.jpg",
    "https://cdn.discordapp.com/attachments/534841376609665054/1054794011845591151/lecturePhotoID_104.jpg"

];

const randomIndex = Math.floor(Math.random() * links.length);
const randomLink = links[randomIndex];

var photo = document.querySelector(".photo");
photo.setAttribute('src', randomLink);

//

const button = document.querySelector('.reload_button');

let buttonClicked = false;

const value = localStorage.getItem('count');
if (value) {
  const valueElement = document.querySelector('.counter');
  valueElement.textContent = value;
} else {
  localStorage.setItem('count', 0);
}

button.addEventListener('click', function() {
  buttonClicked = true;
  const valueElement = document.querySelector('.counter');
  const value = parseInt(valueElement.textContent);
  valueElement.textContent = value + 1;
  localStorage.setItem('count', value + 1);
});

window.addEventListener('beforeunload', function() {
  if (!buttonClicked) {
    localStorage.removeItem('count');
  }
});

const express = require('express');

// Créez un tableau d'images que vous souhaitez utiliser dans votre API
const images = [
  {
    id: 0,
    url: 'https://media.discordapp.net/attachments/534841376609665054/1054446214583697498/lecturePhotoID.jpg'
  },
  {
    id: 1,
    url: 'https://media.discordapp.net/attachments/534841376609665054/1054439244459937812/lecturePhotoID_1.jpg'
  },
  {
    id: 2,
    url: 'https://media.discordapp.net/attachments/534841376609665054/1054439244631908444/lecturePhotoID_2.jpg'
  }
];

// Créez une fonction pour renvoyer une image aléatoire à partir de votre base de données
function getRandomImage(images) {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

// Initialisez le framework Express et créez une route pour votre API
const app = express();
app.get('/api/random-image', (req, res) => {
  const randomImage = getRandomImage(images);
  res.json(randomImage);
});

// Démarrez l'écoute des requêtes sur le port 3000
app.listen(3000, () => {
  console.log('API listening on port 3000');
});
