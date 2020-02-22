const button = document.querySelector(".big-one");
const filler = document.querySelector("#fill-it");

let spinner = 0;

button.innerHTML = '<i class="fas fa-plus"></i>';

const revealEdu = function () {
  spinner += 90;

  button.style.transform = `rotate(${spinner}deg)`;

  if (button.innerHTML === '<i class="fas fa-plus"></i>') {
    filler.innerHTML = `
                    <div class="extra">
                        <h4>Uniwersytet Ekonomiczny w Poznaniu</h4>
                        <h5> Magister - Towaroznawstwo</h5>
                        <h5> Inżynier - Zarządzanie i Inżynieria Produkcji</h5>
                        <p>Angielski - B1</p>
                    </div>`;
    button.innerHTML = '<i class="fas fa-minus"></i>';
    window.scrollBy(0, 35 * window.innerHeight / 100);
  } else {
    filler.innerHTML = "";
    button.innerHTML = '<i class="fas fa-plus"></i>';
    window.scrollBy(0, -100);
  }
};