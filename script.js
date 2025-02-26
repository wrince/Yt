const ethnicGroups = {
    "Oromo": "The Oromo are the largest ethnic group in Ethiopia, making up around 34% of the population. They have a rich culture, including the Gadaa system, a democratic governance system.",
    "Amhara": "The Amhara people make up about 27% of Ethiopia's population. They have historically played a significant role in Ethiopian politics and culture.",
    "Tigray": "The Tigray people mainly reside in the Tigray region and are known for their historical ties to the Axumite Empire and Ethiopian Orthodox Christianity.",
    "Sidama": "The Sidama are known for their coffee production and the Fichee-Chambalaalla New Year celebration, a UNESCO-recognized tradition.",
    "Afar": "The Afar people are nomadic pastoralists living in the northeastern desert region. They are known for their resilience and unique customs.",
    "Gurage": "The Gurage people are known for their entrepreneurial spirit and the cultivation of enset (false banana), a staple food.",
    "Wolaita": "The Wolaita people have a strong agricultural tradition and vibrant cultural practices, including unique music and dance.",
    "Somali": "The Somali people of Ethiopia primarily live in the Somali region and share cultural ties with Somalis in Somalia and Djibouti.",
    "Harari": "The Harari people, mainly in Harar, have a rich Islamic heritage. Harar is a UNESCO World Heritage city known for its walled old town.",
    "Hadiya": "The Hadiya people belong to the Southern Nations, Nationalities, and Peoples' Region and have a distinct language and cultural traditions.",
    "Kaffa": "The Kaffa people are believed to be the origin of coffee. They live in the southwestern highlands and have deep forest conservation traditions.",
    "Gamo": "The Gamo people are known for their terraced farming and rich traditions in weaving and storytelling.",
    "Dawro": "The Dawro people live in the southern highlands and practice unique agricultural techniques, including cooperative farming.",
    "Gedeo": "The Gedeo people are famous for their traditional agroforestry system and coffee production.",
    "Bench": "The Bench people are indigenous to southwestern Ethiopia and are known for their distinct language and farming traditions.",
    "Sheka": "The Sheka people inhabit dense forests and practice sustainable agriculture while preserving their ecosystem.",
    "Agew": "The Agew people have a rich history in Ethiopian civilization, with strong cultural influences from ancient kingdoms.",
    "Konso": "The Konso people are famous for their stone-walled terraces and traditional wooden statues known as Waka.",
    "Berta": "The Berta people reside in the Benishangul-Gumuz region and have a unique linguistic and cultural heritage.",
    "Mursi": "The Mursi are a Nilotic ethnic group known for their distinctive lip plates worn by women as a cultural tradition.",
    "Nyangatom": "The Nyangatom people live in the Omo Valley and are pastoralists known for their beadwork and cattle culture.",
    "Anuak": "The Anuak people are mainly found in Gambella and are known for their river-based lifestyle and fishing economy.",
    "Nuer": "The Nuer are a Nilotic ethnic group living in the Gambella region, known for their cattle herding traditions.",
    "Majang": "The Majang people are one of Ethiopia’s smallest ethnic groups, known for their traditional honey collection.",
    "Shinasha": "The Shinasha people live in the northwest and are known for their traditional farming and basket weaving.",
    "Komo": "The Komo are a small ethnic group in the Gambella region, known for their unique hunting traditions.",
    "Mao": "The Mao people, also found in Benishangul-Gumuz, have distinct linguistic and cultural practices.",
    "Me'en": "The Me'en people of the Omo Valley are known for their cattle herding and distinctive hairstyles.",
    "Tsamai": "The Tsamai people live in the Omo Valley and are famous for their colorful beadwork and pastoral lifestyle.",
    "Hamar": "The Hamar are known for their elaborate body decoration and the famous bull-jumping ceremony in the Omo Valley.",
    "Arbore": "The Arbore people are pastoralists with a unique style of dress and jewelry in the Omo Valley.",
    "Dassanech": "The Dassanech are a riverine people living near Lake Turkana, known for their fishing and cattle culture.",
    "Karo": "The Karo people are famous for their elaborate body painting and scarification rituals.",
    "Bodi": "The Bodi people participate in an annual fattening ceremony where men compete to gain the most weight.",
    "Surma": "The Surma people are similar to the Mursi, practicing elaborate body painting and stick fighting.",
    "Burji": "The Burji people are skilled farmers and traders in southern Ethiopia.",
    "Goffa": "The Goffa people live in the south and are known for their agricultural contributions.",
    "Silt’e": "The Silt’e people are culturally connected to the Gurage and practice Islam.",
    "Zay": "The Zay people live on islands in Lake Ziway and have a distinct fishing culture.",
    "Argobba": "The Argobba people are historically known as traders and have a unique linguistic heritage.",
    "Komo": "The Komo are another small ethnic group in western Ethiopia.",
    "Opuuo": "The Opuuo people are indigenous to southwestern Ethiopia and have a unique way of life.",
    "Gumuz": "The Gumuz people live in Benishangul-Gumuz and are known for their iron-smelting traditions.",
    "Gidicho": "The Gidicho people inhabit the islands of Lake Abaya and have a fishing-based economy.",
    "Dorze": "The Dorze people are famous for their beehive-shaped houses and weaving skills.",
    "Borana": "The Borana Oromo are pastoralists who have maintained their traditional Gadaa governance system.",
    "Dizi": "The Dizi people of southwestern Ethiopia are known for their unique agricultural techniques.",
    "Bambassi": "The Bambassi people are part of the Benishangul-Gumuz region and have rich cultural traditions.",
    "Kebena": "The Kebena people are part of the Southern Nations and have strong ties to the Gurage.",
    "Konta": "The Konta people live in the southwestern highlands and practice mixed farming.",
    "Halaba": "The Halaba people are known for their vibrant cultural dress and agricultural expertise."
};

const dropdown = document.getElementById("ethnicGroups");

Object.keys(ethnicGroups).forEach(group => {
    let option = document.createElement("option");
    option.value = group;
    option.textContent = group;
    dropdown.appendChild(option);
});

function showInfo() {
    const selectedGroup = dropdown.value;
    document.getElementById("info").innerHTML = `<p><strong>${selectedGroup}:</strong> ${ethnicGroups[selectedGroup]}</p>`;
}