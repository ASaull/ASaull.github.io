import placeholder from '../components/images/placeholder.png'

import break_1 from '../components/images/break_1.png'
import break_2 from '../components/images/break_2.png'
import break_3 from '../components/images/break_3.png'
import break_4 from '../components/images/break_4.png'
import break_5 from '../components/images/break_5.png'

import chord_1 from '../components/images/chord_1.png'
import chord_2 from '../components/images/chord_2.png'
import chord_3 from '../components/images/chord_3.png'
import chord_4 from '../components/images/chord_4.png'

import crazy_1 from '../components/images/crazy_1.png'
import crazy_2 from '../components/images/crazy_2.png'
import crazy_3 from '../components/images/crazy_3.png'
import crazy_4 from '../components/images/crazy_4.png'
import crazy_5 from '../components/images/crazy_5.png'


import mc_1 from '../components/images/mc_1.png'
import mc_2 from '../components/images/mc_2.png'

import console_1 from '../components/images/console_1.gif'
import console_2 from '../components/images/console_2.png'
import console_3 from '../components/images/console_3.png'
import console_4 from '../components/images/console_4.png'
import console_5 from '../components/images/console_5.png'
import console_6 from '../components/images/console_6.jpg'
import console_7 from '../components/images/console_7.jpg'

import league_1 from '../components/images/league_1.png'
import league_2 from '../components/images/league_2.png'

import site_1 from '../components/images/site_1.png'
import site_2 from '../components/images/site_2.jpg'
import site_3 from '../components/images/site_3.png'

import buildings_1 from '../components/images/buildings_1.png'
import buildings_2 from '../components/images/buildings_2.png'
import buildings_3 from '../components/images/buildings_3.png'
import buildings_4 from '../components/images/buildings_4.png'
import buildings_5 from '../components/images/buildings_5.png'


