const quotes = {
  "01": ["Nouvelle année, nouvelle vision.", "Nouvelles opportunités.", "L'année avec espoir."],
  "02": ["Les amoureux.", "Chaque jour est une célébration de l'amour.", "L'amour fleurit."],
  "03": ["Les commencements.", "Tout renaît.", "Le printemps arrive."],
  "04": ["Ne te découvre pas d'un fil.", "Le début de nouvelles aventures.", "Des fleurs et des sourires."],
  "05": ["Des rêves et des espoirs.", "Fais ce qu'il te plaît.", "La croissance et du renouveau."],
  "06": ["Nouvelles possibilités.", "Rempli de promesses.", "Tout semble possible."],
  "07": ["Les aventures et les découvertes.", "Liberté.", "Vivez pleinement chaque jour."],
  "08": ["Rêves et des vacances.", "Prenez le temps de vous détendre.", "La relaxation et du plaisir."],
  "09": ["Les nouveaux départs.", "Commencez à écrire un nouveau chapitre.", "Parfait pour apprendre et grandir."],
  "10": ["La réflexion.", "Prenez du temps pour vous.", "Se reconnecter avec soi-même."],
  "11": ["La gratitude.", "Soyez reconnaissant pour ce que vous avez.", "Apporte calme et sérénité."],
  "12": ["Les célébrations et les réflexions.", "Profitez de chaque moment.", "Des souvenirs et des espoirs pour l'avenir."]
};

