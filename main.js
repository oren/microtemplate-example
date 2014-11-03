var tmpl = require('microtemplates');
var fs = require('fs');

document.addEventListener('DOMContentLoaded', function() {
  var $ = document.querySelector.bind(document);

  var users = $("#users");
  var dataObject = {
                     id: 1,
                     profile_image_url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTgsVCUkn2gEZWhqpKMfZQoWx1uQfKBOM4RtdAHYrFoTbdQPMJw',
                     from_user: 'josh',
                     text: 'hello'
                   };

  var itemTmpl = fs.readFileSync('user_template.html', 'utf8');
  users.innerHTML = tmpl(itemTmpl)(dataObject);
});
