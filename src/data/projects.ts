import break_1 from '../components/images/break_1.png'
import break_2 from '../components/images/break_2.png'
import break_3 from '../components/images/break_3.png'
import break_4 from '../components/images/break_4.png'
import break_5 from '../components/images/break_5.png'
import break_6 from '../components/images/break_6.png'

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
import site_4 from '../components/images/site_4.webp'
import site_5 from '../components/images/site_5.png'
import site_6 from '../components/images/site_6.jpg'

import buildings_1 from '../components/images/buildings_1.png'
import buildings_2 from '../components/images/buildings_2.png'
import buildings_3 from '../components/images/buildings_3.png'
import buildings_4 from '../components/images/buildings_4.png'
import buildings_5 from '../components/images/buildings_5.png'

import mcbde_1 from '../components/images/mcbde_1.png'
import mcbde_2 from '../components/images/mcbde_2.png'
import mcbde_3 from '../components/images/mcbde_3.png'
import mcbde_4 from '../components/images/mcbde_4.png'

export class SlideshowImage {
    url: string;
    caption: string;

    constructor(url: string, caption: string) {
        this.url = url;
        this.caption = caption;
    }
}

export class Project {
    id: bigint;
    title: string;
    description: string;
    techs: string[];
    images: SlideshowImage[];
    detailed_description: string;
    challenges: string;
    insights: string;
    future: string;

    constructor(
        id: bigint, 
        title: string, 
        description: string, 
        techs: string[], 
        images: SlideshowImage[], 
        detailed_description: string, 
        challenges: string, 
        insights: string, 
        future: string
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.techs = techs;
        this.images = images;
        this.detailed_description = detailed_description;
        this.challenges = challenges;
        this.insights = insights;
        this.future = future;
    }
}

