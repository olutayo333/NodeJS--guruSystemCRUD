const express = require("express")
const router = express.Router()

const {submitPost, readpost, deletepost, editpost}= require("../controllers/user.controllers")

router.post("/submitpost", submitPost)
router.get("/readpost", readpost )
router.post("/deletepost", deletepost)
router.post("/edit", editpost)

module.exports = router
