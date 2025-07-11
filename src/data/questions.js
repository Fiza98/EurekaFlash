const QUESTIONS = [
  {
    "id": 1,
    "topic": "Dialek Kelantan",
    "question": "What does 'bakpo' mean in standard Malay?",
    "answers": ["Bila", "Kenapa", "Siapa", "Apa"],
    "correctAnswer": 1
  },
  {
    "id": 2,
    "topic": "Dialek Kelantan",
    "question": "What is the meaning of 'rumoh'?",
    "answers": ["Kawan", "Rumah", "Ibu", "Makanan"],
    "correctAnswer": 1
  },
  {
    "id": 3,
    "topic": "Dialek Kelantan",
    "question": "Translate 'banyok' to standard Malay.",
    "answers": ["Sikit", "Ramai", "Banyak", "Jauh"],
    "correctAnswer": 2
  },
  {
    "id": 4,
    "topic": "Dialek Kelantan",
    "question": "'Demo' in Kelantan dialect refers to:",
    "answers": ["Dia", "Saya", "Awak", "Mereka"],
    "correctAnswer": 2
  },
  {
    "id": 5,
    "topic": "Dialek Kelantan",
    "question": "What does 'make' mean in Kelantanese?",
    "answers": ["Makan", "Tidur", "Belajar", "Berlari"],
    "correctAnswer": 0
  },
  {
    "id": 6,
    "topic": "Dialek Kelantan",
    "question": "Translate 'ggapo dio' into standard Malay.",
    "answers": ["Apa itu", "Siapa dia", "Kenapa dia", "Bila dia"],
    "correctAnswer": 0
  },
  {
    "id": 7,
    "topic": "Dialek Kelantan",
    "question": "What does 'tok tahu' mean?",
    "answers": ["Tidak tahu", "Sudah tahu", "Belum tahu", "Mahukan tahu"],
    "correctAnswer": 0
  },
  {
    "id": 8,
    "topic": "Dialek Kelantan",
    "question": "'Agah' in Kelantanese sounds like?",
    "answers": ["Cantik", "Comel", "Peramah", "Sombong"],
    "correctAnswer": 3
  },
  {
    "id": 9,
    "topic": "Dialek Kelantan",
    "question": "Meaning of 'jupo' in standard Malay?",
    "answers": ["Lupa", "Jumpa", "Suka", "Pukul"],
    "correctAnswer": 1
  },
  {
    "id": 10,
    "topic": "Dialek Kelantan",
    "question": "What does 'buko' refer to?",
    "answers": ["Tutup", "Buka", "Masuk", "Keluar"],
    "correctAnswer": 1
  },
  {
    "id": 11,
    "topic": "Dialek Terengganu",
    "question": "What does 'mung' mean in standard Malay?",
    "answers": ["Dia", "Saya", "Awak", "Kami"],
    "correctAnswer": 2
  },
  {
    "id": 12,
    "topic": "Dialek Terengganu",
    "question": "Translate 'dok tahu' into Malay.",
    "answers": ["Sudah tahu", "Tak tahu", "Belum tahu", "Tahu sedikit"],
    "correctAnswer": 1
  },
  {
    "id": 13,
    "topic": "Dialek Terengganu",
    "question": "'Ayang' refers to:",
    "answers": ["Sayang", "Abang", "Ayam", "Ikan"],
    "correctAnswer": 2
  },
  {
    "id": 14,
    "topic": "Dialek Terengganu",
    "question": "What does 'bakpe' mean?",
    "answers": ["Kenapa", "Bila", "Di mana", "Apa"],
    "correctAnswer": 0
  },
  {
    "id": 15,
    "topic": "Dialek Terengganu",
    "question": "Meaning of 'bekwoh'?",
    "answers": ["Bersawah", "Bergaduh", "Berkelah", "Kenduri"],
    "correctAnswer": 3
  },
  {
    "id": 16,
    "topic": "Dialek Terengganu",
    "question": "What does 'gi makang' mean?",
    "answers": ["Pergi tidur", "Pergi makan", "Pergi belajar", "Pergi main"],
    "correctAnswer": 1
  },
  {
    "id": 17,
    "topic": "Dialek Terengganu",
    "question": "Translate 'dok reti' into standard Malay.",
    "answers": ["Tak pandai", "Tak suka", "Tak mahu", "Tak ada"],
    "correctAnswer": 0
  },
  {
    "id": 18,
    "topic": "Dialek Terengganu",
    "question": "What does 'decung' describe?",
    "answers": ["Duduk", "Sangat laju", "Bersih sangat", "Gelap sangat"],
    "correctAnswer": 1
  },
  {
    "id": 19,
    "topic": "Dialek Terengganu",
    "question": "'Sutir' in Terengganu means:",
    "answers": ["Semak", "Siap", "Susun", "Satu"],
    "correctAnswer": 3
  },
  {
    "id": 20,
    "topic": "Dialek Terengganu",
    "question": "Translate 'rohok' in context: 'ning jahat benar'",
    "answers": ["Susah", "Penat", "Lambat", "Teruk"],
    "correctAnswer": 0
  },
  {
    "id": 21,
    "topic": "Dialek Kedah",
    "question": "What does 'hang' mean in Kedah dialect?",
    "answers": ["Saya", "Dia", "Awak", "Mereka"],
    "correctAnswer": 2
  },
  {
    "id": 22,
    "topic": "Dialek Kedah",
    "question": "Translate 'pa dia tu?' into standard Malay.",
    "answers": ["Apa itu?", "Kenapa itu?", "Siapa itu?", "Mana itu?"],
    "correctAnswer": 0
  },
  {
    "id": 23,
    "topic": "Dialek Kedah",
    "question": "What does 'awat' mean?",
    "answers": ["Mana", "Bila", "Kenapa", "Siapa"],
    "correctAnswer": 2
  },
  {
    "id": 24,
    "topic": "Dialek Kedah",
    "question": "Meaning of 'cek'?",
    "answers": ["Dia", "Saya", "Awak", "Kami"],
    "correctAnswer": 1
  },
  {
    "id": 25,
    "topic": "Dialek Kedah",
    "question": "What does 'lapaq' mean?",
    "answers": ["Kenyang", "Letih", "Lapar", "Panas"],
    "correctAnswer": 2
  },
  {
    "id": 26,
    "topic": "Dialek Kedah",
    "question": "Translate 'na pi mana?' into standard Malay.",
    "answers": ["Nak buat apa?", "Nak ke mana?", "Nak makan apa?", "Nak pukul siapa?"],
    "correctAnswer": 1
  },
  {
    "id": 27,
    "topic": "Dialek Kedah",
    "question": "What does 'pi' mean?",
    "answers": ["Pergi", "Tidur", "Beli", "Bawa"],
    "correctAnswer": 0
  },
  {
    "id": 28,
    "topic": "Dialek Kedah",
    "question": "'Mai' in Kedah dialect means:",
    "answers": ["Pergi", "Beli", "Datang", "Tidur"],
    "correctAnswer": 2
  },
  {
    "id": 29,
    "topic": "Dialek Kedah",
    "question": "What does 'hat tu' refer to?",
    "answers": ["Itu", "Dia", "Saya", "Mana"],
    "correctAnswer": 0
  },
  {
    "id": 30,
    "topic": "Dialek Kedah",
    "question": "Translate 'tak dan' into standard Malay.",
    "answers": ["Tak suka", "Tak tahu", "Tak sempat", "Tak nak"],
    "correctAnswer": 2
  },
 {
    "id": 31,
    "topic": "Dialek Perak",
    "question": "What does 'bibior' mean in Perak dialect?",
    "answers": ["Biar", "Bibir", "Bising", "Bunyi"],
    "correctAnswer": 1
  },
  {
    "id": 32,
    "topic": "Dialek Perak",
    "question": "Translate 'Ayor' into standard Malay.",
    "answers": ["Angin", "Air", "Ayam", "Atas"],
    "correctAnswer": 1
  },
  {
    "id": 33,
    "topic": "Dialek Perak",
    "question": "'Kome' refers to:",
    "answers": ["Saya", "Dia", "Awak semua", "Kami"],
    "correctAnswer": 2
  },
  {
    "id": 34,
    "topic": "Dialek Perak",
    "question": "Meaning of 'Gebor'?",
    "answers": ["Tidur", "Selimut", "Bantal", "Bersantai"],
    "correctAnswer": 1
  },
  {
    "id": 35,
    "topic": "Dialek Perak",
    "question": "What does 'hambat' mean?",
    "answers": ["Kejar", "Lambat", "Simpan", "Tanya"],
    "correctAnswer": 0
  },
  {
    "id": 36,
    "topic": "Dialek Perak",
    "question": "Translate 'lenyor' into standard Malay.",
    "answers": ["Licin", "Lepas", "Lembik", "Lemau"],
    "correctAnswer": 2
  },
  {
    "id": 37,
    "topic": "Dialek Perak",
    "question": "What does 'Menonong' mean?",
    "answers": ["Melompat", "Menyelinap", "Melulu", "Menyorok"],
    "correctAnswer": 2
  },
  {
    "id": 38,
    "topic": "Dialek Perak",
    "question": "'Ngelat' refers to what in standard Malay?",
    "answers": ["Mengelak", "Tipu", "Hilang", "Lari"],
    "correctAnswer": 1
  },
  {
    "id": 39,
    "topic": "Dialek Perak",
    "question": "'Nyor' usually refers to:",
    "answers": ["Buah kelapa", "Barang", "Benda", "Teman"],
    "correctAnswer": 0
  },
  {
    "id": 40,
    "topic": "Dialek Perak",
    "question": "Translate 'bebighat' to standard Malay.",
    "answers": ["Bengkak", "Calar-balar", "Lompat", "Tak sempat"],
    "correctAnswer": 1
  },
  {
    "id": 41,
    "topic": "German",
    "question": "What does 'Hallo' mean in English?",
    "answers": ["Goodbye", "Thanks", "Hello", "Yes"],
    "correctAnswer": 2
  },
  {
    "id": 42,
    "topic": "German",
    "question": "Translate 'Danke' to English.",
    "answers": ["Sorry", "Please", "Thanks", "Hello"],
    "correctAnswer": 2
  },
  {
    "id": 43,
    "topic": "German",
    "question": "What is the German word for 'bread'?",
    "answers": ["Milch", "Apfel", "Brot", "Fisch"],
    "correctAnswer": 2
  },
  {
    "id": 44,
    "topic": "German",
    "question": "What does 'Tschüss' mean?",
    "answers": ["Yes", "No", "Goodbye", "Please"],
    "correctAnswer": 2
  },
  {
    "id": 45,
    "topic": "German",
    "question": "What is 'Wasser' in English?",
    "answers": ["Water", "Wine", "Juice", "Milk"],
    "correctAnswer": 0
  },
  {
    "id": 46,
    "topic": "German",
    "question": "Translate 'Apfel' into English.",
    "answers": ["Orange", "Grapes", "Banana", "Apple"],
    "correctAnswer": 3
  },
  {
    "id": 47,
    "topic": "German",
    "question": "What does 'Buch' mean?",
    "answers": ["Bag", "Book", "Pencil", "Board"],
    "correctAnswer": 1
  },
  {
    "id": 48,
    "topic": "German",
    "question": "Translate 'Katze' to English.",
    "answers": ["Dog", "Mouse", "Cat", "Rabbit"],
    "correctAnswer": 2
  },
  {
    "id": 49,
    "topic": "German",
    "question": "What does 'Ja' mean in English?",
    "answers": ["No", "Yes", "Please", "Thanks"],
    "correctAnswer": 1
  },
  {
    "id": 50,
    "topic": "German",
    "question": "What is 'Schule' in English?",
    "answers": ["Chair", "Class", "School", "Book"],
    "correctAnswer": 2
  },
  {
    "id": 51,
    "topic": "Mandarin",
    "question": "What does '你好' (nǐ hǎo) mean?",
    "answers": ["Goodbye", "Hello", "Thank you", "Yes"],
    "correctAnswer": 1
  },
  {
    "id": 52,
    "topic": "Mandarin",
    "question": "Translate '谢谢' (xiè xie) into English.",
    "answers": ["Please", "Yes", "Thanks", "Sorry"],
    "correctAnswer": 2
  },
  {
    "id": 53,
    "topic": "Mandarin",
    "question": "What is the Mandarin word for 'water'?",
    "answers": ["火 (huǒ)", "水 (shuǐ)", "木 (mù)", "风 (fēng)"],
    "correctAnswer": 1
  },
  {
    "id": 54,
    "topic": "Mandarin",
    "question": "What does '再见' (zài jiàn) mean?",
    "answers": ["Hello", "Goodbye", "Yes", "No"],
    "correctAnswer": 1
  },
  {
    "id": 55,
    "topic": "Mandarin",
    "question": "What is the English meaning of '妈妈' (māma)?",
    "answers": ["Sister", "Grandma", "Mom", "Aunt"],
    "correctAnswer": 2
  },
  {
    "id": 56,
    "topic": "Mandarin",
    "question": "Translate '我爱你' (wǒ ài nǐ) to English.",
    "answers": ["I love you", "Thank you", "You're welcome", "Sorry"],
    "correctAnswer": 0
  },
  {
    "id": 57,
    "topic": "Mandarin",
    "question": "What does '是' (shì) mean in English?",
    "answers": ["To be", "To have", "To eat", "To go"],
    "correctAnswer": 0
  },
  {
    "id": 58,
    "topic": "Mandarin",
    "question": "What is '中国' (Zhōngguó) in English?",
    "answers": ["Japan", "China", "Korea", "Vietnam"],
    "correctAnswer": 1
  },
  {
    "id": 59,
    "topic": "Mandarin",
    "question": "What does '不' (bù) mean?",
    "answers": ["Yes", "Not/No", "Like", "Eat"],
    "correctAnswer": 1
  },
  {
    "id": 60,
    "topic": "Mandarin",
    "question": "Translate '朋友' (péngyou) into English.",
    "answers": ["Teacher", "Classmate", "Friend", "Brother"],
    "correctAnswer": 2
  },
  {
    "id": 61,
    "topic": "Korean",
    "question": "What does '안녕하세요' (annyeonghaseyo) mean?",
    "answers": ["Goodbye", "Hello", "Thank you", "Please"],
    "correctAnswer": 1
  },
  {
    "id": 62,
    "topic": "Korean",
    "question": "Translate '감사합니다' (gamsahamnida) to English.",
    "answers": ["Sorry", "Goodbye", "Thanks", "Yes"],
    "correctAnswer": 2
  },
  {
    "id": 63,
    "topic": "Korean",
    "question": "What does '사랑해요' (saranghaeyo) mean?",
    "answers": ["I love you", "I miss you", "I like you", "Good night"],
    "correctAnswer": 0
  },
  {
    "id": 64,
    "topic": "Korean",
    "question": "What is '물' (mul) in English?",
    "answers": ["Milk", "Tea", "Juice", "Water"],
    "correctAnswer": 3
  },
  {
    "id": 65,
    "topic": "Korean",
    "question": "Translate '학교' (hakgyo) to English.",
    "answers": ["Library", "School", "Class", "Book"],
    "correctAnswer": 1
  },
  {
    "id": 66,
    "topic": "Korean",
    "question": "What does '책' (chaek) mean?",
    "answers": ["Bag", "Pen", "Book", "Table"],
    "correctAnswer": 2
  },
  {
    "id": 67,
    "topic": "Korean",
    "question": "What is the English meaning of '엄마' (eomma)?",
    "answers": ["Aunt", "Sister", "Mom", "Teacher"],
    "correctAnswer": 2
  },
  {
    "id": 68,
    "topic": "Korean",
    "question": "What does '아니요' (aniyo) mean?",
    "answers": ["Yes", "No", "Hello", "Please"],
    "correctAnswer": 1
  },
  {
    "id": 69,
    "topic": "Korean",
    "question": "Translate '친구' (chingu) into English.",
    "answers": ["Brother", "Sister", "Friend", "Cousin"],
    "correctAnswer": 2
  },
  {
    "id": 70,
    "topic": "Korean",
    "question": "What does '밥' (bap) mean in English?",
    "answers": ["Rice", "Soup", "Bread", "Water"],
    "correctAnswer": 0
  },
  {
    "id": 71,
    "topic": "Japanese",
    "question": "What does 'こんにちは' (konnichiwa) mean?",
    "answers": ["Goodbye", "Thank you", "Good afternoon", "Please"],
    "correctAnswer": 2
  },
  {
    "id": 72,
    "topic": "Japanese",
    "question": "Translate 'ありがとう' (arigatou) to English.",
    "answers": ["Sorry", "Thanks", "Hello", "Goodbye"],
    "correctAnswer": 1
  },
  {
    "id": 73,
    "topic": "Japanese",
    "question": "What does 'さようなら' (sayounara) mean?",
    "answers": ["Good morning", "Hello", "Goodbye", "Please"],
    "correctAnswer": 2
  },
  {
    "id": 74,
    "topic": "Japanese",
    "question": "What is 'みず' (mizu) in English?",
    "answers": ["Tea", "Milk", "Water", "Juice"],
    "correctAnswer": 2
  },
  {
    "id": 75,
    "topic": "Japanese",
    "question": "Translate 'がっこう' (gakkou) to English.",
    "answers": ["Library", "School", "Class", "Book"],
    "correctAnswer": 1
  },
  {
    "id": 76,
    "topic": "Japanese",
    "question": "What does 'ほん' (hon) mean?",
    "answers": ["Pencil", "Book", "Bag", "Table"],
    "correctAnswer": 1
  },
  {
    "id": 77,
    "topic": "Japanese",
    "question": "What is the English meaning of 'おかあさん' (okaasan)?",
    "answers": ["Teacher", "Sister", "Mom", "Friend"],
    "correctAnswer": 2
  },
  {
    "id": 78,
    "topic": "Japanese",
    "question": "What does 'いいえ' (iie) mean?",
    "answers": ["Yes", "No", "Please", "Thanks"],
    "correctAnswer": 1
  },
  {
    "id": 79,
    "topic": "Japanese",
    "question": "Translate 'ともだち' (tomodachi) into English.",
    "answers": ["Brother", "Friend", "Mother", "Teacher"],
    "correctAnswer": 1
  },
  {
    "id": 80,
    "topic": "Japanese",
    "question": "What does 'ごはん' (gohan) mean in English?",
    "answers": ["Soup", "Bread", "Milk", "Rice"],
    "correctAnswer": 3
  },
  {
    "id": 81,
    "topic": "Thai",
    "question": "What does 'สวัสดี' (sawasdee) mean?",
    "answers": ["Goodbye", "Thank you", "Hello", "Yes"],
    "correctAnswer": 2
  },
  {
    "id": 82,
    "topic": "Thai",
    "question": "Translate 'ขอบคุณ' (khop khun) into English.",
    "answers": ["Sorry", "Thanks", "Hello", "No"],
    "correctAnswer": 1
  },
  {
    "id": 83,
    "topic": "Thai",
    "question": "What does 'ใช่' (chai) mean?",
    "answers": ["No", "Yes", "Maybe", "Please"],
    "correctAnswer": 1
  },
  {
    "id": 84,
    "topic": "Thai",
    "question": "What is the English meaning of 'ไม่' (mai)?",
    "answers": ["Yes", "Also", "No/Not", "Too"],
    "correctAnswer": 2
  },
  {
    "id": 85,
    "topic": "Thai",
    "question": "Translate 'น้ำ' (nam) to English.",
    "answers": ["Juice", "Water", "Tea", "Milk"],
    "correctAnswer": 1
  },
  {
    "id": 86,
    "topic": "Thai",
    "question": "What does 'แม่' (mae) mean?",
    "answers": ["Father", "Sister", "Mother", "Grandma"],
    "correctAnswer": 2
  },
  {
    "id": 87,
    "topic": "Thai",
    "question": "What is 'ข้าว' (khao) in English?",
    "answers": ["Bread", "Rice", "Soup", "Salt"],
    "correctAnswer": 1
  },
  {
    "id": 88,
    "topic": "Thai",
    "question": "Translate 'โรงเรียน' (rong rian) to English.",
    "answers": ["Classroom", "Library", "School", "Book"],
    "correctAnswer": 2
  },
  {
    "id": 89,
    "topic": "Thai",
    "question": "What does 'เพื่อน' (phuean) mean?",
    "answers": ["Teacher", "Friend", "Brother", "Cousin"],
    "correctAnswer": 1
  },
  {
    "id": 90,
    "topic": "Thai",
    "question": "What is the English meaning of 'หนังสือ' (nang sue)?",
    "answers": ["Pencil", "Book", "Bag", "Table"],
    "correctAnswer": 1
  },
   {
    "id": 91,
    "topic": "Tagalog",
    "question": "What does 'Kamusta' mean in English?",
    "answers": ["Goodbye", "Hello/How are you?", "Thank you", "Yes"],
    "correctAnswer": 1
  },
  {
    "id": 92,
    "topic": "Tagalog",
    "question": "Translate 'Salamat' to English.",
    "answers": ["Sorry", "Please", "Thanks", "Welcome"],
    "correctAnswer": 2
  },
  {
    "id": 93,
    "topic": "Tagalog",
    "question": "What does 'Oo' mean?",
    "answers": ["Yes", "No", "Maybe", "Good"],
    "correctAnswer": 0
  },
  {
    "id": 94,
    "topic": "Tagalog",
    "question": "Translate 'Tubig' to English.",
    "answers": ["Juice", "Milk", "Tea", "Water"],
    "correctAnswer": 3
  },
  {
    "id": 95,
    "topic": "Tagalog",
    "question": "What does 'Paalam' mean?",
    "answers": ["Hello", "Goodbye", "Please", "Thanks"],
    "correctAnswer": 1
  },
  {
    "id": 96,
    "topic": "Tagalog",
    "question": "What is the English meaning of 'Guro'?",
    "answers": ["Friend", "Teacher", "Mother", "Sister"],
    "correctAnswer": 1
  },
  {
    "id": 97,
    "topic": "Tagalog",
    "question": "Translate 'Kaibigan' to English.",
    "answers": ["Enemy", "Neighbor", "Friend", "Stranger"],
    "correctAnswer": 2
  },
  {
    "id": 98,
    "topic": "Tagalog",
    "question": "What does 'Hindi' mean in English?",
    "answers": ["Yes", "No", "Not sure", "Okay"],
    "correctAnswer": 1
  },
  {
    "id": 99,
    "topic": "Tagalog",
    "question": "What is the English translation of 'Nanay'?",
    "answers": ["Aunt", "Mom", "Sister", "Grandma"],
    "correctAnswer": 1
  },
  {
    "id": 100,
    "topic": "Tagalog",
    "question": "Translate 'Aklat' to English.",
    "answers": ["Pen", "Notebook", "Book", "Paper"],
    "correctAnswer": 2
  },
  {
    "id": 101,
    "topic": "Spanish",
    "question": "What does 'Hola' mean in English?",
    "answers": ["Goodbye", "Hello", "Please", "Yes"],
    "correctAnswer": 1
  },
  {
    "id": 102,
    "topic": "Spanish",
    "question": "Translate 'Gracias' to English.",
    "answers": ["Please", "Sorry", "Thanks", "Yes"],
    "correctAnswer": 2
  },
  {
    "id": 103,
    "topic": "Spanish",
    "question": "What does 'Adiós' mean?",
    "answers": ["Hello", "Goodbye", "Thanks", "Sorry"],
    "correctAnswer": 1
  },
  {
    "id": 104,
    "topic": "Spanish",
    "question": "What is the English meaning of 'Agua'?",
    "answers": ["Juice", "Tea", "Milk", "Water"],
    "correctAnswer": 3
  },
  {
    "id": 105,
    "topic": "Spanish",
    "question": "Translate 'Escuela' to English.",
    "answers": ["School", "Book", "Library", "Chair"],
    "correctAnswer": 0
  },
  {
    "id": 106,
    "topic": "Spanish",
    "question": "What does 'Libro' mean in English?",
    "answers": ["Book", "Pen", "Notebook", "Bag"],
    "correctAnswer": 0
  },
  {
    "id": 107,
    "topic": "Spanish",
    "question": "Translate 'Amigo' to English.",
    "answers": ["Stranger", "Brother", "Friend", "Enemy"],
    "correctAnswer": 2
  },
  {
    "id": 108,
    "topic": "Spanish",
    "question": "What is the English translation of 'Madre'?",
    "answers": ["Grandma", "Mom", "Sister", "Aunt"],
    "correctAnswer": 1
  },
  {
    "id": 109,
    "topic": "Spanish",
    "question": "What does 'Sí' mean in English?",
    "answers": ["Yes", "No", "Please", "Thanks"],
    "correctAnswer": 0
  },
  {
    "id": 110,
    "topic": "Spanish",
    "question": "What is the meaning of 'No' in Spanish?",
    "answers": ["Yes", "No", "Hello", "Please"],
    "correctAnswer": 1
  },
 {
    "id": 111,
    "topic": "Turkish",
    "question": "What does 'Merhaba' mean in English?",
    "answers": ["Hello", "Goodbye", "Please", "Thanks"],
    "correctAnswer": 0
  },
  {
    "id": 112,
    "topic": "Turkish",
    "question": "Translate 'Teşekkür ederim' to English.",
    "answers": ["You're welcome", "Hello", "Thanks", "Good night"],
    "correctAnswer": 2
  },
  {
    "id": 113,
    "topic": "Turkish",
    "question": "What does 'Evet' mean?",
    "answers": ["No", "Yes", "Please", "Sorry"],
    "correctAnswer": 1
  },
  {
    "id": 114,
    "topic": "Turkish",
    "question": "What is the English meaning of 'Hayır'?",
    "answers": ["Yes", "No", "Maybe", "Thanks"],
    "correctAnswer": 1
  },
  {
    "id": 115,
    "topic": "Turkish",
    "question": "Translate 'Su' to English.",
    "answers": ["Milk", "Water", "Juice", "Tea"],
    "correctAnswer": 1
  },
  {
    "id": 116,
    "topic": "Turkish",
    "question": "What does 'Anne' mean in English?",
    "answers": ["Grandma", "Sister", "Mom", "Teacher"],
    "correctAnswer": 2
  },
  {
    "id": 117,
    "topic": "Turkish",
    "question": "What is the English translation of 'Kitap'?",
    "answers": ["Pen", "Book", "Notebook", "Table"],
    "correctAnswer": 1
  },
  {
    "id": 118,
    "topic": "Turkish",
    "question": "Translate 'Okul' to English.",
    "answers": ["Book", "School", "Class", "Bag"],
    "correctAnswer": 1
  },
  {
    "id": 119,
    "topic": "Turkish",
    "question": "What does 'Arkadaş' mean?",
    "answers": ["Teacher", "Friend", "Brother", "Cousin"],
    "correctAnswer": 1
  },
  {
    "id": 120,
    "topic": "Turkish",
    "question": "What is the meaning of 'Hoşça kal'?",
    "answers": ["Hello", "Thank you", "Goodbye", "Yes"],
    "correctAnswer": 2
  },
  {
    "id": 121,
    "topic": "Italian",
    "question": "What does 'Ciao' mean in English?",
    "answers": ["Goodbye", "Please", "Hello/Hi", "Thanks"],
    "correctAnswer": 2
  },
  {
    "id": 122,
    "topic": "Italian",
    "question": "Translate 'Grazie' to English.",
    "answers": ["Thanks", "Sorry", "Please", "Yes"],
    "correctAnswer": 0
  },
  {
    "id": 123,
    "topic": "Italian",
    "question": "What is the English meaning of 'Acqua'?",
    "answers": ["Water", "Milk", "Tea", "Juice"],
    "correctAnswer": 0
  },
  {
    "id": 124,
    "topic": "Italian",
    "question": "Translate 'Scuola' to English.",
    "answers": ["Library", "School", "Class", "Teacher"],
    "correctAnswer": 1
  },
  {
    "id": 125,
    "topic": "Italian",
    "question": "What does 'Libro' mean in English?",
    "answers": ["Notebook", "Book", "Pen", "Paper"],
    "correctAnswer": 1
  },
  {
    "id": 126,
    "topic": "Italian",
    "question": "Translate 'Amico' to English.",
    "answers": ["Enemy", "Cousin", "Friend", "Brother"],
    "correctAnswer": 2
  },
  {
    "id": 127,
    "topic": "Italian",
    "question": "What is the English translation of 'Madre'?",
    "answers": ["Sister", "Mom", "Grandma", "Teacher"],
    "correctAnswer": 1
  },
  {
    "id": 128,
    "topic": "Italian",
    "question": "What does 'No' mean in Italian?",
    "answers": ["Yes", "Not", "No", "Maybe"],
    "correctAnswer": 2
  },
  {
    "id": 129,
    "topic": "Italian",
    "question": "What is the English meaning of 'Sì'?",
    "answers": ["Yes", "No", "Please", "Hello"],
    "correctAnswer": 0
  },
  {
    "id": 130,
    "topic": "Italian",
    "question": "Translate 'Arrivederci' to English.",
    "answers": ["Hello", "Goodbye", "Thanks", "Please"],
    "correctAnswer": 1
  },
 {
    "id": 131,
    "topic": "French",
    "question": "What does 'Bonjour' mean in English?",
    "answers": ["Goodbye", "Please", "Hello", "Thanks"],
    "correctAnswer": 2
  },
  {
    "id": 132,
    "topic": "French",
    "question": "Translate 'Merci' to English.",
    "answers": ["Thanks", "Hello", "Sorry", "Please"],
    "correctAnswer": 0
  },
  {
    "id": 133,
    "topic": "French",
    "question": "What is the English meaning of 'Oui'?",
    "answers": ["No", "Maybe", "Yes", "Please"],
    "correctAnswer": 2
  },
  {
    "id": 134,
    "topic": "French",
    "question": "Translate 'Non' to English.",
    "answers": ["Yes", "Hello", "No", "Thanks"],
    "correctAnswer": 2
  },
  {
    "id": 135,
    "topic": "French",
    "question": "What does 'Eau' mean?",
    "answers": ["Milk", "Water", "Juice", "Tea"],
    "correctAnswer": 1
  },
  {
    "id": 136,
    "topic": "French",
    "question": "What is the English translation of 'École'?",
    "answers": ["Library", "Book", "School", "Bag"],
    "correctAnswer": 2
  },
  {
    "id": 137,
    "topic": "French",
    "question": "Translate 'Livre' to English.",
    "answers": ["Pen", "Notebook", "Book", "Bag"],
    "correctAnswer": 2
  },
  {
    "id": 138,
    "topic": "French",
    "question": "What does 'Ami' mean?",
    "answers": ["Teacher", "Father", "Brother", "Friend"],
    "correctAnswer": 3
  },
  {
    "id": 139,
    "topic": "French",
    "question": "What is the English meaning of 'Mère'?",
    "answers": ["Sister", "Mom", "Grandma", "Aunt"],
    "correctAnswer": 1
  },
  {
    "id": 140,
    "topic": "French",
    "question": "Translate 'Au revoir' to English.",
    "answers": ["Hello", "Thanks", "Goodbye", "Sorry"],
    "correctAnswer": 2
  },
  {
    "id": 141,
    "topic": "Arabic",
    "question": "What does 'مرحبا' (marhaban) mean in English?",
    "answers": ["Hello", "Goodbye", "Thanks", "Yes"],
    "correctAnswer": 0
  },
  {
    "id": 142,
    "topic": "Arabic",
    "question": "Translate 'شكرا' (shukran) to English.",
    "answers": ["Sorry", "Thanks", "Please", "Goodbye"],
    "correctAnswer": 1
  },
  {
    "id": 143,
    "topic": "Arabic",
    "question": "What is the English meaning of 'نعم' (na'am)?",
    "answers": ["Yes", "No", "Maybe", "Please"],
    "correctAnswer": 0
  },
  {
    "id": 144,
    "topic": "Arabic",
    "question": "Translate 'لا' (laa) to English.",
    "answers": ["Yes", "No", "Thanks", "Hello"],
    "correctAnswer": 1
  },
  {
    "id": 145,
    "topic": "Arabic",
    "question": "What does 'ماء' (maa') mean?",
    "answers": ["Milk", "Juice", "Water", "Tea"],
    "correctAnswer": 2
  },
  {
    "id": 146,
    "topic": "Arabic",
    "question": "What is the English translation of 'مدرسة' (madrasa)?",
    "answers": ["Library", "School", "Book", "Bag"],
    "correctAnswer": 1
  },
  {
    "id": 147,
    "topic": "Arabic",
    "question": "Translate 'كتاب' (kitaab) to English.",
    "answers": ["Pen", "Paper", "Book", "Notebook"],
    "correctAnswer": 2
  },
  {
    "id": 148,
    "topic": "Arabic",
    "question": "What does 'صديق' (sadeeq) mean?",
    "answers": ["Friend", "Brother", "Father", "Teacher"],
    "correctAnswer": 0
  },
  {
    "id": 149,
    "topic": "Arabic",
    "question": "What is the English meaning of 'أم' (umm)?",
    "answers": ["Sister", "Mom", "Grandma", "Aunt"],
    "correctAnswer": 1
  },
  {
    "id": 150,
    "topic": "Arabic",
    "question": "Translate 'مع السلامة' (ma'a al-salama) to English.",
    "answers": ["Thanks", "Goodbye", "Hello", "Sorry"],
    "correctAnswer": 1
  }
]

export default QUESTIONS;
