# MKS Front-End Cohort 1 Final Projects

## Your mission, should you choose to accept it...

1. Fork this repo! This will make a copy of it in your own GitHub account. By default you can't edit _this_ repo because you don't have access, but by forking it, you'll have control. Then you can make changes and send me a pull request to add your changes to my project.
2. `git clone` your newly forked repo into your projects folder. Remember, cloning a repo makes a folder for it, so you don't need to create one first!
3. `cd` into the `projectlist` directory that has been created.
4. Confirm you are on the `master` branch by running `git status`. We don't want to make changes against master in case we screw something up, so...
5. Make a new git branch and check it out: `git checkout -b add-my-project`. 'add-my-project' is the name of my new branch, and `checkout -b` tells git to make a new branch AND go into it.
6. `git status` should tell you you are now on branch 'add-my-project'.
7. Follow the install commands below so you can use [bower.io](Bower) to install Foundation, & run Sass!
8. Add yourself to the project list in `index.html` by duplicating the sample div and adding your content.
16. Make your project name in `index.html` link to your project page.
9. `git add --all` to add those changes
10. `git commit -m "adding MYNAME to project list`
11. `git push`. It may ask you to set an upstream branch, which means that you have a branch locally but not on github.com. So run the command it asks for!
12. Now you can go to your repo on github.com and see the branch. You can also compare changes against master.
12. Make a new file in `/projects` folder called `project-[MYPROJECT].html` where [MYPROJECT] is a short name for your actual final project idea*.
13. Git add and commit!
14. Copy the HTML in `projects/project-sample.html` into your new project page and add your own info!
15. Git add and commit!
16. Make a new variable in `custom.scss` that is the main color for your project.
17. Then add an ID and the readable mixin to make your project page have your custom background color and always have readable text.
17. Git add and commit!
18. `git push` all your final changes up to github.com.
19. Now we want to compare your changes to master and merge them back in. GitHub has a handy-dandy Pull Request page that lets us easily see if there are conflicts and what changes we made.
20. Go to your repo—there should be a yellow banner saying you recently pushed a branch. Click there to compare them. If not, go to your branch in the dropdown and then hit the green Compare button next to it to generate a Pull Request.
21. Most likely you won't have any conflicts, because you are just making changes against your own branch. Yay! Use the page to merge your changes to your master branch.
22. NOW we want to generate a pull request against the original repo. This time we'll definitely have merge conflicts! Yikes!

*yes, we know you may not have settled on an idea yet, that's OK.


## To Install

Check to see if you have Node installed: `node --version`

If you do not: `brew install node`

Now install Zurb Foundation using Bower: `bower install foundation`

Bower is a package manager, so it will keep Foundation up to date for you!

Run the following command to make Sass watch for changes to your stylesheet: `sass --watch scss/app.scss:stylesheets/app.css`

This says, "Sass, watch the file `scss/app.scss` to see if there are any changes to it. If there are, compile it to regular css at the file `stylesheets/app.css`. Yay!"