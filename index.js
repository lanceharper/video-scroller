var express = require('express');
var swig = require('swig');
var Promise = require("bluebird");
var request = Promise.promisify(require("request"));

var app = express();
var demoUrl = 'http://feed.theplatform.com/f/2E2eJC/nnd_53296819?form=MPXNBCNewsAPI&pretty=true&range=-40&adapterParams=widget%3Dvideo-pos';

var idToPlaylistMap = {
    'us-news': 'http://feed.theplatform.com/f/2E2eJC/nnd_21426262?form=MPXNBCNewsAPI&adapterParams=widget%3Dvideo-pos',
    'meet-the-press': 'http://feed.theplatform.com/f/2E2eJC/nnd_18424744?form=MPXNBCNewsAPI&adapterParams=widget%3Dvideo-pos',
    'supreme-court': 'http://feed.theplatform.com/f/2E2eJC/nnd_21427732?form=MPXNBCNewsAPI&adapterParams=widget%3Dvideo-pos',
    'world-news': 'http://feed.theplatform.com/f/2E2eJC/nnd_21426473?form=MPXNBCNewsAPI&adapterParams=widget%3Dvideo-pos'
};

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/app');
app.use('/bower_components',  express.static(__dirname + '/app/bower_components'));
app.use('/scripts',  express.static(__dirname + '/app/scripts'));
app.use('/styles',  express.static(__dirname + '/.tmp/styles'));

app.get('/', function (req, res) {

  request(demoUrl).spread(function(result, body) {
    var body = JSON.parse(body);

    body.videos = body.videos.map(function(video) {
      video.video_src = 'http://msnbc.vo.llnwd.net/l1/video/h264/std/' + video.guid + '.mp4';
      video.aims_src = video.thumbnail.toLowerCase().replace('/i/', '/j/').replace('.jpg', '.nbcnews-video-reststate-960.jpg')
      return video;
    });

    res.render('index', body);
  });


});

app.listen(3000);
console.log('Express started on port 3000');
