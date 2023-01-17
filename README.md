
## Angular Unit and E2E testing.

Here I follow this course [Angular Testing Course](https://angular-university.io/course/angular-testing-course).

I will try my best to maintain the codes shown in this course, and put them each in their separate branch.

I start a branch before I start watching a video and at the end of the video, I commit the changes and push and merge the branch to master.

So if you want to say watch the video and continue doing from from 24th video. 
Then you will have to checkout the branch of the 23rd video. Because this branch will have the code for end of the 23rd and start of the 24th video.

# Steps for using
### At first clone the repo using
```
git clone https://github.com/minhaz1217/Angular-Unit-and-E2E-Testing.git

cd Angular-Unit-and-E2E-Testing
```

### Checkout the branch you want to use
```
git checkout Section-6_The-Single-Data-Observable-Pattern/38_Refactoring-an-Angular-Reactive-Application-to-OnPush-Change-Detection
```

# Installation pre-requisites

Please install `Node 18 Long Term Support Edition (LTE)`.

# Installing the Angular CLI

With the following command the angular-cli will be installed globally in your machine:

    npm install -g @angular/cli 


# How To install this repository

We can install the master branch using the following commands:

    git clone https://github.com/minhaz1217/Angular-Unit-and-E2E-Testing.git
    
This repository is made of several separate npm modules, that are installable separately. For example, to run the au-input module, we can do the following:
    
    cd Angular-Unit-and-E2E-Testing
    npm install

Its also possible to install the modules as usual using npm:

    npm install 

# To Run the Development Backend Server

We can start the sample application backend with the following command:

    npm run server

This is a small Node REST API server.

# To run the Development UI Server

To run the frontend part of our code, we will use the Angular CLI:

    npm start 

The application is visible at port 4200: [http://localhost:4200](http://localhost:4200)


# This is the output of `ng version` from the project folder. This is here only as a failsafe backup for later.
```
Your global Angular CLI version (15.0.4) is greater than your local version (15.0.2). The local Angular CLI version is used.

To disable this warning use "ng config -g cli.warnings.versionMismatch false".

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 15.0.2
Node: 18.12.1
Package Manager: npm 8.19.2
OS: win32 x64

Angular: 15.0.2
... animations, cli, common, compiler, compiler-cli, core, forms
... language-service, platform-browser, platform-browser-dynamic
... router

Package                            Version
------------------------------------------------------------    
@angular-devkit/architect          0.1500.2
@angular-devkit/build-angular      15.0.2
@angular-devkit/core               15.0.2
@angular-devkit/schematics         15.0.2
@angular/cdk                       15.0.1
@angular/material                  15.0.1
@angular/material-moment-adapter   15.0.1
@schematics/angular                15.0.2
rxjs                               6.5.4
typescript                         4.8.4
```

# Made with <span style="color:red;">❤</span> By - [Minhazul Hayat Khan](https://github.com/minhaz1217)