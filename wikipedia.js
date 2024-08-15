let searchinput = document.getElementById("searchInput");
let searchContainer = document.getElementById("searchResults");
let spinner=document.getElementById("spinner");
function createAndAddresult(result) {
    let {
        description,
        link,
        title
    } = result;
    let resultContainer = document.createElement("div");
    resultContainer.classList.add("result-item");
    searchContainer.appendChild(resultContainer);
    let anchrTitle = document.createElement("a");
    anchrTitle.classList.add("result-title");
    anchrTitle.href = link;
    anchrTitle.target = "_blank";
    anchrTitle.textContent = title;
    resultContainer.appendChild(anchrTitle);
    let br = document.createElement("br");
    resultContainer.appendChild(br);
    let anchrlink = document.createElement("a");
    anchrlink.classList.add("result-url");
    anchrlink.href = link;
    anchrlink.target = "_blank";
    anchrlink.textContent = link;
    resultContainer.appendChild(anchrlink);
    let br1 = document.createElement("br");
    resultContainer.appendChild(br1);
    let descriptionpara = document.createElement("p");
    descriptionpara.textContent = description;
    descriptionpara.classList.add("link-description");
    resultContainer.appendChild(descriptionpara);

}

function Display(searchResult) {
    for (let result of searchResult) {
       
        console.log(result);
        createAndAddresult(result);
    }
}



function searchwikipedia(event) {
    if (event.key === "Enter") {
        spinner.classList.toggle("d-none");
        searchContainer.textContent="";
        let inputvalue = searchinput.value;
         console.log(inputvalue);
        let option = {
            method: "GET"
        }
        let url = "https://apis.ccbp.in/wiki-search?search=" + inputvalue;
        fetch(url, option)
            .then(function(response) {
                return response.json()
            })
            .then(function(jsondata) {
                   console.log(jsondata);
                    spinner.classList.toggle("d-none");
                Display(jsondata.search_results);
            });
    }
}
searchinput.addEventListener("keydown", searchwikipedia);