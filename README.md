# MKS Front-End Cohort 1 Final Projects

## Your mission, should you choose to accept it...

1. Fork this repo! This will make a copy of it in your own GitHub account. By default you can't edit _this_ repo because you don't have access, but by forking it, you'll have control. Then you can make changes and send me a pull request to add your changes to my project.
2. `git clone` your newly forked repo into your projects folder. Remember, cloning a repo makes a folder for it, so you don't need to create one first!
3. `cd` into the `projectlist` directory that has been created.
4. Confirm you are on the `master` branch by running `git status`. We don't want to make changes against master in case we screw something up, so...
5. Make a new git branch and check it out: `git checkout -b add-my-project`. 'add-my-project' is the name of my new branch, and `checkout -b` tells git to make a new branch AND go into it.
6. `git status` should tell you you are now on branch 'add-my-project'.
7. Follow the install commands below so you can use [bower.io](Bower) to install Foundation, & run Sass!
8. Add yourself to the project list in `index.html`.
9. `git add --all` to add those changes
10. `git commit -m "adding MYNAME to project list`
11. `git push`
12. Make a new file in `/projects` folder called `project-[MYPROJECT].html` where [MYPROJECT] is a short name for your actual final project idea*.
13. Git add and commit!
14. Copy the HTML in `projects/project-sample.html` into your new project page and add your own info!
15. Git add and commit!
16. Make a new variable in `style.scss` that is the main color for your project.
16. Make your project name in `index.html` link to your project page.
17. Git add and commit!

*yes, we know you may not have settled on an idea yet, that's OK.


## To Install

Check to see if you have Node installed: `node --version`

If you do not: `brew install node`

Now install Zurb Foundation using Bower: `bower install foundation`

Bower is a package manager, so it will keep Foundation up to date for you!

Run the following command to make Sass watch for changes to your stylesheet: `sass --watch scss/app.scss:stylesheets/app.css`

This says, "Sass, watch the file `scss/app.scss` to see if there are any changes to it. If there are, compile it to regular css at the file `stylesheets/app.css`. Yay!"