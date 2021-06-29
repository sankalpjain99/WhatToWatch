function searchMovie(){
    var movieName = document.getElementById("movieName").value;
    if(movieName != ""){
        fetch("http://www.omdbapi.com/?apikey=1799cef6&page=1&s="+movieName)
            .then(response => response.json())
            .then(data => appendData(data))
            .catch(err => console.log(err));
    } else{
        alert("Enter a movie name");
    }
}

function appendData(data){
    if(data.Response == "True"){
        data = data.Search
        var size = Object.keys(data).length;
        var movieDiv = document.getElementById("movies");
        movieDiv.innerHTML = "";
        for(var i=0;i<size;i++){
            var div = document.createElement("div");
            var moviePoster = document.createElement("img");
            var movieDetails = document.createElement("div");
            moviePoster.setAttribute("src", data[i].Poster);
            movieDetails.innerHTML = data[i].Title + ", " + data[i].Year;
            div.appendChild(moviePoster);
            div.appendChild(movieDetails);
            div.setAttribute("onclick", "openMovie()");
            movieDiv.appendChild(div);
        }
    } else{
        console.log(data.Error);
    }   
}

function openMovie(){
    console.log("movie name here");
}
