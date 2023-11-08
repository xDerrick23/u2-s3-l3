indow.onload = () =>
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json)
    .then((bookObj) => {
      bookObj.forEach((book) => {
        if (book.imageUrl) {
          const row = document.getElementById("bookImg");
          const col = document.createElement("div");
          col.className =
            "col-12 col-sm-6 col-md-4 col-lg-3 position-relative mb-2 p4";

          const img = document.createElement("img");
          img.className = "w-100 object-fit-cover rounded shadow-sm";
          img.syle.height = "200px";
          img.src = char.imageUrl;

          const h3 = document.createElement("h3");
          h3.className =
            "position-absolute top-50 start-50 translate-middle fs-5 fw-bolder text-white";
          h3.innerText = book.title;

          col.appendChild(img);
          col.appendChild(h3);
          row.appendChild(col);
        }
      });
    })

    .catch((err) => console.log(err));