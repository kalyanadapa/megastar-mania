/* eslint-disable */
require('dotenv').config();
const { MongoClient } = require("mongodb");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017";
const MONGODB_DB = process.env.MONGODB_DB || "chiranjeeviDB";

const movies =[
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433e8e"
    },
    "title": "Pranam Khareedu",
    "year": 1978,
    "director": "K. Vasu",
    "role": "Narsimha",
    "source": "wikipedia",
    "cast": [
      "Chandramohan",
      "Chiranjeevi",
      "Jayasudha",
      "Kaikala Satyanarayana",
      "Nutan Prasad",
      "Rao Gopal Rao",
      "Madhavi",
      "Rama Prabha",
      "R. Narayana Murthy",
      "Kota Shankar Rao"
    ],
    "genres": [
      "Drama"
    ],
    "overview": "A young woman is married to a middle-aged rich landlord, and is restricted from doing anything she wishes. Her situation gets worse when he thinks that she is having an affair with their servant.",
    "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Pranam_Khareedu.jpg/250px-Pranam_Khareedu.jpg",
    "rating": 0,
    "releaseDate": "1978-09-22",
    "runtime": 0,
    "tmdbId": 279365
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433e8f"
    },
    "title": "Mana Voori Pandavulu",
    "year": 1978,
    "director": "",
    "role": "Parthu",
    "source": "wikipedia"
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433e90"
    },
    "title": "Tayaramma Bangarayya",
    "year": 1979,
    "director": "Kommineni Seshagiri Rao",
    "role": "Juothi's Husband",
    "source": "wikipedia",
    "cast": [],
    "genres": [],
    "overview": "Tayaramma and her husband help younger couples solve their marital problems. One day, they come across two couples with substantial differences and decide to help them.",
    "poster": "",
    "rating": 0,
    "releaseDate": "1979-01-12",
    "runtime": 0,
    "tmdbId": 1166934
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433e91"
    },
    "title": "Kukka Katuku Cheppu Debba",
    "year": 1979,
    "director": "Eranki Sharma",
    "role": "Sekhar",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Madhavi"
    ],
    "genres": [],
    "overview": "Shekhar, an irresponsible womaniser, cheats Parvati a few days before her marriage to Satyam. He promises her marriage, but does not give up his wayward life.",
    "poster": "https://image.tmdb.org/t/p/w500/nHZKNgGY3bgQ9TF9SkeXrfngI7A.jpg",
    "rating": 0,
    "releaseDate": "1979-03-01",
    "runtime": 133,
    "tmdbId": 1301205
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433e92"
    },
    "title": "Kotta Alludu",
    "year": 1979,
    "director": "Parvataneni Sambasiva Rao",
    "role": "Jagan",
    "source": "wikipedia",
    "cast": [
      "Mohan Babu",
      "Chiranjeevi",
      "Krishna",
      "Jaya Prada"
    ],
    "genres": [],
    "overview": "Gumandi is killed by his own son in law Satyanarayana, who is greedy for Sanjeevni, a medicinal herb. Gumandi's eldest daughter Leela is married to Hari who teaches Satyanarayana a good lesson.",
    "poster": "https://image.tmdb.org/t/p/w500/dGOYKzL6jNcTrYiZHQb6QK05gpF.jpg",
    "rating": 0,
    "releaseDate": "1979-05-31",
    "runtime": 148,
    "tmdbId": 1301207
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433e93"
    },
    "title": "I Love You",
    "year": 1979,
    "director": "Vayu Nandana Rao",
    "role": "Ramesh",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Prasad Babu",
      "Saakshi Ranga Rao",
      "P. L. Narayana"
    ],
    "genres": [],
    "overview": "Suvarna, a college girl, falls in love with Ramesh, a handsome womaniser, who soon leaves her. However, when Ramesh has an accident and loses his ability to walk, Suvarna cares for him as a nurse.",
    "poster": "https://image.tmdb.org/t/p/w500/gXVLq0SSfFdvNerzhQwtZRN4UDT.jpg",
    "rating": 0,
    "releaseDate": "1979-06-01",
    "runtime": 120,
    "tmdbId": 1301211
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433e94"
    },
    "title": "Punadhirallu",
    "year": 1979,
    "director": "Gudapati Rajkumar",
    "role": "Unknown",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Savitri",
      "Narasimha Raju"
    ],
    "genres": [],
    "overview": "Punadhirallu (English: Foundation Stones) is a 1979 Indian Telugu-language film directed by Rajkumar. It was the debut film of actor Chiranjeevi.",
    "poster": "https://image.tmdb.org/t/p/w500/6MlMfkdWlLnAZY2AV7kyQryAxtI.jpg",
    "rating": 0,
    "releaseDate": "1979-06-21",
    "runtime": 153,
    "tmdbId": 1301215
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433e95"
    },
    "title": "Idi Katha Kaadu",
    "year": 1979,
    "director": "K. Balachander",
    "role": "Subanakar",
    "source": "wikipedia",
    "cast": [
      "Jayasudha",
      "Chiranjeevi",
      "Kamal Haasan",
      "Sarath Babu",
      "J.V. Ramana Murthi",
      "Rama Prabha",
      "Saritha"
    ],
    "genres": [],
    "overview": "The heroine separates from her husband and lives as a single working mother. Enter into the life of the heroine two men who want to marry her.",
    "poster": "https://image.tmdb.org/t/p/w500/qH2BKjzBZfQkLAKozmFs6DRfbUw.jpg",
    "rating": 8,
    "releaseDate": "1979-06-26",
    "runtime": 157,
    "tmdbId": 429534
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433e96"
    },
    "title": "Sri Rama Bantu",
    "year": 1979,
    "director": "",
    "role": "Raghu Ram",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Geetha",
      "Mohan Babu"
    ],
    "genres": [],
    "overview": "Sri Rama Bantu is a 1979 Telugu film starring Chiranjeevi and Mohan Babu.",
    "poster": "https://image.tmdb.org/t/p/w500/ty0aHaN3uw6161n21pBUun6myh1.jpg",
    "rating": 0,
    "releaseDate": "1979-08-03",
    "runtime": 120,
    "tmdbId": 1301213
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433e97"
    },
    "title": "Kothala Raayudu",
    "year": 1979,
    "director": "K. Vasu",
    "role": "Satyam",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Madhavi",
      "Allu Ramalingaiah"
    ],
    "genres": [],
    "overview": "A 1979 Telugu film",
    "poster": "https://image.tmdb.org/t/p/w500/1w5crfSXcxagpVBnxEtx2xmRTq5.jpg",
    "rating": 0,
    "releaseDate": "1979-09-15",
    "runtime": 127,
    "tmdbId": 755505
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433e98"
    },
    "title": "Agni Samskaram",
    "year": 1980,
    "director": "",
    "role": "Unknown",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Madhavi",
      "Kavitha",
      "Subhashini"
    ],
    "genres": [],
    "overview": "Agni Samskaram is a Telugu film starring Chiranjeevi, Kavitha and Subhashini.[1][2]",
    "poster": "https://image.tmdb.org/t/p/w500/rzpbzm281pyuKQbtr61noR8cRTH.jpg",
    "rating": 0,
    "releaseDate": "1980-01-04",
    "runtime": 119,
    "tmdbId": 1301217
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433e99"
    },
    "title": "Kottapeta Rowdy",
    "year": 1980,
    "director": "Parvataneni Sambasiva Rao",
    "role": "Prasanna Kumar",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Krishna",
      "Mohan Babu",
      "Jaya Prada",
      "Nutan Prasad"
    ],
    "genres": [],
    "overview": "Kottapeta Rowdy is a 1980 Indian Telugu-language action drama film, produced by Suryanarayana, Satyanarayana under Satya Chitra banner and directed by P. Sambasiva Rao. It stars Krishna, Jaya Prada in lead roles while Chiranjeevi in special appearance and music composed by K. V. Mahadevan.[1][2]",
    "poster": "https://image.tmdb.org/t/p/w500/xzNOiuQ1zLbJaDdeNJXkJ6JNJH0.jpg",
    "rating": 0,
    "releaseDate": "1980-03-07",
    "runtime": 167,
    "tmdbId": 1301219
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433e9a"
    },
    "title": "Chandipriya",
    "year": 1980,
    "director": "V. Madhusudhan Rao",
    "role": "Anil",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Sobhan Babu",
      "Anjali Devi",
      "Gummadi"
    ],
    "genres": [],
    "overview": "Chandipriya is a 1980 Telugu language film directed by V. Madhusudhana Rao starring Jaya Prada and Sobhan Babu. The film was based on the novel of the same name written by Polkampalli Santha Devi.[1][2]",
    "poster": "https://image.tmdb.org/t/p/w500/37Sg8ziolDPF7hdPicGdhtd8xaC.jpg",
    "rating": 0,
    "releaseDate": "1980-01-18",
    "runtime": 177,
    "tmdbId": 1301220
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433e9b"
    },
    "title": "Aarani Mantalu",
    "year": 1980,
    "director": "K. Vasu",
    "role": "Ravi",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Kavitha",
      "Prasad Babu"
    ],
    "genres": [],
    "overview": "Ravi's (Chiranjeevi) sister Sarada (Subhashini) is raped and murdered by a gang of four, who is acquitted. Ravi gets revenge on the four rapists by killing each of them, but he finds each of them dead beforehand.",
    "poster": "https://image.tmdb.org/t/p/w500/rjqM9f3YZHhnlN69yUyXTb4o5nA.jpg",
    "rating": 0,
    "releaseDate": "1980-08-08",
    "runtime": 138,
    "tmdbId": 1301222
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433e9c"
    },
    "title": "Jathara",
    "year": 1980,
    "director": "Dhavala Satyam",
    "role": "Rambabu",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Sreedhar"
    ],
    "genres": [],
    "overview": "Jathara is a Telugu film starring Chiranjeevi.",
    "poster": "https://image.tmdb.org/t/p/w500/neGSNAUOfLxfK3Kaq3D9koaSsQf.jpg",
    "rating": 0,
    "releaseDate": "1980-03-13",
    "runtime": 184,
    "tmdbId": 1301224
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433e9d"
    },
    "title": "Mosagadu",
    "year": 1980,
    "director": "K Raghavendra Rao",
    "role": "Seshu",
    "source": "wikipedia",
    "cast": [
      "Sobhan Babu",
      "Sridevi",
      "Chiranjeevi",
      "Allu Ramalingaiah",
      "Nirmalamma",
      "Gummadi",
      "Kaikala Satyanarayana"
    ],
    "genres": [
      "Drama"
    ],
    "overview": "Mosagadu is action drama based movie in which, Chiranjeevi acted as a villain in this movie  for the first time in his career.Sobhan babu and sridevi, who are in love with each other plan to marry soon . Chiru is a local rowdysheeter in their area who has a relationship with sridevi’s twin sister(dual role).Sridevi tries to keep herself away from his twin sister’s life style and sobhan decides to give her new life by marrying her. But, chiru has his eyes on sridevi also,but gets bashed up by sobhan few times.He develops personal grudge against them.Oneday, when sobhan and sridevi are about to get married in a temple,chiru spots her alone waiting for sobhan and he rapes her. Unable to bear this humiliation, she commits suicide and before she dies, sobhan reaches there and he vows to take revenge.In the end, sobhan kills chiru and is sentenced to death, and we are shown that sobhan meets sridevi in heaven.",
    "poster": "https://image.tmdb.org/t/p/w500/853Jesffi4olMTMQQZ4nZjC7AJH.jpg",
    "rating": 0,
    "releaseDate": "1980-05-22",
    "runtime": 0,
    "tmdbId": 279362
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433e9e"
    },
    "title": "Punnami Naagu",
    "year": 1980,
    "director": "Rajashekar",
    "role": "Naagulu",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Madhavi",
      "Narasimha Raju",
      "Rati Agnihotri"
    ],
    "genres": [
      "Horror",
      "Drama"
    ],
    "overview": "Naagulu (Chiranjeevi), a snake charmer, falls in love with Menaka, whose adopted brother Raju (Narasimha Raju) is in love with Naagulu's cousin Laxmi (Rati Agnihotri). Naagulu's father has been feeding mixing snake poison in his food since childhood, making Naagulu immune to any snake bite. Every full moon, Naagulu behaves like a cobra and searches for a woman and every woman he meets dies from his poison (Wikipedia)",
    "poster": "https://image.tmdb.org/t/p/w500/l03Up7KI93iY3lFVc9U7qe6tpRE.jpg",
    "rating": 0,
    "releaseDate": "1980-06-13",
    "runtime": 130,
    "tmdbId": 279359
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433e9f"
    },
    "title": "Nakili Manishi",
    "year": 1980,
    "director": "S D Lal",
    "role": "Prasad / Shyam",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Kavitha",
      "Sangeeta",
      "Prabhakar Reddy",
      "Kaikala Satyanarayana",
      "Jayamalini"
    ],
    "genres": [
      "Drama"
    ],
    "overview": "Prasad (Chiranjeevi) a middle class man loses his job due to his honesty. Unable to get the job and he has to feed this family he agrees to die for the money. Rama (Suneeta) who hires him to die pays money for it. But in the last minutes Prasad wants to live and with the help of Gangaraju (Satyanarayana) he hides in a safe place. nakili manishiShyam (Chiranjeevi) a look a like of Prasad is a crook who murders Gangadhar Rao with the help of Rama for the property and hides the money. Susheela (kavitha) who is in love with Shyam sees the murder and loses her sanity. Susheela is sister of Gangaraju.Rama wants to plan the murder of Prasad in accident, so that Shyam can be roam freely in the name of Prasad. But plan backfires and how Syam and Rama ends up and how Gangaraju and Prasad take the revenge is the rest of the story.",
    "poster": "https://image.tmdb.org/t/p/w500/13I3djf4ulD7oX2Hdxfo4FNNqxl.jpg",
    "rating": 0,
    "releaseDate": "1980-08-01",
    "runtime": 0,
    "tmdbId": 279364
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ea0"
    },
    "title": "Kaali",
    "year": 1980,
    "director": "I V Sasi",
    "role": "GK",
    "source": "wikipedia",
    "cast": [
      "Rajinikanth",
      "Vijayakumar",
      "Seema",
      "Fatafat Jayalakshmi",
      "Major Sundarrajan",
      "Manorama",
      "Suruli Rajan",
      "Vennira Aadai Nirmala",
      "Kaikala Satyanarayana",
      "Shubha"
    ],
    "genres": [
      "Drama",
      "Action"
    ],
    "overview": "After being released from jail, Kaali is in search of Raja Rao, a rich businessman who is responsible for the death of his family members.",
    "poster": "https://image.tmdb.org/t/p/w500/bgAHBBnWMKHylWf2Wyl6ryeVIR8.jpg",
    "rating": 5.2,
    "releaseDate": "1980-07-03",
    "runtime": 144,
    "tmdbId": 66300
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ea1"
    },
    "title": "Thathayya Premaleelalu",
    "year": 1980,
    "director": "",
    "role": "Anil",
    "source": "wikipedia"
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ea2"
    },
    "title": "Love In Singapore",
    "year": 1980,
    "director": "Baby",
    "role": "Suresh",
    "source": "wikipedia",
    "cast": [
      "Prem Nazir",
      "Jayan",
      "Jose Prakash",
      "Prathapa Chandran",
      "Kaviyoor Ponnamma",
      "Thyagarajan Master"
    ],
    "genres": [
      "Action",
      "Drama",
      "Romance"
    ],
    "overview": "Fate brings back the two brothers, Premachandran and Suresh, together after years of quarrel. Now, they join forces to avenge their father's death, who was killed by mafia don Sethu.",
    "poster": "",
    "rating": 0,
    "releaseDate": "1980-02-28",
    "runtime": 141,
    "tmdbId": 553133
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ea3"
    },
    "title": "Prema Tarangalu",
    "year": 1980,
    "director": "S. P. Chittibabu",
    "role": "Kumar",
    "source": "wikipedia",
    "cast": [
      "Krishnam Raju",
      "Chiranjeevi",
      "Jayasudha",
      "Sujatha",
      "Kaikala Satyanarayana",
      "Kanta Rao",
      "Savitri"
    ],
    "genres": [
      "Action",
      "Drama",
      "Family"
    ],
    "overview": "Vijay, an orphan living alone in the city, saves a man named Kumar from thugs and becomes his best friend. However, he soon has to give up everything he holds dear for Kumar's happiness.",
    "poster": "https://image.tmdb.org/t/p/w500/bHidhSnv8V8hY9kqORVSq51Dm6z.jpg",
    "rating": 0,
    "releaseDate": "1980-10-24",
    "runtime": 161,
    "tmdbId": 938158
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ea4"
    },
    "title": "Mogudu Kaavali",
    "year": 1980,
    "director": "Katta Subba Rao",
    "role": "Chiranjeevi",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Gayathri"
    ],
    "genres": [
      "Family"
    ],
    "overview": "",
    "poster": "https://image.tmdb.org/t/p/w500/17J0qReRWE6pI1gancwkhmI38w2.jpg",
    "rating": 0,
    "releaseDate": "1980-11-14",
    "runtime": 0,
    "tmdbId": 279363
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ea5"
    },
    "title": "Rakta Bandham",
    "year": 1980,
    "director": "",
    "role": "Tilak",
    "source": "wikipedia"
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ea7"
    },
    "title": "Parvathi Parameswarulu",
    "year": 1981,
    "director": "",
    "role": "Mohan",
    "source": "wikipedia"
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ea8"
    },
    "title": "Todu Dongalu",
    "year": 1981,
    "director": "K. Vasu",
    "role": "Kishore",
    "source": "wikipedia",
    "cast": [
      "Krishna",
      "Chiranjeevi",
      "Rekha",
      "Geetha",
      "Prabhakar Reddy",
      "Rao Gopal Rao",
      "Allu Ramalingaiah"
    ],
    "genres": [
      "Romance"
    ],
    "overview": "Todu Dongalu is a 1981 Telugu film directed by K. Vasu. The film stars Krishna, Chiranjeevi, Rekha and Geetha in lead roles.",
    "poster": "https://image.tmdb.org/t/p/w500/akeIzBupKMRDHLlmkmn5SgiEBhr.jpg",
    "rating": 0,
    "releaseDate": "1981-02-11",
    "runtime": 0,
    "tmdbId": 279353
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ea9"
    },
    "title": "Tirugu Leni Manishi",
    "year": 1981,
    "director": "",
    "role": "Kishore",
    "source": "wikipedia"
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433eaa"
    },
    "title": "Prema Natakam",
    "year": 1981,
    "director": "",
    "role": "Himself",
    "source": "wikipedia"
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433eab"
    },
    "title": "Nyayam Kavali",
    "year": 1981,
    "director": "A. Kodandarami Reddy",
    "role": "Suresh Kumar",
    "source": "wikipedia",
    "cast": [
      "Radikaa Sarathkumar",
      "Chiranjeevi",
      "Sharada",
      "Kongara Jaggayya",
      "Allu Ramalingaiah",
      "Dasari Narayana Rao",
      "Tulasi",
      "Fatafat Jayalakshmi",
      "P. J. Sarma",
      "Athili Lakshmi"
    ],
    "genres": [
      "Drama",
      "Romance"
    ],
    "overview": "Bharathi's parents refuse to accept her after discovering that she is pregnant with Suresh's child, the man who cheated her.",
    "poster": "https://image.tmdb.org/t/p/w500/7z8o2HedVdkcqKFRM4VQHXBSh4X.jpg",
    "rating": 0,
    "releaseDate": "1981-05-15",
    "runtime": 132,
    "tmdbId": 938146
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433eac"
    },
    "title": "Oorukichina Maata",
    "year": 1981,
    "director": "",
    "role": "Ramudu",
    "source": "wikipedia"
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ead"
    },
    "title": "Rani Kasula Rangamma",
    "year": 1981,
    "director": "T. L. V. Prasad",
    "role": "Sukumar",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Sridevi",
      "Nutan Prasad",
      "Rallapalli Narasimha",
      "Allu Ramalingaiah",
      "Jayamalini",
      "Kongara Jaggayya"
    ],
    "genres": [],
    "overview": "Sukumar, the son of a rich industrialist, is a spoilt man who takes advantage of innocent village girls. However, when Roja complains to his father, the two conspire to teach Sukumar a lesson.",
    "poster": "https://image.tmdb.org/t/p/w500/fcMgl1vL9VU4zwfZ2z3YrJhulNo.jpg",
    "rating": 0,
    "releaseDate": "1981-08-01",
    "runtime": 114,
    "tmdbId": 1238540
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433eae"
    },
    "title": "47 Rojulu",
    "year": 1981,
    "director": "K. Balachander",
    "role": "Kumar",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Jaya Prada",
      "Sarath Babu",
      "Rama Prabha",
      "Saritha"
    ],
    "genres": [
      "Thriller",
      "Family",
      "Drama",
      "Mystery"
    ],
    "overview": "Newlyweds Kumar and Vaishali travels to France. They stay in a country manor where, unbeknownst to Vaishali, Kumar's first wife already lives. He tells Vaishali that Lucy is his colleague, and Lucy that Vaishali is his sister.",
    "poster": "",
    "rating": 6,
    "releaseDate": "1981-07-17",
    "runtime": 0,
    "tmdbId": 279356
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433eaf"
    },
    "title": "Srirasthu Subhamasthu",
    "year": 1981,
    "director": "",
    "role": "Krishna",
    "source": "wikipedia"
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433eb0"
    },
    "title": "Priya",
    "year": 1981,
    "director": "S. P. Chittibabu",
    "role": "Vijay",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Radikaa Sarathkumar",
      "Chandramohan",
      "Swapna"
    ],
    "genres": [
      "Drama"
    ],
    "overview": "Priya is romance based movie in which, the story revolves around radhika, who is only daughter of a rich industrialist. Chandramohan who is unemployed for long time gets into a small fight with radhika and later she selects him as general manager of her company. Chandramohan develops love towards her and expresses it and when both are in love, her father doesn’t like it and seperate them by creating a misunderstanding between them. Her father plans to get her married with Chiranjeevi, who is also rich but later she realises that he’s a sad love story behind him.",
    "poster": "https://image.tmdb.org/t/p/w500/7e9TD15jexu0MKroUbKkgF8XZOc.jpg",
    "rating": 0,
    "releaseDate": "1981-10-23",
    "runtime": 0,
    "tmdbId": 279360
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433eb1"
    },
    "title": "Chattaniki Kallu Levu",
    "year": 1981,
    "director": "S. A. Chandrasekhar",
    "role": "Vijay",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Madhavi",
      "Lakshmi",
      "Prabhakar",
      "Ceylon Manohar",
      "Pandari Bai",
      "Narayana Rao Uppalapati"
    ],
    "genres": [
      "Thriller"
    ],
    "overview": "Chattaniki kallu levu is action thriller based movie in which, the story deals with siblings Vijay (Chiranjeevi) and Durga (Lakshmi) pursuing their sister’s and father’s murderers.Their father and sister are killed by 3 men, John (Hema Sundar), Javed (Kannada Prabhakar) and Janardan (Ceylon Manohar).Durga, now a police officer, wants the murderers to be punished legally. But, Vijay thinks that law and its loopholes can never track down those 3 murderers.So, he decides to track them down by himself and succeeds in killing two of them, John and Janardhan on each occasion.This frustrates his sister and interrupts her investigations. She has a doubt on vijay, but due to lack of evidence remains helpless. In the end, Durga, tring to nab Javed, is kidnapped by him, but Vijay saves her and kills Javed.",
    "poster": "https://image.tmdb.org/t/p/w500/oXAA95NBZDyCpmc0hwRdt8598dC.jpg",
    "rating": 6,
    "releaseDate": "1981-10-29",
    "runtime": 0,
    "tmdbId": 279351
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433eb2"
    },
    "title": "Kirayi Rowdylu",
    "year": 1981,
    "director": "",
    "role": "Raja",
    "source": "wikipedia"
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433eb3"
    },
    "title": "Intlo Ramayya Veedhilo Krishnayya",
    "year": 1982,
    "director": "",
    "role": "Rajasekharam",
    "source": "wikipedia"
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433eb4"
    },
    "title": "Subhalekha",
    "year": 1982,
    "director": "K. Viswanath",
    "role": "Narasimha Murthi",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Sumalatha",
      "Subhalekha Sudhakar",
      "Kaikala Satyanarayana",
      "Allu Ramalingaiah",
      "Rallapalli Narasimha",
      "Nirmalamma",
      "Tulasi"
    ],
    "genres": [
      "Drama"
    ],
    "overview": "Sujatha, a lecturer, stands up against the dowry system when a rich man comes to her house with a marriage proposal. But she doesn't have the support of her family and her actions have serious consequences.",
    "poster": "https://image.tmdb.org/t/p/w500/5MnPodIYT68QY7DGYoQJWV33TcH.jpg",
    "rating": 6.5,
    "releaseDate": "1982-06-11",
    "runtime": 139,
    "tmdbId": 267687
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433eb5"
    },
    "title": "Idi Pellantara",
    "year": 1982,
    "director": "Vijay Bhaskar",
    "role": "Deepak",
    "source": "wikipedia",
    "cast": [
      "Radikaa Sarathkumar",
      "Gollapudi Maruti Rao",
      "Chiranjeevi"
    ],
    "genres": [
      "Drama"
    ],
    "overview": "Radha runs away from her abusive husband, and begins a new life with Deepak. However, things take a turn when her husband returns and starts torturing her again.",
    "poster": "https://image.tmdb.org/t/p/w500/b6FlYLpZDBp2IClFGeJVfdSOHGx.jpg",
    "rating": 0,
    "releaseDate": "1982-07-16",
    "runtime": 110,
    "tmdbId": 1536091
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433eb6"
    },
    "title": "Sitadevi",
    "year": 1982,
    "director": "Eranki Sharma",
    "role": "Prabhakar",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Sujatha",
      "Satyendra Kumar",
      "Rallapalli Narasimha",
      "Janaki",
      "P. L. Narayana",
      "Vankayala Satyanarayana"
    ],
    "genres": [
      "Family",
      "Drama"
    ],
    "overview": "A young man begins to indulge in petty thefts to save money for his handicapped sister's wedding. But when his crimes come out, the groom refuses to marry his sister.",
    "poster": "https://image.tmdb.org/t/p/w500/lurMJkwrirTXKtF99w8niEc8uUm.jpg",
    "rating": 0,
    "releaseDate": "1982-07-30",
    "runtime": 132,
    "tmdbId": 938161
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433eb7"
    },
    "title": "Radha My Darling",
    "year": 1982,
    "director": "",
    "role": "Mohan",
    "source": "wikipedia"
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433eb8"
    },
    "title": "Tingu Rangadu",
    "year": 1982,
    "director": "Thatineni Prasad",
    "role": "Ranga",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Geetha",
      "Nutan Prasad",
      "Kongara Jaggayya",
      "Sowcar Janaki"
    ],
    "genres": [
      "Drama"
    ],
    "overview": "Tingu Rangadu is action drama based movie in which, Chiranjeevi  is a carefree guy who lives with his grandmother (nirmalamma) and his cousin. One day he escapes from his house and landsup in a city. He gets into RamchandraRao (Jaggayya)’s house claiming to be his son, through his extra-marital relationship.",
    "poster": "https://image.tmdb.org/t/p/w500/8RddccdYbmtiegQhPUW9MPFRCLC.jpg",
    "rating": 0,
    "releaseDate": "1982-10-01",
    "runtime": 0,
    "tmdbId": 267688
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433eb9"
    },
    "title": "Patnam Vachina Pativrathalu",
    "year": 1982,
    "director": "Mouli",
    "role": "Gopi",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Mohan Babu",
      "Radikaa Sarathkumar",
      "Geetha",
      "Nutan Prasad",
      "Nirmalamma",
      "Rao Gopal Rao",
      "Rama Prabha"
    ],
    "genres": [
      "Comedy"
    ],
    "overview": "Patnam Vachina Pativratalu is action comedy based movie in which, Gopi (chiru) and Mohan Babu are brothers living with their mother in a village. Gopi is youngest brother and educated upto B.Sc. Agriculture and he willing to live in village after marriage, while Mohan Babu is an elder one who is uneducated person. Gopi and Mohan Babu marry at same time, Mohan Babu marries Devi, who is an educated person, while Gopi marries Lalithamba, who is an uneducated girl.",
    "poster": "https://image.tmdb.org/t/p/w500/hlFDsggMTcWFi86D31Q8rlc2go6.jpg",
    "rating": 4,
    "releaseDate": "1981-12-31",
    "runtime": 0,
    "tmdbId": 279286
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433eba"
    },
    "title": "Billa Ranga",
    "year": 1982,
    "director": "K. S. R. Das",
    "role": "Billa and Inspector Vishnu",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Mohan Babu",
      "Swapna",
      "Syamala Gouri",
      "Prabhakar",
      "Thyagarajan"
    ],
    "genres": [
      "Thriller"
    ],
    "overview": "Billa Ranga is action thriller based movie in which, Raviraj (Kannada Prabhakar) is a smuggler who kills people and smuggles their skulls to foreign countries. To get evidences against him and close his business, police commissioner (Thyagaraju) call up Billa (Chiranjeeevi) , a CID officer from delhi and presents him as thief in local area.",
    "poster": "https://image.tmdb.org/t/p/w500/daaFq1NYV30BAN7h3yLYCpzDyAF.jpg",
    "rating": 0,
    "releaseDate": "1982-10-15",
    "runtime": 0,
    "tmdbId": 267689
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ebb"
    },
    "title": "Yamakinkarudu",
    "year": 1982,
    "director": "",
    "role": "Vijay",
    "source": "wikipedia"
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ebc"
    },
    "title": "Mondi Ghatam",
    "year": 1982,
    "director": "",
    "role": "Ravindra",
    "source": "wikipedia"
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ebd"
    },
    "title": "Manchu Pallaki",
    "year": 1982,
    "director": "Vamsy",
    "role": "Sekhar",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Rajendra Prasad",
      "Sai Chand",
      "Narayana Rao Uppalapati",
      "Girish",
      "Suhasini Maniratnam",
      "Saakshi Ranga Rao",
      "P. L. Narayana",
      "Annapoorna",
      "Bheemeswara Rao"
    ],
    "genres": [
      "Drama"
    ],
    "overview": "The story of 4 friends, and how their lives are forever changed by the entry of a newcomer into their neighbourhood.",
    "poster": "https://image.tmdb.org/t/p/w500/aYjW8q796lHHJvh62qlGgs4v8lb.jpg",
    "rating": 0,
    "releaseDate": "1982-11-18",
    "runtime": 132,
    "tmdbId": 279346
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ebe"
    },
    "title": "Bandhalu Anubandhalu",
    "year": 1982,
    "director": "",
    "role": "Inspector Chiranjeevi",
    "source": "wikipedia"
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ebf"
    },
    "title": "Prema Pichollu",
    "year": 1983,
    "director": "A. Kodandarami Reddy",
    "role": "Ravi",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Radikaa Sarathkumar",
      "Geetha",
      "Kavitha",
      "Allu Ramalingaiah",
      "Rao Gopal Rao",
      "Gummadi",
      "Sudhakar"
    ],
    "genres": [
      "Romance"
    ],
    "overview": "Prema Pichollu is a drama based movie in which, Chiranjeevi plays Ravi who is an unemployed post-graduate and in love with Prema (Radhika). Prema is a dancer in a local bar and attracts her boss Allu Ramalingayya and his friends Simham (Rao gopal Rao) and Gummadi.",
    "poster": "https://image.tmdb.org/t/p/w500/5ldaYxZjiRVvMnq3EinMk9Hy2fO.jpg",
    "rating": 0,
    "releaseDate": "1983-01-13",
    "runtime": 0,
    "tmdbId": 279331
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ec0"
    },
    "title": "Palletoori Monagadu",
    "year": 1983,
    "director": "S. A. Chandrasekhar",
    "role": "Raju",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Radikaa Sarathkumar",
      "Gollapudi Maruti Rao",
      "R. Narayana Murthy",
      "Suthi Velu"
    ],
    "genres": [
      "Drama"
    ],
    "overview": "Palletoori Monagaadu is action drama based movie in which, the movie opens with murder of a Doctor who tries to setup his medical practice in a village.Everyone knows that the Zamindar of that village is behind that murder.He doesn’t like the villagers to get exposed to better things, as he fears they might get out of his control.Enters Dr.Santhi (Radhika), who is determined to complete her father’s incomplete dream.She meets chiru, who will be very helpful and co-coperative to her. But, zamindar has his own cruel intentions. He plans to kills Dr.santi also, but chiru saves her.Every attempt on her life is foiled by chiru and in the end chiru manages to help Dr.santi to run her practice smoothly by bringing zamindar to justice.",
    "poster": "https://image.tmdb.org/t/p/w500/iske1isIjyaR9wfTNHCoUYcqVtm.jpg",
    "rating": 0,
    "releaseDate": "1983-02-04",
    "runtime": 0,
    "tmdbId": 279342
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ec1"
    },
    "title": "Abhilasha",
    "year": 1983,
    "director": "A. Kodandarami Reddy",
    "role": "Chiranjeevi",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Radikaa Sarathkumar",
      "Rao Gopal Rao",
      "Gollapudi Maruti Rao",
      "Allu Aravind",
      "Rajyalakshmi"
    ],
    "genres": [
      "Thriller"
    ],
    "overview": "In order to reform the death sentence penalty, a lawyer sets a trap and gets himself arrested for a murder. But he is caught in his own web of evidence and struggles to prove his innocence.",
    "poster": "https://image.tmdb.org/t/p/w500/Amh1LLopxYDmadsUujateSBijEL.jpg",
    "rating": 8,
    "releaseDate": "1983-03-10",
    "runtime": 135,
    "tmdbId": 278423
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ec2"
    },
    "title": "Aalaya Sikharam",
    "year": 1983,
    "director": "Kodi Ramakrishna",
    "role": "Seenu",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Sumalatha",
      "Aruna Mucherla",
      "Ranganath",
      "Gollapudi Maruti Rao",
      "Sharada",
      "Annapoorna"
    ],
    "genres": [
      "Romance",
      "Family"
    ],
    "overview": "Seenu is the bread winner of his family. When his older brother Shekhar completes his education, the family hopes for better times. However, Seenu has to shoulder more responsibilities.",
    "poster": "https://image.tmdb.org/t/p/w500/bYVgLG0LY2Qi2ubmkUE0MTLOznL.jpg",
    "rating": 0,
    "releaseDate": "1983-05-07",
    "runtime": 136,
    "tmdbId": 269672
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ec3"
    },
    "title": "Sivudu Sivudu Sivudu",
    "year": 1983,
    "director": "A. Kodandarami Reddy",
    "role": "Sivudu / Vijay",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Radikaa Sarathkumar",
      "Rao Gopal Rao",
      "Kongara Jaggayya",
      "Gollapudi Maruti Rao"
    ],
    "genres": [
      "Drama"
    ],
    "overview": "Sivudu Sivudu Sivudu is action drama based movie in which, Chiranjeevi is a downtrodden villager named Sivudu who just wants to live along in his small world with his lady love (radhika) but falls as prey to the oppressors who are wealthy and powerful who beat him almost to death and kill his lover.He is rescued by a Guru (Jaggaiah) who trains him like a soldier and names him Shivudu to fight the Diwan ( RaoGopalrao) under the Jamindar (Gollapudi) and his tyrannic daughter (Radhika in dual role) who thinks she has Blue Blood.Sivudu’s aim is to rescue the villagers from a secret place where they all are help captive and also get rid of Diwan and restore peace.Radhika later learns that she is the daughter of a servant but not of Jamindar and falls for Sivudu.The rest of story is about how all ends well.",
    "poster": "https://image.tmdb.org/t/p/w500/uX1KjCFaPBlaKJpccxeEaxCCxS5.jpg",
    "rating": 0,
    "releaseDate": "1983-01-08",
    "runtime": 0,
    "tmdbId": 279335
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ec4"
    },
    "title": "Puli Bebbuli",
    "year": 1983,
    "director": "K. S. R. Das",
    "role": "Gopi Krishna",
    "source": "wikipedia",
    "cast": [
      "Krishnam Raju",
      "Chiranjeevi",
      "Jaya Prada",
      "Radikaa Sarathkumar",
      "Kaikala Satyanarayana",
      "Prabhakar"
    ],
    "genres": [
      "Drama"
    ],
    "overview": "Puli Bebbuli is a 1983 Telugu film directed by K S R Das. The film stars Krishnam Raju, Chiranjeevi, Jayaprada and Radhika Sarathkumar in lead roles.",
    "poster": "https://image.tmdb.org/t/p/w500/yyxBnXeA5FEHsfjgpdzyyw1MZhH.jpg",
    "rating": 0,
    "releaseDate": "1983-06-16",
    "runtime": 0,
    "tmdbId": 279340
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ec5"
    },
    "title": "Gudachari No.1",
    "year": 1983,
    "director": "Kodi Ramakrishna",
    "role": "Vijay",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Radikaa Sarathkumar",
      "Bhanuchander",
      "Rao Gopal Rao",
      "Gollapudi Maruti Rao"
    ],
    "genres": [
      "Action",
      "Thriller"
    ],
    "overview": "Gudachari No.1 is action drama based movie in which, Vijay (Chiranjeevi) is a CBI agent who lives in Delhi. On a special operation, Vijay is sent a place where a gang involves in every illegal activity. Vijay job is to gain proofs against them and bring them to justice. Vijay succeeds in bursting the gang and in the due process, he meets Rekha (Radhika) and falls for her. Vijay manages to liquidate the boss of that gang and returns to Delhi with Rekha as his wife.",
    "poster": "https://image.tmdb.org/t/p/w500/wRINsRHR1g10aFyqKDVCsKSuG0P.jpg",
    "rating": 0,
    "releaseDate": "1983-06-30",
    "runtime": 138,
    "tmdbId": 279333
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ec6"
    },
    "title": "Maga Maharaju",
    "year": 1983,
    "director": "Vijaya Bapineedu",
    "role": "Raju",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Suhasini Maniratnam",
      "Nutan Prasad",
      "Rao Gopal Rao",
      "Nirmalamma",
      "Annapoorna",
      "Udaykumar"
    ],
    "genres": [
      "Family",
      "Drama"
    ],
    "overview": "Maga Maharaju is a family oriented movie in which, Raju (Chiranjeevi) is an unemployed youth. Raju has too many responsibilities and commitments from his family. His unmarried sister and sick parents expect a lot from him. Under these conditions, Raju meets a young girl, Suhasini from a well to do family. She falls in love with him. Raju, in order to earn money, rides a bicycle, day and night nonstop for a record number of days and tries to collect money as donations from public.",
    "poster": "https://image.tmdb.org/t/p/w500/1u6PatDBn1PjDQH33NSRsyD0wQd.jpg",
    "rating": 0,
    "releaseDate": "1983-07-15",
    "runtime": 145,
    "tmdbId": 279338
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ec7"
    },
    "title": "Roshagadu",
    "year": 1983,
    "director": "K. S. R. Das",
    "role": "Sikindar and Srikanth",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Madhavi",
      "Silk Smitha",
      "Thyagarajan",
      "Prabhakar"
    ],
    "genres": [
      "Thriller"
    ],
    "overview": "Roshagadu is an suspense thriller based movie in which, Chiru played the role of CID informer and Thyagaraju and Prabhakar are two gangleaders and CID officer Neelima(Madhavi) is assigned to burst their underworld.Neelima uses Sikander (Chiru), who works for them, as her informer, but before sikander manages to gather enough evidences, Prabhakar comes to know about his reality and kills him. Now, Neelima is left without any support in her mission.Oneday, she spots a Sikander look a like (chiru again) and persuades him to act like sikander, During this process, they fall in love with each other. In the end, sikander manages to liquidate all secret activities of thyagu and bhayankar and helps neelima in completing her mission.",
    "poster": "https://image.tmdb.org/t/p/w500/hFFJw4niWtw2YKrGGZRHh0euZ8N.jpg",
    "rating": 0,
    "releaseDate": "1983-07-29",
    "runtime": 0,
    "tmdbId": 279339
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ec8"
    },
    "title": "Maa Inti Premayanam",
    "year": 1983,
    "director": "Alluri Ravi",
    "role": "Himself",
    "source": "wikipedia",
    "cast": [
      "Chandramohan",
      "Sulakshana",
      "Chiranjeevi",
      "Rama Prabha",
      "Nutan Prasad",
      "Sarath Babu"
    ],
    "genres": [
      "Family"
    ],
    "overview": "Maa Inti Premayanam is family based movie in which, Anand (Chandramohan) lives and works at his aunt (Ramaprabha)’s place and he falls in love with Akila (Sulakshana), who comes from a small village in order to search for work. Akila works in same office and her target is to get her sister’s eyes treated. She is being harassed by her relative, who once lend her money and wants to marry her in return and Chiranjeevi enters in climax to wrap up everything right with a song and fight, leading to a happy end.",
    "poster": "https://image.tmdb.org/t/p/w500/pzVtX3eVaI7LePboI3oaGr6fEH3.jpg",
    "rating": 0,
    "releaseDate": "1983-08-11",
    "runtime": 0,
    "tmdbId": 279330
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ec9"
    },
    "title": "Simhapuri Simham",
    "year": 1983,
    "director": "",
    "role": "Raja Sekharam and Vijay",
    "source": "wikipedia"
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433eca"
    },
    "title": "Khaidi",
    "year": 1983,
    "director": "A. Kodandarami Reddy",
    "role": "Sooryam",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Sumalatha",
      "Madhavi",
      "Rao Gopal Rao",
      "Nutan Prasad",
      "Ranganath",
      "Chalapathi Rao",
      "Silk Smitha"
    ],
    "genres": [
      "Action"
    ],
    "overview": "Suryam, the son of a poor farmer, falls in love with a vicious feudal lord's daughter, with drastic consequences.",
    "poster": "https://image.tmdb.org/t/p/w500/3kgb36zGhcIm7W8zRQyySGydyvI.jpg",
    "rating": 6.8,
    "releaseDate": "1983-10-28",
    "runtime": 157,
    "tmdbId": 269834
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ecb"
    },
    "title": "Mantri Gari Viyyankudu",
    "year": 1983,
    "director": "",
    "role": "Babji",
    "source": "wikipedia"
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ecd"
    },
    "title": "Allullostunnaru",
    "year": 1984,
    "director": "",
    "role": "Gopi",
    "source": "wikipedia"
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ece"
    },
    "title": "Goonda",
    "year": 1984,
    "director": "A. Kodandarami Reddy",
    "role": "Kalidas / Raja / Ravi",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Radha",
      "Rao Gopal Rao",
      "Nutan Prasad",
      "Kaikala Satyanarayana",
      "Suthi Velu",
      "Annapoorna"
    ],
    "genres": [
      "Action"
    ],
    "overview": "Goonda is action oriented movie in which, Crime king Kalidas (Chiranjeevi), one fine day, Kalidas tries to running away in his Jeep with his god father, and unexpectedly their jeep meets with an accident.After accident, a tranformed kalidas decides to live as a normal man under the new name of Raja.He meets his father ananda rao and his family. His childhood friend and neighbour Jaya (radha) comes back into his new found life.Anandrao attempts to stop the rice smuggling by Dharmayya and Kailasam. They both trap Raja into a case and Raja goes to jail.Later, when raja learns that dharmayya and kailasam are planning big,he escapes from jail and saves a train from being Bombed by Dharmaraja and kailasam, and in the end again surrenders himself to the police.",
    "poster": "https://image.tmdb.org/t/p/w500/zmrOeTjnaSdxxdh6z6u08WLWBcU.jpg",
    "rating": 0,
    "releaseDate": "1984-02-22",
    "runtime": 0,
    "tmdbId": 279327
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ecf"
    },
    "title": "Hero",
    "year": 1984,
    "director": "Vijaya Bapineedu",
    "role": "Krishna",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Radikaa Sarathkumar",
      "Rao Gopal Rao",
      "Kaikala Satyanarayana",
      "Allu Ramalingaiah",
      "Nirmalamma",
      "Allu Aravind",
      "Jayamalini",
      "Jyothi Lakshmi"
    ],
    "genres": [
      "Action"
    ],
    "overview": "Hero is action oriented movie in which Chiranjeevi played a role of archeologist in thish movie, who comes to a village in search of a plan for the hidden treasure. His friend vikram was killed in the same village trying for that plan.One day during his work, he saves kanakaraju (rao gopal rao), his wives (jayamalini, jyoti lakshmi) and Allu from dying. They become his friend and also treat him as their philosopher and guide.Meanwhile radhika, a village belle who cheats people with her mother nirmalamma meets Chiranjeevi and falls for him. She forces him to marry her.When krishna refuses, she successfully enerts the role of a rape victim in front of the villagers. Krishna later learns that Kanakraju was in fact Kondababu, who killed vikram, who was seacring a plan for the hidden treasure. How krishna plans and exposes kanakaraju’s reality forms the rest of the story.",
    "poster": "https://image.tmdb.org/t/p/w500/yaUON3PMyt98clgnO2O5YXjGqWW.jpg",
    "rating": 8,
    "releaseDate": "1984-03-22",
    "runtime": 0,
    "tmdbId": 279326
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ed0"
    },
    "title": "Devanthakudu",
    "year": 1984,
    "director": "S. A. Chandrasekhar",
    "role": "Vijay Kumar",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Vijayashanti",
      "Narayan Rao",
      "Gollapudi Maruti Rao",
      "Annapoorna"
    ],
    "genres": [
      "Crime"
    ],
    "overview": "Devantakudu movie is a murder mystery. In which, chiranjeevi is a college student who is daring and dashing and has a weakness for betting and challenges.Narayana Rao is chiru’s friend in the same college and once he challenges chiru to kill a person and escape without being caught and without proof and this person is a professor.Chiru takes it lightly and tries to play away by acting as if he killed the professor but he is really killed by the time he reaches there and he is accused of he murder.The rest of the movie forms on how he frees himself from the blame and who killed the professor and why?",
    "poster": "https://image.tmdb.org/t/p/w500/4sVGH7YnEYmNsb1tu51cIeBqr2i.jpg",
    "rating": 0,
    "releaseDate": "1984-04-11",
    "runtime": 0,
    "tmdbId": 279320
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ed1"
    },
    "title": "Mahanagaramlo Mayagadu",
    "year": 1984,
    "director": "Vijaya Bapineedu",
    "role": "Raja",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Vijayashanti",
      "Allu Ramalingaiah",
      "Nutan Prasad",
      "Rao Gopal Rao",
      "Giri Babu",
      "Jyothi Lakshmi",
      "Jayamalini",
      "Allu Aravind"
    ],
    "genres": [
      "Comedy"
    ],
    "overview": "Mahanagaramlo Mayagadu is fully comedy based movie in which, Chiranjeevi played a role of Raja, whose main aim is to make money by hook or crook and get his sister married. His father commits suicide after being accused of theft and his mother dies of disease.",
    "poster": "https://image.tmdb.org/t/p/w500/kZvJRKKAK63yCMxDpm3ZryvuFKY.jpg",
    "rating": 0,
    "releaseDate": "1984-06-28",
    "runtime": 0,
    "tmdbId": 279329
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ed2"
    },
    "title": "Challenge",
    "year": 1984,
    "director": "Joe Cheung Tung-Cho",
    "role": "Gandhi",
    "source": "wikipedia",
    "cast": [
      "Rosamund Kwan Chi-Lam",
      "Paul Chung Biu-Law",
      "Marylinn Wong Cho-Shut",
      "Ken Choi Fung-wah",
      "Lam Kwok-Hung",
      "Benz Kong To-Hoi",
      "Danny Lau Dan"
    ],
    "genres": [],
    "overview": "Romantic comedy.",
    "poster": "https://image.tmdb.org/t/p/w500/68PVjIJMLljZhBINLOq2vigDiKA.jpg",
    "rating": 4,
    "releaseDate": "1984-03-08",
    "runtime": 87,
    "tmdbId": 877259
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ed3"
    },
    "title": "Intiguttu",
    "year": 1984,
    "director": "K. Bapayya",
    "role": "Vijay Kumar",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Nalini",
      "Chandramohan",
      "Suhasini Maniratnam",
      "Rao Gopal Rao",
      "Kaikala Satyanarayana",
      "Allu Ramalingaiah",
      "Nutan Prasad",
      "Giri Babu",
      "Annapoorna"
    ],
    "genres": [
      "Drama"
    ],
    "overview": "Inti Guttu is family based movie in which, VijayKumar (Chiranjeevi), who helps his lover in saving her father. Chakrapani (rao Gopalrao), who is already married to yashoda (annapurna), trying to remarry kantam. On opposing his marriage, his wife yashoda and kid daughter (nalini) are forcefully drowned by chakrapani. But, they are saved and they live far away from chakrapani’s life. Nalini, after growing up, joins her father chakrapani as his PA. Her father never knows her true identity. He is already under assumption that his wife and elder daughter are dead and is living with his second daughter Suhasini. Suhasini is in love with Chandramohan.",
    "poster": "https://image.tmdb.org/t/p/w500/eK3051VVFmjksP9Rpll6IL4VEZF.jpg",
    "rating": 0,
    "releaseDate": "1984-09-14",
    "runtime": 0,
    "tmdbId": 278196
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ed4"
    },
    "title": "Naagu",
    "year": 1984,
    "director": "Thatineni Prasad",
    "role": "Naagu",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Radha",
      "Rao Gopal Rao"
    ],
    "genres": [
      "Drama"
    ],
    "overview": "Naagu is action oriented movie in which, Naagu (Chiranjeevi), a small time criminal by profession. He has rajani (radha) as his love interest.One day, rajani falls from the top floor of a hotel and dies. Her death is suspected as murder and doubt falls on naagu. Naagu’s mother later reveals that naagu’s father was also killed by a person called Jagapati Rao and Rajani’s murder was also committed by him.Now, its naagu’s turn to prove his innocence by gaining evidence against jagapatirao and bring him to justice. How Naagu succeeds in his mission form the climax of this movie.",
    "poster": "https://image.tmdb.org/t/p/w500/b9nip2j4VDPfYWFrkd6HoxfQJw1.jpg",
    "rating": 0,
    "releaseDate": "1984-10-11",
    "runtime": 0,
    "tmdbId": 279324
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ed5"
    },
    "title": "Agni Gundam",
    "year": 1984,
    "director": "Kranthi Kumar",
    "role": "Vijay",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Sumalatha",
      "Sarath Babu",
      "Sujatha",
      "Rao Gopal Rao",
      "Nutan Prasad",
      "Silk Smitha",
      "Suthi Veerabhadra Rao",
      "Suthi Velu",
      "Rallapalli Narasimha"
    ],
    "genres": [
      "Drama",
      "Action",
      "Family"
    ],
    "overview": "Vijay, a factory worker, exposes the misdeeds of Satyam but as revenge, the latter gets his brother, Chinna, married to Latha, Vijay's lover. Later, Chinna gets killed and Vijay is arrested for it.",
    "poster": "https://image.tmdb.org/t/p/w500/by8H7Cn3k2crmMG937q9VxUPwLy.jpg",
    "rating": 0,
    "releaseDate": "1984-04-22",
    "runtime": 148,
    "tmdbId": 279318
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ed6"
    },
    "title": "Rustum",
    "year": 1984,
    "director": "A. Kodandarami Reddy",
    "role": "Hari",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Urvashi",
      "Rao Gopal Rao",
      "Nutan Prasad",
      "Gummadi",
      "Kaikala Satyanarayana",
      "Allu Ramalingaiah",
      "Nirmalamma",
      "Annapoorna"
    ],
    "genres": [
      "Drama"
    ],
    "overview": "Rustum is a 1984 Telugu film directed by Kodandarami Reddy. The film stars Chiranjeevi, Urvashi, Raogopal Rao and Nutan Prasad in lead roles.",
    "poster": "https://image.tmdb.org/t/p/w500/uUywTwnMdyO2IiQj3zitogt7qcL.jpg",
    "rating": 0,
    "releaseDate": "1984-12-20",
    "runtime": 0,
    "tmdbId": 279322
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ed7"
    },
    "title": "Chattamtho Poratam",
    "year": 1985,
    "director": "K. Bapayya",
    "role": "Ravishankar",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Madhavi",
      "Sumalatha",
      "Kaikala Satyanarayana",
      "Rao Gopal Rao",
      "Annapoorna"
    ],
    "genres": [
      "Drama"
    ],
    "overview": "Chattam Tho Poratam is action crime based movie in which, Ravi (Chiranjeevi), who is the son of a struggling middle class farmer Dharmarao. He loves his cousin kalyani very much, but his another cousin Bujji is also after her.Bujji tries every possible method to marry kalyani. Bujji",
    "poster": "https://image.tmdb.org/t/p/w500/1zP4HuGxFApG82jWkyXI07YbVcU.jpg",
    "rating": 0,
    "releaseDate": "1985-01-10",
    "runtime": 0,
    "tmdbId": 279308
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ed8"
    },
    "title": "Donga",
    "year": 1985,
    "director": "Manivannan",
    "role": "Phani",
    "source": "wikipedia",
    "cast": [
      "Suman Talwar",
      "Vijayashanti",
      "Sathyaraj",
      "Rajendra Prasad",
      "Sarath Babu",
      "Unni Mary",
      "Silk Smitha",
      "Anuradha",
      "P. R. Varalakshmi",
      "R. S. Manohar"
    ],
    "genres": [
      "Action",
      "Thriller"
    ],
    "overview": "",
    "poster": "",
    "rating": 0,
    "releaseDate": "1985-06-15",
    "runtime": 0,
    "tmdbId": 509321
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ed9"
    },
    "title": "Chiranjeevi",
    "year": 1985,
    "director": "C. V. Rajendran",
    "role": "Chiranjeevi",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Vijayashanti",
      "Bhanupriya",
      "Murali Mohan",
      "Kaikala Satyanarayana",
      "Nutan Prasad",
      "Ranganath",
      "Annapoorna"
    ],
    "genres": [
      "Crime"
    ],
    "overview": "Chiranjeevi is a action thriller based movie in which, Chiranjeevi (Chiranjeevi) is the son of a sincere Police S.P (Sathyanarayana). Chiru",
    "poster": "https://image.tmdb.org/t/p/w500/wAxv5q8IhoAibQwduJaeO0OOBAY.jpg",
    "rating": 0,
    "releaseDate": "1985-04-17",
    "runtime": 0,
    "tmdbId": 279309
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433eda"
    },
    "title": "Jwaala",
    "year": 1985,
    "director": "R.P. Swamy",
    "role": "Raju / Yuvaraju",
    "source": "wikipedia",
    "cast": [
      "Mahendra Sandhu",
      "Asha Sachdev",
      "Farida Jalal",
      "Shashi Puri",
      "Gouri Khurana",
      "Rehana Sultan",
      "Ranjeet Bedi",
      "Narendra Nath",
      "Sudhir",
      "Sudhir Dalvi"
    ],
    "genres": [
      "Action"
    ],
    "overview": "Ravi would like to study medicine and then come back and practice it in his small town where there is no doctor or medical facility available for miles. Encouraged by the townspeople and his brother, Bankhe, he re-locates to Bombay, where in a few years time he is able to successfully complete his studies and become a doctor. When he returns home, nothing is the same anymore. His brother Bankhe is absconding, running away from Daku Jwala, who has sworn to kill him to avenge his brother's death - and Dr. Ravi himself has to face Jwala sooner or later - as Jwala's vengeance includes Bankhe and all of his family. Dr. Ravi must now make up his mind to look death at the hands of an angry Jwala - or re-locate and practice medicine elsewhere.",
    "poster": "https://image.tmdb.org/t/p/w500/qS40aPC9JZLVgMXooF3Y3MtkI9X.jpg",
    "rating": 0,
    "releaseDate": "1981-01-01",
    "runtime": 100,
    "tmdbId": 911908
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433edb"
    },
    "title": "Puli",
    "year": 1985,
    "director": "Raja Bharat",
    "role": "Kranthi",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Radha",
      "Rajendra Prasad",
      "Kaikala Satyanarayana",
      "Annapoorna"
    ],
    "genres": [
      "Action"
    ],
    "overview": "Puli is action oriented movie in which, Kranthi (Chiranjeevi), an honest police officer who is deputed to the special branch. He has a sister named Lakshmi. Inspector Syam is a corrupt officer and works for Smuggler JK . One day,Syam causes an accident and as a result of which Radha, Kranthi’s fiancee, loses her eye sight and her brother gets killed in the accident. Kranthi goes on hunt and catches corrupt inspector Syam and his associate James. meanwhile, JK Kidnaps Radha and Lakshmi. Rest of the movie is all about how all ends well.",
    "poster": "https://image.tmdb.org/t/p/w500/pcmpFf4bFP1QxPTVPpx5zTuZoJb.jpg",
    "rating": 0,
    "releaseDate": "1985-07-26",
    "runtime": 0,
    "tmdbId": 279313
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433edc"
    },
    "title": "Rakta Sindhuram",
    "year": 1985,
    "director": "A. Kodandarami Reddy",
    "role": "Gandragoddali and Gopi",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Radha",
      "Nutan Prasad",
      "Kaikala Satyanarayana",
      "Gummadi",
      "Suthi Velu",
      "Annapoorna"
    ],
    "genres": [
      "Drama",
      "Action"
    ],
    "overview": "A criminal makes Gopi, an honest police officer, save a bonded labourer from the clutches of a moneylender, in order to save himself from capital punishment.",
    "poster": "https://image.tmdb.org/t/p/w500/kxHpB9jr8SQ1GqvfuBoE9LLH7Ep.jpg",
    "rating": 0,
    "releaseDate": "1985-08-24",
    "runtime": 151,
    "tmdbId": 279307
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433edd"
    },
    "title": "Adavi Donga",
    "year": 1985,
    "director": "K Raghavendra Rao",
    "role": "Kalidas",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Radha",
      "Rao Gopal Rao",
      "Kongara Jaggayya",
      "Sharada",
      "Nutan Prasad",
      "Mohan Babu"
    ],
    "genres": [
      "Drama"
    ],
    "overview": "Adavi Donga is action romance based movie in which, Sharada who fights against the smuggling ring of Rao GopalRao in the forest loses her son as a child and her husband is help captive. She is disappointed when she seeks help from her brother (jaggayya) and vows on destroying the people who destroyed her life.The kid meanwhile grows up like a Tarzan in the jungle without knowing how to speak. Radha and her friends come to the jungle for sight seeing and Radha gets lost and is helped by chiru and she falls for his innocence and behavior.Chiranjeevi is once caught by the police when he tries to kill people who tried to smuggle animals. Then Sarada realises that Chiranjeevi is her son and names him as Kalidasu and educates him to fight with the criminals.He also realises that radha is the daughter of his uncle Jaggayya and they fall in love. Rest of story is about how Chiru takes revange upon Raogopal rao.",
    "poster": "https://image.tmdb.org/t/p/w500/8WbzrsoLLijHZEoHMNHILSoo6yJ.jpg",
    "rating": 6,
    "releaseDate": "1985-09-19",
    "runtime": 0,
    "tmdbId": 279314
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ede"
    },
    "title": "Vijetha",
    "year": 1985,
    "director": "A. Kodandarami Reddy",
    "role": "Chinna Babu",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Bhanupriya",
      "Somayajulu J V",
      "Kaikala Satyanarayana",
      "Sharada",
      "Giri Babu",
      "Allu Ramalingaiah",
      "Nutan Prasad",
      "Allu Arjun",
      "Jandhyala Subramanya Sastry"
    ],
    "genres": [
      "Family"
    ],
    "overview": "Chinnababu realizes that despite having well-earning sons his father is struggling to fund his younger sister's wedding. In order to help him, Chinnababu takes a drastic step.",
    "poster": "https://image.tmdb.org/t/p/w500/j7TFQ5nqzNhbrXz1OPtaMsazOoY.jpg",
    "rating": 8,
    "releaseDate": "1985-10-23",
    "runtime": 107,
    "tmdbId": 279310
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433edf"
    },
    "title": "Kirathakudu",
    "year": 1986,
    "director": "A. Kodandarami Reddy",
    "role": "Charan",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Suhasini Maniratnam",
      "Kongara Jaggayya",
      "Gummadi",
      "Nutan Prasad",
      "Allu Ramalingaiah",
      "Chalapathi Rao",
      "Silk Smitha",
      "Prabhakar"
    ],
    "genres": [
      "Crime"
    ],
    "overview": "Kiratakudu is a action oriented movie in which, Chiranjeevi played a rather unusual role, who hates his father to the core and does not support him even when is getting destroyed. Chakravarthy (Jaggayya), who is a prominent industrialist in the city, is president of the interpol and his son Charan (chiru) is a reputed sportsman, but there is no love between them. Charan, spends his life with friends and alchohol to overcome his loneliness.Despite chakravarti",
    "poster": "https://image.tmdb.org/t/p/w500/ipc1VjEzvGsqvdA8p4wKNi4Q9gm.jpg",
    "rating": 3,
    "releaseDate": "1986-01-09",
    "runtime": 0,
    "tmdbId": 279302
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ee0"
    },
    "title": "Kondaveeti Raja",
    "year": 1986,
    "director": "K Raghavendra Rao",
    "role": "Raja",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Radha",
      "Vijayashanti",
      "Mohan Babu",
      "Kaikala Satyanarayana",
      "Rao Gopal Rao",
      "Sharada"
    ],
    "genres": [
      "Action"
    ],
    "overview": "Kondaveeti Raja is action drama based movie in which, Chiranjeevi played a role of archeologist in disguise of a village youth in this movie. Kondaveeti Raja In kondaveedu, there is an old fort and every one in that village believes that there is a hidden treasure inside.Raogopalrao, a rich man in the village, tries every possible way to explore that treasure. An archeological assistant ,Raja (Chiru) comes to this village in disguise as an ordinary youth in search of a job. He unearths the secret of this hidden treasure.Now Raja, becomes a problem for Raogopalrao by interfering in all his misdeeds.Unexpectedly Raja",
    "poster": "https://image.tmdb.org/t/p/w500/jejFErlLWE20S39l8gYn4SDEkjs.jpg",
    "rating": 6,
    "releaseDate": "1986-01-31",
    "runtime": 140,
    "tmdbId": 279298
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ee1"
    },
    "title": "Magadheerudu",
    "year": 1986,
    "director": "Vijaya Bapineedu",
    "role": "Raju",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Jayasudha",
      "Chandramohan",
      "Somayajulu J V",
      "Allu Ramalingaiah",
      "Rao Gopal Rao",
      "Kaikala Satyanarayana"
    ],
    "genres": [
      "Drama"
    ],
    "overview": "Magadheerudu is family drama based movie in which, The young son in the family is facing all the troubles to put up the family financially as well as between the members who are not agreeing with each other. Chiranjeevi is the youngest son in Satyanarayana",
    "poster": "https://image.tmdb.org/t/p/w500/lWRk7Hym2tuCakFSiYstEr9hSga.jpg",
    "rating": 0,
    "releaseDate": "1986-03-06",
    "runtime": 0,
    "tmdbId": 279301
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ee2"
    },
    "title": "Veta",
    "year": 1986,
    "director": "A. Kodandarami Reddy",
    "role": "Ranapratap Kumar Varma",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Jaya Prada",
      "Kongara Jaggayya",
      "Nutan Prasad",
      "Sumalatha",
      "Ranganath"
    ],
    "genres": [
      "Adventure"
    ],
    "overview": "Veta is a Adventure based movie in which, the story is set in pre-independence period of India. Chiranjeevi is set to become captain of the ship and also ready to marry his beautiful lover. But this was resented by two of his enemies and they plot to throw him in jail. while in jail , he meets an old man who was a wealthy zamindar. He informs Chiranjeevi about the secret treasure which he could use to avenge the suffering meted to him by his enemies.Chiranjeevi plans an escape and once out of jail, he kills each and every enemy of his in different ways.",
    "poster": "https://image.tmdb.org/t/p/w500/s7wvpqocU3sqx7yCmp94YUltODc.jpg",
    "rating": 7.3,
    "releaseDate": "1986-05-28",
    "runtime": 0,
    "tmdbId": 279299
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ee3"
    },
    "title": "Chantabbai",
    "year": 1986,
    "director": "Jandhyala Subramanya Sastry",
    "role": "Panduranga Rao",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Suhasini Maniratnam",
      "Chandramohan",
      "Kongara Jaggayya",
      "Aruna Mucherla",
      "Allu Aravind",
      "Allu Ramalingaiah",
      "Sudhakar",
      "Suthi Velu"
    ],
    "genres": [
      "Comedy",
      "Mystery"
    ],
    "overview": "Panduranga Rao is a detective, who is popularly known as James Pond. His life takes an interesting turn when he is tasked to find a lady's long-lost brother.",
    "poster": "https://image.tmdb.org/t/p/w500/cPubeqyUADRiSun2Or7jRzGt8e5.jpg",
    "rating": 7.5,
    "releaseDate": "1986-08-22",
    "runtime": 134,
    "tmdbId": 279295
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ee4"
    },
    "title": "Rakshasudu",
    "year": 1986,
    "director": "A. Kodandarami Reddy",
    "role": "Purusha",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Suhasini Maniratnam",
      "Radha",
      "Sumalatha",
      "Rajendra Prasad",
      "Nagendra Babu",
      "Rao Gopal Rao",
      "Prabhakar",
      "Annapoorna"
    ],
    "genres": [
      "Drama"
    ],
    "overview": "Pursha is searching for his mother. He meets JK, who has the information on his mother but he first wants Pursha to finish off his rivals. In his quest, he meets Sumatri and then comes up with a plan.",
    "poster": "https://image.tmdb.org/t/p/w500/fdXRylrWMFFiKPTN9P1oq63acUw.jpg",
    "rating": 6,
    "releaseDate": "1986-10-02",
    "runtime": 0,
    "tmdbId": 279300
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ee5"
    },
    "title": "Dhairyavanthudu",
    "year": 1986,
    "director": "",
    "role": "Kishore",
    "source": "wikipedia"
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ee6"
    },
    "title": "Chanakya Sapatham",
    "year": 1986,
    "director": "",
    "role": "Chanakya",
    "source": "wikipedia"
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ee7"
    },
    "title": "Donga Mogudu",
    "year": 1987,
    "director": "A. Kodandarami Reddy",
    "role": "Ravi Teja and Nagaraju",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Bhanupriya",
      "Radikaa Sarathkumar",
      "Madhavi",
      "Jayanthi",
      "Rao Gopal Rao",
      "Allu Ramalingaiah",
      "Charan Raj",
      "Suthi Velu",
      "Ranganath"
    ],
    "genres": [
      "Action",
      "Comedy",
      "Drama"
    ],
    "overview": "Donga Mogudu is a action comedy based movie in which, Chiranjiveei played dual role in this movie. Ravi Teja (Chiranjeevi) is an industrialist, who owns a textile company. He is a successful person in business but his personal life lacks harmony and peace. Tortured by his wife Madhavi and her mother, he finds life miserable. Meanwhile, his opponents cannot digest his success in business and plan to stop him from getting yet another business deal. Here, he meets Nagaraju (Chiranjeevi), who is a small-time thief. Ravi Teja is saved by Nagaraju and he plans to exchange their positions, so that his problems can be solved forever. Nagaraju agrees, and teaches madhavi, her mother, and Ravi Teja",
    "poster": "https://image.tmdb.org/t/p/w500/k0GSxCnNgZ5TGa5HMdxIwcKpqDw.jpg",
    "rating": 7,
    "releaseDate": "1987-01-08",
    "runtime": 168,
    "tmdbId": 279291
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ee8"
    },
    "title": "Aradhana",
    "year": 1987,
    "director": "Bharathiraja",
    "role": "Puli Raju",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Suhasini Maniratnam",
      "Dr. Rajasekhar",
      "Kongara Jaggayya",
      "Radikaa Sarathkumar"
    ],
    "genres": [
      "Romance"
    ],
    "overview": "Puliraju is a small time rowdy. When Jennifer arrives in his town as a school teacher, he becomes her student and she transforms his into a different person. Soon, they fall in love. But will they be able to unite?",
    "poster": "https://image.tmdb.org/t/p/w500/gpRKXWXK65SevV9UXzmrwSmIvVE.jpg",
    "rating": 7,
    "releaseDate": "1987-03-27",
    "runtime": 141,
    "tmdbId": 279292
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ee9"
    },
    "title": "Chakravarthy",
    "year": 1987,
    "director": "Ravi Raja Pinisetty",
    "role": "Chakravarthy and Anji",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Mohan Babu",
      "Bhanupriya",
      "Ramya Krishnan",
      "Somayajulu J V",
      "Brahmanandam",
      "Kaikala Satyanarayana"
    ],
    "genres": [
      "Drama"
    ],
    "overview": "",
    "poster": "https://image.tmdb.org/t/p/w500/q8wQjlzbEnU277GNJ3J6HrXSELC.jpg",
    "rating": 0,
    "releaseDate": "1987-06-04",
    "runtime": 0,
    "tmdbId": 279287
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433eea"
    },
    "title": "Pasivadi Pranam",
    "year": 1987,
    "director": "A. Kodandarami Reddy",
    "role": "Madhu",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Vijayashanti",
      "Raghuvaran",
      "Prabhakar",
      "Brahmanandam",
      "Sumalatha",
      "Sujatha",
      "Rajyalakshmi"
    ],
    "genres": [
      "Thriller"
    ],
    "overview": "Pasivadi Pranam is action thriller based movie in which, Chiranjeevi is a painter who becomes a drunkard since his wife gets killed. He leads a careless life until a Kid who is deaf and dumb, enters his life. He names him raja and takes care of him. Raja",
    "poster": "https://image.tmdb.org/t/p/w500/nabCySTxp3Uhuxab9UKxAL9Po91.jpg",
    "rating": 7.6,
    "releaseDate": "1987-07-23",
    "runtime": 139,
    "tmdbId": 279288
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433eeb"
    },
    "title": "Swayamkrushi",
    "year": 1987,
    "director": "K. Viswanath",
    "role": "Sambayya",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Vijayashanti",
      "Sumalatha",
      "Charan Raj",
      "Brahmanandam",
      "Somayajulu J V",
      "Sarvadaman D. Banerjee"
    ],
    "genres": [
      "Drama"
    ],
    "overview": "Swayam Krushi is family based movie in which, Chiranjeevi played a role of an illiterate cobbler sambayya. He raises his dead sister",
    "poster": "https://image.tmdb.org/t/p/w500/5o0J5YAtnrwqfULc3qGEVVYBfAk.jpg",
    "rating": 9,
    "releaseDate": "1987-09-03",
    "runtime": 164,
    "tmdbId": 279293
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433eec"
    },
    "title": "Jebu Donga",
    "year": 1987,
    "director": "A. Kodandarami Reddy",
    "role": "Chitti Babu",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Radha",
      "Bhanupriya",
      "Kaikala Satyanarayana",
      "Prabhakar",
      "Gollapudi Maruti Rao",
      "Raghuvaran",
      "Annapoorna"
    ],
    "genres": [
      "Drama"
    ],
    "overview": "Chittibabu (Chiranjeevi) and Bhanupriya are small-time thieves who are fighting with each other. Sathyanarayana and Gollapudi are CBI officers who are investigating Kannada Prabhakar (KP) and his activities in his secret forest hideout with the help of a secret agent. When the agent gets killed, they suspect infiltrators in their agency and make Chiru as the decoy agent so that their actual agent can get the info. The villains, thinking that Chiru is a CBI agent try to kill him and create problems for him, which he doesn't understand and he gets involved in a murder case to be rescued by a beautiful girl (Radha). He later comes to know of the confusion on him from the officers and refuses to help them. But when he comes to know that Radha is the actual agent and is the daughter of Satyanarayana trying to bring criminals to justice, he feels responsible for the country and joins hands with them in eliminating the threat posed by KP's organization.",
    "poster": "https://image.tmdb.org/t/p/w500/ffyBFcmZrFsf0SDDBtDsclAOcc8.jpg",
    "rating": 6,
    "releaseDate": "1987-12-24",
    "runtime": 143,
    "tmdbId": 279290
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433eed"
    },
    "title": "Manchi Donga",
    "year": 1988,
    "director": "K Raghavendra Rao",
    "role": "Veerendra",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Vijayashanti",
      "Suhasini Maniratnam",
      "Kaikala Satyanarayana",
      "Mohan Babu",
      "Allu Ramalingaiah",
      "Rao Gopal Rao"
    ],
    "genres": [
      "Drama"
    ],
    "overview": "Manchi Donga is action oriented movie in which, Chiranjeevi palyed a role of theif, Veerendra he follows certain principles. Suryam and Chandram are father and son who are involved in an illegal occupation.Madhavi (suhasini) who is a lawyer, meets veerendra and she is attracted towards him for his kind heartedness towards poor people.",
    "poster": "",
    "rating": 0,
    "releaseDate": "1988-01-13",
    "runtime": 165,
    "tmdbId": 126206
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433eee"
    },
    "title": "Rudraveena",
    "year": 1988,
    "director": "K. Balachander",
    "role": "Suryanarayana Sarma",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Gemini Ganesan",
      "Shobana",
      "P. L. Narayana",
      "Prasad Babu",
      "Sumithra",
      "Ramesh Aravind",
      "Devilalitha",
      "Janaki",
      "Brahmanandam"
    ],
    "genres": [
      "Romance",
      "Music",
      "Drama",
      "Family"
    ],
    "overview": "Suryam is the son of a great musician who wishes to change society through his music but his conservative father does not like his ways causing Suryam to leave home and fight his battle alone.",
    "poster": "https://image.tmdb.org/t/p/w500/eJrcSDsXmHrazUeQfCluZLqd0uT.jpg",
    "rating": 6.4,
    "releaseDate": "1988-03-04",
    "runtime": 170,
    "tmdbId": 66342
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433eef"
    },
    "title": "Yamudiki Mogudu",
    "year": 1988,
    "director": "Ravi Raja Pinisetty",
    "role": "Kali / Balu",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Vijayashanti",
      "Radha",
      "Kaikala Satyanarayana",
      "Allu Ramalingaiah",
      "Rao Gopal Rao",
      "Gollapudi Maruti Rao",
      "Suthi Velu",
      "Sudhakar"
    ],
    "genres": [
      "Action",
      "Comedy",
      "Fantasy"
    ],
    "overview": "Kaali, a ruffian, is killed by a rival when he falls in love with his daughter. When Kaali fights with the god of death, he is sent back in the body of a soft-spoken man who is harassed by his family.",
    "poster": "https://image.tmdb.org/t/p/w500/7FBOgvUw8dyWo79YIZVwfL5Be8X.jpg",
    "rating": 7.8,
    "releaseDate": "1988-04-29",
    "runtime": 145,
    "tmdbId": 279134
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ef0"
    },
    "title": "Khaidi No. 786",
    "year": 1988,
    "director": "Vijaya Bapineedu",
    "role": "Gopi",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Bhanupriya",
      "Kaikala Satyanarayana",
      "Nutan Prasad",
      "Kota Srinivasa Rao",
      "Mohan Babu",
      "Nirmalamma",
      "Allu Ramalingaiah",
      "Silk Smitha"
    ],
    "genres": [
      "Drama"
    ],
    "overview": "Khaidi No.786 is action drama based movie in which, Gopi (Chiranjeevi) is a music master brought up by Satyanarayana and Nutan prasad in a village. He wants to become a police constable. Surya Chandra Rao (Kota Srinivasa Rao) is a rich man in the village with his daughter Radha (Bhanupriya) who is head strong and proud of her riches. In a brawl with Gopi, she seeks revenge and acts as his disciple wanting to learn music and later accuses him of attempting to rape her with the help of new SI of the village.Asirayya (Mohan Babu) but later realises her mistake and his good nature and falls in love with him. Though reluctant to marry her, Gopi is convinced to accept her into his life and they marry. Surya Chandra Rao is enraged by this and sends a goon to kill him and in a fight the goon loses and Gopi leaves him at Surya Chandra Rao",
    "poster": "https://image.tmdb.org/t/p/w500/4j1xVmM7jgcHPUITeOd6kw2yRh.jpg",
    "rating": 5.7,
    "releaseDate": "1988-06-10",
    "runtime": 0,
    "tmdbId": 279133
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ef1"
    },
    "title": "Marana Mrudangam",
    "year": 1988,
    "director": "A. Kodandarami Reddy",
    "role": "Janardhan / Johnny",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Radha",
      "Suhasini Maniratnam",
      "Suresh Oberoi",
      "Nagendra Babu",
      "Brahmanandam",
      "Sudhakar",
      "Annapoorna",
      "Gollapudi Maruti Rao"
    ],
    "genres": [
      "Drama"
    ],
    "overview": "Jaani runs a small time restaurant/casino with his partner Bhillu. One fine day he helps two women stuck with their broken car and gives them a drive. Utpala succeeds in an interview, by remembering jaani's answer and gets a job as nurse in an hospital.Jaani and his partner also help Radha to get a job by blocking the competitor.One day, Naga babu discovers cocaine in an egg in his kitchen.",
    "poster": "https://image.tmdb.org/t/p/w500/2oFZ5shFE8082k7tdFRjY90zI1v.jpg",
    "rating": 7,
    "releaseDate": "1988-08-04",
    "runtime": 0,
    "tmdbId": 279129
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ef2"
    },
    "title": "Trinetrudu",
    "year": 1988,
    "director": "A. Kodandarami Reddy",
    "role": "Abhimanyu",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Bhanupriya",
      "Nagendra Babu",
      "Kulbhushan Kharbanda",
      "Murali Mohan",
      "Nutan Prasad",
      "Brahmanandam",
      "Kaikala Satyanarayana",
      "Chandramohan",
      "Allu Ramalingaiah"
    ],
    "genres": [
      "Action"
    ],
    "overview": "",
    "poster": "https://image.tmdb.org/t/p/w500/wCXKyRitqJEIcIwoWI7sSemmAXT.jpg",
    "rating": 0,
    "releaseDate": "1988-09-22",
    "runtime": 0,
    "tmdbId": 279131
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ef4"
    },
    "title": "Attaku Yamudu Ammayiki Mogudu",
    "year": 1989,
    "director": "A. Kodandarami Reddy",
    "role": "Kalyan",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Vijayashanti",
      "Vanisri",
      "Rao Gopal Rao",
      "Kaikala Satyanarayana",
      "Allu Ramalingaiah",
      "Sudhakar",
      "Brahmanandam",
      "Giri Babu",
      "Suthi Velu"
    ],
    "genres": [
      "Drama"
    ],
    "overview": "When young Rekha falls in love with unemployed Kalyan, her high-hat mother, Chamundeshwari, disapproves of the match and devises numerous schemes to drive the lovebirds apart. But Kalyan proves a tougher adversary than Chamundeshwari expects, and soon an intense battle of wills ensues.",
    "poster": "https://image.tmdb.org/t/p/w500/h4dMPtrYPgRFaeAtiWIlUOAw5CL.jpg",
    "rating": 7.2,
    "releaseDate": "1989-01-13",
    "runtime": 140,
    "tmdbId": 279124
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ef5"
    },
    "title": "State Rowdy",
    "year": 1989,
    "director": "B. Gopal",
    "role": "Kalicharan/Pruthvi",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Bhanupriya",
      "Radha",
      "Jyothi Lakshmi",
      "Jayamalini",
      "Rao Gopal Rao",
      "Kaikala Satyanarayana",
      "Sharada",
      "Thyagarajan"
    ],
    "genres": [
      "Drama",
      "Action",
      "Crime"
    ],
    "overview": "An aspiring police officer changes the course of his life when he is unable to achieve his dream due to dirty politics. Then, he turns into an outlaw and decides to eliminate crime on his own.",
    "poster": "https://image.tmdb.org/t/p/w500/AwlOFa2CPWnumr9zcLbaUQfZBJy.jpg",
    "rating": 6,
    "releaseDate": "1989-03-22",
    "runtime": 151,
    "tmdbId": 279127
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ef6"
    },
    "title": "Rudranetra",
    "year": 1989,
    "director": "K Raghavendra Rao",
    "role": "Nethra",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Radha",
      "Vijayashanti",
      "Raghuvaran",
      "Nutan Prasad",
      "Ranganath",
      "Brahmanandam"
    ],
    "genres": [
      "Thriller"
    ],
    "overview": "Netra works for a detective agency and is assigned a mission to track down the underworld activities of an influential personality. The situation changes when he gets killed during his mission.",
    "poster": "https://image.tmdb.org/t/p/w500/9om7P8GK9UGkFMjqG9HiG5XJqzS.jpg",
    "rating": 6,
    "releaseDate": "1989-06-16",
    "runtime": 126,
    "tmdbId": 279126
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ef7"
    },
    "title": "Lankeswarudu",
    "year": 1989,
    "director": "Dasari Narayana Rao",
    "role": "Siva Shankar",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Radha",
      "Revathi",
      "Mohan Babu",
      "Brahmanandam",
      "Kaikala Satyanarayana",
      "Raghuvaran"
    ],
    "genres": [
      "Drama",
      "Action"
    ],
    "overview": "Shankar decides to leave behind his life as a gangster and lead a normal life. However, when his brother-in-law's life is at stake, he decides to rethink his decision.",
    "poster": "https://image.tmdb.org/t/p/w500/fOt2Ckvc3Hf9rMtbRXkkpIgrq76.jpg",
    "rating": 0,
    "releaseDate": "1989-10-27",
    "runtime": 140,
    "tmdbId": 279128
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ef8"
    },
    "title": "Kondaveeti Donga",
    "year": 1990,
    "director": "A. Kodandarami Reddy",
    "role": "Raja",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Vijayashanti",
      "Radha",
      "Amrish Puri",
      "Sharada",
      "Rao Gopal Rao",
      "Mohan Babu",
      "Kaikala Satyanarayana",
      "Nagendra Babu",
      "Ranganath"
    ],
    "genres": [
      "Drama",
      "Action",
      "Adventure"
    ],
    "overview": "Unable to tolerate the worries of the villagers, Raja takes aid of a fairy tale hero 'Kondaveeti Donga', transforms himself into one and sets out to save the people from an evil hypnotizer Kadra.",
    "poster": "https://image.tmdb.org/t/p/w500/elfMzgRW3fE6g7SYmaF0eVmuvGf.jpg",
    "rating": 8,
    "releaseDate": "1990-03-09",
    "runtime": 151,
    "tmdbId": 103227
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433ef9"
    },
    "title": "Jagadeka Veerudu Athiloka Sundari",
    "year": 1990,
    "director": "K Raghavendra Rao",
    "role": "Raju",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Sridevi",
      "Amrish Puri",
      "Prabhakar",
      "Allu Ramalingaiah",
      "Rami Reddy",
      "Tanikella Bharani",
      "Brahmanandam",
      "Prasad Babu",
      "Janagaraj"
    ],
    "genres": [
      "Action",
      "Comedy",
      "Fantasy"
    ],
    "overview": "A man finds a ring that gives the bearer great power, but the goddess to whom the ring belongs wants it back to return to her world.",
    "poster": "https://image.tmdb.org/t/p/w500/q1B0XgJmzlSP6sujx95ny2tSwrK.jpg",
    "rating": 8.2,
    "releaseDate": "1990-05-09",
    "runtime": 150,
    "tmdbId": 77031
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433efa"
    },
    "title": "Kodama Simham",
    "year": 1990,
    "director": "K. Murali Mohana Rao",
    "role": "Bharath",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Radha",
      "Vani Viswanath",
      "Mohan Babu",
      "Prabhakar",
      "Kaikala Satyanarayana",
      "Sudhakar",
      "Allu Ramalingaiah"
    ],
    "genres": [
      "Action",
      "Western"
    ],
    "overview": "Chiranjeevi has to get back the treasures hidden by his father by fighting the bad guys to release his mother from jail.",
    "poster": "https://image.tmdb.org/t/p/w500/oYCIPB2IUCJjGxlmW4enhW62Jtj.jpg",
    "rating": 6,
    "releaseDate": "1990-08-09",
    "runtime": 143,
    "tmdbId": 278182
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433efb"
    },
    "title": "Raja Vikramarka",
    "year": 1990,
    "director": "Ravi Raja Pinisetty",
    "role": "Raja Vikramarka",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Amala Akkineni",
      "Radikaa Sarathkumar",
      "Brahmanandam",
      "Jayanthi",
      "Rao Gopal Rao",
      "Allu Ramalingaiah",
      "Sudhakar",
      "Kota Srinivasa Rao",
      "Kaikala Satyanarayana"
    ],
    "genres": [
      "Drama"
    ],
    "overview": "Inspired by 1988 American film Coming to America.",
    "poster": "https://image.tmdb.org/t/p/w500/uBQxp3pMqKkB0PoknpINtZyXQnX.jpg",
    "rating": 6.7,
    "releaseDate": "1990-11-13",
    "runtime": 154,
    "tmdbId": 279123
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433efc"
    },
    "title": "Stuartpuram Police Station",
    "year": 1991,
    "director": "Yandamuri Veerendranath",
    "role": "Inspector Rana Pratap",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Vijayashanti",
      "Nirosha",
      "R. Sarathkumar",
      "Kaikala Satyanarayana",
      "Kota Srinivasa Rao",
      "Babu Mohan",
      "Mohanraj",
      "Brahmanandam"
    ],
    "genres": [
      "Action"
    ],
    "overview": "Stuartupuram Police Station is action oriented movie in which, Inspector Rana Pratap (Chiranjeevi) comes to Stuartpuram, a place well known for theives of all varieties. He starts reforming each of them, by showing them a better way to live.His real intention is to cleanup the entire town, The village of Stoovertpuram has always lived in fear of the police. The police are oppressive, and puppets of the rich, wealthy and influential.",
    "poster": "https://image.tmdb.org/t/p/w500/dfU5jutyIZKMMVGjSVDLMGjQ4P5.jpg",
    "rating": 6,
    "releaseDate": "1991-01-09",
    "runtime": 0,
    "tmdbId": 66350
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433efd"
    },
    "title": "Gang Leader",
    "year": 1991,
    "director": "Vijaya Bapineedu",
    "role": "Rajaram",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Vijayashanti",
      "Murali Mohan",
      "Sudha",
      "R. Sarathkumar",
      "Sumalatha",
      "Anandaraj",
      "Rao Gopal Rao",
      "Kaikala Satyanarayana",
      "Allu Ramalingaiah"
    ],
    "genres": [
      "Action",
      "Drama"
    ],
    "overview": "Rajaram, youngest of three brothers, owns up to another's crime in order to fund his middle brother's education. He is shattered when he learns about the culprits behind his eldest brother's murder.",
    "poster": "https://image.tmdb.org/t/p/w500/6gALL6FJSqyu9udXydnfyoJWbiB.jpg",
    "rating": 7.2,
    "releaseDate": "1991-05-09",
    "runtime": 155,
    "tmdbId": 78596
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433efe"
    },
    "title": "Rowdy Alludu",
    "year": 1991,
    "director": "K Raghavendra Rao",
    "role": "Auto Johnny / Kalyan",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Shobana",
      "Divya Bharti",
      "Kota Srinivasa Rao",
      "Brahmanandam",
      "Kaikala Satyanarayana",
      "Allu Ramalingaiah",
      "Mukhtar Khan",
      "Rohini"
    ],
    "genres": [
      "Comedy",
      "Action"
    ],
    "overview": "Kalyan is an industrialist whose conniving enemies first replace him with an imposter, Johnny, and then frame him for murder. But when Johnny realises Kalyan's innocence, he decides to help him.",
    "poster": "https://image.tmdb.org/t/p/w500/3rHWdfLVT5A4cDYrd9PzxWV3LwG.jpg",
    "rating": 7.3,
    "releaseDate": "1991-10-18",
    "runtime": 144,
    "tmdbId": 279122
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433eff"
    },
    "title": "Gharana Mogudu",
    "year": 1992,
    "director": "K Raghavendra Rao",
    "role": "Raju",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Nagma",
      "Rao Gopal Rao",
      "Shubha",
      "Kaikala Satyanarayana",
      "Brahmanandam",
      "Vani Viswanath",
      "Ponnambalam",
      "Chalapathi Rao",
      "Disco Shanti"
    ],
    "genres": [
      "Drama"
    ],
    "overview": "Gharana Mogudu is a remake of tamil movie Mannan and it is a drama based movie in which, Raju (Chiranjeevi) is a do-gooder who helps his fellow co-workers while working in Visakhapatnam shipyard, but when his mother suffers a paralytic stroke, he moves back to Hyderabad and looks for a job.Uma Devi (Nagma) daughter of industrialist Bapineedu (Raogopal Rao) takes over the business from her father and helps it to reach new heights which also sees her head strongness reach new heights as well. In this scenario, she not only rejects Ranganayakulu",
    "poster": "https://image.tmdb.org/t/p/w500/beK6IozHPQ1A4c3mgf1jFNWFutc.jpg",
    "rating": 5.8,
    "releaseDate": "1992-04-09",
    "runtime": 149,
    "tmdbId": 278184
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f00"
    },
    "title": "Aapadbandhavudu",
    "year": 1992,
    "director": "K. Viswanath",
    "role": "Madhava",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Jandhyala Subramanya Sastry",
      "Meenakshi Sheshadri",
      "Sarath Babu",
      "Allu Ramalingaiah",
      "Geetha"
    ],
    "genres": [
      "Drama"
    ],
    "overview": "Madhava and Hema love each other but both suppress their feelings due to societal norms. When a horrific incident lands Hema in a mental asylum, Madhava risks everything to comes to her aid.",
    "poster": "https://image.tmdb.org/t/p/w500/b7x7NFXZ3wiHu8mPswjpypVNWPR.jpg",
    "rating": 6.2,
    "releaseDate": "1992-10-08",
    "runtime": 173,
    "tmdbId": 180638
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f01"
    },
    "title": "Muta Mestri",
    "year": 1993,
    "director": "A. Kodandarami Reddy",
    "role": "Subhash Chandra Bose",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Meena",
      "Roja Selvamani",
      "Sharat Saxena",
      "Brahmanandam",
      "Kota Srinivasa Rao",
      "Allu Ramalingaiah"
    ],
    "genres": [
      "Drama",
      "Action"
    ],
    "overview": "A commoner catches the attention of the Chief Minister of a state when he takes on a criminal to protect the rights of vegetable sellers. Impressed, the Chief Minister asks him to enter politics, which he soon does, but there is a price to pay.",
    "poster": "https://image.tmdb.org/t/p/w500/mVcJnHw4S2F0xTamFWNX4BgQiv9.jpg",
    "rating": 6.8,
    "releaseDate": "1993-01-16",
    "runtime": 163,
    "tmdbId": 279121
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f02"
    },
    "title": "Mechanic Alludu",
    "year": 1993,
    "director": "B. Gopal",
    "role": "Ravi",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Nageshwara Rao Akkineni",
      "Vijayashanti",
      "Kota Srinivasa Rao",
      "Kaikala Satyanarayana",
      "Allu Ramalingaiah",
      "Sharada",
      "Brahmanandam",
      "Sudhakar",
      "Disco Shanti"
    ],
    "genres": [
      "Comedy"
    ],
    "overview": "Mechanic Alludu is a comedy based movie in which for the First film to have Akkineni Nageshwara Rao and Chiranjeevi together. The story opens with Ravi (Chitranjeevi) showingup on multiple TV screens as an announcer.After a clash, he is fired from work, and he joins Nageshwara Rao",
    "poster": "https://image.tmdb.org/t/p/w500/3IoyX0LVMjRsaKJqZB4WmZkeBW5.jpg",
    "rating": 5.7,
    "releaseDate": "1993-05-27",
    "runtime": 146,
    "tmdbId": 279119
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f03"
    },
    "title": "Mugguru Monagallu",
    "year": 1994,
    "director": "K Raghavendra Rao",
    "role": "Prudhvi, Vikram, and Dattatreya",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Ramya Krishnan",
      "Nagma",
      "Roja Selvamani",
      "Brahmanandam",
      "Sharat Saxena",
      "Kota Srinivasa Rao",
      "Babu Mohan",
      "Sudhakar",
      "Ranganath"
    ],
    "genres": [
      "Comedy"
    ],
    "overview": "Mugguru Monagallu is a Action comedy based movie in which, Prithvi, Vikram and Dattatreya (Chiranjeevi in triple role) are the sons of Ranganath and Srividya living in a village. Ranganath goes against Sarath saxena in an incident and is killed by him. Srividya who is pregnant with twins is separated from prithvi thinking that he is killed in escaping from the goons and delivers twins in a temple. The temple saint adopts one son who is childless and srividya is left with vikram who becomes ACP. Dattatreya is a Dance master. The story revolves on how the brothers unite with one another and also with their mother and take revenge on Sarath Saxena.",
    "poster": "https://image.tmdb.org/t/p/w500/aqhZsvLjiRGxY6QrjX6n0DUNBEm.jpg",
    "rating": 6,
    "releaseDate": "1994-01-06",
    "runtime": 0,
    "tmdbId": 279116
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f04"
    },
    "title": "Madam",
    "year": 1994,
    "director": "Singeetam Srinivasa Rao",
    "role": "",
    "source": "wikipedia",
    "cast": [
      "Rajendra Prasad",
      "Soundarya",
      "Subhalekha Sudhakar",
      "Amanchi Venkata Subrahmanyam",
      "Kallu Chidambaram",
      "Nagesh",
      "Saakshi Ranga Rao",
      "Raavi Kondala Rao",
      "Sowcar Janaki"
    ],
    "genres": [
      "Comedy",
      "Drama"
    ],
    "overview": "Voiceover guy Prasad helps his tycoon friend Bobby woo a girl, but accidentally falls into proposing to her himself. To fulfill a dying wish from Bobby's grandma, Prasad disguises himself as a woman to visit her, accidentally creating a social justice warrior persona that gains immense popularity. Now stuck in three identities: man, man wooing the girl, and social justice warrior woman. Prasad juggles chaos to avoid exposure while accidentally saving the day for everyone else.",
    "poster": "https://image.tmdb.org/t/p/w500/fvIIUOLA724q6z9XMNaBkU12x1G.jpg",
    "rating": 9,
    "releaseDate": "1994-01-01",
    "runtime": 146,
    "tmdbId": 483666
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f05"
    },
    "title": "S. P. Parasuram",
    "year": 1994,
    "director": "Ravi Raja Pinisetty",
    "role": "SP Parasuram IPS",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Sridevi",
      "Brahmanandam",
      "Sudhakar",
      "Allu Ramalingaiah",
      "Harish Kumar"
    ],
    "genres": [
      "Action",
      "Drama"
    ],
    "overview": "S.P.Parshuram is an action oriented movie in which, Parshuram (Chiranjeevi) is a police official who is very rash and is willing to arrest his own family for the sake of the law. Harish, his brother, is caught in a blue film gang, and Sridevi, a common thief, almost becomes a victim but manages to escape. Because she is a witness, she is later assaulted and becomes blind. Rest of the movie is about how Parshuram recues his family from gangsters.",
    "poster": "https://image.tmdb.org/t/p/w500/pZKcVRMClmvP7GH1ePr4iPrUtNN.jpg",
    "rating": 5,
    "releaseDate": "1994-06-15",
    "runtime": 140,
    "tmdbId": 279118
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f06"
    },
    "title": "Alluda Majaka",
    "year": 1995,
    "director": "E.V.V. Satyanarayana",
    "role": "Sitaramudu / Toyota",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Lakshmi",
      "Ramya Krishnan",
      "Rambha",
      "Sivaranjani",
      "Kota Srinivasa Rao",
      "Giri Babu",
      "Brahmanandam",
      "Mallikarjuna Rao",
      "Chinna"
    ],
    "genres": [
      "Action",
      "Drama",
      "Comedy",
      "Romance"
    ],
    "overview": "Sitaram, the son of a rich man, is robbed of his wealth by his enemies. Later, he is wrongly arrested for murder but manages to get out of jail and avenges the injustice done to him and his family.",
    "poster": "https://image.tmdb.org/t/p/w500/1IgxixBARsjlYuPhRyAJi4D8Inf.jpg",
    "rating": 6,
    "releaseDate": "1995-02-25",
    "runtime": 165,
    "tmdbId": 76116
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f07"
    },
    "title": "Big Boss",
    "year": 1995,
    "director": "Vijaya Bapineedu",
    "role": "Surendra",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Roja Selvamani",
      "Kota Srinivasa Rao",
      "Tanikella Bharani",
      "Nutan Prasad",
      "Babu Mohan",
      "Madhavi",
      "Sujatha"
    ],
    "genres": [
      "Drama"
    ],
    "overview": "Big Boss is a action oreinted movie in which, Surendra (Chiranjeevi) landing in a town for a job. He witnesses rivalry between two mafia gangs at that place. After a fight with a street goon, he is recognized by one gang and encouraged to become a don. He rents a room in Madhavi",
    "poster": "https://image.tmdb.org/t/p/w500/9WpNvKTNRBDlqivMmA8MhJD7F8o.jpg",
    "rating": 5,
    "releaseDate": "1995-07-15",
    "runtime": 154,
    "tmdbId": 279115
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f08"
    },
    "title": "Rikshavodu",
    "year": 1995,
    "director": "Kodi Ramakrishna",
    "role": "Raju and Dharma Rayudu",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Nagma",
      "Soundarya",
      "Brahmanandam",
      "Paresh Rawal",
      "Gundu Hanumantha Rao",
      "Amanchi Venkata Subrahmanyam",
      "Jayasudha",
      "Manorama"
    ],
    "genres": [
      "Drama"
    ],
    "overview": "",
    "poster": "https://image.tmdb.org/t/p/w500/5LQSYy1jF2kMTUJMIjGId8mA8zf.jpg",
    "rating": 5,
    "releaseDate": "1995-12-13",
    "runtime": 177,
    "tmdbId": 279114
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f09"
    },
    "title": "Hitler",
    "year": 1997,
    "director": "Sandhya Mohan",
    "role": "Madhava Rao",
    "source": "wikipedia",
    "cast": [
      "Jagathy Sreekumar",
      "Kalabhavan Navas",
      "Prem Kumar",
      "Zainuddin",
      "Augustine",
      "Harisree Ashokan",
      "Indrans",
      "Janardhanan",
      "Kuthiravattam Pappu",
      "Mala Aravindan"
    ],
    "genres": [
      "Comedy",
      "Drama"
    ],
    "overview": "Hitler Brothers is a 1997 Indian Malayalam film, directed by Sandhya Mohan and produced by E Unni Krishnan. The film stars Jagathy Sreekumar, Kalabhavan Navas, Prem Kumar and A. C. Zainuddin in lead roles. The film had musical score by S. P. Venkatesh.",
    "poster": "",
    "rating": 0,
    "releaseDate": "1997-07-08",
    "runtime": 141,
    "tmdbId": 358856
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f0a"
    },
    "title": "Master",
    "year": 1997,
    "director": "Akiyuki Shinbo",
    "role": "Raj Kumar",
    "source": "wikipedia",
    "cast": [
      "Toshihiko Seki",
      "Akira Kamiya",
      "Emi Shinohara",
      "Atsuko Takahata",
      "Hiroya Ishimaru",
      "Kaneto Shiozawa",
      "Koji Yusa",
      "Masuo Amada",
      "Miho Yamada",
      "Mizue Otsuka"
    ],
    "genres": [
      "Animation",
      "Fantasy",
      "Science Fiction",
      "Horror"
    ],
    "overview": "Tsunami is an ancient guardian from days long ago when the Mother Spirit created demons and guardians to aid a fledgling human race. In 2089, only a few demons and guardians remain in the city of Neo-Shinjuku.  Tsunami becomes involved with a woman who has just lost her fiance and her arm and now wants to figure out why this has happened. Meanwhile, the demon leader is still alive and plotting to enslave mankind.",
    "poster": "https://image.tmdb.org/t/p/w500/7N7FIAixXFQnyrJCXI57VzAC57C.jpg",
    "rating": 5.348,
    "releaseDate": "1997-11-11",
    "runtime": 45,
    "tmdbId": 20089
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f0b"
    },
    "title": "Bavagaru Bagunnara?",
    "year": 1998,
    "director": "Jayant Paranji",
    "role": "Raju",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Rambha",
      "Paresh Rawal",
      "Rachana Banerjee",
      "Kota Srinivasa Rao",
      "Kaikala Satyanarayana",
      "Srihari",
      "Brahmanandam",
      "Annapoorna",
      "Nagendra Babu"
    ],
    "genres": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "overview": "In New Zealand, Raju meets and falls in love with Swapna. On a trip to India, he pretends to be the husband of a pregnant girl to help her face her family, unaware that the girl is Swapna's sister.",
    "poster": "https://image.tmdb.org/t/p/w500/4XvkDuc7b13LUawatUiMP2gxa8l.jpg",
    "rating": 5.8,
    "releaseDate": "1998-04-09",
    "runtime": 149,
    "tmdbId": 80942
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f0c"
    },
    "title": "Choodalani Vundi",
    "year": 1998,
    "director": "Gunasekhar",
    "role": "Ramakrishna",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Anjala Zaveri",
      "Soundarya",
      "Prakash Raj",
      "Teja Sajja",
      "Brahmanandam",
      "Brahmaji",
      "M. S. Narayana",
      "Gundu Hanumantha Rao",
      "Allu Ramalingaiah"
    ],
    "genres": [
      "Drama"
    ],
    "overview": "Ramakrishna (Chiranjeevi) is a mechanic whose life changes when he meets Priya (Anjala Zaveri) at a train station. She sees him and feels some inexplicable connection and runs away with him to flee her father, Mahendra's (Prakash Raj) goons. They end up living in the forest with their son, but her father, who is an underworld don, kidnaps her so that he can marry her off to another don's son. Ramakrishna confronts her father and in the ensueing struggle Priya takes the bullet shot at her husband and dies. Their son, because of the shock, loses his voice and Ramakrishna is jailed. Mahendra takes the boy away to Kolkata, where the story originally started. Rama Krishna with the help of Padmavathi (Soundarya) reunites with his son.",
    "poster": "https://image.tmdb.org/t/p/w500/eps7UYs7gry5HCP6qCFsOUjC38Z.jpg",
    "rating": 5.7,
    "releaseDate": "1998-09-11",
    "runtime": 148,
    "tmdbId": 267115
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f0d"
    },
    "title": "Sneham Kosam",
    "year": 1999,
    "director": "K. S. Ravikumar",
    "role": "Simhadri / Chinnayya",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Meena",
      "Vijayakumar",
      "Prakash Raj",
      "Sujatha",
      "Sithara",
      "Kota Srinivasa Rao",
      "M. S. Narayana",
      "Nirmalamma",
      "Babu Mohan"
    ],
    "genres": [
      "Drama",
      "Family"
    ],
    "overview": "Prabhavati lives a wealthy lifestyle in India with her dad, mom, and elder sister, Rani. Rani is of marriageable age and her marriage is arranged with her mom's half-brother, but just after the marriage one of their servants, Sheroo, a close friend of her dad's, kills her mother, is arrested by the Police, tried in Court, and sentenced to 15 years in jail. Since that day relations have been strained between her dad, Rani, and her husband. She re-locates to U.S.A. to study, and when she returns she finds that Sheroo's has been replaced by his son, Veeru, and runs their household, while there has been no improvement in the relationship between her dad and Rani and her family, which also includes, Veena, Rani's daughter. Prabhavati attempts to bridge the misunderstandings between her dad and sister, but to no avail, and when she proposes to get married to Rani's nephew, Ranjeet, her father opposes this tooth and nail. Then Sheroo is discharged from prison and returns home to find that ...",
    "poster": "https://image.tmdb.org/t/p/w500/8CJ1YQ7772C0GObelY5pYAp8MCy.jpg",
    "rating": 6.7,
    "releaseDate": "1999-01-01",
    "runtime": 169,
    "tmdbId": 500189
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f0e"
    },
    "title": "Iddaru Mitrulu",
    "year": 1999,
    "director": "K Raghavendra Rao",
    "role": "Vijay",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Ramya Krishnan",
      "Sakshi Shivananda",
      "Suresh",
      "Sudhakar",
      "Chandramohan",
      "Mallikarjuna Rao",
      "Amanchi Venkata Subrahmanyam",
      "Brahmanandam",
      "Y. Vijaya"
    ],
    "genres": [
      "Drama"
    ],
    "overview": "Vijay (Chiranjeevi) and Sakshi Sivanand are best friends. They share their thoughts, happiness and pain with each other. One day she finds love in a photographer (Suresh) and marries him, while Vijay plays a lover boy and marries Ramya Krishna. However, Sakshi's happiness ends when she finds out that her husband is two-timing her. Vijay consoles her but his wife is unhappy that he spends so much time with her and gives him an ultimatum. He chooses his friend and takes care of her and her unborn child and later reunites her with her husband.",
    "poster": "https://image.tmdb.org/t/p/w500/lMQ3psGEXNBgGEgFe9iPAqqB14q.jpg",
    "rating": 2,
    "releaseDate": "1999-04-30",
    "runtime": 142,
    "tmdbId": 210055
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f0f"
    },
    "title": "Annayya",
    "year": 2000,
    "director": "Muthyala Subbaiah",
    "role": "Rajaram",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Soundarya",
      "Ravi Teja",
      "Venkat",
      "Chandni",
      "Sishwa",
      "Kota Srinivasa Rao",
      "Sarath Babu",
      "Bhupinder Singh",
      "Gangadhar Panday"
    ],
    "genres": [
      "Family",
      "Comedy"
    ],
    "overview": "Rajaram (Chiranjeevi), owner of a fleet of lorries, meets Devi (Soundarya), a garment factory owner. After that acquaintance, she once seeks his help in dealing with two street ruffians, who were teasing her sisters, Lata (Chandini) and Geetha (Sishwa), and is shocked when the culprits turn out to be his brothers, Ravi (Ravi Teja) and Gopi (Venkat). Rajaram takes the incident lightly as the pranks of youngsters and is very lenient to them. With more such incidents, the two fall in love, with the brothers and sisters not far behind.  On his brothers' request, Rajaram approaches Devi for her sisters' hands in marriage to his brothers. But she curtly refuses her consent on grounds that the two are wayward drunkards. Rajaram reacts sharply to it and vows to get his brothers married to her sisters.  Since then on he is more exacting with his brothers and brings about a transformation in them. Devi agrees to their marriage.",
    "poster": "https://image.tmdb.org/t/p/w500/nnlFk5IlqALE3zoLCRTeOVjquWo.jpg",
    "rating": 5.8,
    "releaseDate": "2000-01-07",
    "runtime": 155,
    "tmdbId": 240143
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f10"
    },
    "title": "Hands Up",
    "year": 2000,
    "director": "Siva Nageshwara Rao",
    "role": "Saraswati's husband",
    "source": "wikipedia",
    "cast": [
      "Nagendra Babu",
      "Jayasudha",
      "Chiranjeevi",
      "Brahmanandam"
    ],
    "genres": [
      "Comedy"
    ],
    "overview": "",
    "poster": "https://image.tmdb.org/t/p/w500/cAT3A0ynZU5rUS2bD6kENvYClq3.jpg",
    "rating": 6,
    "releaseDate": "2000-02-09",
    "runtime": 0,
    "tmdbId": 279108
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f11"
    },
    "title": "Mrugaraju",
    "year": 2001,
    "director": "Gunasekhar",
    "role": "Raju",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Simran",
      "Sanghavi",
      "Nagendra Babu",
      "Brahmanandam",
      "Prakash Raj",
      "Tanikella Bharani",
      "Rambha",
      "Chalapathi Rao",
      "Gundu Hanumantha Rao"
    ],
    "genres": [],
    "overview": "Mrugaraju is a 2001 Tollywood film which was written and directed by Gunasekhar based on English film The Ghost and the Darkness. It stars Chiranjeevi, Simran, Sanghavi and Nagendra Babu. Mani Sharma composed music for this film. The film has been dubbed in Tamil with the title Vettaikkaaran.The Hindi version of this is available named \"Rakshak, The Protector\".In a jungle, there lives a man-eating lion. The latest victim of lions havoc is the death of the chief engineer who is constructing the rail bridge. The Railway department asks Aishwarya (Simran) to go on the mission of constructing the bridge. Even after Aishwarya resumes the duty, Lion starts terrorizing the crew of the construction team.",
    "poster": "https://image.tmdb.org/t/p/w500/29jeGPk57TRwX9s385trhGMRmx8.jpg",
    "rating": 5.3,
    "releaseDate": "2001-01-11",
    "runtime": 145,
    "tmdbId": 137374
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f12"
    },
    "title": "Sri Manjunatha",
    "year": 2001,
    "director": "K Raghavendra Rao",
    "role": "Manjunatha / Lord Siva",
    "source": "wikipedia",
    "cast": [
      "Arjun Sarja",
      "Soundarya",
      "Chiranjeevi",
      "Meena",
      "Ambareesh",
      "Sumalatha",
      "Brahmanandam",
      "Tanikella Bharani",
      "Vinod Raj"
    ],
    "genres": [
      "Family",
      "Drama",
      "History",
      "Music"
    ],
    "overview": "Manjunatha, an atheist, fights against social evils. He marries Kathyayini, a staunch devotee of Lord Shiva. As the days go by, Manjunatha realizes the existence of God.",
    "poster": "https://image.tmdb.org/t/p/w500/vmLB3lSmSWUFDCEl6XR71GrpRZ3.jpg",
    "rating": 6.3,
    "releaseDate": "2001-06-22",
    "runtime": 152,
    "tmdbId": 66519
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f13"
    },
    "title": "Daddy",
    "year": 2001,
    "director": "Stephen Cavalier",
    "role": "Rajkumar",
    "source": "wikipedia",
    "cast": [],
    "genres": [
      "Animation",
      "Science Fiction",
      "Mystery"
    ],
    "overview": "An everyday tale of small town life, stepfathers, and aliens.",
    "poster": "",
    "rating": 0,
    "releaseDate": "2001-01-01",
    "runtime": 3,
    "tmdbId": 1313094
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f14"
    },
    "title": "Indra",
    "year": 2002,
    "director": "B. Gopal",
    "role": "Indrasena Reddy / Shankar Narayana",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Sonali Bendre",
      "Aarthi Agarwal",
      "Mukesh Rishi",
      "Sivaji Sontineni",
      "Brahmanandam",
      "Telangana Shakuntala",
      "Tanikella Bharani",
      "Prakash Raj",
      "Dharmavarupu Subramanyam"
    ],
    "genres": [
      "Drama",
      "Action"
    ],
    "overview": "A man embarks on a quest to make peace between two families fighting over the water problem in their district. In a bid to solve this crisis, he agrees to marry a girl from the rival family.",
    "poster": "https://image.tmdb.org/t/p/w500/2PPCIPNzSRqRjyNf3ZU1NN8yXv.jpg",
    "rating": 6.4,
    "releaseDate": "2002-07-24",
    "runtime": 179,
    "tmdbId": 25882
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f15"
    },
    "title": "Tagore",
    "year": 2003,
    "director": "V. V. Vinayak",
    "role": "Ravindranath Tagore",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Shriya Saran",
      "Jyothika",
      "Prakash Raj",
      "Sayaji Shinde",
      "Sunil Varma",
      "M. S. Narayana",
      "K. Viswanath",
      "Ahuti Prasad",
      "V. V. Vinayak"
    ],
    "genres": [
      "Drama",
      "Action"
    ],
    "overview": "Tagore (Chiranjeevi) creates his own vigilante military network called the Anti-Corruption Force (ACF) that eliminates the most corrupt individuals, from all walks of life, in a systematic manner. As pressure builds on Police and Government to track down the Man who masterminds these killings, Balbir Singh (Puneet Issar), is specially summoned to head the task. He is aided by Suryam (Prakash Raj) who, though being just a constable in the mammoth Police force, is compelled by his instincts to see through the underlying design. Together they unravel the mystery and unveil the phenomenon called Tagore, but not before Badrinaryana (Sayaji Shinde), the human face of evil, finds out that his revelry in the belief of Tagore’s death was a mistake he can never make amends for.",
    "poster": "https://image.tmdb.org/t/p/w500/uMYWgHSiFEiE0bPLBp4eZTxLnqv.jpg",
    "rating": 6.615,
    "releaseDate": "2003-09-24",
    "runtime": 175,
    "tmdbId": 97343
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f16"
    },
    "title": "Anji",
    "year": 2004,
    "director": "Kodi Ramakrishna",
    "role": "Anji",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Namrata Shirodkar",
      "Tinnu Anand",
      "Nagendra Babu",
      "M. S. Narayana",
      "Master Bharath",
      "Bhupinder Singh",
      "Rami Reddy",
      "Nitya Shetty"
    ],
    "genres": [
      "Adventure",
      "Fantasy"
    ],
    "overview": "The Aatmalingam of the Himalayas possesses enormous divine powers. Once every 72 years, the Akasa Ganga from the sky flows into Aatmalingam. Those who drink Akasa Ganga 's holy water become immortal and gain supernatural powers.",
    "poster": "https://image.tmdb.org/t/p/w500/eFJ3hsJHqm1fumMC9R0HCGKQX5Q.jpg",
    "rating": 5.5,
    "releaseDate": "2004-01-15",
    "runtime": 150,
    "tmdbId": 115067
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f17"
    },
    "title": "Shankar Dada M.B.B.S.",
    "year": 2004,
    "director": "Jayant Paranji",
    "role": "Shankar Prasad \"Shankar Dada\"",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Srikanth",
      "Sonali Bendre",
      "Paresh Rawal",
      "Girish Karnad",
      "Vennira Aadai Nirmala",
      "M. S. Narayana",
      "Surya Bhagawan Das",
      "Deepti Nallamothu",
      "Sharwanand"
    ],
    "genres": [],
    "overview": "Shankar Dada is a local goon who sets out to fulfill his parents' dream of him being a doctor. With help from his sidekick ATM, he enrolls himself in medical college and drives the principal and his daughter Dr. Sunitha up the wall.",
    "poster": "https://image.tmdb.org/t/p/w500/rBkVDxKUGsElewghzsf7e1JKJ3f.jpg",
    "rating": 6.4,
    "releaseDate": "2004-10-15",
    "runtime": 166,
    "tmdbId": 148884
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f18"
    },
    "title": "Andarivaadu",
    "year": 2005,
    "director": "",
    "role": "Govindarajulu / Siddharth",
    "source": "wikipedia",
    "cast": [],
    "genres": [],
    "overview": "Govinda Rajulu is a mesthri (construction worker) who drinks a lot and lives a care-free life. His son Siddartha, on the other hand, is a popular TV show host and is a more disciplined man — the opposite of his dad. The son gets his father married to Shanti to sober him.  Siddartha is in love with Shwetha, who is the daughter of a big-time contractor, Veerendra. Veerendra agrees to get his daughter married but tries to distance the father-son duo as he does not like the father's influence on the son. The situation comes where Shwetha's engagement is called off and she turns vengeful to separate the family. She moves into the house and makes sketches to create differences but fails. The rest of the film is about if she succeeds or not.",
    "poster": "",
    "rating": 4.25,
    "releaseDate": "2005-06-03",
    "runtime": 0,
    "tmdbId": 307904
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f19"
    },
    "title": "Jai Chiranjeeva",
    "year": 2005,
    "director": "K. Vijaya Bhaskar",
    "role": "Satyanarayana Murthy",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Bhumika Chawla",
      "Arbaaz Khan",
      "Sameera Reddy",
      "Brahmanandam",
      "M. S. Narayana",
      "Venu Madhav",
      "Jayaprakash Reddy",
      "Rahul Dev",
      "Sunil Varma"
    ],
    "genres": [
      "Action"
    ],
    "overview": "Jai Chiranjeeva (Telugu: జై చిరంజీవ) is a Tollywood 2005 film directed by K. Vijaya Bhaskar and produced by Vyjayanthi Movies. The movie stars Chiranjeevi, Bhoomika Chawla and Arbaaz Khan . It was dubbed into Hindi and Tamil as Bhajrang and Deva respectively. The film turned into a big hit in Bhoomika's career, after Kushi",
    "poster": "https://image.tmdb.org/t/p/w500/fBiZKG2a7p0vmUwoSfnpQPIOORg.jpg",
    "rating": 5.4,
    "releaseDate": "2005-12-21",
    "runtime": 145,
    "tmdbId": 117415
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f1a"
    },
    "title": "Stalin",
    "year": 2006,
    "director": "A. R. Murugadoss",
    "role": "Major Stalin",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Trisha Krishnan",
      "Prakash Raj",
      "Sharada",
      "Khushboo",
      "Anushka Shetty",
      "Brahmanandam",
      "Sunil Varma",
      "Pradeep Ram Singh Rawat",
      "Meena Vasu"
    ],
    "genres": [
      "Action",
      "Drama"
    ],
    "overview": "Stalin is deeply moved by the suicide of a girl with physical disabilities. As a result, he devises a formula of extending unconditional help to those who need it to establish peace. But things turn complicated in his life with the entry of Home Minister Muddu Krishnayya.",
    "poster": "https://image.tmdb.org/t/p/w500/qGrBPtRJHz3s1QpoVznTApdqNQR.jpg",
    "rating": 5.4,
    "releaseDate": "2006-12-14",
    "runtime": 168,
    "tmdbId": 242911
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f1b"
    },
    "title": "Style",
    "year": 2006,
    "director": "Raghava Lawrence",
    "role": "Himself",
    "source": "wikipedia",
    "cast": [
      "Raghava Lawrence",
      "Prabhu Deva",
      "Charmy Kaur",
      "Kamalinee Mukherjee",
      "Raja",
      "Vernon Enthiado",
      "Bhanuchander",
      "Kalpana Chowdary",
      "Jayasudha",
      "Kovai Sarala"
    ],
    "genres": [
      "Family",
      "Drama"
    ],
    "overview": "Ganesh (Prabhu Deva) is a good dancer. He beats Anthony in one dance competition to head into international arena. Anthony gets Ganesh beaten up, and Ganesh loses his legs in a car accident. He is depressed, but he wants to give his dance talent to someone and make him his heir. On a different line, Raghava (Raghava Lawrence) works as a boy at a dance school in Vizag. He and four of his friends are good dancers, but they are never recognized until one folk dance at a hotel. Ganesh finds his prospective heir in Raghava. The rest of the film is how Raghava prepares and defeats Anthony in the final dance competition.",
    "poster": "https://image.tmdb.org/t/p/w500/4E1QNgZK0UwbN6wnz861l2BLyl1.jpg",
    "rating": 5.4,
    "releaseDate": "2006-01-12",
    "runtime": 160,
    "tmdbId": 224953
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f1c"
    },
    "title": "Shankar Dada Zindabad",
    "year": 2007,
    "director": "Prabhu Deva",
    "role": "Shankar Prasad \"Shankar Dada\"",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Srikanth",
      "Karishma Kotak",
      "Sayaji Shinde",
      "Brahmanandam",
      "Venu Madhav",
      "Dilip Prabhavalkar",
      "Vennira Aadai Nirmala",
      "Sarath Babu",
      "Gundu Hanumantha Rao"
    ],
    "genres": [
      "Drama",
      "Comedy"
    ],
    "overview": "A goon falls for a girl who manages an old-age home, and she mistakes the goon for a professor. She seeks his help not knowing that the man who wants the old-age home demolished is his boss.",
    "poster": "https://image.tmdb.org/t/p/w500/glL5C66ihfOjDrBjo5Bm3WjMql9.jpg",
    "rating": 4.4,
    "releaseDate": "2007-07-27",
    "runtime": 142,
    "tmdbId": 63811
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f1d"
    },
    "title": "Magadheera",
    "year": 2009,
    "director": "S. S. Rajamouli",
    "role": "Himself",
    "source": "wikipedia",
    "cast": [
      "Ram Charan",
      "Kajal Aggarwal",
      "Dev Gill",
      "Srihari",
      "Sunil Varma",
      "Surya Bhagawan Das",
      "Chatrapathi Sekhar",
      "Sarath Babu",
      "Saloni Aswani",
      "Hema"
    ],
    "genres": [
      "Action"
    ],
    "overview": "A street-bike racer chances upon a woman and is struck by visions of a past life where they were both star-crossed lovers in a war-ridden kingdom 400 years ago, while the reincarnation of his romantic rival emerges with murderous intent.",
    "poster": "https://image.tmdb.org/t/p/w500/xK7MEV56GF291VG0U5XnVJuvNv3.jpg",
    "rating": 7.2,
    "releaseDate": "2009-07-31",
    "runtime": 164,
    "tmdbId": 23790
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f1f"
    },
    "title": "Bruce Lee: The Fighter",
    "year": 2015,
    "director": "Sreenu Vaitla",
    "role": "Himself",
    "source": "wikipedia",
    "cast": [
      "Ram Charan",
      "Rakul Preet Singh",
      "Kriti Kharbanda",
      "Chiranjeevi",
      "Nagendra Babu",
      "Brahmanandam",
      "Arun Vijay",
      "Sampath Raj",
      "Nadhiya",
      "Mukesh Rishi"
    ],
    "genres": [
      "Romance",
      "Action",
      "Drama"
    ],
    "overview": "When a stuntman is mistaken for a police officer, he begins fighting crime.",
    "poster": "https://image.tmdb.org/t/p/w500/qNYG0NLXcdZEW56pcOjrm0w6Vos.jpg",
    "rating": 5.8,
    "releaseDate": "2015-10-16",
    "runtime": 151,
    "tmdbId": 364080
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f20"
    },
    "title": "Khaidi No. 150",
    "year": 2017,
    "director": "V. V. Vinayak",
    "role": "Kaththi Seenu / Konidela Sivasankara Varaprasad",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Kajal Aggarwal",
      "Tarun Arora",
      "Ali Basha",
      "Ram Charan",
      "Raai Laxmi",
      "Brahmanandam",
      "Raghu Babu",
      "Raghu Karumanchi",
      "Posani Krishna Murali"
    ],
    "genres": [
      "Action",
      "Romance",
      "Thriller"
    ],
    "overview": "A convict who plans to escape the country unexpectedly switches his place with a good Samaritan who fights for the rights of poor farmers.",
    "poster": "https://image.tmdb.org/t/p/w500/3Ry340WkEjlkglTnqLbvEGwMBmK.jpg",
    "rating": 5.9,
    "releaseDate": "2017-01-15",
    "runtime": 147,
    "tmdbId": 412326
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f21"
    },
    "title": "Sye Raa Narasimha Reddy",
    "year": 2019,
    "director": "Surender Reddy",
    "role": "Uyyalawada Narasimha Reddy",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Sudeepa",
      "Vijay Sethupathi",
      "Ravi Kishan",
      "Jagapati Babu",
      "Nayanthara",
      "Tamannaah Bhatia",
      "Henry Maynard",
      "Oscar Skagerberg",
      "Mark Kitto"
    ],
    "genres": [
      "Drama",
      "History",
      "War"
    ],
    "overview": "Gwalior Fort, during the Indian Rebellion of 1857. In a moment of despair, Lakshmibai, Rani of Jhansi, encourages her men by telling them the heroic story of Uyyalawada Narasimha Reddy, a brave Telugu chieftain who took up arms in 1846 to protest against the numerous arbitrariness and crimes perpetrated by the leaders and military forces of the East India Company.",
    "poster": "https://image.tmdb.org/t/p/w500/uEheujJysophwGaqHWPu1UCPthl.jpg",
    "rating": 6.2,
    "releaseDate": "2019-09-27",
    "runtime": 169,
    "tmdbId": 496495
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f22"
    },
    "title": "Acharya",
    "year": 2022,
    "director": "Koratala Siva",
    "role": "Acharya",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Ram Charan",
      "Sonu Sood",
      "Jisshu Sengupta",
      "Ajay",
      "Nassar",
      "Pooja Hegde",
      "Tanikella Bharani",
      "Kishore",
      "Saurav Lokesh"
    ],
    "genres": [
      "Action",
      "Drama"
    ],
    "overview": "Acharya, a middle-aged Naxalite-turned-social reformer, launches a fight against the Endowments Department over misappropriation and embezzlement of temple funds and donations.",
    "poster": "https://image.tmdb.org/t/p/w500/hVgTZdg25d8RN2hIHbqSTijdeX1.jpg",
    "rating": 4.1,
    "releaseDate": "2022-04-29",
    "runtime": 152,
    "tmdbId": 679919
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f23"
    },
    "title": "Godfather",
    "year": 2022,
    "director": "Mohan Raja",
    "role": "Brahma Teja \"Godfather\" / Abram Qureshi",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Nayanthara",
      "Satyadev Kancharana",
      "Salman Khan",
      "Tanya Ravichandran",
      "Samuthirakani",
      "Brahmaji",
      "Murali Sharma",
      "Sunil Varma",
      "Puri Jagannadh"
    ],
    "genres": [
      "Action",
      "Drama"
    ],
    "overview": "The sudden demise of the celebrated leader PKR leaves the ruling party in a political crisis and shakes up the family. The party has to elect a leader, and more than one player is in contention. Everyone’s intentions are blurred, and loyalties are in question. Brahma is a game changer in this squabble. Who will succeed as the leader and become the CM?",
    "poster": "https://image.tmdb.org/t/p/w500/im4u5huiePz0PKFWF4Thb7Tc3db.jpg",
    "rating": 5.8,
    "releaseDate": "2022-10-05",
    "runtime": 157,
    "tmdbId": 863931
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f24"
    },
    "title": "Waltair Veerayya",
    "year": 2023,
    "director": "Bobby Kolli",
    "role": "Waltair Veerayya",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Shruti Haasan",
      "Ravi Teja",
      "Catherine Tresa",
      "Bobby Simha",
      "Prakash Raj",
      "Rajendra Prasad",
      "Vennela Kishore",
      "Saptagiri",
      "Pradeep Ram Singh Rawat"
    ],
    "genres": [
      "Action",
      "Drama"
    ],
    "overview": "A notorious smuggler Waltair Veerayya is hired by a CI Seethapathi, reaches Malaysia with the ostensible mission of kidnapping a drug mafia leader named Solomon, who escaped India after wreaking havoc on the RAW agents and local policemen. Veerayya manages to pummel Solomon, who is fiercely protected by his ruthless gang-lord brother Kaala. Tables are turned, when Veerayya reveals that he shares a turbulent past with Kaala & an ACP Vikram Sagar who is hell-bent on ending his smuggling activities.",
    "poster": "https://image.tmdb.org/t/p/w500/g4mx225pbBH5i0KSjc3t1pO5hIy.jpg",
    "rating": 5.3,
    "releaseDate": "2023-01-13",
    "runtime": 160,
    "tmdbId": 989017
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f25"
    },
    "title": "Bhola Shankar",
    "year": 2023,
    "director": "Meher Ramesh",
    "role": "Bhola Shankar",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Keerthy Suresh",
      "Tamannaah Bhatia",
      "Sushanth",
      "Murali Sharma",
      "Rao Ramesh",
      "Vennela Kishore",
      "Tulasi",
      "Pragathi Mahavadi",
      "Sreemukhi"
    ],
    "genres": [
      "Action",
      "Crime",
      "Drama",
      "Thriller"
    ],
    "overview": "A reformed gangster now taxi driver unwittingly draws the vengeance of a crime syndicate after aiding the police in busting a smuggling operation. Fueled by a burning desire for justice and to protect his adopted sister, he embarks on a relentless quest to hunt down the mobsters responsible.",
    "poster": "https://image.tmdb.org/t/p/w500/hgip2gbwu19ITJw1KvzLjKHIInt.jpg",
    "rating": 4,
    "releaseDate": "2023-08-10",
    "runtime": 158,
    "tmdbId": 864221
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f26"
    },
    "title": "Mana Shankara Vara Prasad Garu",
    "year": 2026,
    "director": "Anil Ravipudi",
    "role": "Shankara Vara Prasad",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Nayanthara",
      "Venkatesh",
      "Catherine Tresa",
      "Harsha Vardhan",
      "Abhinav Gomatam",
      "Sachin Khedekar",
      "Sharat Saxena",
      "Sudev Nair",
      "Srinivasa Reddy"
    ],
    "genres": [
      "Action",
      "Comedy",
      "Mystery"
    ],
    "overview": "National security officer Vara Prasad, protecting his estranged wife and kids from a vengeful ex-cop, sees it as a chance to rebuild their relationship after six years apart.",
    "poster": "https://image.tmdb.org/t/p/w500/sfj6SLSzbzHN2633HcqabHFJz5y.jpg",
    "rating": 6.105,
    "releaseDate": "2026-01-11",
    "runtime": 162,
    "tmdbId": 1439713
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f27"
    },
    "title": "Vishwambhara",
    "year": 2026,
    "director": "Malladi Vassishta",
    "role": "TBA",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Trisha Krishnan",
      "Ashika Ranganath",
      "Kunal Kapoor",
      "Meenakshi Chaudhary",
      "Surbhi",
      "Isha Chawla",
      "Subhalekha Sudhakar",
      "Rajiv Kanakala",
      "Mouni Roy"
    ],
    "genres": [
      "Fantasy"
    ],
    "overview": "",
    "poster": "https://image.tmdb.org/t/p/w500/ygmxv156YvURmnFN6eG3i2dIg4U.jpg",
    "rating": 0,
    "releaseDate": "",
    "runtime": 0,
    "tmdbId": 1229939
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f28"
    },
    "title": "Chiru-Bobby 2",
    "year": 2027,
    "director": "",
    "role": "TBA",
    "source": "wikipedia"
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f29"
    },
    "title": "Chiru-Odela",
    "year": 2027,
    "director": "",
    "role": "TBA",
    "source": "wikipedia"
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f2a"
    },
    "title": "47 Natkal",
    "year": 1981,
    "director": "K. Balachander",
    "role": "Kumar",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Jaya Prada",
      "Sarath Babu",
      "Rama Prabha",
      "Saritha"
    ],
    "genres": [
      "Thriller",
      "Family",
      "Drama",
      "Mystery"
    ],
    "overview": "Newlyweds Kumar and Vaishali travels to France. They stay in a country manor where, unbeknownst to Vaishali, Kumar's first wife already lives. He tells Vaishali that Lucy is his colleague, and Lucy that Vaishali is his sister.",
    "poster": "",
    "rating": 6,
    "releaseDate": "1981-07-17",
    "runtime": 0,
    "tmdbId": 279356
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f2b"
    },
    "title": "Ranuva Veeran",
    "year": 1981,
    "director": "S. P. Muthuraman",
    "role": "The Thief",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Rajinikanth",
      "Sridevi",
      "Nalini"
    ],
    "genres": [],
    "overview": "Two estranged childhood friends, Raghu and Suresh, find themselves at loggerheads when Raghu joins the army and Suresh becomes a gangster.",
    "poster": "",
    "rating": 0,
    "releaseDate": "1989-04-12",
    "runtime": 0,
    "tmdbId": 819866
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f2c"
    },
    "title": "Mappillai",
    "year": 1989,
    "director": "Rajashekar",
    "role": "Himself",
    "source": "wikipedia",
    "cast": [
      "Rajinikanth",
      "Amala Akkineni",
      "Srividya",
      "Jaishankar",
      "Nizhalgal Ravi",
      "Vinu Chakravarthy",
      "S. S. Chandran",
      "Janaki",
      "Dilip",
      "Raja"
    ],
    "genres": [],
    "overview": "Rajarajeswari gets Aarumugam's sister arrested after she learns that she is in love with her son. Aarumugam decides to marry her daughter Geetha in order to teach her a lesson.",
    "poster": "https://image.tmdb.org/t/p/w500/1lSLaVxmiptlPc454x6yijZapXN.jpg",
    "rating": 6.7,
    "releaseDate": "1989-10-28",
    "runtime": 150,
    "tmdbId": 331568
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f2d"
    },
    "title": "Pratibandh",
    "year": 1990,
    "director": "Ravi Raja Pinisetty",
    "role": "Siddhanth",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Juhi Chawla Mehta",
      "Allu Sirish"
    ],
    "genres": [],
    "overview": "Film starring Chiranjeevi, Juhi Chawla and Rami Reddy",
    "poster": "https://image.tmdb.org/t/p/w500/fr7kO2OxdctVADAttT4UYeIu9Mo.jpg",
    "rating": 5.5,
    "releaseDate": "1990-09-28",
    "runtime": 0,
    "tmdbId": 304137
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f2e"
    },
    "title": "Aaj Ka Goonda Raaj",
    "year": 1992,
    "director": "Ravi Raja Pinisetty",
    "role": "Raja",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Raj Babbar",
      "Meenakshi Sheshadri",
      "Dalip Tahil",
      "Sharat Saxena",
      "Parikshat Sahni",
      "Prem Chopra",
      "Satish Shah",
      "Tinnu Anand",
      "Dina Pathak"
    ],
    "genres": [
      "Thriller",
      "Action"
    ],
    "overview": "Raja, an unemployed youth, does odd jobs to support his family. When his brother, Ravi, an IAS officer, becomes a target for corrupt businessmen Nagpal and Tejpal, Raja has to save him.",
    "poster": "https://image.tmdb.org/t/p/w500/nsSbOv8yGXfyXrQEbPrUab6tx8o.jpg",
    "rating": 4,
    "releaseDate": "1992-07-10",
    "runtime": 147,
    "tmdbId": 302705
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f2f"
    },
    "title": "The Gentleman",
    "year": 1994,
    "director": "Mahesh Bhatt",
    "role": "Vijay",
    "source": "wikipedia",
    "cast": [
      "Chiranjeevi",
      "Juhi Chawla Mehta",
      "Paresh Rawal",
      "Ajay Rathnam",
      "Laxmikant Berde",
      "Heera Rajgopal",
      "Deepak Tijori",
      "Roja Selvamani"
    ],
    "genres": [
      "Action",
      "Drama"
    ],
    "overview": "Vijay runs a small business and is also a master thief who is wanted by the cops. But, his motive for committing theft is to build a school where students can get free education and become professionals in their field.",
    "poster": "https://image.tmdb.org/t/p/w500/rHv89mDoWy9SxjPwsiPausnIaqJ.jpg",
    "rating": 5.5,
    "releaseDate": "1994-11-18",
    "runtime": 0,
    "tmdbId": 458113
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f30"
    },
    "title": "Sipayi",
    "year": 1996,
    "director": "V. Ravichandran",
    "role": "Major Chandrakanth",
    "source": "wikipedia",
    "cast": [
      "V. Ravichandran",
      "Chiranjeevi",
      "Soundarya",
      "Tara",
      "Umashree",
      "Vinaya Prasad",
      "Ramesh Bhat",
      "Mukhyamantri Chandru",
      "Ramakrishna",
      "Balaraj"
    ],
    "genres": [
      "Romance",
      "Action",
      "Drama"
    ],
    "overview": "Sipayi, who fights for the welfare of the people in his village, falls in love with Shanti. When she is forced to marry a criminal, he tries to change her fate.",
    "poster": "https://image.tmdb.org/t/p/w500/1fo4cXDpqyXRKuTVac4PiMPBknj.jpg",
    "rating": 0,
    "releaseDate": "1996-06-28",
    "runtime": 139,
    "tmdbId": 279111
  },
  {
    "_id": {
      "$oid": "69b2b3487f9fc01cac433f31"
    },
    "title": "Hanuman",
    "year": 2005,
    "director": "V.G. Samant",
    "role": "",
    "source": "wikipedia",
    "cast": [
      "Mukesh Khanna",
      "Chiranjeevi",
      "Shahnawaz Pradhan",
      "Viraj Adhav",
      "Sumeet Pathak",
      "Mona Ghosh Shetty",
      "Rajesh Jolly",
      "Manoj Pandey",
      "Sanket Jaiswal",
      "Manish Wadhwa"
    ],
    "genres": [
      "Animation",
      "Fantasy",
      "Family"
    ],
    "overview": "After being granted immortality by the Hindu gods -- including his father, Vayu, the god of the wind -- Hanuman sets off on an epic journey.",
    "poster": "https://image.tmdb.org/t/p/w500/lnGhItGVyiet1Um0y2qfgEHihg.jpg",
    "rating": 6.1,
    "releaseDate": "2005-10-21",
    "runtime": 138,
    "tmdbId": 16111
  }
]
async function seed() {
  console.log("🎬 Connecting to MongoDB...");
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db(MONGODB_DB);
  const collection = db.collection("movies");

  // Upsert: only add movies that don't already exist (match by title + year)
  let upserted = 0;
  let skipped = 0;
  for (const movie of movies) {
    // Strip _id (may contain extended JSON $oid) — let MongoDB generate it
    const { _id, ...movieData } = movie;
    const result = await collection.updateOne(
      { title: movie.title, year: movie.year },
      { $setOnInsert: movieData },
      { upsert: true }
    );
    if (result.upsertedCount > 0) {
      upserted++;
      console.log(`  ✅ Added: ${movie.title} (${movie.year})`);
    } else {
      skipped++;
      console.log(`  ⏭️  Already exists: ${movie.title} (${movie.year})`);
    }
  }
  console.log(`\n🌟 Upserted ${upserted} new movies, skipped ${skipped} existing.`);

  // Create indexes for performance (idempotent)
  await collection.createIndex({ year: 1 });
  await collection.createIndex({ genres: 1 });
  await collection.createIndex({ rating: -1 });
  await collection.createIndex({ title: "text", overview: "text" });
  console.log("📇 Created indexes");

  const total = await collection.countDocuments();
  console.log(`📊 Total movies in collection: ${total}`);

  await client.close();
  console.log("✅ Seed complete! Megastar Mania is ready!");
}

seed().catch(console.error);
