# Meme picker
#### [Demo](https://meme-picker.herokuapp.com/)

Project was designed for admins of popular memes sites to make their life easier.

The essence of the site is to collect memes and give users the opportunity to vote for the best ones. After all there will be a list of most rated memes, so admins can see, what people like.

Created by the Reservoir Code team for created for the qualifying stage of the hackathon Int20 2018.
### Command structure:
* __[Kazimirov Danil](https://github.com/ZulusK)__
* __[Rukhailo Pavlo](https://github.com/IceBroForever)__
* __[Mihail Lukyanets](https://github.com/TGIfr)__

### The main idea of the project:
Imagine that your client is an admin of a very popular public memo page. Every day, he faces the task of filling his pub with the freshest and the best "memes" from all corners of the World Wide Web. He's used to doing everything manually: to view his own "proposed records" and popular website-image boards, and then pick up the ones you liked yourself on the page. But the memes became so much that he wanted to automate this process.

What client wants to see a prototype of your site?
The site should consist of a minimum of two pages:
1. The user sees two randomly issued memes system. He must choose the one that is most "fit" and click on it. The system memorizes the choice and issues two new memes, etc.
2. A page with a rating of memes for the "day", formed on the basis of the choice of users on page 1.

Who will be the site user?

Imagine that Admin will take "work" from a dozen students who will evaluate the "suitability" of the proposed memes. He will, if necessary, look at the "rating" and take the content to the main public.

Technical details

The task can be divided into three technical subtasks:
Collection of memes. There will be enough one source (eg reddit, 9gag, VK public), you can use both the site API and parsing. Updating memes with time is not necessary.
Saving and issuing memes, interaction with the user. The easier it is - the better.
Ranking of memes for "day" by any algorithm of your choice (see P.S.)
Deploying an application in a cloud is desirable, but not mandatory. A link to the website in this case should also be included in the letter.

### Stack of technologies
* Node JS
* Express
* MongoDB
* Vue.js
* Bulma

### Implemented features:
* Registration using email
* Confirmation of registration by email
* Users can create view top of memes, sorted by date or rating
* Users can wiev detail of meme and it's URL
* Auto meme loading from 9Gag API
* Registered users can vote for the best meme
* Admin can delete meme
