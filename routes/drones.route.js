const express = require('express');

const router = express.Router();

/* ------------------------------------- 
    / GET POST Drone API
    ------------------------------------- */
/**
 * @swagger
 * /drones:
 *  get:
 *     description: GET All Drone
 *     tags: [Drones]
 *     produces:
 *       - application/json
 *     responses:
 *      '200':
 *       description: A successful response
 */
/**
 * @swagger
 * /drones:
 *  post:
 *      description: POST Single Drone
 *      tags:
 *        - Add New Drone
 *      produces:
 *        - application/json
 *      responses:
 *        '200':
 *        description: A successful response
 */
router
  .route('/')
  .get(async (req, res) => {
    // const cursor = droneCollection.find({});
    // const drones = await cursor.toArray();
    // res.send(drones);
    res.send('GET All Drone API');
  })
  .post(async (req, res) => {
    // // Step 1. data
    // const drone = req.body;
    // // Step 2. insertOne
    // const result = await droneCollection.insertOne(drone);
    // res.json(result);
    res.send('POST Single Drone API');
  });

/* ------------------------------------- 
    GET All Drone API
    ------------------------------------- */
// router.get('/', async (req, res) => {
//   // const cursor = droneCollection.find({});
//   // const drones = await cursor.toArray();
//   // res.send(drones);
//   res.send('GET All Drone API');
// });
/* ------------------------------------- 
    GET Single Drone API
    ------------------------------------- */
router.get('/:id', async (req, res) => {
  // const id = req.params.id;
  // const query = { _id: ObjectId(id) };
  // const drone = await droneCollection.findOne(query);
  // res.json(drone);
  res.send('GET Single Drone API');
});
/* ------------------------------------- 
    POST Single Drone API
    ------------------------------------- */
// router.post('/', async (req, res) => {
//   // // Step 1. data
//   // const drone = req.body;
//   // // Step 2. insertOne
//   // const result = await droneCollection.insertOne(drone);
//   // res.json(result);
//   res.send('POST Single Drone API');
// });
/* ------------------------------------- 
    DELETE Single Drone API
    ------------------------------------- */
router.delete('/:id', async (req, res) => {
  // const id = req.params.id;
  // const query = { _id: ObjectId(id) };
  // const result = await droneCollection.deleteOne(query);
  // res.json(result);
  res.send('DELETE Single Drone API');
});

module.exports = router;