const dailyQuotes = [
  "La vie est un mystère qu'il faut vivre, et non un problème à résoudre. - Gandhi",
  "Le bonheur n'est pas une destination à atteindre, mais une façon de voyager. - Margaret Lee Runbeck",
  "Ce n'est pas la longueur de la vie, mais la profondeur de la vie. - Ralph Waldo Emerson",
  "La seule vraie sagesse est de savoir que tu ne sais rien. - Socrate",
  "La vie n'est pas d'attendre que l'orage passe, c'est d'apprendre à danser sous la pluie. - Sénèque",
  "Il est plus noble de donner juste un peu à tous que de donner beaucoup à quelques-uns. - Confucius",
  "Fais de ta vie un rêve, et d'un rêve, une réalité. - Antoine de Saint-Exupéry",
  "La paix vient de l'intérieur. Ne la cherchez pas à l'extérieur. - Bouddha",
  "La seule limite à notre épanouissement de demain sera nos doutes d'aujourd'hui. - Franklin D. Roosevelt",
  "Il n'y a qu'un seul bonheur dans la vie, c'est d'aimer et d'être aimé. - George Sand",
  "Ne sois pas poussé par tes problèmes. Sois conduit par tes rêves. - Ralph Waldo Emerson",
  "Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme. - Winston Churchill",
  "La vie est ce qui se passe quand vous êtes occupé à faire d'autres projets. - John Lennon",
  "Ne laisse jamais tes peurs décider de ton avenir. - Nelson Mandela",
  "Rien n'est permanent, sauf le changement. - Héraclite",
  "La grandeur d'une nation et son progrès moral peuvent être jugés par la façon dont elle traite ses animaux. - Gandhi",
  "La simplicité est la sophistication suprême. - Léonard de Vinci",
  "Le vrai voyage de découverte ne consiste pas à chercher de nouveaux paysages, mais à avoir de nouveaux yeux. - Marcel Proust",
  "Le plus grand obstacle à la vie est l'attente, qui espère demain et néglige aujourd'hui. - Sénèque",
  "La beauté commence au moment où vous décidez d'être vous-même. - Coco Chanel",
  "La seule façon de faire du bon travail est d'aimer ce que vous faites. - Steve Jobs",
  "Le bonheur n'est pas quelque chose de prêt à l'emploi. Il vient de vos propres actions. - Dalai Lama",
  "Ne regrettez pas les erreurs. Elles prouvent que vous essayez. - Steven Tyler",
  "La vie est courte, le monde est grand, explorez-le tant que vous le pouvez. - Anonyme",
  "Tout ce que vous pouvez imaginer est réel. - Pablo Picasso",
  "La vie commence à la fin de votre zone de confort. - Neale Donald Walsch",
  "Nous sommes ce que nous faisons de façon répétée. L'excellence n'est donc pas un acte, mais une habitude. - Aristote",
  "L'obscurité ne peut pas chasser l'obscurité : seule la lumière peut le faire. La haine ne peut pas chasser la haine : seul l'amour peut le faire. - Martin Luther King Jr.",
  "Le but de la vie est de vivre en accord avec la nature. - Zénon d'Élée",
  "Ce qui ne nous tue pas nous rend plus forts. - Friedrich Nietzsche",
  "Ne comptez pas les jours, faites que les jours comptent. - Muhammad Ali",
  "La vie est une aventure audacieuse ou rien du tout. - Helen Keller",
  "La plus grande gloire n'est pas de ne jamais tomber, mais de se relever à chaque chute. - Confucius",
  "Il n'y a pas de chemin vers le bonheur, le bonheur est le chemin. - Thich Nhat Hanh",
  "Pour écrire sur la vie, tu dois d'abord la vivre. - Ernest Hemingway",
  "Le meilleur moyen de réaliser l'impossible est de croire que c'est possible. - Charles Kingsleigh",
  "Le vrai signe de l'intelligence n'est pas la connaissance mais l'imagination. - Albert Einstein",
  "Ce n'est pas ce que vous regardez qui compte, c'est ce que vous voyez. - Henry David Thoreau",
  "Celui qui n'a jamais commis d'erreur n'a jamais essayé quelque chose de nouveau. - Albert Einstein",
  "La seule façon de trouver les limites de l'infaisable est d'aller au-delà dans l'impossible. - Arthur C. Clarke",
  "Ce n'est pas la montagne que nous conquérons, mais nous-mêmes. - Sir Edmund Hillary",
  "Faites ce que vous pouvez, avec ce que vous avez, là où vous êtes. - Theodore Roosevelt",
  "Ne crains pas l'échec. Ne pas réussir est un art que tu dois maîtriser pour réussir. - Brandon Sanderson",
  "Un voyage de mille lieues commence toujours par un premier pas. - Lao Tseu",
  "Rêvez grand et osez échouer. - Norman Vaughan",
  "La vie est trop courte pour être petite. - Benjamin Disraeli",
  "La plus grande richesse est de vivre content avec peu. - Platon",
  "Votre temps est limité, ne le gâchez pas en menant une existence qui n'est pas la vôtre. - Steve Jobs",
  "Soyez vous-même, tous les autres sont déjà pris. - Oscar Wilde",
  "La perfection est atteinte, non pas lorsqu'il n'y a plus rien à ajouter, mais lorsqu'il n'y a plus rien à retirer. - Antoine de Saint-Exupéry",
  "Le seul endroit où le succès vient avant le travail, c'est dans le dictionnaire. - Vidal Sassoon",
  "Le monde est un livre et ceux qui ne voyagent pas n'en lisent qu'une page. - Saint Augustin",
  "Le courage n'est pas l'absence de peur, mais la capacité de la vaincre. - Nelson Mandela",
  "L'essentiel est invisible pour les yeux. - Antoine de Saint-Exupéry",
  "On ne voit bien qu'avec le cœur. - Antoine de Saint-Exupéry",
  "Il n'y a pas de hasard, il n'y a que des rendez-vous. - Paul Éluard",
  "On peut résister à l'invasion des armées, mais on ne peut pas résister à l'invasion des idées. - Victor Hugo",
  "L'intelligence artificielle se définit comme le contraire de la bêtise naturelle. - Woody Allen",
  "Ne crains pas la perfection, tu ne l'atteindras jamais. - Salvador Dalí",
  "Le monde ne sera pas détruit par ceux qui font le mal, mais par ceux qui les regardent sans rien faire. - Albert Einstein",
  "On ne voit bien qu'avec le cœur, l'essentiel est invisible pour les yeux. - Antoine de Saint-Exupéry",
  "La seule chose que nous ayons à craindre est la crainte elle-même. - Franklin D. Roosevelt",
  "Rien de grand ne s'est accompli dans le monde sans passion. - Georg Wilhelm Friedrich Hegel",
  "La chance sourit aux esprits préparés. - Louis Pasteur",
  "La mesure de l'intelligence est la capacité de changer. - Albert Einstein",
  "Le meilleur moyen de prédire l'avenir est de le créer. - Peter Drucker",
  "Ne jamais rêver de succès, travailler pour. - Estee Lauder",
  "L'important n'est pas de convaincre, mais de donner à réfléchir. - Bernard Werber",
  "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre. - Albert Einstein",
  "Le plus grand échec est de ne pas avoir le courage d'oser. - Abbé Pierre",
  "La seule limite à notre épanouissement de demain sera nos doutes d'aujourd'hui. - Franklin D. Roosevelt",
  "La véritable sagesse est de savoir qu'on ne sait rien. - Socrate",
  "Ce que l'esprit humain peut concevoir et croire, il peut le réaliser. - Napoleon Hill",
  "L'homme n'est rien d'autre que ce qu'il se fait. - Jean-Paul Sartre",
  "Le véritable voyage de découverte ne consiste pas à chercher de nouveaux paysages, mais à avoir de nouveaux yeux. - Marcel Proust",
  "Ne crains pas la perfection, tu ne l'atteindras jamais. - Salvador Dalí",
  "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre. - Albert Einstein",
  "La simplicité est l'ultime sophistication. - Léonard de Vinci"
];

