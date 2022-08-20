import React, { useEffect } from "react";
import $ from "jquery";

// let window = process.browser && new Window();

const RocketTop = () => {
  useEffect(() => {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $("#rocketmeluncur:hidden").stop(true, true).fadeIn();
      } else {
        $("#rocketmeluncur").stop(true, true).fadeOut();
      }
    });
    $(function () {
      $("#rocketmeluncur").click(function () {
        $("html,body").animate({ scrollTop: $(".top").offset().top }, "950");
        return false;
      });
    });
  }, [$]);

  return (
    <div>
      <a href="#" id="rocketmeluncur" className="showrocket">
        <i></i>
      </a>
    </div>
  );
};

export default RocketTop;
