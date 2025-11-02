const express = require("express");
const app = express();

const path = require("path");
const port = process.env.port || 5000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));


app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "views/index.html"));
    console.log(`Viewing the index page`)
});


app.get("/contactus", (req, res) =>{
    res.sendFile(path.join(__dirname, "views/contactus.html"));
    console.log(`viewing the contact page`);
})

app.post("/contactus", (req, res) =>{
    const {fullName, email, tel, reason, date, message} = req.body;
    res.send(`Hello ${fullName}, Thank you for reaching out,
         We have received your message, and we will reach out to you via Mail within 1 business day.
        you can click "🔙" on your browser`)
});



app.listen(port, ()=>{
    console.log(`listening at ${port}`)
});

// module.exports = app; 