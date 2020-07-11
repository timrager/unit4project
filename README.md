# Subscription Tracker

## Project Link

## Technologies Used
- React
- Ruby on Rails
- PostgreSQL
- HTML5
- CSS

## Process
Since a user can have many subscriptions, it's also possible a subscription can be used for many users.
With this many-to-many relationship, the following database schemas are being used:

A Users table to hold user information
Column | "name"
--- | ---
 -- | string

 A Subs table to hold subscription information
 Column | "name" | "price"
 -- | string | decimal{8.2}

 A Registers table to link the two tables in a many-to-many relationship
 Column | "user_id" | "sub_id" | "qty" | "frequency" | "start_date" | "end_date"
 -- | foreign key | foreign key | integer | string | date | date




## User Stories
- As a user, I want to be able to see all of my subscriptions.
- As a user, I want to be able to add/delete/modify subscriptions related to me.
- As a user, I would like to see how much my total spend is with a subscription.

## Challenges / Future Goals
