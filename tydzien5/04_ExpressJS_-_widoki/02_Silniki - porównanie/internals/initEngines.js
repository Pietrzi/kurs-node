import 'ejs';
import haml from 'hamljs';
import exhbs from 'express-handlebars';
import pug from 'pug';

export default (app) => {
  // PUG
  app.set('view engine', 'pug');

  // HAML
  app.engine('.haml', haml.renderFile);
  app.set('view engine', 'hamljs');

  // EJS
  app.set('view engine', 'ejs');

  // Handlebars
  const hbs = exhbs.create({
    helpers: {
      hasValidIndex: function (index) {
        return index !== 1;
      }
    }
  });
  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');
};
