let FollowToggle = require("./follow_toggle.js");
let UsersSearch = require("./users_search.js");

$ ( () => {
  $("button.follow-toggle").each( (index, el) => {
    new FollowToggle($(el));
  });

  $("nav.users-search").each( (index, el) => {
    new UsersSearch(el);
  });
});
