document.querySelector('.hamburger').addEventListener
    this.classList.toggle('active')
    document.querySelector('slide-menu').classList.toggle('active')
    document.querySelector('.menu-btn').addEventListener('click', function(){
        document.querySelector('.menu').classList.toggle('is-active');
    });


    window.addEventListener("scroll", () => {
        document.querySelectorAll(".c-box").forEach((e) => {
          const absoluteTop = e.getBoundingClientRect().top;
          const relativeTop = window.pageYOffset;
          const winHeight = window.innerHeight;
          if (absoluteTop <= relativeTop + winHeight) { window.setTimeout(() => {
              e.classList.add("--active");
            }, e.dataset.time);
          }
        });
      });

let alllist = document.querySelectorAll(
  "ol > li";
  console.log(alllist.length)
  console.log(document.getElementById
  ("updateTarget").textContent.length);
)

setTimeout(updateText, 1000);
const updateColor =() {
  document.getElementById("トップ").
  parentElement.style background = "pink";

}
setTimeout(updateColor, 2000);














    