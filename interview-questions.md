# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a block in Ruby?

  Your answer:
  If it's anything like a code block in JavaScript, a block is where logic takes place within the scope of a function.

  Researched answer:
  A block is an anonymous function passed into a Ruby method that can take parameters, kind of like High-Order functions in JavaScript. A single line block is signified by curly braces, while a multi line block is surrounded by a do-end statement. The parameters specific to the block are delimited by two pipes.


2. What is a gem?

  Your answer:
  A gem is an open source Ruby file created by other developers to be utilized to save time on certain processes. It's comparable to a JavaScript library.

  Researched answer:
  A gem is a Ruby plugin or extension in the form of a third-party library. A gem can be shared by developers and then utilized by others to make the community's life easier. RSpec is an example of a Ruby gem just like Jest is a JavaScript library.  


3. What is Ruby on Rails?

  Your answer:
  Ruby on Rails is a framework written in the Ruby language that can store and fetch persistent data from a server.

  Researched answer:
  Ruby on Rails is an MVC, or Model View Controller which can be broken down into three parts. The controller is the where a user can manipulate the model's active record, which is then updated in the view. This is great for creating and interacting with databases. I remember now that an example of a MVC is how a user login can change the way a user interacts with a website.



4. What is a relational database? Are there other kinds of databases?

  Your answer:
  A relational database is a form of storing and comparing data so it can be easily referenced. PostgreSQL is a relational database. There are other kinds of databases that store information differently.

  Researched answer:
  Relational databases commonly store data based on the relational model of data. A spreadsheet, is a good example of the relational model of data. This data is stored as a table of rows and columns, also known as records and fields respectively. Each unique row can be assigned a unique ID called a key, with each horizontally adjacent column following it containing attributes relevant that key.

  Non relational databases don't use the relational model and are said to be more optimal for cloud based storage. Instead of tabular storage, there are columnar, key-value, document, and graph stores. They are also more optimal for storing larger amounts of data with a structure more flexible for storing and combining with other structures without having to modify the schema.


5. What are primary keys? Why are they important?

  Your answer:
  I think primary keys are important because they give you a unique reference point for each row of information.

  Researched answer:
  Each row, no matter how similar the data, will have a unique primary key. It's like a social security number for data. There can be several identical rows, but a different primary keys would set them apart as unique instances of the same thing.


## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes:
RESTful routes use the http verb and associated url to match the associated CRUD action and determine the response the client receives.

2. JSON:
JSON means JavaScript Object Notation and it's a way of assigning properties to an object that can be referenced. It exists as a string of easily readable structured data.

3. ERB:
ERB means Embedded Ruby and it allows Ruby to function in a front end document. It's similar to how JSX would interact with HTML. Now, with Ruby being referenced in a front end document, information can be easily and dynamically passed from a back end database.

4. Params:
Params, also known as Rails parameters, are common with HTTP get requests, they're a series of key-value pairs included in the URL using a Rails syntax that aid the browser in indicating what to return to the user.

5. API:
Application Programming Interfaces act as a sort of middle person to allow two applications to communicate. When all of the data needed for an application isn't stored in that same application, and API can be used to reference that data or software from a database where it IS being stored and communicate it back to the user in a way the user understands. 
