bot.on('message', function (event) {
    console.log(event); //�⦬��T���� event �L�X�Ӭݬ�
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//�]�� express �w�]�� port 3000�A�� heroku �W�w�]�o���O�A�n�z�L�U�C�{���ഫ
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});
