import express from "express";

const router = express.Router();

const leaderboard = [
  { id: 1, rank: 1, name: "John Doe", score: 100 },
  { id: 2, rank: 2, name: "Jane Doe", score: 90 },
  { id: 3, rank: 3, name: "John Smith", score: 80 },
  { id: 4, rank: 4, name: "Jane Smith", score: 70 },
  { id: 5, rank: 5, name: "John Johnson", score: 60 },
  { id: 6, rank: 6, name: "Jane Johnson", score: 50 },
  { id: 7, rank: 7, name: "John Brown", score: 40 },
  { id: 8, rank: 8, name: "Jane Brown", score: 30 },
  { id: 9, rank: 9, name: "John White", score: 20 },
  { id: 10, rank: 10, name: "Jane White", score: 10 },
];

// filter 5 routes
// leaderboard/api/ranks?range=5

router.get("/", (req, res) => {

    //http://localhost:5001/api/leaderboard?limit=5&from=0&to=5 - returns the first 5 items

    const errorMsg = '';

  const limit = parseInt(req.query.limit); // limit is the number of items to show, parsed from the query 
  const from = parseInt(req.query.from);
  const to = parseInt(req.query.to);

//   if (!isNaN(limit)){

//     if (limit === 5) { // default range (limit) is 5

//         if (!isNaN(from)) {

//             if (from >= 0) {

//                 if (!isNaN(to)) {

//                     if (to <= leaderboard.length) {

//                         if (from < to) { 

//                             if (to - from <= limit) { // range between from and to must be less than or equal to limit

//                                 return res.status(200).json(leaderboard.slice(from, to));

//                             }

//                         }

//                     }

//                 }

//             }
//         }
//     }
//   }

  if (!isNaN(limit) && limit === 5 && !isNaN(from) && from >= 0 && !isNaN(to) && to <= leaderboard.length && from < to && to - from <= limit) {
    return res.status(200).json(leaderboard.slice(from, to));
  }

  res.status(400).json({ msg: "Invalid request" });


});

export default router;
