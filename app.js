const newArray = [];

function get(){
    fetch('https://swapi.co/api/films/?format=json')
      .then( response => response.json())
      .then( data => {
        newArray.push(data);

        const title = newArray["0"].results[6].title;
        const releaseYear = newArray["0"].results[6].release_date.toString().slice(0,4);
        console.log(releaseYear + " " + title);

        trivia.innerHTML += `
                <div style='display:inline-block'; class='eachUser'>
                  <span> What year did <b>${title}</b> get released? </span>
                </div>
              `
      })
      
    }
    

    window.onload = function() {
        get();
    }

    