const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth.js');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile.js');
const User = require('../../models/Users.js');

// @route   Get api/profile/me
// @desc    Get current users profile
// @access  Private
router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'avatar']);

        if (!profile) {
            return res.status(400).json({ msg: 'There is no profile for this user' });
        }

        res.json(profile)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

// @route   Post api/profile
// @desc    Post create or update user profile
// @access  Private
router.post('/', [auth, [
    check('location', 'Location is required')
        .not()
        .isEmpty(),
    check('bio', 'Bio is required')
        .not()
        .isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {
        company,
        location,
        website,
        bio,
        youtube,
        twitter,
        facebook,
        instagram,
        linkedin,
    } = req.body;

    const profileFields = {};
    profileFields.user = req.user.id;

    if (location) { profileFields.location = location };
    if (company) { profileFields.company = company };
    if (website) { profileFields.website = website };
    if (bio) { profileFields.bio = bio };

    profileFields.social = {};
    if (youtube) { profileFields.social.youtube = youtube };
    if (twitter) { profileFields.social.twitter = twitter };
    if (facebook) { profileFields.social.facebook = facebook };
    if (instagram) { profileFields.social.instagram = instagram };
    if (linkedin) { profileFields.social.linkedin = linkedin };

    try {
        let profile = await Profile.findOne({ user: req.user.id });

        if (profile) {
            profile = await Profile.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true });

            return res.json(profile);
        }

        profile = new Profile(profileFields);
        await profile.save();
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

// @route   Get api/profile
// @desc    Get all profiles
// @access  Public

router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['name', 'avatar']);
        res.json(profiles);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})

// @route   Get api/profile/user/:user_id
// @desc    Get profile by user ID
// @access  Public

router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.params.user_id }).populate('user', ['name', 'avatar']);

        if (!profile) {
            return res.status(400).json({ msg: 'Profile not found' });
        }

        res.json(profile);
    } catch (err) {
        console.error(err.message);

        if (err.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Profile not found' });
        }

        res.status(500).send('Server Error');
    }
})

// @route   DELETE api/profile
// @desc    DELETE profile, user & post
// @access  Private

router.delete('/', auth, async (req, res) => {
    try {
        // @todo - remove users posts

        // Remove profile
        await Profile.findOneAndRemove({ user: req.user.id });
        // Remove user
        await User.findOneAndRemove({ _id: req.user.id });

        res.json({ msg: 'User deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})

module.exports = router;