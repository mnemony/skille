const button = document.querySelector(".big-one");
const filler = document.querySelector("#fill-it");

let spinner = 0;

const revealEdu = function() {
  spinner += 90;

  button.style.transform = `rotate(${spinner}deg)`;

  if (button.innerHTML === "+") {
    filler.innerHTML = `
                    <div class="extra">
                        <h4>Poznań University of Economics and Business</h4>
                        <h5> Master - Commodity Science</h5>
                        <h5> Engineer - Production Management</h5>
                        <p>English - B1</p>
                    </div>`;
    button.innerHTML = "~";
  } else {
    filler.innerHTML = "";
    button.innerHTML = "+";
  }
};
