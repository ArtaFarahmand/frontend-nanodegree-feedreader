# Testing a Feed Reader with Jasmine

## Table of content

- [Project Overview](#Overview)
- [Instructions](#instructions)
- [Installation](#installation)
- [Project Tests](#tests)
- [Credits](#credits)
- [External Code used in this project](#externalcode)
- [Contributing](#contributing)

# Project Overview

Udacity over view for this project states that "In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in."

## Instructions

To run the feed reader tests, scroll to the bottom of the page and click on each relevant test that you would like to perform. You can also run all the tests at once.

## Installation

To run the feed reader project:
  - Download the repository as a zip-file and open the index.html on your prefered browser
  
## Project Tests 

1. The first test will ensure that allFeeds objects are defined
2. The second test will ensure allFeeds have a URL
3. The third test will loop through each feed in allFeeds to ensure names are defined and not empty.
4. The fourth test ensure that the menu is hidden by default
5. The fifth test ensure that visibility of test is changed when clicked
6. The sixth test ensure that loadFeed is called and completes its work and has one .entry and .feed container
7. The seventh test ensure that .entry-link starts with "http://" or "https://"
8. The eight test ensures that new feeds are loaded correctly.

## Credits

- [matthewcranford](https://matthewcranford.com/)

## External Code used in this project 

The starter code for this project comes from the following Udacity Frontend Feed Reader repository. I downloaded it directly as a ZIP-file from my Udacity classroom instead of forking or cloning it. That is why you don't see a connection between the starter code and mine.

# Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
