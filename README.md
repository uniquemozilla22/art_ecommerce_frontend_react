# Art Gallery Website

## Intoduction

<P>
Art Gallery is a web application that is intended to provide a complete solution keeping inregard to the vendors as well as the customers wanting / visiting the art gallery as their needfor the arts purchase and sell. This platform is created intending the customers to provide analternative yet reliable way to purchase the art and the vendors giving a perfect platform to selltheir art dynamically.
</p>

<p>
The art gallery ecommerce is the web ecommerce project, which mainly focus on themulti-vendor management system, which provide the platform for the multiple artists fromdifferent part of the country to sell their art products , and platform for the art lovers , who canchoose and compare the art products of different artists , can create the wishlist of theirfavourite products, can filter the products with different categories, can bid the art product oftheir favourite artist and can add the products to cart and can order the products using onlinepayment methods.
</p>
# Art Gallery Web

## 1. Introduction

### 1.1 Purpose

```
Art Gallery is a web application that is intended to provide a complete solution keeping in
regard to the vendors as well as the customers wanting / visiting the art gallery as their need
for the arts purchase and sell. This platform is created intending the customers to provide an
alternative yet reliable way to purchase the art and the vendors giving a perfect platform to sell
their art dynamically.
The art gallery ecommerce is the web ecommerce project, which mainly focus on the
multi-vendor management system, which provide the platform for the multiple artists from
different part of the country to sell their art products , and platform for the art lovers , who can
choose and compare the art products of different artists , can create the wishlist of their
favourite products, can filter the products with different categories, can bid the art product of
their favourite artist and can add the products to cart and can order the products using online
payment methods.
```

### 1.2 Intended Audience and Reading Suggestions

```
◼ Customer
◼ Artists
◼ Authority
◼ Developers
◼ All User
```

### 1.3 Product Scope

```
● Secure registration and profile management facilities for Customers and Artists.
● Adequate searching mechanisms for easy and quick access to particular products and
services.
● Bidding system where the customers can bid their desired art products
● Creating a Shopping cart so that customers can shop ‘n’ no. of items and checkout finally
with the entire shopping carts. Customers can add or delete items in the cart.
● Regular updates to registered customers about new arrivals.
● Uploading ‘Most Purchased’ Items in each category of products in the Shop.
● Strategic data and graphs for Administrators and Shop owners about the items that are
trending in each category.
● Maintaining a database of regular customers of different needs.
● Shop employees are responsible for internal affairs like processing orders, assure home
delivery, getting customer's delivery-time feedback, updating order's status and answering
client's queries online.
● Feedback mechanism, so that customers can give feedback for the product or service
which they have purchased through the like functionality of individual products by
customers.
● Adequate payment mechanism and gateway for all popular and relevant payment options,
as available from time to time.
```

## 2. Overall Description

### 2.1 Product Perspective

```
Art Gallery is aimed towards the vendors who want to reach out to the maximum cross-section
of customers and common people who can be potential customers. This project envisages
bridging the gap between the seller, and the customer. It should be user-friendly, ‘quick to
learn’ and reliable software for the above purpose. It is intended to be a stand-alone product
and should not depend on the availability of other software. It should run on both UNIX and
Windows based platforms.
```

### 2.2 Product Functions

```
● The main purpose of this project is to reduce manual work.
● Functions : A Customer can browse through the shopsand choose products to
place in a virtual shopping cart. The customer can bid their desired art products.
The shopping cart details can be viewed and items can be removed from the cart.
To proceed with the purchase, the customer is prompted to login. Also, the
customer can modify personal profile information (such as phone number and
```

```
shipping address) stored by the application. The customer can also view the status
of any previous orders, and cancel any order that has not been shipped yet.
```

### 2.3 User Classes and Characteristics

```
● The user should be familiar with the Shopping Mall related terminology like
Shopping cart/Checking out/Transaction etc.
● The user should be familiar with the Internet.
```

### 2.4 Operating Environment

