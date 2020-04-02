# about-me

##Day 1

### Features Added
- created new project with HTML, CSS, and JS files
- **"About Me Guessing Game"** contains 5 **prompt** questions 
  - uses .toUpperCase() or .toLowerCase() *requires* 'yes' or 'no' answers
  - lets user know if they are right or wrong
  - console.log() utilized to assist dev
  - Gets *user's name*, greets user, and displays a "thank you for playing" message at conclusion
  
##Day 2 Updates

### Features Added
####HTML Updates
- Top "Top Ten" **ordered list** at bottom of page
- Work Experience and Education Summary become **unordered lists**

####JS Updates
- Add *6th question* : guessing game that takes a **number** by prompting the user to guess a number
  - Indicates alert for "too high" or "too low"
  - Gives user **exactly 4** opportunities to get correct answer
    - after all exhausted, tell user correct answer 
  - **loop**
  
- Add *7th question* : **multiple possible correct answers** store in an **array**
  - Gives user **exactly 6** attempts to guess correctly
  - guesses end with *correct* answer or *run out of guesses*
    - then displays all possible correct answers
  - **loop**

- Lets user know **final score**
  - Keeps track of *total correct* answers, then tell user final score
