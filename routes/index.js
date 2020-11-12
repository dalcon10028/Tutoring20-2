const express = require('express');
const router = express.Router();
const passport = require('passport');
const social_login = require('../my_modules/social_login');
const KakaoStrategy = require('passport-kakao').Strategy;

// 로그인 처리 - 카카오
passport.use('login-kakao', new KakaoStrategy({
		clientID : '11648f24758196fb487c9f669f287019',
		callbackURL : 'https://todolist-yxmum.run.goorm.io/login/kakao/callback' // 카카오 개발자 사이트에서 지정한 리다이렉트 URL 
	},
	function(accessToken, refreshToken, profile, done) {
		console.log(profile);
		return done(null, profile);
	}
));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/login/kakao', passport.authenticate('login-kakao'));

router.get('/login/kakao/callback', passport.authenticate('login-kakao', {
    successRedirect: '/',
    failureRedirect: '/login'
}));


module.exports = router;