```
The product will be operating in a windows environment. Art Gallery system is a website and
shall operate in all famous browsers : Microsoft Internet Explorer, Google Chrome, Mozilla
Firefox and Microsoft Edge. Also it will be compatible with IE 6.0. Most of the features will
be compatible with the Mozilla Firefox and Opera 7.0 or higher version. The only requirement
to use this online product would be the internet connection.
The hardware configuration include Hard Disk: GB, Monitor: inch Color monitor, Keyboard:
122 keys.
The basic input devices required are keyboard, mouse and output devices are monitor
```

### 2.5 Design and Implementation Constraints

```
An online store is a virtual store on the Internet where customers can browse the catalog and
select products of interest. The selected items may be collected in a shopping cart. At checkout
time, the items in the shopping cart will be presented as an order. At that time, more
information will be needed to complete the transaction. Usually, the customer will be asked to
fill or select a billing address, a shipping address, a shipping option, and payment information.
An e-mail notification is sent to the customer as soon as the order is placed.
```

### 2.6 User Documentation

```
The product will include a user manual. The user manual will include product overview,
complete configuration of the used software (such as SQL server), technical details, backup
procedure and contact information which will include email address. There will be no online
help for the product at this moment. The product will be compatible with Internet Explorer 6.
or higher. The databases will be created in the MySQL.
```

### 2.7 Assumptions and Dependencies

```
The assumptions are:-
```

```
1) The coding should be error free.
```

```
2) The system should be user friendly so that it is easy to use for the users.
3) The system should have more capacity and provide fast access to the
database.
4) The system should provide a search facility and support quick transactions.
5) The Art Gallery system is running twenty four hours a day.
6) Users may access from any computer that has internet browsing capabilities
and an internet connection.
7) Users must have their correct usernames and passwords to enter into their
online accounts and do actions.
```

```
The dependencies are:-
```

```
1) The specific hardware and software due to which the product will be run.
2) On the basis of listing requirements and specification the project will be
developed and run.
3) The end users (admin) should have proper understanding of the product.
4) The system should have the general report store.
5) The information of all users must be stored in a database that is accessible
by the Art Gallery system..
```

## 3. Project Requirements

### 3.1 Functional Requirements

#### Users

```
-Create user /Signup User
-Login User/ Authenticate User
-login with user account
-optional login with google, facebook and twitter
-Signout User
```

##### Products

```
-Home screen
it includes
-product list
-Search functionality
```

```
-Create and display categories
-Filter and sort functionality
```

-Product detail screen
It includes the
-productimage
-product owner details
-product price, and descriptions
-likes
-add to cart option
-add to wishlist option
-tags
-categories
-social media sharing options
-Product Auction/Bidding screen
It includes the information about product details with bidding options which includes:
-select bid amount
-current bid information(amount and bidder name)

##### Cart

List all the products added by the user, with its brief description, price and quantity, and
option to checkout.

##### Order

##### Checkout page

```
List all the products moved from the cart, by the users, with product
description such as product price, quantity, user name, total price, payment
methods, shipping address information and discount coupon
```

- Payment screen
  payment integration such as esewa and khalti
- Payment confirmation alert
  It includes the information about the user, total price, payment methods and
  shipping address.
- Payment success alert
  Alert after the successful payment, includes success info, and users, products, and
  payment method info.

##### Blog Module

- Blog List Screen

```
-List blogs
-Filter and sort functionality
-search functionality
-Filter by categories
-Blog Detail screen
-Blog description
-writer description
-related blogs list
```

##### Others information section

- Help center page
- Contact page
- Return and refund information page
- Privacy policy informations
- Terms and conditions

##### Chat Frame

##### Bidding system

```
-Product Auction screen
shows the current bid value with the related bidder, and option to enter amount
for bidding
```

##### Send Email functionality

```
Node mailer will be used for
-Contact us page which includes:
-contact info such as contact number, email address and message
-send email option
```

### 3.2 Hardware Interfaces

```
These are the minimum required specifications required for the application to run smoothly.
◼ Operating system : windows, (or any OS)
◼ Hard disk : 500GB HDD or 128GB SSD
◼ Processor : Intel core I5 5th Gen or Higher
```

### 3.3 Software Interfaces

###### ◼ XAMPP