export const projectsData = [
    {
        id: "8",
        title: 'Blender "Minecraft Block Display" Add-on',
        description: 'A Blender add-on that generates commands to create Minecraft Block Display Entities.',
        techs:
        [
            "Python",
            "Blender"
        ],
        images:
        [
            {url: mcbde_1, caption: "My test dummy as seen in Blender. The currently selected Oak Stairs have their options shown to the user"},
            {url: mcbde_2, caption: "My test dummy as displayed in Minecraft by the generated command"},
            {url: mcbde_3, caption: "An example of block type autocomplete"},
            {url: mcbde_4, caption: "An example of block property autocomplete"},
        ],
        detailed_description:
        'Simply put, this Blender add-on allows the user to create anything they want as long as it is built with Minecraft blocks,\
        then import it into Minecraft. These blocks may have arbitrary scale, rotation, and transformation, rather than being\
        constrained to a grid as Minecraft blocks typically are.\n\
        Less simply put, A Minecraft Block Display Entity is a block, or several blocks, which are displayed in-game by way of a command. They are \
        non-interactable, and each block can be rotated, scaled, and transformed according to a 4x4 transformation matrix. This makes \
        the commands extremely difficult to create by hand. Therefore someone has created a browser-based tool for generating these commands, but \
        I have found that it has several drawbacks relating to my use-case. My first plan was to fork the project and customize it for myself,\
        However the project\'s source code is not public and it may be abandoned.\n\
        Therefore I decided to re-create aspects of the project as a Blender add-on which will allow for more extensibility and complexity\
        supported by Blender\'s existing functions and library of other add-ons, as well as open-sourcing my project to ensure\
        continued maintenance and availability.',
        challenges:
        'This has been a very fun project with several major challenges. First off, Blender and Minecraft do not share the same coordinate system.\
        Because Blender originated as a tool for creating art, it places the x/y plane horizontally on the ground, with z representing height above\
        this plane. However, Minecraft, like most video games, takes the x/y plane to be vertical in the world, with z representing "depth".\
        This meant that a significant problem I faced was converting the 4D transformation matrix that Blender gives for objects to the transformation\
        matrix that Minecraft expects for blocks. This problem also reemerges every time anything has to be converted such as rotations or even UV\
        mapping.\n\
        My next and biggest challenge was displaying the Minecraft blocks accurately inside Blender. As far as I know, it is not legal to distribute\
        Minecraft\'s block texture and model data as part of software, and I think this may be why the existing web-based tool cannot be made\
        open-source. Therefore the first step for displaying a Minecraft block is to have the user link the add-on to the location of their\
        Minecraft installation, from which the add-on can extract the model and texture data for blocks. At this point, we deal with Minecraft\'s\
        somewhat unique way of defining block models. Blocks are represented in JSON format as a composition of several transformed cubes \
        which to make up the more complex shapes in Minecraft, such as stairs or a piston. Reverse engineering the method that Minecraft uses\
        to parse these JSON files has been the biggest part of the project.\n\
        The final challenge which I will mention is the continuous challenge of dealing with software in which I am not sure if a solution\
        ever actually exists. You get used to writing code at university where the assignment has already been completed by last year\'s class,\
        by the TAs, or the Professor. You can be sure that there is a reasonable solution that can be found within the allotted time period for\
        the assignment. Blender Python is not a particularly widely used API, nor does it have stellar documentation so I was constantly wondering\
        if what I was doing was correct stylistically, or even possible at all. I spend lots of time looking over other Blender Add-ons and even\
        through the Blender source code when the docs were not adequate. ',
        insights:
        'ChatGPT rant incoming, skip to the end of this section for a TLDR.\n\
        This is the first project I have worked on for which I decided to actively use ChatGPT to aid me. This has been insightful, to say the least,\
        since I am pretty sure that things would have gone a lot faster had I not used it in the first place. The learning experience that has taken\
        place for my journey with ChatGPT is that it has a very specific niche in which it is useful, and trying to get it to do other things will\
        waste more time than it will save.\n\
        I have a lot to say about how useless ChatGPT is, and maybe Github Copilot is less stupid, but as the project advanced I became more and more\
        pleased with the answers that real humans give on the internet. ChatGPT will hallucinate all sorts of things such as methods and properties of\
        objects in libraries that do not exist. If you tell it "I want to make a ball red" it will give you the code Ball.setRed(), even though that\
        method has never existed in the history of the library. If you call it out it will apologize for being wrong, and state confidently that in fact the\
        correct code is setRed(Ball), even though this function has also never existed. It will never admit that it doesn\'t know something. It also gives\
        completely ridiculous solutions to simple problems, importing several (very large!) Python libraries to perform a matrix transformation that I know\
        (and told it) can be simply accomplished by swapping values in the matrix with each other. \n\
        OK, so when is it useful? Well it does happen to be useful when it can do something for which the standard is already well-established and\
        well-documented. It is good at doing things that require no decision-making or problem-solving, especially when the solution\'s correctness\
        is easily verified. For example, it wrote the bones of my script parsing JSON files which were archived in a jar file. This is something which\
        I can easily do, but getting ChatGPT to do it is faster, and it can adapt the typical use-case to fit my use-case.\n\
        TLDR: ChatGPT was mostly useful in this project insofar as I learned when not to use it (which is most of the time, but not all of the time).',
        future:
        'This project has reached an inital milestone where it can render and export all basic Minecraft blocks. Therefore I am\
        quite close to an initial release, which will be functionally equivalent to the existing tool\
        only for the creation and manipulation of Minecraft blocks. There are, however, several other functions of Minecraft Block Displays, such as the\
        ability to render items and text which I have not begun implementing yet.\n\
        My goal for releasing this software is for it to become popular enough that I can experience being an open-source maintainer and learn about\
        what that entails.'
    },
    {
        id: "0",
        title: 'Reverse Tower Defence Game "Breakthrough"',
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
            {url: break_1, caption: "Creating robots, and turning them green"},
            {url: break_2, caption: "Hovering over a laser turret while it fires"},
            {url: break_3, caption: "Hovering over a robot as it gets hit by a rocket turret"},
            {url: break_6, caption: "An example of issues that I completed during Sprint 4. Including an associated PR."},
            {url: break_4, caption: "Winning a level!"},
            {url: break_5, caption: "We gave them names to keep you invested"},
        ],
        detailed_description:
        'As part of my studies at Carleton, I applied and was accepted for a special summer 4th year course in game design. \
        This course brought together a team of 10 students with relevant skills to create a game for a simulated \
        "product owner" who had an idea for the type of game he wanted us to create. We followed a rigorous \
        agile methodology. This means that after an initial prototyping sprint, we completed a sprint every two weeks,\
        creating a working testable product which we received feedback on from testers.\n As part of my involvement in\
        the team I worked on the auto-generation of the map elements, such as turrets, paths, and obstacles, as well as\
        the logic of these turrets. I also worked on polishing many aspects of the game as I was one of the few team members\
        who had a good holistic understanding of all the parts and how they fit together.',
        challenges:
        'A major challenge of this project was learning to work with Git as part of a large (relative to university standards) team.\
        I also found it challenging to estimate workloads as part of Agile. I often found myself underestimating how much work would\
        go into completing any given task. We as a team also realized just how much game design goes into creating content for the\
        game.',
        insights:
        'I learned a lot about writing code as part of a team in a way which can only be learned by doing. Knowing that my code would \
        be extended and built upon by my classmates made it very important that it was well written and well documented. I also learned\
        a lot about Agile practices and gained a practical understanding of the importance of things like burndown charts and planning\
        poker.\n\
        As my first large team project with Git, I learned a lot about its usage with several contributors. With a two-person team,\
        working on a smaller project, you can generally just push to Main whenever you would like to. This is how we started \
        our project and we quickly learned about what a disaster this would be. We then switched to doing our work on individual feature \
        branches, pushing to them as necessary, and only once a feature was \
        complete, would we create a Pull Request (PR) for it to be pulled into Main. We did designate one team member to approve PRs,\
        but it turned into too big of a job, and so a few of us who knew the overall codebase well would meet before a given week\'s build \
        was to be created and coordinate pulling in all of the team\'s outstanding PRs.\nAs a team, we also \
        tracked our Agile tasks as issues in Git. This allowed us to see who was assigned which tasks, and be aware of when they  \
        were being worked on.  This also meant that when a task was completed on someone\'s branch, it could be tagged as belonging\
        to a PR. Once the PR was\
        pulled into Main, the issues would be automatically marked as complete.\
        \nA big thing that I learned about myself was that it was very important for me to have a good overview of everything that\
        was going on in the project. I\
        learned that if I knew what everyone was doing I felt much more involved in the project and much more confident when\
        speaking my ideas about how to proceed. I feel that this knowledge and comfort with the project resulted in me being a\
        leading member of the team.',
        future:
        "The primary issue with the game is one of lack of content. As for any future work on the game, it will certainly require\
        dozens of well-designed levels, as the game is very reliant on the design of its levels to be fun.\n \
        During development, I was a major advocate of creating a map editor so that the game could be extended by a community, possibly\
        on the steam workshop. To this end, I did a lot of the work on auto-generation of maps, which was also helpful for internal\
        development.\n\
        The game also does not have a strongly coherent visual style. If this game were to be released it would need an overhaul by some\
        actual artists."
    },
    {
        id: "2",
        title: 'Test Driven Crazy Eights',
        description: 'A multiplayer web-based Crazy Eights game using test driven development. All code written was preceded by writing a test.',
        techs:
        [
            "Java",
            "Javascript",
            "Spring Boot",
            "Websockets",
            "Test Driven Development"
        ],
        images:
        [
            {url: crazy_1, caption: "Automated testing in progress (yes, this is the ugliest interface ever!)"},
            {url: crazy_2, caption: "All tests pass!"},
            {url: crazy_4, caption: "Cucumber plaintext acceptance tests are so beautiful!"},
            {url: crazy_5, caption: "And the underlying code can be so simple (and used 44 times!)"},
            {url: crazy_3, caption: "A player has won the round"},
        ],
        detailed_description:
        'As a project for a final year course at Carleton, I created Crazy Eights using test-driven development. For this\
        program, all code had to be preceded both by an acceptance test and a unit test. Acceptance tests were laid out by the professor, which tested the game\
        as a black box. These tests would specify actions that players would take, turn by turn, and assert that outcomes were as expected. To create these\
        acceptance tests I used the software Cucumber which was fantastic and allowed tests to be written in plain text, while their actual code could be\
        hidden away at a lower level. This allowed the dozens of similar tests to be written very quickly.\nThese acceptance tests used Selenium to launch four instances of\
        a browser, load into a four-player game, then act as the players, pressing buttons on the browser to perform actions. The underlying game server was then rigged to\
        to ensure players had the cards specified in the test, and the outcome was read off of the browser for all four players to ensure that everything had worked.',
        challenges:
        'The major challenge of this project was writing test-driven code. It is a different way of thinking when you are programming, and it makes certain things quite\
        difficult. You have to have things set up such that they can be tested even if they do not exist yet. You also have to think about the interface of a given function\
        before it is written, so it is a neat exercise in treating your code like a black box.',
        insights:
        'This is a project that I never would have considered doing for fun on my own time, but which ended up being an extremely valuable and interesting experience. \
        As part of the progression of\
        the course, acceptance tests for a previous project were written with JUnit, software which is designed for writing unit tests. This was intended to be a very painful\
        experience because acceptance tests are often quite similar to each other, but not similar enough to necessarily be quickly copied\n\
        When the class was introduced to Cucumber for acceptance tests it became incredibly clear to me how powerful such a tool could be. I ended up enjoying using it and\
        it is so satisfying to spend twenty seconds writing a new test in plain English, and then having that test immediately pass because of code previously written.\n\
        I also learned just how valuable it is to have tests in general. At one point during the project, I added a feature that broke something I had done earlier and caused some\
        seemingly unrelated tests to no longer pass. Normally I wouldn\'t have noticed this until much later, but seeing my tests fail immediately gave me the chance to fix\
        the new code, which was immediately indicated to be flawed.\n\
        Also, it is just so satisfying watching all those tests pass.',
        future:
        'Given that the UI was not graded on this project - neither for usability nor aesthetics, it was pretty severely neglected. I ended up with an extremely utilitarian layout\
        and some elements were awkwardly tagged on at the end. If this project were to be expanded then it would need an overhaul of the frontend with proper images for cards, as well\
        as animations.'
    },
    {
        id: "4",
        title: "Analogue System Monitor",
        description: "Arduino-based physical indicators for computer resource usage.",
        techs:
        [
            "C",
            "Python",
            "Blender",
            "3D Printing"
        ],
        images:
        [
            {url: console_7, caption: "The second phase as currently assembled, including connection to the IBM 5151"},
            {url: console_1, caption: "A video of the first phase connected to my PC"},
            {url: console_3, caption: "The complete assembly for the second phase with mock circuit boards"},
            {url: console_4, caption: "LCD holder with a mock circuit board"},
            {url: console_5, caption: "LCD holder alone"},
            {url: console_2, caption: "Frame alone"},
            {url: console_6, caption: "As assembled"},
        ],
        detailed_description:
        'This has been a very long-running hardware and software project of mine. I have always liked the idea of analogue outputs and inputs, so I came up with some ways to\
        add them to my PC. The "first phase" was to hook up some analogue panel metres (circle gauge things) to an Arduino\
        so that I could monitor my PC\'s CPU, RAM, and GPU usage. This involved buying the panel metres, adding a resistor to them so that their full range could be expressed\
        within the 5V output of the Arduino, and then getting the Arduino to give them signals. After this, I had to get the Arduino to communicate with the PC, which requires a script\
        to be run on the PC. Once that was\
        completed, I was able to have my initial analogue monitoring system.\n\
        The next thing I added was a switch so that I could control the mute of my microphone. I also toyed with adding a potentiometer to control volume, but all of the\
        potentiometers that I had lying around were too noisy to rest on a nice value out of 100.\n\
        Finally, more recently I revived the project for its second phase to make use of some more components that I have acquired including a small LCD screen. \
        The project now combines the Arduino with\
        a Raspberry Pi, so that\
        it can stay on all the time. Now it can tell the weather (in my room) and store that historical data (might be interesting later once I get a bunch of data).\
        A big part of this phase was 3D printing cases for the gauges, LCD, and a potentiometer so that they could be mounted.',
        challenges:
        'There is a lot that goes into hardware that I had very little experience with going into this project. The main challenge for this project was to learn about integrating\
        software and hardware, and to learn about communicating over serial. In the second phase, I also had to 3D print parts that would be perfect fits for existing circuit boards,\
        which was a neat challenge.',
        insights:
        'Probably the biggest thing that I learned was about a pull-up resistor.\
        The first time I used a switch, I simply hooked it up between a 5V output and an input on the Arduino and said "Check whether this input is 5V or not". However,\
        it turns out that if you leave a switch open like that, then your input will be noisy. The solution is to instead wire the 5V to the input through a resistor, and then to\
        ground through the switch. This way, when the switch is open, the input registers current through the resistor, but when the switch is closed, that current goes straight to\
        ground, leaving the input to register no input. I\'m not sure why I bothered to write that all out, but I thought it was interesting.\n\
        During the second phase of the project, I also improved my skills in Blender relating to 3D printing and prototyping.',
        future:
        'This is an ongoing project that I am actively working on. The next step is to get more displays working for the LCD. This might require sending data from the PC not only to the\
        Arduino, but also to the Raspberry Pi over serial.\n\
        I have also managed to connect the Raspberry Pi to an old IBM5151 TTL monitor I have from 1981. This required a custom monitor setup to write the appropriate tv signal for\
        350 lines at 50hz. I have plans to show additional data on this monitor when prompted by setting a potentiometer.'
    },
    {
        id: "3",
        title: "Minecraft Server Contributions Chart",
        description: "A program that generates a Github-style contributions chart for my Minecraft server.",
        techs:
        [
            "Python"
        ],
        images:
        [
            {url: mc_1, caption: "The resulting chart. Rendered in May 2023."},
            {url: mc_2, caption: "Some output, showing how time errors and missing logouts are handled."}
        ],
        detailed_description:
        'This was a neat little project that came about from Minecraft not having a "Time Played" counter like other software does. I have been building\
        a Minecraft city on a personal server for over 10 years, and I wanted to find out how many hours I have spent building on the server. It turns out\
        that the server logfiles date back to the beginning and they store the log-on and log-off times of all players who have been on the server. This\
        ended up being a lot more complex than I expected!\n\
        Eventually though, after determining the number of hours I had played I moved on to the more interesting step, which was rendering a "Github style"\
        contributions chart showing how much time I put in each day of the last decade.',
        challenges:
        'The biggest challenge here is that the data is not all that clean. Many log-ons are not succeeded by a log-off and many log-offs are not preceeded by a log-on.\
        Sometimes this is the result of the logfile being split in two, sometimes the data is just lost.\n\
        I also encountered a strange problem, which is that sometimes time goes backward. This creates all sorts of problems for my code. I eventually determined most of these occurrences to\
        be caused by dual-booting Linux. Linux expects the motherboard to have time stored in UTC, while Windows expects it to be in local time. This means that when booting into\
        Windows after booting into Linux, the time displayed is four or five hours in the past.',
        insights:
        'The biggest thing that I learned from this project is to never underestimate a set of data\'s likelihood of being imperfect. When I started, I figured it would take a couple of hours\
        to compile an answer, but it ended up taking several times longer than I had anticipated.\n\ If I were starting this project again, or if I decide to\
        refactor it, my primary concern will be compartmentalizing the code so that reading the file results in completely sanitized data that will then be passed along for\
        interpretation. This will allow my interpretation code to treat the data collection code as a black box, and assume that the data is perfectly correct.',
        future:
        'I recently uncovered the original log file, which is a single (very large!) text file for all logs up until a certain date in 2013. This is different from\
        the newer log files for which\
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
            {url: league_1, caption: "The resulting histogram comparing our deaths with our teammates' deaths (the trend is clear!)"},
            {url: league_2, caption: "A more granular histogram showing individual friends"},
        ],
        detailed_description:
        'This is another simple Python script. This project was motivated by a discussion I had with my friends about our League of Legends teammates. We hypothesized that we were\
        dying significantly less than our randomly assigned teammates, and I realized that Riot (the creator of League of Legends) offers API keys to developers, and that\
        I could figure out the truth myself.\n\
        The script that I ended up creating accesses the API to load up the last 100 games played by me and my two friends and compiles several stats about these games,\
        most notably the number of occurrences of n-death games. I then plotted this data on a histogram to reveal that yes, in fact, we were dying less than our teammates. Unforunately\
        upon graphing some other data, it also revealed that we were getting fewer kills than our teammates as well. It turns out that we just have a less volatile playstyle.\n\
        I then ended up getting the script to give us a whole bunch of other data that we thought was interesting.',
        challenges:
        'This one wasn\'t too challenging. The most difficult part was wading through the incomplete API docs and reading responses to API requests to try and figure out what the\
        structure of the returned data looked like. Once I had that sorted, it was a simple pyplot adventure.',
        insights:
        'For this project, I learned about interacting with a web API to gather data from a third party so that I could analyze it. It is a pretty straightforward process, but this gave\
        me insight on how web APIs work in general, and how I would want to use them in the future.',
        future:
        'I have a lot of thoughts about where to take this project. I think that it would work well as a website that anyone could use, although securing an API key from Riot for\
        large numbers of requests (the dev one is limited to 100/minute) would be difficult. I also had several other stats that I wanted to pull up. My friends and I don\'t play\
        League of Legends anymore though, so this project is on hiatus.'
    },
    {
        id: "6",
        title: "This Website",
        description: "A basic website with some fun animations showcasing projects I've created",
        techs:
        [
            "React",
            "Typescript",
            "CSS",
            "HTML"
        ],
        images:
        [
            {url: site_4, caption: 'This poster was one source of inspiration for the original design of the site'},
            {url: site_1, caption: "Original brutalist design on desktop"},
            {url: site_2, caption: "Original brutalist design on mobile"},
            {url: site_5, caption: "Current neumorphic design on desktop"},
            {url: site_6, caption: "Current neumorphic design on mobile"},
            {url: site_3, caption: 'This is easily extensible (I just added this image as "site_3"'},
        ],
        detailed_description:
        'I hope someone reads this, to be honest, I put a lot of work into it. I realized that I had created a bunch of "slightly cool" projects\
        and there was certainly no room to put them on my resume, so I wanted to make a website that could be easily skimmed over without\
        feeling like you were obligated to read any or all of it. Therefore my goal was to make it easy to scan for relevant items, and then\
        easy to just skim over the images associated with that item without needing to read all of the description. Although I do outline\
        my thoughts on the projects for those who are interested.\n\
        As for the creation of the website itself, I chose to do it in React because I had some experience with it from school.\
        After that, I looked for inspiration from Swiss-style typography to make a design. I have a great appreciation for graphic design\
        and typography, but with no training, and not much time put into it, I ended up going with a simple design that I borrowed from\
        a poster for the 1964 Tokyo Olympics.\n\
        Another big aspect of the website was that I wanted it to generate the project visuals from a "database" (a js file). This would make it easily\
        extensible and editable without me worrying about going into HTML and changing formatting or anything. Each project has the same\
        layout and is generated from a dictionary that holds the relevant data.\n\
        As far as I can tell, the website should be usable on all modern browsers, including Safari (why is Safari weird). It also will\
        detect whether the user is using touch or pointer, to allow the buttons to show up without needing to be hovered if the user does\
        not have a mouse. This is separate from detecting if the screen is small to switch to mobile mode because tablets should use\
        the larger screen mode. I have a touchscreen laptop with a detachable keyboard and it switches modes perfectly when\
        the keyboard is attached and detached!',
        challenges:
        'Having barely used React, or set up a website that is supposed to look good and be used on multiple platforms, this was a big\
        challenge for me. I had a lot of trouble coming up with a design that was simple, but extensible. I wanted to have a single\
        page design to keep things simple and aesthetic, but I needed a way to keep some information hidden, so I came up with\
        the idea of expanding and contracting projects.\n\
        It was also a big challenge just getting started in React. When you are working on a school project there is always a very specific order\
        to do things and you can be certain that a solution exists. For my open-ended problem, it took me a while to even decide how to start and\
        what to do. I found it difficult to know what the standards even were and if I was following them.',
        insights:
        'I learned almost everything from scratch for this website, so if you see it here, then it\'s something I learned. Mostly I learned about how\
        React works, and how it uses JSX to generate elements. I of course learned a lot about CSS styling and how to line things up nicely on a page.\
        I learned about mobile vs web, and how to lay things out so that it works on both. I also learned about how navigation is supposed to work for\
        a modern React webpage. Ideally, when you expand a project, my website would route a new URL, say ".../projects/1", allowing you to use the back button to\
        collapse said project. However, I found that based on my current\
        implementation this was almost impossible. If I were to make this website again I would probably choose a design that made it easier to\
        do things the default "React way". On the other hand, not knowing makes for a more unique design, though in theory, it will be harder to\
        navigate for someone used to typical web pages.\n\
        From the design side, I learned a lot about what makes a good website. Things like what font weights to use, and how to lay stuff out. I found\
        a great explainer of what makes a design good or bad and I went through changing everything so that I removed the bad parts. For example,\
        using pure black is not a good idea, you should use an off-black, ideally tinted in the colour of other elements on the page.',
        future:
        'This is version 1.1 of this website; I have lots more ideas to expand it. Next up is making the display of images a bit better, especially on mobile,\
        adding the possibility of using video (though gifs seem to be working well), and adding dates onto projects.\n\
        I also need to brainstorm a better way to collapse the projects. As of right now, you have to scroll back up to collapse a project again. Ideally\
        the collapse button would move to the bottom of the section, but this doesn\'t really work with the current design on desktop, though it would work\
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
            {url: chord_1, caption: "I included the relevant paragraph"},
            {url: chord_2, caption: "And here"},
            {url: chord_4, caption: "Here we just zoom in on the louder part of the spectrograph"},
            {url: chord_3, caption: "And here are the results"},
        ],
        detailed_description:
        'This project was completed as a final project for an AI course at Carleton. It was my first time using a neural network\
        so I ultimately decided on a simple classification problem of musical chords. The program would be able to accept a sound file\
        of a chord being played, and identify it as major, minor, major7, augmented, or diminished. This is, of course, something which\
        can be easily accomplished by more traditional means, but I thought this would be an interesting application of a neural network\
        for learning purposes.',
        challenges:
        'As with most neural network projects, this classifier relies on having a large set of data to train on. The biggest challenge\
        here was gathering a large set of classified chord data. Ultimately, this does not exist so I ended up generating synthetic data\
        using synthesized pianos. It was also a challenging and exhaustive process learning about and adjusting all the parameters of the\
        network to ultimately achieve a high rate of correct classification.',
        insights:
        'Though it was a fairly simple neural network project, it was my introduction to classifying data with a neural network so I learned\
        a lot about what goes into getting nice results and I gained a lot of familiarity with\
        the tools and methods required in AI. The project was very useful as a backbone for later courses.',
        future:
        "Ultimately the classifier was not tested on real data, and this is something that I regret not having time for. The next steps for\
        the project would need to see it being able to classify real recordings of chords. I would be especially interested in seeing if the\
        model, which was trained on synthetic data, would be able to classify real data (I suspect it would)."
    },
    {
        id: "7",
        title: "Cities: Skylines Assets",
        description: "A collection of 3D modeled building assets that I created for the game Cities: Skylines",
        techs:
        [
            "Blender",
            "Photoshop"
        ],
        images:
        [
            {url: buildings_1, caption: "Several buildings and variations"},
            {url: buildings_2, caption: "As they appear on my Steam profile"},
            {url: buildings_3, caption: "Detail"},
            {url: buildings_4, caption: "Showing the night texture"},
            {url: buildings_5, caption: "More detail"},
        ],
        detailed_description:
        'I am an avid Cities: Skylines player. I have always loved cities since I was a kid, and this game is the best city-building game\
        ever created. It has an expansive library of user-created buildings which can be subscribed to on Steam. As I was building\
        a Japanese-themed city at the time, I noticed that this particular phenotype of setback buildings was present in real Japanese\
        cities, but missing from the existing library of custom buildings. I therefore took it upon myself to create some.\n\
        I started with a few simple buildings and moved on to bigger projects.\n\ This is only tangentially\
        related to software development, but I think it\'s cool.\n\
        I am proud to say that these assets have each been downloaded around 10,000 times and are some of the most popular assets for\
        creating a Japanese-style city! Every time I see someone post a screenshot of their Japanese build I look out for my buildings\
        and I can usually spot them.',
        challenges:
        'I was already familiar with the 3D modeling tool Blender before this project, but making a building for use in a game alongside 100s of\
        other models require a degree of responsibility. I had to start by downloading and analyzing my peers\' models so that I knew about\
        what the standards were for vertex count and texture size. Besides creating a simple coloured diffuse texture for the building, there\
        are also several other textures that have to be created. There are textures for roughness, normals (bumps), illumination of windows at\
        night, and masking which areas of the building will be coloured to create variations. Then once you\'ve done all that, you have to do it\
        again for the LOD model (stands for Level of Detail, but it is a low poly version of the model to be viewed from far away).',
        insights:
        'These buildings taught me about the process involved in creating and maintaining a game-ready asset. There is a lot more that goes into these than for\
        some silly 3D art that I will use as a wallpaper or something. There were established community standards that I had to follow and when my\
        assets had a bug then I had to be active in the comments section to find and fix it.',
        future:
        'I am still very interested in creating buildings for Cities: Skylines games and the sequel, Cities:Skylines II, was released in October 2023.\
        I was originally planning to update all of my assets for this new game, however, it does not yet include an asset editor, much to the continued\
        disappointment of myself and the rest of the community. Once this asset editor is released I will certainly be resuming asset development, but\
        until then, I don\'t have much motivation to create assets for a game which I hope will eventually be surpassed in every way by its sequel.'
    },
]