const router = require('express').Router();
const Session = require('../models/Session');
const auth = require('../middleware/authJwt');

router.get('/', async (_req, res) => {
  const sessions = await Session.find({ status: 'published' }).populate('user_id', 'email');
  res.json(sessions);
});

router.get('/my', auth, async (req, res) => {
  const sessions = await Session.find({ user_id: req.user.id });
  res.json(sessions);
});

router.post('/save-draft', auth, async (req, res) => {
  const data = { ...req.body, user_id: req.user.id };
  let session = await Session.findOne({ user_id: req.user.id, title: data.title });
  if (session) {
    Object.assign(session, data);
    await session.save();
  } else {
    session = await Session.create(data);
  }
  res.json(session);
});

router.post('/publish', auth, async (req, res) => {
  const { id } = req.body;
  await Session.findByIdAndUpdate(id, { status: 'published' });
  res.json({ msg: 'Published' });
});

module.exports = router;