let FollowToggle = require('./follow_toggle.js');

class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.input = this.$el.find("input");
    this.ul = this.$el.find("ul");
    this.handleInput();
  }

  handleInput(){
    let that = this;
    this.$el.on("input", (event) => {
      event.preventDefault();
      $.ajax({
        url: "/users/search.json",
        type: "GET",
        data: {query: that.input.val()},
        success(users){
          that.renderResults(users);
        }
      });
    });
  }

  renderResults(users){
    let that = this;
    this.ul.empty();
    $(users).each((i, user) => {
      let $user = $(user);
      let $li = $(`<li><a href="/users/${$user.attr("id")}">${$user.attr("username")}</a></li>`);
      let $button = $(`<button class="follow-toggle"></button>`);
      let a = new FollowToggle($button, {"user-id": $user.attr("id"), "initial-follow-state": $user.attr("followed")});
      console.log(a);
      that.ul.append($li);
      $li.append($button);
    });
  }
}

module.exports = UsersSearch;