const yearlyQuotes = {
  "1935": "La résilience a forgé des chemins nouveaux.",
  "1936": "L'année des nouvelles découvertes.",
  "1937": "L'espoir a surmonté les défis.",
  "1938": "Une année de force et de courage.",
  "1939": "L'humanité a cherché la paix.",
  "1940": "Temps de persévérance.",
  "1941": "La solidarité a montré la voie.",
  "1942": "Résilience et d'endurance.",
  "1943": "L'espoir a éclairé les ténèbres.",
  "1944": "Apporté des moments de bravoure.",
  "1945": "La liberté a triomphé.",
  "1946": "Renouveau.",
  "1947": "L'innovation a prospéré.",
  "1948": "Nouveaux commencements.",
  "1949": "L'endurance a été récompensée.",
  "1950": "L'émergence de nouvelles idées.",
  "1951": "Année de progrès.",
  "1952": "Les rêves ont commencé à se réaliser.",
  "1953": "Nouvelles perspectives.",
  "1954": "L'espoir omniprésent.",
  "1955": "Une année de découvertes.",
  "1956": "La créativité a prospéré.",
  "1957": "Marquée par l'innovation.",
  "1958": "Les gens ont osé rêver plus grand.",
  "1959": "Nouveaux défis et opportunités.",
  "1960": "Une année de changements.",
  "1961": "L'ambition a mené à de grandes choses.",
  "1962": "Résilience.",
  "1963": "Le progrès était au rendez-vous.",
  "1964": "Année de transformation.",
  "1965": "Les esprits créatifs ont prospéré.",
  "1966": "L'innovation.",
  "1967": "L'espoir et la détermination étaient omniprésents.",
  "1968": "Changements significatifs.",
  "1969": "Les rêves sont devenus réalité.",
  "1970": "Une année de nouveaux commencements.",
  "1971": "Les possibilités étaient infinies.",
  "1972": "Des découvertes incroyables.",
  "1973": "L'innovation a prospéré.",
  "1974": "Synonyme de croissance.",
  "1975": "Les opportunités étaient nombreuses.",
  "1976": "Année de grands accomplissements.",
  "1977": "Les rêves ont pris forme.",
  "1978": "Nouvelles aventures.",
  "1979": "Les esprits créatifs ont prospéré.",
  "1980": "Marquée par l'innovation.",
  "1981": "L'ambition a mené à de grandes choses.",
  "1982": "Synonyme de résilience.",
  "1983": "Le progrès était au rendez-vous.",
  "1984": "Année de transformation.",
  "1985": "Les esprits créatifs ont prospéré.",
  "1986": "Marquée par l'innovation.",
  "1987": "L'espoir et la détermination étaient omniprésents.",
  "1988": "Des changements significatifs.",
  "1989": "Les rêves sont devenus réalité.",
  "1990": "Une année de nouveaux commencements.",
  "1991": "Les possibilités étaient infinies.",
  "1992": "Marquée par des découvertes incroyables.",
  "1993": "L'innovation a prospéré.",
  "1994": "Synonyme de croissance.",
  "1995": "Les opportunités étaient nombreuses.",
  "1996": "Année de grands accomplissements.",
  "1997": "En 1997, les rêves ont pris forme.",
  "1998": "De nouvelles aventures.",
  "1999": "Les esprits créatifs ont prospéré.",
  "2000": "Marquée par l'innovation.",
  "2001": "L'ambition a mené à de grandes choses.",
  "2002": "Synonyme de résilience.",
  "2003": "Le progrès était au rendez-vous.",
  "2004": "Transformation.",
  "2005": "Les esprits créatifs ont prospéré.",
  "2006": "L'innovation.",
  "2007": "L'espoir et la détermination étaient omniprésents.",
  "2008": "Des changements significatifs.",
  "2009": "Les rêves sont devenus réalité.",
  "2010": "Une année de nouveaux commencements.",
  "2011": "Les possibilités étaient infinies.",
  "2012": "Marquée par des découvertes incroyables.",
  "2013": "L'innovation a prospéré.",
  "2014": "Synonyme de croissance.",
  "2015": "Les opportunités étaient nombreuses.",
  "2016": "Année de grands accomplissements.",
  "2017": "Les rêves ont pris forme.",
  "2018": "De nouvelles aventures.",
  "2019": "Les esprits créatifs ont prospéré.",
  "2020": "Marquée par l'innovation.",
  "2021": "L'ambition a mené à de grandes choses.",
  "2022": "Synonyme de résilience.",
  "2023": "Le progrès était au rendez-vous.",
  "2024": "Année de transformation."
};