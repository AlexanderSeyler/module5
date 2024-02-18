const express = require("express");
const router = express.Router();
const friends = require("../models/friends");

const friendController = {
  getAllFriends: (req, res) => {
    res.json(friends);
  },

  filterFriends: (req, res) => {
    let filterGender = req.query.gender;
    let filterLetter = req.query.letter;
    let matchingFriends = [...friends];

    if (filterGender) {
      matchingFriends = matchingFriends.filter(
        (friend) => friend.gender == filterGender
      );
    }

    if (filterLetter) {
      matchingFriends = matchingFriends.filter((friend) =>
        friend.name.startsWith(filterLetter)
      );
    }

    if (matchingFriends.length > 0) {
      res.status(200).json(matchingFriends);
    } else {
      res
        .status(404)
        .json({ error: "No friends matching the specified criteria" });
    }
  },

  getInfo: (req, res) => {
    const {
      "user-agent": customUserAgent,
      "content-type": contentType,
      accept,
    } = req.headers;

    const headersInfo = {
      "user-agent": customUserAgent,
      "content-type": contentType,
      accept,
    };

    res.json(headersInfo);
  },

  getFriendById: (req, res) => {
    let friendId = req.params.id;
    let foundFriend = friends.find((friend) => friend.id == friendId);

    if (foundFriend) {
      res.json(foundFriend);
    } else {
      res.status(404).json({ error: "No friend found with this id." });
    }
  },

  addFriend: (req, res) => {
    let newFriend = req.body;

    if (!newFriend.name || !newFriend.gender) {
      res
        .status(400)
        .json({ error: "Friend object must contain a name and gender" });
      return;
    } else {
      newFriend.id = friends.length + 1;
      friends.push(newFriend);
      res.status(201).json(newFriend);
    }
  },

  updateFriend: (req, res) => {
    let friendId = req.params.id;
    let updatedFriend = req.body;

    let index = friends.findIndex((friend) => friend.id == friendId);

    if (index !== -1) {
      friends[index] = updatedFriend;
      res.json({
        result: "Updated friend with ID " + friendId,
        data: updatedFriend,
      });
    } else {
      res.status(404).json({ error: "Friend not found with ID " + friendId });
    }
  },
};

router.get("/", friendController.getAllFriends);
router.get("/filter", friendController.filterFriends);
router.get("/info", friendController.getInfo);
router.get("/:id", friendController.getFriendById);
router.post("/", friendController.addFriend);
router.put("/:id", friendController.updateFriend);

module.exports = router;
