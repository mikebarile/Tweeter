let FollowToggle = require("./follow_toggle.js");

$ ( () => {
  $("button.follow-toggle").each( (index, el) => {
    new FollowToggle($(el));
  });
});
