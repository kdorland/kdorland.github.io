# Asynchronous JavaScript for beginners

Anyone writing JavaScript needs to understand the asynchronous nature of the language to some extent. That something is asynchronous means that it doesn't happen right away. Essentially, with JavaScript, you often have to write code that is triggered later at some unspecified time. This complicates matters, since you don't know the order of which your code is run! Luckily, there are ways to write async code in a simple and easy to understand manner if you go about it in the right way. I will try to explain how to do that with this guide. 

I'm going to assume you already know a little bit of JavaScript. Otherwise, I recommend [taking your first steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps) over at MDN.

## Going to Callback Hell
Let's start at the beginning. Until recently, one way to handle async code in JavaScript easily led to "callback hell". There are ways to avoid it by following best practices, but recent additions to the JavaScript programming language has made it even easier to avoid.

Here is an example of *callback hell* (found on StackOverflow):

```javascript
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  let html = "<h1>Demo page</h1>";
  getSomeDate(client, function(someData) {
    html += "<p>"+ someData +"</p>";
    getSomeOtherDate(client, function(someOtherData) {
      html += "<p>"+ someOtherData +"</p>";
      getMoreData(client, function(moreData) {
        html += "<p>"+ moreData +"</p>";
        res.write(html);
        res.end();
      });
    });
  })
});
```
You can tell this is hell from the last four lines with all the `})`; Can you easily tell where each function starts and ends? Imagine if you had even more nested functions like this!

To explain the example above a bit further, the reason you have functions inside other functions is because the inner functions are "callback functions". This is the essence of async JavaScript code: writing callback functions. Let me explain what a callback function is.

## What is a callback function?
The problem with writing asynchronous code is that it is not run in the order it appears in. Consider the example below:

```javascript
const result = addTwoNumbers(2, 3);
console.log(result); // Prints "5"
```
This is pretty straight-forward. It first calls a function to add two numbers and then on the next line it prints the result. This is called synchronous code. 

But then consider the following example:
```javascript
downloadGIF("http://example.com/cat.gif", downloadCallbackFunction);
function downloadCallbackFunction(data) {
  // Do something with downloaded gif data
}
console.log("Download started");
```
In the above example, the log message "Download started" will be printed before the download has finished. The way to handle the finished download is to give a function as input to the `downloadGIF` function. In our case, that function is named `downloadCallbackFunction`, but any name works really. The thing about callback functions is that they are really just ordinary JavaScript functions. There is nothing special about them compared to other ordinary functions in JavaScript. It's just that they are written to handle "callbacks", meaning being called asynchronously when something happens.

## Fixing Callback Hell by modularizing 

There are ways to avoid callback hell when writing a lot of callback functions, and one of them is to separate each callback into it's own named function like `downloadCallbackFunction` above. This is called modularizing your code. 

The example in the previous section used *anonymous functions* (those without a name) directly as input parameters, which gave the deep nested structure you saw. Let's try fixing it up a bit:

```js
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let html = "<h1>Demo page</h1>";
    getSomeData(client, handleData);

    function handleData(someData) {
        html += "<p>"+ someData +"</p>";
        getSomeOtherData(client, handleOtherData);
    }
    
    function handleOtherData(someOtherData) {
        html += "<p>"+ someOtherData +"</p>";
        getMoreData(client, handleMoreData);
    }
    
    function handleMoreData(moreData) {
        html += "<p>"+ moreData +"</p>";
        res.write(html);
        res.end();
    }
});
```
As you can see, each part is much more readable and easy to understand, but the underlying problem remains. The execution of the code goes back and forth between our code and each "getData" function that we rely on. I've written the functions in the order in which they are used, but in practice they could appear in any order adding further to the confusion. 

## Fixing Callback Hell with promises
In recent versions of JavaScript, the modularization of callback code has been formalized into a concept called "promises". Promises are objects representing some task that will finish "later". Most beginning JavaScript developers usually first encounter promises when using the popular `fetch API` found in all recent web browsers: 
```js
fetch('http://example.com/cat.json')
  .then(response => response.json())
  .then(data => console.log(data));
```
This is essentially the same as using callback functions, but avoiding the deep nested structure we had in the first example. The `.then` function used above is part of the Promise object returned by fetch, and is used to instruct fetch in what to do next. Each `.then` can be followed up by another `.then`, which is called *chaining*. The use of chaining  is much more pleasant than the nested callback structure seen earlier. Using promises gives us a lot of benefits through its many functions. I recommend that you read more about the usefulness of promises by reading [the examples on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises).

But the greatest thing about promises, in my opinion, is not the concept in itself, but the fact that it is the underlying structure of the new *async / await* feature of JavaScript. Using async / await makes writing beautiful asynchronous code in JavaScript easier than it has ever been before, as I will demonstrate in the next section.

## Writing pleasant async code with *async / await*
Let's see how it works. Below is a yet another version of the callback hell example, this time using the `async` and `await` keywords. Pay special attention to how those keywords are used.

```js
http.createServer(async function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let html = "<h1>Demo page</h1>";

    const someData = await getSomeData(client);
    html += "<p>"+ someData +"</p>";

    const someOtherData = await getSomeOtherData(client);
    html += "<p>"+ someOtherData +"</p>";
        
    const moreData = await getMoreData(client, handleMoreData);
    html += "<p>"+ moreData +"</p>";
    res.write(html);
    res.end();
});
```

Wasn't that neat? No callbacks, no chained *thens*. Just a few function calls adding data to the `html` result. If you removed the two new keywords, it wouldn't look like asynchronous code at all!

It's actually more or less the same code behind the scene as the promise example from the previous section. The way `await` works is by calling `then`  for you, and then *waiting* until the task is finished. The consequence is code that actually executes from top to bottom, making it much easier to read and understand. 

## Conclusion
Obviously this was just a very quick introduction to asynchronous code in JavaScript. Promises are very powerful and can do a lot of complex stuff like [waiting for several promises to complete before calling the callback](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all). Also, *async / await* comes with some complexity of its own, namely that `await` must only appear inside `async` functions. I highly recommend you study *async / await* in [further detail on MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await). Your asynchronous code will thank you later. 

I also completely skipped the part on how to make your own promised-based functions. Most beginners won't really need this, but I case you want to see how, [MDN has you covered](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Examples).
