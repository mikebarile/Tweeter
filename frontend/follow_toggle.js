class FollowToggle {
  constructor($el, options) {
    this.$el = $el;
    this.userID = $el.data("user-id") || options["user-id"];
    if(this.$el.data("initial-follow-state")) {
      if($el.data("initial-follow-state") === true){
        this.followState = "followed";
      }
      else {
        this.followState = "unfollowed";
      }
    }
    else {
      let tempFollowState = options["initial-follow-state"];
      if(tempFollowState === true){
        this.followState = "followed";
      }
      else {
        this.followState = "unfollowed";
      }
    }
    this.render();
    this.handleClick();
  }

  render() {
    if (this.followState === "followed") {
      this.$el.text("Unfollow!");
      this.$el.prop("disabled", false);
    }
    else if (this.followState === "unfollowed") {
      this.$el.text("Follow!");
      this.$el.prop("disabled", false);
    }
    else {
      this.$el.prop("disabled", true);
    }
  }

  handleClick() {
    let that = this;
    that.$el.on("click", (event) => {
      event.preventDefault();
      if(that.followState === "followed"){
        $.ajax({
          url: `/users/${that.userID}/follow.json`,
          type: "DELETE",
          success(){
            that.followState = "unfollowed";
            that.render();
          }
        });
      }
      else {
        $.ajax({
          url: `/users/${that.userID}/follow.json`,
          type: "POST",
          success(){
            that.followState = "followed";
            that.render();
          }
        });
      }
      that.followState = "following or unfollowing";
      that.render();
    });
  }
}

module.exports = FollowToggle;
