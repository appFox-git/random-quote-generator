// only run script once page has loaded..
$(document).ready(function(){

    // array of background images..
    var backgroundImages = [
    "https://images.unsplash.com/photo-1505051508008-923feaf90180?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fda1d3045d1ff97ef564d4fc3ae14fe4&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1506604900144-7360175909e2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d437158dff03180ed32cc39401b3a894&auto=format&fit=crop&w=1355&q=80",
    "https://images.unsplash.com/photo-1507683259920-29814caf4a88?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=79be95d327da33f35c382b557eb38e2f&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?ixlib=rb-0.3.5&s=2fd4e1abb9770bd689d2014e0d265ade&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1479888912530-af5a74b7adea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4019fad81f9b86008c0b93251a3acfec&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=78847a9d49e94466dd2ab32d7031cd68&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1499615767948-e6a89ef6060f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ff7e0816b73331eb0f205ac167b2094f&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1464254786740-b97e5420c299?ixlib=rb-0.3.5&s=5922376819fa5e40d841e7e274db0508&auto=format&fit=crop&w=1351&q=80",
    "https://images.unsplash.com/photo-1459909633680-206dc5c67abb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7e9283d9297a7140d6ec620a8a7d2e84&auto=format&fit=crop&w=1351&q=80",
    "https://images.unsplash.com/photo-1498026474556-93048b8493d8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c36165376476e30cb8bd5e32f349beae&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1510348620274-e0b1ac20744b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d1c75378e1351af4be6fee31a3c260e8&auto=format&fit=crop&w=1371&q=80",
    "https://images.unsplash.com/photo-1508881598441-324f3974994b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2aef1e2f3895c40e891654ae51f9c1e3&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1464039397811-476f652a343b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=86ec8c23fcac41d5c77684ef15ea95d5&auto=format&fit=crop&w=1348&q=80",
    "https://images.unsplash.com/photo-1465588042420-47a53c2d0320?ixlib=rb-0.3.5&s=4f37726abb95672b44fde576c79aed26&auto=format&fit=crop&w=1395&q=80",
    "https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53417780c9a34ffae5334a1d03b105a6&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1518717202715-9fa9d099f58a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fdb044577537ea70ef23d08f2d55a3e8&auto=format&fit=crop&w=1401&q=80",
    "https://images.unsplash.com/photo-1504480848728-5b43fa9ad455?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a227222688061c3dc262a1652b8757df&auto=format&fit=crop&w=1348&q=80",
    "https://images.unsplash.com/photo-1519176336903-04be58a477d2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eda05ddcb3154f39fd8ce88fdd44f531&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1506043959821-2eda767099c8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8516f569db6d6ddcbc8daae137d08216&auto=format&fit=crop&w=1267&q=80",
    "https://images.unsplash.com/photo-1508256912445-74f4409bbfde?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f302e7dd05f624e96197416fb36ad246&auto=format&fit=crop&w=1351&q=80"
    ]

    // array of quotes and authors..
    var quotes = [
    ["The Way To Get Started Is To Quit Talking And Begin Doing.", "Walt Disney"],
    ["The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.", "Winston Churchill"],
    ["Don’t Let Yesterday Take Up Too Much Of Today.","Will Rogers"],
    ["You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.","Unknown"],
    ["It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.","Vince Lombardi"],
    ["If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.","Steve Jobs"],
    ["People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.","Rob Siltanen"],
    ["Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.","Og Mandino"],
    ["We May Encounter Many Defeats But We Must Not Be Defeated","Maya Angelou"],
    ["Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.","Johann Wolfgang Von Goethe"],
    ["Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?","Brian Tracy"],
    ["We Generate Fears While We Sit. We Overcome Them By Action.","Dr. Henry Link"],
    ["Whether You Think You Can Or Think You Can’t, You’re Right.","Henry Ford"],
    ["Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing.","Helen Keller"],
    ["The Man Who Has Confidence In Himself Gains The Confidence Of Others.","Hasidic Proverb"],
    ["The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today.","Franklin D. Roosevelt"],
    ["Creativity Is Intelligence Having Fun.","Albert Einstein"],
    ["What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time.","Don Zimmer"],
    ["Do What You Can With All You Have, Wherever You Are.","Theodore Roosevelt"],
    ["Develop An ‘Attitude Of Gratitude’. Say Thank You To Everyone You Meet For Everything They Do For You.","Brian Tracy"],
    ["You Are Never Too Old To Set Another Goal Or To Dream A New Dream.","C.S. Lewis"],
    ["To See What Is Right And Not Do It Is A Lack Of Courage.","Confucious"],
    ["The Future Belongs To The Competent. Get Good, Get Better, Be The Best!","Brian Tracy"],
    ["For Every Reason It’s Not Possible, There Are Hundreds Of People Who Have Faced The Same Circumstances And Succeeded.","Jack Canfield"],
    ["Things Work Out Best For Those Who Make The Best Of How Things Work Out.","John Wooden"],
    ["Today’s Accomplishments Were Yesterday’s Impossibilities.","Robert H. Schuller"],
    ["The Only Way To Do Great Work Is To Love What You Do. If You Haven’t Found It Yet, Keep Looking. Don’t Settle.","Steve Jobs"],
    ["You Don’t Have To Be Great To Start, But You Have To Start To Be Great.","Zig Ziglar"],
    ["A Clear Vision, Backed By Definite Plans, Gives You A Tremendous Feeling Of Confidence And Personal Power.","Brian Tracy"],
    ["There Are No Limits To What You Can Accomplish, Except The Limits You Place On Your Own Thinking.","Brian Tracy"]
    ];

    // create an object to hold the randomly chosen quote text & author..
    var quoteObj = {
        text: "",
        author: ""
    };

    // create a variable to hold the randomly chosen image index..
    var randomBackgroundImg = 0;


    // generate random number using quotes.length as upper limit on random..
    function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
    };

    //variable used in generating a random number
    var randomNumber = null; 


// function selects a random background url from 
// backgroundImages array..
    function selectBackgroundImg(){
        // generate a new random number..
        randomNumber = getRandomNumber(backgroundImages.length);
        randomBackgroundImg = backgroundImages[randomNumber].toString();
        console.log("index for new random image is: " + randomBackgroundImg);
        return ;
    }


// function returns an array containing a random quote at
// index [0] and the corresponding author at index [1].
    function generateQuote(){
        // generate a new random number..
        randomNumber = getRandomNumber(quotes.length);

        // assign new random quote and author to variables..
        // var quote = quotes[randomNumber][0];
        // var author = quotes[randomNumber][1];
        // quoteArr = [quotes[randomNumber][0], quotes[randomNumber][1]];

        // store the randomly chosen quote text and author in quoteObj..
        quoteObj.text = quotes[randomNumber][0];
        quoteObj.author = quotes[randomNumber][1];

        // send the new random quote to the console for testing...
        console.log(quoteObj.text + "   -  " + quoteObj.author);
        // return the quoteArr array with new quote and author.
        return quoteObj;
    };

// when #quoteButton is clicked, run the function generateQuote,
// then write the new random quote to #quoteText and #quoteAuthor.
    $("#quoteButton").on("click", function(){
        // change the background image..
        selectBackgroundImg();
        var imageURL = "url(" + randomBackgroundImg + ")";
        console.log("imageURL: " + imageURL);
        document.getElementById("background-img").style.backgroundImage = imageURL;

        // change the quote & author text..
        generateQuote();
        console.log("new quote created");
        $("#quoteText").html(quoteObj.text);
        console.log("quote text should be updated now..");
        $("#quoteAuthor").html(" -  " + quoteObj.author);
        console.log.apply("author should be updated now..");
        $(".background-image").html()

        
    });
});