```
◼ Visual Studio Code
◼ MySQL server
◼ Postman
◼ Browsers ( Google Chrome, Mozilla Firefox , Microsoft Edge , Brave and Opera)
```

### 3.4 Communications Interfaces

```
Customers , Vendors , Developers and Admins must have a viable communication means to
the internet to be able to access the product. The minimum requirement of 3G connection is
required to be able to connect and access the product. some of the alternative internet
connection that the users of the product can use are :
➢ Broadband Internet
➢ Dialup or Fiber Connection with an Internet Provider.
➢ Local Internet Services
➢ 3G services or higher
```

## 4. System Features

```
The features used in the project are:
● Login and Registration with proper Log out.
● OAuth with Google and Facebook
● Artists
```

1. Managing the product
2. Manage own profile details
3. Managing payment options
4. Managing shipping

```
● User
```

1. Product wish list
2. Payment integration (Khalti ,esewa and many other)
3. Online Chatbot.
4. Bid on a product.

5. Search and sort functionality.
6. Filter functionality.
7. Blog Module.
8. Contact the service.
9. Category sorting of the products.
10. Like on the product
11. Managing the Profile
    ● Admin 1. Data Visualization with diagrams .Charts. 2. Reports info 3. Sales 4. Managing the Users and Artists 5. Managing Artists. 6. Assigning the roles / permission for the users or groups

## 5. Technologies used

```
Node and its framework express, and SQL will be used as database, React library for front-end
in the application, and for the further description of the technologies that would be used in the
project can be summarized briefly as:
```

### Art Gallery ( Front End) Libraries:

```
As discussed in the meeting, MERN ( Mongo Express React Node) Stack would be used in the
application. This report describes the analysis of the frameworks being used in the Front-End part
of the application. The application’s front-end will be initiated with the React Application.
```

#### Use of Framework or Library:

##### React JS:

```
React is a free and open-source front-end JavaScript library for building user interfaces
based on UI components. It is maintained by Meta and a community of individual
developers and companies. React can be used as a base in the development of
single-page or mobile applications
```

1. Being one of the topmost libraries of Javascript, which enables the website to
   have a wide range of scope in the future.
2. With React we will be creating a Single Page Application that helps in better
   performance and creates a better User Interface in the client-side of the
   application.
3. React is known to be an SEO friendly library, so keeping in mind the project is
   an e-commerce website, it could have a great positive impact on the
   application.

4. Reusing the components in the application will help the website to build pages
   faster than usual.
5. Debugging is made simpler, as the future bugs could be known and removed
   as faster.

##### Axios:

```
In ReactJS, Axios is a library that serves to create HTTP requests that are present
externally. It helps in retrieving the data thereby adding it to the state to facilitate the
application whenever the requirement arises.
```

##### Redux (State Management)

```
Redux is an open-source JavaScript library for managing and centralizing the application
state. It is most commonly used with libraries such as React or Angular for building user
interfaces. Similar to Facebook's Flux architecture
The conflict between using Redux instead of using Context could have arisen. The
decision of using Redux as the state-management tool arises because it is easy to use
and the community of Redux is huge so problem-solving with debugging could have a
major impact on reducing the time of development.
```

##### Redux -Thunk

```
Redux Thunk is middleware that allows you to return functions, rather than just actions,
within Redux. This allows for delayed actions, including working with promises.
This library is used to make the async actions in the Redux Action layer of the application.
```

##### MUI (Material UI ) for React

```
MUI provides a robust, customizable, and accessible library of foundational and advanced
components, enabling you to build your own design system and develop React
applications faster. In the Project, this would be a major framework that will help in the
creation of components and functionality of the events in the project. The styling and
major changes in the application would be convenient. As the project moves forward the
component design would not take much development time with the integration of MUI.
The Icons and Animation library is included in the application.
```

##### React -Router

```
React Router is a standard library for routing in React. It enables the navigation among
views of various components in a React Application, allows changing the browser URL,
and keeps the UI in sync with the URL.
The routing of the application will be handled by React-Router which will create the single
page application component that feels more like the multi-layered application. Thus
resulting in a better User Interface and User Experience. Also, Performance on the
application will increase which is done primarily by the utilization of caching in the
browser.
```

