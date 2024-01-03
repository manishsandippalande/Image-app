document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector(".res");
  function pagescroll() {
    const nav = document.getElementById("nav");
    if (window.scrollY >= 33) {
      nav.style.backgroundColor = "#b300ffa3";
      // console.log("done")
    } else {
      nav.style.backgroundColor = "transparent";
      // console.log("not working")
    }
  }
  window.onscroll = function () {
    pagescroll();
  };

  // wbhZu2_-IpRcnR0cCY31ASbkMXZVmdOzqHywNzhMQXk   (access key)
  let searchterm = "";
  const resultbox = document.getElementById("result-container");
  resultbox.innerHTML = ``;
  var id = "wbhZu2_-IpRcnR0cCY31ASbkMXZVmdOzqHywNzhMQXk";
  var searchbox = document.getElementById("searchinp");
  const showmore = document.getElementById("showmore");
  let page = 1;

  
  async function images() {
    searchterm = searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchterm}&client_id=${id}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
    const alldata = data.results;
    if(page == 1){
      resultbox.innerHTML = ""
    }

    alldata.map((result) => {
      resultbox.innerHTML += `<div class="card"><img src="${result.urls.regular}" alt="" class="imgs">
      <a href="${result.urls.regular}" target="_blank">
      <div class="data">
      <button>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
       <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
      </svg>
      </button>
      </a>
      <h3>${result.alt_description}</h3>
      </div>
      </div>`;
    });
    
    showmore.style.display = "block";
  }

  var searchbtn = document.getElementById("searchbtn");
  searchbtn.addEventListener("click", function () {
    page=1
    images();
  });
  

  const cards = document.querySelectorAll(".cards");
  cards.forEach((card) => {
    card.addEventListener("click", cardClickHandler);
  });

  showmore.addEventListener("click", async()=> {
    page++;
    await images();
  });
});