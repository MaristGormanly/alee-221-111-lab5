# alee-221-111-lab5

This is a social media page where users can share their comments/ideas through this page! Easy and simple to use.

Due to its work-in-progress platform, we encourage user feedback on our software. Please share any feedback/comments/opinions on our site.

Dependencies:
-Node.js
-MySQL

Database Setup:
-Install MySQL
-Run "npm install mysql" before running "npm start"

Start Setup:
-Install & configure Node.js and MySQL. After that, please clone the git repository as shown below:
  git clone https://github.com/MaristGormanly/alee-221-111-lab5.git

-Copy the '.env.example' file and call the new copy '.env'.

-In the '.env' file, make these necessary changes:
  (Optional) FRONT_END_NAME changed to your own theme.
  SESSION_SECRET = "(anything in the string)"
  EMAIL_TOGGLE = false
  STRIPE_TOGGLE =false
  GITHUB_TOGGLE = false

-Save '.env' file

-Install dependencies by doing the following:
  npm i

-Start the software by doing the following:
  npm start

-The output should look like this (at the end):
  "Social Media Login Page is now up!"

Current Features:
-Log-in feature
-View blogs
-Create a blog

Upcoming Features:
-Sign-up feature (including logging in with other existing social media accounts)
-Comment on blogs
-Delete a blog