const express = require('express');
const router = express.Router();
const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;

/*로그인 성공시 사용자 정보를 Session에 저장한다*/
passport.serializeUser(function (user, done) {
  done(null, user)
});

/*인증 후, 페이지 접근시 마다 사용자 정보를 Session에서 읽어옴.*/
passport.deserializeUser(function (user, done) {
  done(null, user);
});

// 로그인 판단 로직
const authenticateUser = (req, res, next) => {
  if (req.isAuthenticated()) next();
  else res.redirect('/login');
};

// 로그인 처리 - 카카오
passport.use('login-kakao', new KakaoStrategy({
		clientID : '11648f24758196fb487c9f669f287019',
		callbackURL : 'http://localhost:3000/login/kakao/callback' // 카카오 개발자 사이트에서 지정한 리다이렉트 URL 
	},
	function(accessToken, refreshToken, profile, done) {
		console.log(profile);
		return done(null, profile);
	}
));

/* GET home page. */
router.get('/', authenticateUser, function(req, res, next) {
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
