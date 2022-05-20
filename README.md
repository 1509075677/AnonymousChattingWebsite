# cse442-spring2022-team-12pm

**Motivation**

Helping people anonymously mainly introverted people to talk to others.

**Description of the proposed solution with the technology stacks to be used.**

Javascript for the front-end design Javascript and PHP for the back-end development. 

**End goals for the project (how will the demos look like?)**

A website that requires you to log in.Then click a button to blindly find people to talk to based on their interest. To get to know their interest these questions will give multiple questions when they create their log in account and each time they press the button. If someone has the same response or high correlation to the other response then they match and they talk. If they both like each other they get more time to talk and will have the option to friend each other and then they will uncover their real identity instead of being anonymous.

**Four major milestones to reach the end goals (in line with the Sprint cycles)**

**Sprint 1:** Create Front-End for Landing Page, Login Page, and Register Page

**Sprint 2:** Create Back-End for Login Feature, Profile Feature. Create Front-End for the Designer Page and Profile Page

**Sprint 3:** Adding Anonymous Talk Feature, Identified Talk Feature, and Search Username Search Feature

**Sprint 4:** Fixing Bug and Optimize the Code

**Figma Link:**
https://www.figma.com/file/kOzRcYqIjCiVAkIFcMreK9/CSE442?node-id=0%3A1

**How to Run Our Code in Server** <br/>
  Prequest: install Cisco Annyconnect Secure Mobility Client and connect to SUNY buffalo's vpn
  1. First we need to open a terminal
  2. Then, type to following code(<ubit> mean enter your own ubit): ssh <ubit>@cheshire.cse.buffalo.edu
  3. Type the password of your ub account
  4. Type: cd /web/CSE442-542/2022-Spring/cse-442t/cse442-spring2022-team-12pm/front
  5. Then run the server using: npm run dev
  Now you can access website using the following link: <br/>
    http://cheshire.cse.buffalo.edu:3302/ <br/>
  Done running the website type: pkill -f node <br/>
  This avoide crash from next time running it <br/>
  
**How to Run Our Code in Local** <br/>
  Prequest: <br/>
    Node.js (https://nodejs.org/en/) <br/>
    Node Package Manager (Terminal command: npm install) <br/>
    Our Code (Terminal command: git clone git@github.com:xlab-classes/cse442-spring2022-team-12pm.git) <br/>
  1. Go to the folder of the code: cd /......./cse442-spring2022-team-12pm/
  2. Install npm in cse442-spring2022-team-12pm folder using ternimal
  3. Run the code using: npm run dev
  4. Then it will pop out the http://localhost:3302/ 
  5. Now you can access the website
  Warming: in order to go to another page, you need to change all the code's website link from: <br/>
              http://cheshire.cse.buffalo.edu:3302/ to http://localhost:3301/ <br/>
                                                    or <br/>
          http://cheshire.cse.buffalo.edu:3302/main to http://localhost:3301/main <br/>
