# micro template usage

This project is demonstrating how to use the microtemplate module.  
Microtemplate is a small render function that is based on http://ejohn.org/blog/javascript-micro-templating  
It's a simple function that was written by John Resig (the lead dev of jQuery) and was designed for speed. It can run on the client or on the server.  
Here are more template engines: http://garann.github.io/template-chooser/

I use the 'fs' module to read the template file into a variable at build-time.

## Content

* [Install](#install)
* [Complie browserify](#watch)
* [Run](#run)
* [Example](#example)

## Install

    npm install

## Compile browserify

    npm run build

## Run

    open index.html in the browser

## Exmples

### Simple example

    var microtemplate = require('microtemplates');
    microtemplates('Hello, <%= name %>')({name: 'Paul'});

=>

    Hello, Paul


### Example with template file using browserify

template.html

    <div>
      <p>
        <a href="<%=profile_url%>"><%=name%></a>
      </p>
    </div>

index.js

    var tmpl = require('microtemplates');
    var fs = require('fs');
    var template = fs.readFileSync('template.html', 'utf8');
    var users = document.querySelector.bind(document);

    users.innerHTML = tmpl(template)({name: 'josh', url: 'www.google.com'});

=>

    <div>
      <p>
        <a href="http://www.google.com">josh</a>
      </p>
    </div>
