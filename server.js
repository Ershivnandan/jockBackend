// const express = require("express");
import express from 'express';
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = process.env.PORT || 4000

app.get('/api/', (req, res)=>{
    res.send("Server is Started")
});

app.get("/api/jokes", (req, res)=>{

    const jokes = [
        {
          id: 1,
          title: "Why did the chicken cross the road?",
          content: "To get to the other side!"
        },
        {
          id: 2,
          title: "What's orange and sounds like a parrot?",
          content: "A carrot!"
        },
        {
          id: 3,
          title: "Why don't skeletons fight each other?",
          content: "They don't have the guts."
        },
        {
          id: 4,
          title: "What do you call fake spaghetti?",
          content: "An impasta!"
        },
        {
          id: 5,
          title: "Why was the math book sad?",
          content: "Because it had too many problems."
        },
        {
          id: 6,
          title: "Why do cows have hooves instead of feet?",
          content: "Because they lactose!"
        },
        {
          id: 7,
          title: "What do you call cheese that isn't yours?",
          content: "Nacho cheese."
        },
        {
          id: 8,
          title: "How does a penguin build its house?",
          content: "Igloos it together."
        },
        {
          id: 9,
          title: "Why did the scarecrow win an award?",
          content: "Because he was outstanding in his field."
        },
        {
          id: 10,
          title: "Why don't some couples go to the gym?",
          content: "Because some relationships don't work out."
        }
    
    ];
     
    res.send(jokes);
    
})

app.listen(port, ()=>{
    console.log(`App is listening to port: ${port}`)
});