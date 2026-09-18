const search = document.querySelector(".search");

search.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        const query = search.value.trim();

        if (query !== "") {

            window.location.href =
                "https://olga-smotret.net/search/" +
                encodeURIComponent(query);

        }

    }

});