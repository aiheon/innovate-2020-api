const express = require("express");
const router = express.Router();
const db = require("../models");



// get all projects
router.get("/all", (req, res) => {
  db.Project.findAll().then(projects => res.send(projects));
});

// get project by id
router.get("/find/:id", (req, res) => {
  db.Project.findAll({
    where: {
      id: req.params.id
    }
  }).then(project => res.send(project));
});

// post new todo
router.post("/new", (req, res) => {
  db.Project.create({
    title: req.body.title,
    shortDescription: req.body.shortDescription,
    longDescription: req.body.longDescription,
    submission_date: req.body.submission_date,
    city: req.body.city,
    country: req.body.country,
    category: req.body.category,
    coaching_skills_needed: req.body.coaching_skills_needed,
    sponsor_relation: req.body.sponsor_relation,
    email: req.body.email,
    website_url: req.body.website_url,
    twitter_url: req.body.twitter_url,
    linkdin_url: req.body.linkdin_url,
  }).then(project => res.send(project));
});





// // delete todo
// router.delete("/delete/:id", (req, res) => {
//   db.Project.destroy({
//     where: {
//       id: req.params.id
//     }
//   }).then(() => res.send("success"));
// });

// // edit a todo
// router.put("/edit", (req, res) => {
//   db.Project.update(
//     {
//       text: req.body.text
//     },
//     {
//       where: { id: req.body.id }
//     }
//   ).then(() => res.send("success"));
// });




module.exports = router;
