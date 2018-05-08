# Eat-Da-Burger

![SITEGIF](https://raw.githubusercontent.com/aNap73/Bootstrap-Portfolio.github.io/master/assets/images/BurgSite.gif)

This fun web app uses, JS, Node, Express, Handlebars and sql to create a burger eating tracker.

Use the top area of the site to challenge other people to eat burgers you dream up, when you add one it will show up on the bottom left of the screen. 

Users can come into the site, find burgers others have posted, and then "Devour" them. Once a burger is "Devoured" that burger moves to the Burger Log on the bottom right side, where it is commemorated forever in all it's eaten glory. (more like it's made up glory, until I wipe it :D)
If you're too busy for all that, simply let us know the burger you recently ate, you can do that also, just select "Devoured" instead of "Challenge" in the radio button when entering a new burger.

Good Luck and Happy Eats!

[Check Out the Site Here](https://hidden-depths-72803.herokuapp.com/)

![BURGER](https://hidden-depths-72803.herokuapp.com/assets/img/Burger.gif)


### Why I think it's cool

#### This program uses MVC or (Model, View Controller)

This design pattern is a bit tricky to set up and get used to at first, but it has a TON of advantages, of which two strong ones, are it's flexibility and ease of maintenance. 

I also had some fun creating the 3d model for the spinning burger. :D

#### JAWS_DB

Sweet free?...? webhosting for MySql Databases that works native with Heroku and is totally secure, yea! What could go wrong!

#### Home Grown ORM's

We spent some time studying basic ORM design in class. So for this project we were encouraged to hack together our own ORM. Mine is really simple and seems to get it's job done communicating with the model.  As an old Database and System engineer, this paradigm does concern me a bit, and some of my other DBA friends too. However, it's great to have learned it for sure, and I do see how simple and beautiful it makes the rest of the projects design and implementation. 

#### Model

The Model reminds me a lot, of the server in a client server app. Mine was very simple, pretty much a straight forward decoder between the ORM and the front end, however, I could see where you could add many different kind of complicated operations here to meet business requirements.

#### View

I had some fun with handlebars.js and I was able to bring the package into this project and use it to mash the model objects and html from the views and partials into beautiful burger themed fun.  MVC at it's best, stuff just working, like magic, or great planning.

#### Controller

 I have to say setting up routes in Express is A LOT of fun. My grandfather was a lineman for "The Phone Company" and my Mom worked for the Labs, and then Lucent, Avaya, etc.. So I have a HUGE appreciation for the history of the protocols that we use. Writing in express, managing routes, with gets puts posts and deletes through restful, is great fun and it really makes me feel connected. :D

#### I heard you like programs; so I put some programs in your programs?

I always find it amusing when it becomes time to stuff one program into another, so it can shoot out at some point and do it's job. One of my proudest moments as a developer was the first time I accomplished getting a remote client to self update, I taught that piece of code, to ride the hurricane. Great fun. Anyway, rewriting the ajax code on the web pages in this project made me think of that experience, but thankfully a lot simpilier and a lot more fun. I love writing in this paradigm.