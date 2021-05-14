window.addEventListener('DOMContentLoaded', function() {
  elemIco = document.getElementById("icecream_options")
  elemIco.classList.add("hide");
  document.querySelectorAll("input[name='want']").forEach(
    elem => {
      elem.addEventListener("click", function() {
        if (this.value == 'yes') {
          elemIco.classList.remove("hide");
        } else {
					elemIco.classList.add("hide");
        }
      })
    }
  );
});
