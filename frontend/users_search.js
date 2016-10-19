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
    console.log(users);
    $(users).each((i, user) => {
      let $user = $(user);
      let $li = $(`<li><a href="/users/${$user.attr("id")}">${$user.attr("username")}</a></li>`);
      that.ul.append($li);
    });
  }
}

module.exports = UsersSearch;
