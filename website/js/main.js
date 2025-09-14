window.onload = function() {
    // code to be executed  when the document finishes loading
    const year = new Date().getFullYear();
const owner = "Nas construction company";
document.getElementById("copyright").innerHTML = 
`&copy; ${year} ${owner}. All rights reserved.`;
            
    

document.getElementById("showpicbutton").addEventListener("click", function() {
  document.getElementsByClassName("sideeq")[0].classList.add("make-it-visible");
    document.getElementsByClassName("sideeq")[1].classList.add("make-it-visible");
    document.getElementsByClassName("sideeq")[2].classList.add("make-it-visible");

console.log("document loaded!");    
});

};


function loadData() {
      fetch("http://localhost:8080/getsecureweldingwork")
        .then(response => response.json())
        .then(result => {
          if (result.success && Array.isArray(result.data)) {
            displayTable(result.data);
          } else {
            alert("No data found!");
          }
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }

    function displayTable(data) {
      const container = document.getElementById("table-container");
      container.innerHTML = ""; // clear old content

      const table = document.createElement("table");
      table.border = "1";
      table.style.borderCollapse = "collapse";
      table.style.marginTop = "10px";

      // Create header row from object keys
      const headerRow = document.createElement("tr");
      Object.keys(data[0]).forEach(key => {
        const th = document.createElement("th");
        th.textContent = key;
        headerRow.appendChild(th);
      });
      table.appendChild(headerRow);

      // Create rows for each object
      data.forEach(item => {
        const row = document.createElement("tr");
        Object.values(item).forEach(value => {
          const td = document.createElement("td");
          td.textContent = value;
          row.appendChild(td);
        });
        table.appendChild(row);
      });

      container.appendChild(table);
    }
  