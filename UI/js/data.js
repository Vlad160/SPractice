/**
 * Created by Роман on 3/3/2017.
 */

    //Here's data:
var skipped = 0;
var bugReports = (function() {
    var reports = [];

    function addReport(param) {
        if (param.length) {
            param.forEach(function (item) {
                reports.push({id: new Date().getTime().toString(), title: item.title, content: item.content});
            });
        } else {
            reports.push({id: new Date().getTime().toString(), title: param.title, content: param.content});
        }
    }
    function getReports() {
        return reports;
    }
    function printReports() {
        console.log(reports);
    }
    return {
        addReport: addReport,
        getReports: getReports,
        printReports: printReports
    }
}());
var database = (function() {
    var articles = [
        {
            id: "1",
            title: "Sasuke is finally back",
            summary: "Sasuke finally returned to Konoha, but as a Nunekin still has to go a long way to" +
            "settle in his former home...",
            createdAt: new Date(2000, 2, 2, 8, 0, 0, 0),
            author: "Masashi Kishimoto",
            content: "Both went to sleep again because of exhaustion. Sasuke dreams of his brother and recaps all the"
            + "obstacles Naruto went through to get stronger. Sasuke has an epiphany; after years of trying to push the " +
            "bonds with his friends away, Sasuke realises his desire to return to them and feels guilty for having rejected " +
            "them for his selfish goals. When they wake up the next day, Sasuke is surprised that they are still alive and" +
            " laughs when Naruto is angry and still wants to beat him as he is too weak to fight him in this condition. " +
            "Sasuke finally admits defeat, as he's come to accept that Naruto is just as vital to him as he is to Naruto. " +
            "He asks Naruto to give his Rinnegan to Kakashi in order to undo the Infinite Tsukuyomi but he wants to end his " +
            "own life in order to atone his sins, but Naruto refuses and vows to be there for his friend no matter what, " +
            "which moves Sasuke to tears. Sakura and Kakashi arrive and Sakura begins healing them. Guilt-ridden for the " +
            "pain he put Sakura through, Sasuke tries to speak to her but she tells him not to because she needs to " +
            "concentrate on healing them. Sasuke then apologises to Sakura for everything he's done, which she tearfully " +
            "accepts and Sasuke smiles at her. All the while as Kakashi looks on with joy as Team 7 reunites for good. " +
            "Sasuke and Naruto use a special hand gesture to undo the Infinite Tsukuyomi and free everyone and the tailed " +
            "beasts. As they do so, Sasuke talks about how he and Naruto have come to understand each other's feelings and " +
            "pain, and he finally understands why Naruto never gave up on him. In the anime, following the war, Sasuke is " +
            "kept in the custody of the Konoha Torture and Interrogation Force, until his fate is decided."
        },
        {
            id: "2",
            title: "Unfamous programmer from Minsk finished his website",
            summary: "Years of life spent to create best ever website finally reached aim. But what price " +
            "did I pay?..",
            createdAt: new Date(2018, 1, 4, 8, 8, 0, 0),
            author: "Roman Korol",
            content: "A website is a collection of related web pages, including multimedia content, typically identified " +
            "with a common domain name, and published on at least one web server. A website may be accessible via a public " +
            "Internet Protocol (IP) network, such as the Internet, or a private local area network (LAN), by referencing a " +
            "uniform resource locator (URL) that identifies the site."
        },
        {
            id: "3",
            title: "Men lost. SOS!",
            summary: "Last time witnesses saw him was monday evening. Younger was going to hang out with " +
            "unknown called Katya Sychick. Did he trap into love nets or just went to Alaska?",
            createdAt: new Date(2013, 6, 27, 14, 3, 0, 0),
            author: "Maxim Aliseiko",
            content: "Wanted is a 2008 American-German action thriller film loosely based on the comic book miniseries of " +
            "the same name by Mark Millar and J. G. Jones. The film, written by Chris Morgan, Michael Brandt, and Derek " +
            "Haas and directed by Timur Bekmambetov stars James McAvoy, Morgan Freeman, and Angelina Jolie. The storyline " +
            "follows Wesley Gibson (McAvoy), a frustrated account manager who discovers that he is the son of a professional " +
            "assassin and decides to join the Fraternity, a secret society in which his father worked."
        },
        {
            id: "4",
            title: "My body is here, but not my soul",
            summary: "Wish one day I'll have money and man in my life to travel anywhere we want.",
            createdAt: new Date(2009, 5, 6, 7, 28, 0, 0),
            author: "Ab-Soul",
            content: "Travel is the movement of people between relatively distant geographical locations, and can involve " +
            "travel by foot, bicycle, automobile, train, boat, airplane, or other means, with or without luggage, and can " +
            "be one way or round trip. Travel can also include relatively short stays between successive movements."
        },
        {
            id: "5",
            title: "Cold War",
            summary: "The Cold War was the continuing state from roughly 1946 to 1991 of political conflict, military " +
            "tension, proxy wars, and economic competition between USSR and USA",
            createdAt: new Date(2005, 11, 7, 4, 5, 0, 0),
            author: "Joseph Stalin",
            content: "The Space Race was an informal competition between the United States and the Soviet Union that lasted " +
            "roughly from 1957 to 1975. It involved the parallel efforts by each of those countries to explore outer space " +
            "with artificial satellites, to send humans into space, and to land people on the Moon."
        },
        {
            id: "6",
            title: "Kasagi Dam",
            summary: "Kasagi Dam is a dam in the Gifu Prefecture of Japan.",
            createdAt: new Date(1999, 11, 31, 23, 59, 0, 0),
            author: "History Book",
            content: "Kasagi Dam (笠置ダム Kasagi damu?) is a dam in the Gifu Prefecture of Japan. Construction of the dam " +
            "was completed by 1936. Its height is 40.8m and its maximum power output (from the power plant) is 41,700 kW."
        },
        {
            id: "7",
            title: "Law of sines",
            summary: "In trigonometry, the law of sines, sine law, sine formula, or sine rule is an equation relating the " +
            "lengths of the sides of a triangle (any shape) to the sines of its angles.",
            createdAt: new Date(2007, 12, 14, 23, 59, 0, 0),
            author: "IDK",
            content: "The law of sines can be used to compute the remaining sides of a triangle when two angles and a side " +
            "are known—a technique known as triangulation. Numerical calculation using this technique may result in a " +
            "numerical error if an angle is close to 90 degrees. It can also be used when two sides and one of the " +
            "non-enclosed angles are known. In some such cases, the triangle is not uniquely determined by this data " +
            "(called the ambiguous case) and the technique gives two possible values for the enclosed angle."
        },
        {
            id: "8",
            title: "To Pimp a Butterfly",
            summary: "To Pimp a Butterfly is the third studio album by American rapper Kendrick Lamar.",
            createdAt: new Date(2015, 8, 10, 10, 14, 0, 0),
            author: "Kendrick Lamar",
            content: "To Pimp a Butterfly is the third studio album by American rapper Kendrick Lamar. It was released on " +
            "March 15, 2015, by Top Dawg Entertainment, Aftermath Entertainment and Interscope Records.[1][2] The album was " +
            "recorded in studios throughout the United States, with production from Sounwave, Terrace Martin, Taz \"Ti$a\" " +
            "Arnold, Thundercat, Rahki, LoveDragon, Flying Lotus, Pharrell Williams, Boi-1da, and several other high-profile " +
            "hip hop producers, as well as executive production from Dr. Dre and Anthony \"Top Dawg\" Tiffith. The album " +
            "incorporates elements of free jazz, funk, soul, spoken word, and the avant-garde and explores a variety of " +
            "political and personal themes concerning African-American culture, racial inequality, depression, and " +
            "institutional discrimination. To Pimp a Butterfly is the third studio album by American rapper Kendrick Lamar. It was released on " +
            "March 15, 2015, by Top Dawg Entertainment, Aftermath Entertainment and Interscope Records.[1][2] The album was " +
            "recorded in studios throughout the United States, with production from Sounwave, Terrace Martin, Taz \"Ti$a\" " +
            "Arnold, Thundercat, Rahki, LoveDragon, Flying Lotus, Pharrell Williams, Boi-1da, and several other high-profile " +
            "hip hop producers, as well as executive production from Dr. Dre and Anthony \"Top Dawg\" Tiffith. The album " +
            "incorporates elements of free jazz, funk, soul, spoken word, and the avant-garde and explores a variety of " +
            "political and personal themes concerning African-American culture, racial inequality, depression, and " +
            "institutional discrimination. To Pimp a Butterfly is the third studio album by American rapper Kendrick Lamar. It was released on " +
            "March 15, 2015, by Top Dawg Entertainment, Aftermath Entertainment and Interscope Records.[1][2] The album was " +
            "recorded in studios throughout the United States, with production from Sounwave, Terrace Martin, Taz \"Ti$a\" " +
            "Arnold, Thundercat, Rahki, LoveDragon, Flying Lotus, Pharrell Williams, Boi-1da, and several other high-profile " +
            "hip hop producers, as well as executive production from Dr. Dre and Anthony \"Top Dawg\" Tiffith. The album " +
            "incorporates elements of free jazz, funk, soul, spoken word, and the avant-garde and explores a variety of " +
            "political and personal themes concerning African-American culture, racial inequality, depression, and " +
            "institutional discrimination. To Pimp a Butterfly is the third studio album by American rapper Kendrick Lamar. It was released on " +
            "March 15, 2015, by Top Dawg Entertainment, Aftermath Entertainment and Interscope Records.[1][2] The album was " +
            "recorded in studios throughout the United States, with production from Sounwave, Terrace Martin, Taz \"Ti$a\" " +
            "Arnold, Thundercat, Rahki, LoveDragon, Flying Lotus, Pharrell Williams, Boi-1da, and several other high-profile " +
            "hip hop producers, as well as executive production from Dr. Dre and Anthony \"Top Dawg\" Tiffith. The album " +
            "incorporates elements of free jazz, funk, soul, spoken word, and the avant-garde and explores a variety of " +
            "political and personal themes concerning African-American culture, racial inequality, depression, and " +
            "institutional discrimination. To Pimp a Butterfly is the third studio album by American rapper Kendrick Lamar. It was released on " +
            "March 15, 2015, by Top Dawg Entertainment, Aftermath Entertainment and Interscope Records.[1][2] The album was " +
            "recorded in studios throughout the United States, with production from Sounwave, Terrace Martin, Taz \"Ti$a\" " +
            "Arnold, Thundercat, Rahki, LoveDragon, Flying Lotus, Pharrell Williams, Boi-1da, and several other high-profile " +
            "hip hop producers, as well as executive production from Dr. Dre and Anthony \"Top Dawg\" Tiffith. The album " +
            "incorporates elements of free jazz, funk, soul, spoken word, and the avant-garde and explores a variety of " +
            "political and personal themes concerning African-American culture, racial inequality, depression, and " +
            "institutional discrimination. To Pimp a Butterfly is the third studio album by American rapper Kendrick Lamar. It was released on " +
            "March 15, 2015, by Top Dawg Entertainment, Aftermath Entertainment and Interscope Records.[1][2] The album was " +
            "recorded in studios throughout the United States, with production from Sounwave, Terrace Martin, Taz \"Ti$a\" " +
            "Arnold, Thundercat, Rahki, LoveDragon, Flying Lotus, Pharrell Williams, Boi-1da, and several other high-profile " +
            "hip hop producers, as well as executive production from Dr. Dre and Anthony \"Top Dawg\" Tiffith. The album " +
            "incorporates elements of free jazz, funk, soul, spoken word, and the avant-garde and explores a variety of " +
            "political and personal themes concerning African-American culture, racial inequality, depression, and " +
            "institutional discrimination."
        },
        {
            id: "9",
            title: "Waterfall",
            summary: "A waterfall is a place where water flows over a vertical drop or a series of drops in the course of a stream or river.",
            createdAt: new Date(2014, 10, 19, 20, 45, 0, 0),
            author: "Nature",
            content: "Waterfalls are commonly formed in the upper course of a river. At these times the channel is often " +
            "narrow and deep. When the river courses over resistant bedrock, erosion happens slowly, while downstream the " +
            "erosion occurs more rapidly. As the watercourse increases its velocity at the edge of the waterfall, it " +
            "plucks material from the riverbed. Whirlpools created in the turbulence as well as sand and stones carried by " +
            "the watercourse increase the erosion capacity. This causes the waterfall to carve deeper into the bed and to " +
            "recede upstream. Often over time, the waterfall will recede back to form a canyon or gorge downstream as it " +
            "recedes upstream, and it will carve deeper into the ridge above it. The rate of retreat for a waterfall " +
            "can be as high as one and half meters per year."
        },
        {
            id: "10",
            title: "She's Always a Woman",
            summary: "\"She's Always a Woman\" is a song from Billy Joel's 1977 album The Stranger.",
            createdAt: new Date(2003, 8, 23, 8, 10, 0, 0),
            author: "Billy Joel",
            content: "\"She's Always a Woman\" is a song from Billy Joel's 1977 album The Stranger. It is a love song " +
            "about a modern woman, with whom he falls in love for her quirks as well as her flaws. The single peaked at #17 " +
            "in the U.S. in 1977, and at #53 in the UK in 1986, when it was released as a double A-side with \"Just " +
            "the Way You Are\". It re-entered the UK chart in 2010, reaching #29. A Muzak version of the track is known " +
            "to be one of the last songs played over the former World Trade Center complex before its collapse. The song " +
            "is played in the compound time signature of 6/8."
        },
        {
            id: "11",
            title: "Barack Obama",
            summary: "Barack Hussein Obama II is an American politician who served as the 44th President of the United States from 2009 to 2017.",
            createdAt: new Date(2008, 8, 26, 19, 15, 0, 0),
            author: "Barack Obama",
            content: "Barack Hussein Obama II (born August 4, 1961) is an American politician who served as the 44th " +
            "President of the United States from 2009 to 2017. He is the first African American to have served as president, " +
            "as well as the first born outside the contiguous United States. He previously served in the U.S. Senate " +
            "representing Illinois from 2005 to 2008, and in the Illinois State Senate from 1997 to 2004."
        },
        {
            id: "12",
            title: "Raw image format",
            summary: "A camera raw image file contains minimally processed data from the image sensor of either a digital " +
            "camera, image scanner, or motion picture film scanner.",
            createdAt: new Date(2014, 9, 1, 8, 0, 0, 0),
            author: "Cool Designer",
            content: "A camera raw image file contains minimally processed data from the image sensor of either a digital " +
            "camera, image scanner, or motion picture film scanner. Raw files are named so because they are not yet " +
            "processed and therefore are not ready to be printed or edited with a bitmap graphics editor. Normally, " +
            "the image is processed by a raw converter in a wide-gamut internal colorspace where precise adjustments " +
            "can be made before conversion to a \"positive\" file format such as TIFF or JPEG for storage, printing, or " +
            "further manipulation. This often encodes the image in a device-dependent colorspace. There are dozens, if not " +
            "hundreds, of raw formats in use by different models of digital equipment (like cameras or film scanners)."
        },
        {
            id: "13",
            title: "Klopp: I'm no clown",
            summary: "Liverpool boss Jurgen Klopp serves up 'normal one' reminder ahead of Arsenal visit",
            createdAt: new Date(2000, 1, 1, 0, 1, 0, 0),
            author: "Sky Sports",
            content: "Liverpool beat Saturday's visitors Arsenal 4-3 at the beginning of the season and topped the Premier " +
            "League after a 6-1 Anfield win against Watford in November. But Monday's 3-1 loss at Leicester was the latest " +
            "poor result for Klopp's Liverpool side, who have won just two matches out of 12 in 2017. \"Look, I am not a " +
            "clown even if few people think I am,\" Klopp said"
        },
        {
            id: "14",
            title: "Kia Race to the MVP Ladder",
            summary: "Kia Race to the MVP Ladder: Two injuries may catalyze change in MVP race, standings",
            createdAt: new Date(2009, 10, 11, 12, 13, 0, 0),
            author: "NBA News",
            content: "Marcin Gortat throwing Zaza Pachulia to the ground, and into the knee of Kevin Durant, could very " +
            "well turn out to be one of the most critical plays of this NBA season. We won’t know for sure until months " +
            "from now, when the dust has settled on the 2016-17 NBA season. But you can be sure that a significant injury " +
            "to the best player on the best team in the league will certainly play a factor in shaping the remaining course " +
            "of this season."
        },
        {
            id: "15",
            title: "Spotify hits 50 million subscribers",
            summary: "Spotify added about 10 million members -- equivalent to about half of Apple Music's membership -- " +
            "in less than half a year.",
            createdAt: new Date(2009, 3, 3, 3, 3, 0, 0),
            author: "cnet news",
            content: "Spotify has hit 50 million paying subscribers, adding 10 million new members in about five months, " +
            "the music-streaming company tweeted Thursday. Put another way, Spotify spent less than half a year adding " +
            "about half an Apple Music. The growth underscores the consumer shift from buying music outright to paying a " +
            "fee for all-you-can-access tunes. As more people have come on board, Spotify and Apple Music are emerging as " +
            "the early leaders. While Apple Music has leaned on heavy marketing and exclusives for hit albums, Spotify " +
            "enjoys a price advantage thanks to its unique free, ad-supported tier."
        },
        {
            id: "16",
            title: "Snap's shares crackle and pop",
            summary: "After much anticipation, Snapchat's parent company finally debuts on the stock market. It gets off to a fast start.",
            createdAt: new Date(2015, 5, 12, 18, 18, 0, 0),
            author: "cnet news",
            content: "Snapchat, the disappearing-photo app that's an all-consuming obsession for young people, is coming " +
            "of age. In one of the most anticipated tech IPOs in years, its parent company, Snap, went public Thursday " +
            "morning, with a preopen share price set at $17. That price didn't last long. Snap shares started trading " +
            "just before 11:30 a.m. ET with an opening price of $24, a jump of 41 percent and a strong signal that investors " +
            "are buying into the young company's promise. During the course of the day, the stock price came within a few " +
            "cents of $26 before settling to close at $24.48, a first-day gain of 44 percent."
        },
        {
            id: "17",
            title: "The dream of a world without borders",
            summary: "The exiled author killed himself in despair over Nazism. But before he did, he said Brazil had become " +
            "what he hoped Europe could be, writes Benjamin Ramm.",
            createdAt: new Date(2008, 1, 28, 13, 59, 0, 0),
            author: "BBC News",
            content: "Seventy-five years ago, in February 1942, Europe’s most popular author committed suicide in a bungalow " +
            "in the Brazilian town of Petrópolis, 10,000 km (6,200 miles) from his birthplace in Vienna. In the year before " +
            "his death, Stefan Zweig completed two contrasting studies – The World of Yesterday: Memoirs of a European, " +
            "an elegy for a civilisation now consumed by war, and Brazil: Land of the Future, an optimistic portrait of " +
            "a new world. The story of these two books, and of the refugee who wrote them, offers a guide to the trap of " +
            "nationalism and the trauma of exile."
        },
        {
            id: "18",
            title: "How a painting fought fascism",
            summary: "Opening during the Spanish Civil War, the 1937 Paris Exhibition allowed artists to speak out against " +
            "brutality. Fiona Macdonald looks at a moment when paintings became propaganda.",
            createdAt: new Date(2003, 10, 1, 19, 18, 0, 0),
            author: "BBC News",
            content: "On 26 April 1937, Nazi German and Italian bombers attacked the Basque city of Guernica. Over " +
            "the course of three hours, they destroyed three-quarters of the ancient town, killing and wounding hundreds. " +
            "The raid was “unparalleled in military history”, according to reports at the time – and it inspired one " +
            "of the most famous anti-war paintings in history. A new exhibition staged in London by Barcelona’s Mayoral " +
            "Gallery honours a group of artists who responded to the atrocities of the Spanish Civil War."
        },
        {
            id: "19",
            title: "The iconic kiss photo that was staged",
            summary: "A shot that Robert Doisneau took of two people kissing has become intrinsically related to Paris – " +
            "and to romance. Agnès Poirier takes a closer look.",
            createdAt: new Date(2017, 3, 5, 15, 51, 0, 0),
            author: "BBC News",
            content: "It is one of the iconic photographs of the 20th Century, an image that is synonymous with love and " +
            "with Paris, the city of romance. Its name is Le Baiser de l’Hôtel de Ville (The Kiss by the Hôtel de Ville) " +
            "and an exhibition at the Martin-Gropius-Bau in Berlin is currently displaying it alongside another hundred or " +
            "so pictures by the great French photographer Robert Doisneau."
        },
        {
            id: "20",
            title: "120-years old student was found",
            summary: "BSU student almost died while creating array of news for website",
            createdAt: new Date(2002, 5, 14, 14, 22, 0, 0),
            author: "Roman Korol",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been " +
            "the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and " +
            "scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into " +
            "electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of " +
            "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus " +
            "PageMaker including versions of Lorem Ipsum."
        },
    ];

    function addArticle(article) {
        if (validateArticle(article)) {
            articles.push(article);
        }
    }
    function editArticle(id, object) {
        var article = getArticle(id);
        if (validateArticle(article)) {
            var copy = article.valueOf();
            Object.keys(object).forEach(function (item) {
                copy[item] = object[item];
            });
            if (validateArticle(copy)) {
                article = copy;
                return article;
            }
            else {
                return null;
            }
        }

    }
    function getArticle(id) {
        var result = null;
        articles.forEach(function (item) {
            if (item.id == id) {
                result = item;
            }
        });
        if (result)
            return result;
        return null;
    }
    function getArticles(skip, number, filterConfig) {
        if ((skip !== undefined) && (number !== undefined) && (filterConfig)) {
            return articles.slice(skip, skip + number).filter(function (obj) {
                var check = true;
                Object.keys(filterConfig).forEach(function (item, i) {
                    if (obj[item] != filterConfig[item]) {
                        check = false;
                    }
                });
                return check;
            });
        }
        else if ((skip !== undefined) && (number !== undefined)) {
            if ((typeof skip == 'number') && (typeof number == 'number')) {
                return articles.slice(skip, number + skip);
            }
            else {
                return articles.slice(skip).filter(function (obj) {
                    var check = true;
                    Object.keys(number).forEach(function (item, i) {
                        if (obj[item] != number[item]) {
                            check = false;
                        }
                    });
                    return check;
                });
            }
        }
        else if (skip !== undefined) {
            if (typeof skip == 'number') {
                return articles.slice(0, skip);
            }
            else {
                return articles.filter(function (obj) {
                    var check = true;
                    Object.keys(skip).forEach(function (item, i) {
                        if (obj[item] != skip[item]) {
                            check = false;
                        }
                    });
                    return check;
                });
            }
        }
        else {
            return articles.slice();
        }
    }
    function validateArticle(article) {
        if ((article != undefined) && (article != null)) {
            if ((article.id != undefined) && (typeof article.id == 'string')) {
                if ((typeof article.title == 'string') && (article.title.length < 100) && (article.title.length != 0) && (article.title != undefined)) {
                    if ((typeof article.summary == 'string') && (article.summary.length < 200) && (article.summary.length != 0) && (article.summary != undefined)) {
                        if (article.createdAt instanceof Date) {
                            if ((typeof article.author == 'string') && (article.author.length != 0) && (article.author != undefined)) {
                                if ((typeof article.content == 'string') && (article.content.length != 0) && (article.content != undefined)) {
                                    console.log(article.id + " is valid");
                                    return true;
                                }
                            }
                        }
                    }
                }
            }
        }
        console.log("Article is invalid");
        return false;
    }
    function removeArticle(id) {
        var index = 0;
        for (var i = 0; i < articles.length; i++) {
            if (articles[i].id == id) {
                index = i.valueOf();
                break;
            }
            else
                index = undefined;
        }
        if (index == undefined) {
            console.log("Article with id " + id + " not found");
            return;
        }
        articles.splice(index, 1);
    }

    return {
        addArticle: addArticle,
        editArticle: editArticle,
        getArticles: getArticles,
        getArticle: getArticle,
        removeArticle: removeArticle,
        validateArticle: validateArticle
    };
}());
var articleRenderer = (function() {
    function renderArticles(data) {
        var height = $("#main-id").height();
        height = height / data.length;
        var content;
        data.forEach(function(article) {
            content = document.createElement("div");
            content.className = "news-preview";
            content.id = article.id;
            content.style.height = height + "px";
            content.innerHTML = "<h1>" + article.title + "</h1>";
            content.innerHTML += "<p>" + article.summary + "</p>";
            content.innerHTML += "<h7>Author: " + article.author + "</h7>";
            document.getElementById("news-list-id").appendChild(content);
            content.addEventListener("mouseover", lightenArticle);
        });
    }
    function removeArticle(id) {
        var elem = document.getElementById(id);
        console.log(elem);
        elem.remove();
    }
    function reRenderArticle(id, object) {
        var article = database.editArticle(id, object);
        var elem = document.getElementById(article.id);
        var newElem = elem;
        newElem.innerHTML = "<h1>" + article.title + "</h1>";
        newElem.innerHTML += "<p>" + article.summary + "</p>";
        newElem.innerHTML += "<h7>Author: " + article.author + "</h7>";
        if (article != null) {
            document.getElementById("news-list-id").replaceChild(newElem, elem);
        }
    }

    return {
        removeArticle: removeArticle,
        renderArticles: renderArticles,
        reRenderArticle: reRenderArticle
    }
}());
