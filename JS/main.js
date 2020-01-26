const button = document.querySelector(".big-one");
const filler = document.querySelector("#fill-it");

let spinner = 0;

button.innerHTML = '<i class="fas fa-plus"></i>';

const revealEdu = function () {
  spinner += 90;

  button.style.transform = `rotate(${spinner}deg)`;

  if (button.innerHTML === '<i class="fas fa-plus"></i>') {
    console.log('yo')
    filler.innerHTML = `
                    <div class="extra">
                        <h4>Poznań University of Economics and Business</h4>
                        <h5> Master - Commodity Science</h5>
                        <h5> Engineer - Production Management</h5>
                        <p>English - B1</p>
                    </div>`;
    button.innerHTML = '<i class="fas fa-minus"></i>';
    window.scrollBy(0, 33 * window.innerHeight / 100);
  } else {
    console.log('no')
    filler.innerHTML = "";
    button.innerHTML = '<i class="fas fa-plus"></i>';
    window.scrollBy(0, -100);
  }
};