export const projectsData = [
    {
        id: "0",
        title: '"Breakthrough" Game',
        description: 'A "reverse tower defence" game created by a team following agile practices.',
        techs:
        [
            "Unity",
            "C#",
            "Agile",
            "Git"
        ],
        images:
        [
            {image: break_1, caption: "Creating robots, and turning them green"},
            {image: break_2, caption: "Hovering over a laser turret while it fires"},
            {image: break_3, caption: "Hovering over a robot as it gets hit by a rocket turret"},
            {image: break_4, caption: "Winning a level!"},
            {image: break_5, caption: "We gave them names to keep you invested"},
        ],
        detailed_description:
        'As part of my studies at Carleton, I applied and was accepted for a special summer 4th year course in game design. \
        This course brought together a team of 10 students with relevant skills to create a game for a simulated \
        "product owner" who had an idea for the type of game he wanted us to create. We followed a rigourous \
        agile methodology. This means that after an initial prototyping sprint we completed a sprint every two weeks,\
        creating a working testable product which we received feedback on from testers.\n As part of my involvement in\
        the team I worked on the auto-generation of the map elements, such as turrets, paths, and obstacles, as well as\
        the logic of these turrets. I also worked on polishing many aspects of the game as I was one of the few team members\
        who had a good holistic understanding of all the parts and how they fit together.',
        challenges:
        'A major challenge of this project was learning to work with Git as part of a large (relative to university standards) team.\
        I also found it challenging to estimate work loads as part of agile. I often found myself underestimating how much work would\
        go into completing any given task. We as a team also realized just how much of game design goes into creating content for the\
        game.',
        insights:
        'I learned a lot about writing code as part of a team in a way which can only be learned by doing. Knowing that my code would \
        be extended and built upon by my classmates made it very important that it was written well and well documented. I also learned\
        a lot about Agile practices and gained a practical understanding of the importance of things like burndown charts and planning\
        poker.\nA big thing that I learned about myself was that it was very important for me to know everything about the project. I\
        learned that if I knew what everyone was doing that I felt much more involved in the project and much more confident when\
        speaking my ideas about how to proceed. I feel that this knowledge and comfort with the project resulted in me to being a\
        leading member of the team.',
        future:
        "The primary issue with the game is one of lack of content. As for any future work on the game, it will certainly require\
        dozens of well designed levels, as the game is very reliant on the design of its levels to be fun.\n \
        During development I was a major advocate of creating a map editor so that the game could be extended by a community, possibly\
        on the steam workshop. To this end, I did a lot of the work on auto-generation of maps, which was also helpful for internal\
        development.\n\
        The game also does not have a strongly coherent visual style. If this game were to be released it would need an overhaul by some\
        actual artists."
    },
    {
        id: "2",
        title: 'Test Driven Crazy Eights',
        description: 'Creating multiplayer web based Crazy Eights using test driven development. All code written was preceded by writing a test.',
        techs:
        [
            "Java",
            "Spring Boot",
            "Websockets",
            "Test Driven Development"
        ],
        images:
        [
            {image: crazy_1, caption: "Automated testing in progress (yes this is the ugliest interface ever!)"},
            {image: crazy_2, caption: "All tests pass!"},
            {image: crazy_4, caption: "Cucumber plaintext acceptance tests are so beautiful!"},
            {image: crazy_5, caption: "And the underlying code can be so simple (and used 44 times!)"},
            {image: crazy_3, caption: "A player has won the round"},
        ],
        detailed_description:
        'As a project for a final year course at Carleton I created Crazy Eights using test-driven development. For this\
        program, all code had to be preceded both by an acceptance test and a unit test. Acceptance tests were laid out by the professor, which tested the game\
        as a black box. These tests would specify actions that players would take, turn by turn, and the assert that outcomes were as expected. To create these\
        acceptance tests I used the software Cucumber which was fantastic and allowed tests to be written in plain text, while their actual code could be\
        hidden away at a lower level. This allowed the dozens of similar tests to be written very quickly.\nThese acceptance tests used Selenium to launch four instances of\
        a browser, load into a four player game, then act as the players, pressing buttons on the browser to fulful actions. The underlying game server was then rigged to\
        to ensure players had the cards specified in the test, and the outcome was read off of the browser for all four players to ensure that everything had worked.',
        challenges:
        'The major challenge of this project was writing test-driven code. It is a different way of thinking when you are programming, and it makes certain things quite\
        difficult. You have to have things set up such that they can be tested even if they do not exist yet. You also have to think about the interface of a given function\
        before it is written, so it is a neat exercise in treating your own code like a black box.',
        insights:
        'This is a project that I never would have considered doing for fun on my own time, but which ended up being an extremely valuable and interesting experience. \
        As part of the progression of\
        the course, acceptance tests for a previous project were written with JUnit, software which is designed for writing unit tests. This was intended to be a very painful\
        experience because acceptance tests are often quite similar to each other, but not similar enough to necessarily be quickly copied\n\
        When the class was introduced to Cucumber for acceptance tests it became incredibly clear to me how powerful such a tool could be. I ended up really enjoying using it and\
        it is so satisfying to spend twenty seconds writing a new test in plain English, and then having that test immediately pass because of code previously written.\n\
        I also learned just how valuable it is to have tests in general. At one point during the project I added a feature which broke something I had done earlier and caused some\
        seemingly unrelated tests to no longer pass. Normally I wouldn\'t have never noticed this until much later, but seeing my tests fail immediately gave me the chance to fix\
        the new code, which was immediately indicated to be flawed.\n\
        Also, it is just so satisfying watching all those tests pass.',
        future:
        'Given that the UI was not graded on this project - neither for usability nor aethetics, it was pretty severely neglected. I ended up with an extremely utilitarian layout\
        and some elements were awkwardly tagged on at the end. If this project were to be expanded then it would need an overhaul of the frontend with proper images for cards, as well\
        as animations.'
    },
    {
        id: "4",
        title: "Analogue System Monitor",
        description: "Arduino based physical indicators for computer resource usage.",
        techs:
        [
            "C",
            "Python",
            "Blender",
            "3D Printing"
        ],
        images:
        [
            {image: console_7, caption: "The second phase as currently assembled, including connection to the IBM 5151"},
            {image: console_1, caption: "A video of the first phase connected to my PC"},
            {image: console_3, caption: "The complete assembly for the second phase with mock boards"},
            {image: console_4, caption: "LCD holder with mock board"},
            {image: console_5, caption: "LCD holder alone"},
            {image: console_2, caption: "Frame alone"},
            {image: console_6, caption: "As assembled"},
        ],
        detailed_description:
        'This has been a very long running hardware and software project of mine. I have always liked the idea of analogue outputs and inputs, so I came up with some ways to\
        add them to my PC. The "first phase" was to hook up some analogue panel metres (circle gauge things) to an Arduino\
        so that I could monitor my PC\'s CPU, RAM, and GPU usage. This involved buying the panel metres, adding a resistor to them so that their full range could be expressed\
        within the 5V output of the Arduino, and then getting the Arduino to give them signals. After this I had to get the Arduino communicating with the PC, which requires a script\
        to be run on the PC. Once that was\
        completed, I was able to have my initial analogue monitoring system.\n\
        The next thing I added was a switch so that I could control the mute of my microphone. I also toyed with adding a potentiometer to control volume, but all of the\
        potentiometers that I had lying around were too noisy to rest on a nice value out of 100.\n\
        Finally, more recently I revived the project for its second phase to make use of some more components that I have acquired including a small LCD screen. \
        The project now combines the Arduino with\
        a Raspberry Pi, so that\
        it can stay on all the time. Now it is able to tell the weather (in my room) and store that historical data (might be interesting later once I get a bunch of data).\
        A big part of this phase was 3D printing cases for the gauges, LCD, and a potentiometer so that they can be mounted.',
        challenges:
        'There is a lot that goes into hardware that I had very little experience with going in to this project. The main challenge for this project was to learn about integrating\
        software and hardware, and to learn about communicating over serial. In the second phase I also had to 3D print parts that would be perfect fits for existing circuit boards,\
        which was a neat challenge.',
        insights:
        'Probably the biggest thing that I learned was about a pull up switch.\
        Basically, the first time I used a switch, I simply hooked it up betweem a 5V output and an input on the Arduino and said "check when this intput is 5V or not". However,\
        it turns out that if you leave a switch just open like that, then your input will be noisy. The solution is to instead wire the 5V to the input through a resistor, and then to\
        ground through the switch. This way, when the switch is open, the input registers current through the resistor, but when the switch is closed, that current goes straight to\
        ground, leaving the input to register no input. I\'m not sure why I bothered to write that all out, but I thought it was interesting.\n\
        During the second phase of the project I also improved my skills in Blender relating to 3D printing and prototyping.',
        future:
        'This is an ongoing project that I am actively working on. The next step is to get more displays working for the LCD. This might require sending data from the PC not only to the\
        Arduino, but also to the Raspbery Pi over serial.\n\
        I have also managed to connect the Raspberry Pi to an old IBM5151 TTL monitor I have from 1981. This required a custom monitor setup to write the appropriate tv signal for\
        350 lines at 50hz. I have plans to show additional data on this monitor when prompted by setting a potentiometer.'
    },
    {
        id: "3",
        title: "Minecraft Server Contributions Chart",
        description: "A program that generates a Github style contributions chart for my Minecraft server.",
        techs:
        [
            "Python"
        ],
        images:
        [
            {image: mc_1, caption: "The resulting chart. Rendered in May 2023."},
            {image: mc_2, caption: "Some output, showing how time errors and missing logouts are handled."}
        ],
        detailed_description:
        'This was a neat little project that came about from Minecraft not having a "Time Played" counter like other software does. I have been building\
        a Minecraft city on a personal server for over 10 years, and I wanted to find out how many hours I have spent building on the server. It turns out\
        that the server logfiles date back to the beginning and they store the log on and log off times of all players who have been on the server. This\
        ended up being a lot more complex than I expected!.\n\
        Eventually though, after determining the number of hours I had played I moved on to the more interesting step, which was rendering a "Github style"\
        contributions chart showing how much time I put in each day of the last decade.',
        challenges:
        'The biggest challenge here is that that the data is not all that clean. Many log ons are not succeeded by a log off and many log offs are not preceeded by a log on.\
        Sometimes this is the result of the logfile being split in two, sometimes the data is just lost.\n\
        I also encountered a strange problem, which is that sometimes time goes backwards. This makes all sorts of problems for my code. I eventually determined most of these to\
        be caused by dual-booting Linux. Linux expects the motherboard to have time stored in UTC, while Windows expects it to be in local time. This means that when booting into\
        Windows after booting into Linux, the time displayed is four or five hours in the past.',
        insights:
        'Honestly I didn\'t learn too much from this one, it was just a little passion project.',
        future:
        'I recently uncovered the original logfile, which is a single (very large!) text file for all logs up until a certain date in 2013. This is different from\
        the newer logfiles for which\
        there is one file per day. I would like to add this file to the data, and this is the reason why the first chart generated only goes back to 2014 while the\
        server dates from 2012.'
    },
    {
        id: "5",
        title: "League of Legends API data visualization",
        description: "A program which accesses the League of Legends API to create several histograms which my friends and I were interested in.",
        techs:
        [
            "Python",
            "League of Legends API"
        ],
        images:
        [
            {image: league_1, caption: "The resulting histogram comparing our deaths with our teammates deaths (the trend is clear!)"},
            {image: league_2, caption: "A more granular histogram showing individual friends"},
        ],
        detailed_description:
        'This is another simple Python script. This project was motivated by a discussion I had with my friends about our League of Legends teammates. We hypothesized that we were\
        dying significantly less than our randomly assigned teammates, and I realized that Riot (the creator of League of Legends) actually offers API keys to developers, and that\
        I could figure out the truth myself.\n\
        The script that I ended up creating accesses the API to load up the last 100 games played by myself and my two friends and compiles a number of stats about these games,\
        most notably the number of occurrence of n death games. I then plotted this data on a histogram to reveal that yes, in fact, we were dying less than our teammates. Unforrunately\
        upon graphing some other data, it also revealed that we were getting fewer kills than our teammates as well. It turns out that we just have a less volatile playstyle.\n\
        I then ended up getting the script to give us a whole bunch of other data that we thought was interesting',
        challenges:
        'This one wasn\'t too challenging. The most difficult part was wading through the incomplete API docs and reading respondes to API requests to try and figure out what the\
        structure of the returned data looked like. Once I had that sorted, it was a simple pyplot adventure.',
        insights:
        'Unfortunately most of what I learned here was not about programming, but about my and my friends\' League of Legends habits.',
        future:
        'I have a lot of thoughts about where to take this project. I think that it would work really well as a website that anyone could use, although securing an API key from Riot for\
        large numbers of requests (the dev one is limited to 100/minute) would be difficult. I also had a number of other stats that I wanted to pull up. My friends and I don\'t really play\
        league anymore though, so this project is on hiatus.'
    },
    {
        id: "6",
        title: "This Website",
        description: "A basic frontend with some fun animations showcasing projects I've created",
        techs:
        [
            "React",
            "CSS",
            "HTML"
        ],
        images:
        [
            {image: site_1, caption: "If you're viewing this site on mobile, this is what it looks like on desktop"},
            {image: site_2, caption: "If you're viewing this site on desktop, this is what it looks like on mobile"},
            {image: site_3, caption: 'This is easily extensible (I just added this image as "site_3"'},
        ],
        detailed_description:
        'I hope someone reads this tbh, I put a lot of work into it. Basically I realized that I had done a bunch of "slightly cool" things\
        and there was certainly no room to put them on my resume, so I wanted to make a website that could be easily skimmed over without\
        feeling like you were obligated to read any or all of it. Therefore my goal was to make it easy to scan for relevant items, and then\
        easy to just skim over the images associated with that item without needing to read all of the description. Although I do outline\
        my thoughts on the projects for those who are interested.\n\
        As for the creation of the website itself, I chose to do it in React because I had a tiny but of experience with it from school.\
        After that, I looked for inspiration from Swiss style typography to make a design. I have a great appreciation for graphic design\
        and typography, but with no training, and not much time put into it, I ended up going with a simple design that I borrowed from\
        a poster for the 1964 Tokyo Olympics.\n\
        Another big aspect of the website was that I wanted it to generate the project visuals from a "database" (a js file). This would make it easily\
        extensible and editable without me worrying about going into html and changing formatting or anything. Each project has the same\
        layout and is generated from a dictionary that holds the relevant data.\n\
        As far as I can tell, the website should be usable on all modern browsers, including Safari (why is Safari weird). It also will\
        detect whether the user is using touch or pointer, to allow the buttons to show up without needing to be hovered if the user does\
        not have a mouse. This is separate from detecting if the screen is small to switch to mobile mode, because tablets should use\
        the larger screen mode. I actually have a touchscreen laptop with a detachable keyboard and it switches modes perfectly when\
        the keyboard is attached and detached!',
        challenges:
        'Having never used React, or set up a website that is supposed to look good, and be used on multiple platforms this was a big\
        challenge for me. I had a lot of trouble coming up with a design that was simple, but extensible. I wanted to have a single\
        page design to keep things simple and aesthetic, but I needed a way to keep some information hidden, so I came up with\
        the expanding projects idea.\n\
        It was also a big challenge just getting started in React. When you are working on a school project there is always a very specific order\
        to do things and you can be certain that a solution exists. For my open ended problem it took me a while to even decide how to start and\
        what to do. I found it difficult to know what the standards even were and if I was following them.',
        insights:
        'I learned basically everything from scratch for this website, so it you see it here, then its something I learned. Mostly I learned about how\
        React works, and how it uses JSX to generate elements. I of course learned a lot about css styling and how to line things up nicely on a page.\
        I learned about mobile vs web, and how to lay things out so that it works on both. I also learned about how navigation is suppose to work for\
        a modern React webpage. Ideally my website would go to a new url, say "/projects/1" when you open a project, but I found that based on my\
        implementation this was almost impossible. If I were to make this website again I would probably choose a design that made it easier to\
        do things the default "React way". On the other hand, not knowing makes for a more unique design, though in theory it will be harder to\
        navigate for someone used to typical web pages.\n\
        From the design side I learned a lot about what makes a good website. Things like what font weights to use, how to lay stuff out. I found\
        a great explainer on what makes a design good or bad and I went though changing everything so that I removed the bad parts. For example,\
        using pure black is not a good idea, you should use a off-black, ideally tinted in the colour of other elements on the page.',
        future:
        'This is version 1.0 of this website, I have lots more ideas to expand it. Basically, the longer it takes me to get a job, the better this site\
        will get (haha). If you\'re viewing version 1.0, then things are just getting started. Next up is making the display of images a bit better, especially on mobile, and\
        adding the possibility of using video (though gifs seem to be working well).\n\
        I also need to brainstorm a better way to collapse the projects. As of right now, you have to scroll back up to collapse a project again. Ideally\
        the collapse button would move to the bottom of the section, but this doesn\'t really work with the current design on desktop though it would work\
        on mobile. Much to consider.'
    },
    {
        id: "1",
        title: "Music Chords Neural Network",
        description: "A neural network that can recognize musical chords.",
        techs:
        [
            "TensorFlow",
            "Python"
        ],
        images:
        [
            {image: chord_1, caption: "I included the relevant paragraph"},
            {image: chord_2, caption: "And here"},
            {image: chord_4, caption: "Here we just zoom in on the louder part of the spectrograph"},
            {image: chord_3, caption: "And here are the results"},
        ],
        detailed_description:
        'This project was completed as a final project for an AI course at Carleton. It was my first time using a neural network\
        so I ultimately decided on a simple classification problem of musical chords. The program would be able to accept a sound file\
        of a chord being played, and idenify it as major, minor, major7, augmented, or diminished. This is, of course, something which\
        can be easily accomplished by more traditional means, but I thought this would be an interesting application of a neural network\
        for learning purposes',
        challenges:
        'As with most neural network projects, this classifier relies on having a large set of data to train on. The biggest challenge\
        here was gathering a large set of classified chord data. Ultimately, this does not exist so I ended up generating synthetic data\
        using synthesized pianos. It was also a challenging and exhaustive process learning about and adjusting all the parameters of the\
        network to ultimately achieve a high rate of correct classification.',
        insights:
        'This was a fairly simple neural network project, but it gave really nice results and gave me a lot of familiarity with\
        the tools and methods required in AI and was very useful as a backbone for later courses.',
        future:
        "Ultimately the classifier was not tested on real data, and this is something that I regret not having time for. The next steps for\
        the project would need to see it being able to classify real recordings of chords. I would be especially interested in seeing if the\
        model, which was trained on synthetic data, would be able to classify real data (I suspect it would)."
    },
    {
        id: "7",
        title: "Cities Skylines Assets",
        description: "A collection of 3D modelled building assets that I created for the game Cities Skylines",
        techs:
        [
            "Blender",
            "Photoshop"
        ],
        images:
        [
            {image: buildings_1, caption: "Several buildings and variations"},
            {image: buildings_2, caption: "As they appear on my Steam profile"},
            {image: buildings_3, caption: "Detail"},
            {image: buildings_4, caption: "Showing the night texture"},
            {image: buildings_5, caption: "More detail"},
        ],
        detailed_description:
        'I am an avid Cities:Skylines player. I have always loved cities since I was a kid, and this game is the best city buliding game\
        ever created. It has an expansive library of user created buildings which can be subscribed to on Steam. As I was buliding\
        a Japanese themed city at the time, and noticed that this particular phenotype of setback buildings was present in real Japanese\
        cities, but missing from the existing library of custom buildings I took it upon myself to create some.\n\
        I started out with a few simple buildings and moved on to bigger projects.\n\This is only tangentially\
        related to software development, but I think it\'s cool.\n\
        I am proud to say that these assets have each been download around 10 000 times, and are some of the most popular assets for\
        creating a Japanese style city! Every time I see someone post a screenshot of their Japanese build I look out for my buildings\
        and I can usually spot them',
        challenges:
        'I was already familiar with the 3D modelling tool Blender before this project, but making a building for use in a game alongside 100s of\
        other models requires a degree of responsability. I had to start out by downloading and analyzing my peers\' models so that I knew about\
        what the standards were for vertex cound and texture size. Besides creating a simple coloured diffuse texture for the building, there\
        are also several other textures that have to be created. There are textures for roughness, normals (bumps), illumination of windows at\
        night, and masking which areas of the building will be coloured to create variations. Then once you\'ve done all that, you have to do it\
        again for the LOD model (stands for Level of Detail, but it is a low poly version of the model to be viewed from far away).',
        insights:
        'These buildings taught me about the process involved for creating a game-ready asset. These is a lot more that goes into these than for\
        some silly 3d art that I will use as a wallpaper or something. There were established community standards that I had to follow and when my\
        assets had a bug then I had to be active in the comments section to find and fix it.',
        future:
        'I am still very interested in creating buildings for Cities:Skylines, but the sequel was announced a while ago, and so I have been\
        waiting for its release to, first of all, update these buildings for the new game, and then create new ones.'
    },
]