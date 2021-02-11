const express = require("express");

const app = express();

// Parse data
app.use(express.json());

// Fake Data
let team = [
  { name: "Mehdi", age: 24, id: 1 },
  { name: "Slim", age: 29, id: 2 },
  { name: "Ines", age: 25, id: 3 },
  { name: "Hejer", age: 25, id: 4 },
];

//Endpoints

//GET all team
//GET "/api/team"
//@desc : Get all team member

app.get("/api/team", (req, res) => {
  //   res.status(200).json(team);

  team.length === 10
    ? res.status(200).json(team)
    : res.status(500).json("Wrong data");
});

//Add new team member
//POST "/api/team"
//@desc : Add new team member

app.post("/api/team", (req, res) => {
  let newMemberTeam = { ...req.body, id: Math.random() };
  team.push(newMemberTeam);
  res.status(200).json({ msg: "Member added with success", team });
});

//Delete a team member
//DELETE "/api/team"
//@desc : Delete team member with id

app.delete("/api/team/:id", (req, res) => {
  let id = Number(req.params.id);
  team = team.filter((member) => member.id !== id);

  res.status(200).json({ msg: "Member has been deleted", team });
});

//Update a team member data
//Put "/api/team"
//@desc : Update team member data with id

app.put("/api/team/:id", (req, res) => {
  let id = +req.params.id;
  team = team.map((member) =>
    member.id === id ? { ...member, ...req.body } : member
  );
  res.status(200).json({ msg: "Member team has been updated", team });
});

// app.get("/", (req, res) => {
//   res.send("Welcome to the App file");
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  err
    ? console.log("Error", err)
    : console.log(`The server is running on port http://localhost:${PORT}`);
});
