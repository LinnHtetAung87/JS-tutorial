$(document).ready(function () {
  $.ajax({
    url: "data.json",
    method: "GET",
    dataType: "json",
    success: function (data) {
      data.forEach(function (item, index) {
        const side = index % 2 === 0 ? "left" : "right";

        const timelineBox = `
          <div class="boxes ${side}">
            <div class="content">
              <div class="toggle-header" style="cursor:pointer;">
                <h3>${item.company}</h3>
                <i>${item.position}</i>
                <small>${item.years}</small>
              </div>
              <div class="toggle-body" style="display:none;">
                <p>${item.description}</p>
              </div>
            </div>
          </div>
        `;

        $(".timeline").append(timelineBox);
      });

      // Collapse/expand on header click
      $(".toggle-header").on("click", function () {
        $(this).next(".toggle-body").slideToggle();
      });

      // Optional: switch left/right on box click
      $(".boxes").on("dblclick", function () {
        $(this).toggleClass("left right");
      });
    },
    error: function (err) {
      console.error("JSON Load Error: ", err);
    },
  });
});