### Alternating Libraries

Library / Framework Purpose
Font Awesome Special icons are needed if MUI does not have a specific Icon.

JS-Cookie For storage of the tokens and other expiring datasets in the
Cookies through Javascript
React - Spring For adding the custom made animation in the application.

JQuery Some of the frameworks above mentioned are built-in Jquery
and installing could only make the framework function properly.

### Web Backend Server

```
The backend technologies that would be used for the project would be:
```

#### Nodejs

```
Node.js is an open source and cross-platform compatible JavaScript runtime environment, which
can be used to develop a lightning-fast web-experience.It is one of the most reliable platforms to
build an eCommerce store as well.
Nodejs is preferred over other programming languages for building the ecommerce website
because of its cross platform compatibility, high scalability and good performance.
```

#### Expressjs

```
Express. js is a free and open-source web application framework for Node. js,
used for designing and building the node applications quickly.
```

### Programming Language

```
Javascript would be used as the programming language for this project.Javascript is
the lightweight,interpreted compiled programming language, that provides the
platforms for both web browser and web server.
```

### Communication

```
Microsoft Teams would be used as the communication means for the
communication between the developers, and other teams involved in the
```

```
project.
```

### Hosting/Scaling

```
AWS makes it simple and cost-effective to set up, manage, and scale
product search solutions for ecommerce websites and mobile apps.
```

### Data structure store

```
MYSQL would be used as the database for storing the data of the application.
MySQL is the most popular Open Source Relational SQL database management system.
MySQL is one of the best RDBMS being used for developing web-based software
applications.
```

## 6. Other Nonfunctional Requirements

### 6.1 Performance Requirements

```
There is no performance requirement in this system because the server request and response is
codependent on the end user internet connection.
```

### 6.2 Safety Requirements

```
The database may get crushed at any certain time due to virus or operating system failure.
Therefore it is required to take the database backup so that the database is not lost. Proper
UPS/ Inverter facility should be there in case of power supply failure. Contact with the
developer of the product will be necessary to fix the bugs and issues in the application.
```

### 6.3 Security Requirements

```
➢ System will use a secured and reliable database.
➢ Normal users can just read information but they cannot edit or modify anything except
their personal and some other information.
➢ System will have different types of users and every user has access constraints.
```

### 6.4 Software Quality Attributes

```
➢ There may be multiple admin’s creating the project, all of them will have the right to create
changes to the system. But the members or other users cannot make changes.
➢ The project should be open source.
```

```
➢ The quality of the database is maintained in such a way so that it can be very user friendly
to all the users of the database.
```

### 6.5 Business Rules

```
A business rule is anything that captures and implements business policies and practices. A
rule can enforce business policy, make a decision, or infer new data from existing data. This
includes the rules and regulations that the system users should abide by. This includes the cost
of the project and the discount offers provided. The users should avoid illegal rules and
protocols. Neither admit nor members should cross the rules and regulations
```

## 7. Other Requirements

```
Art Gallery shall handle expected and unexpected errors in ways that prevent loss in
information and long downtime period
```

## Appendix A: Glossary

```
The following are the list of conventions and acronyms used in this document and the project
as well :
Client: Intended users for the software.
SQL: Structured Query Language; used to retrieve information from a database. ➔ SQL
Server: A server used to store data in an organized format.
Layer: Represents a section of the project.
```

**_SoftwareRequirements Specification for Art Gallery_** 16
Page
User Interface Layer: The section of the assignment referring to what the user interacts with
directly.
Application Logic Layer: The section of the assignment referring to the web server. This is
where all computations are completed.
Data Storage Level: The section of the assignment referring to where all data is recorded.
Use Case: A broad level diagram of the project showing a basic overview.
Class diagram: It is a type of static structure diagram that describes the structure of a system by
showing the system’s cases, their attributes, and the relationships between the classes.
➔ Interface: Something used to communicate across different mediums.
Unique Key: Used to differentiate entries in a database.

```
SoftwareRequirements Specification for Art Gallery 17
Page
```

## Appendix B: Analysis Models

```
Art Gallery Database
```
