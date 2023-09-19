import "./style.scss";
import { getAllTemperatures } from "./functions.js";

async function main() {
  const listItemTemplate = document.querySelector("#listItem").innerHTML;
  const list = document.querySelector(".app__list");
  const allTemperatures = await getAllTemperatures();

  let html = "";

  for (let i = 0; i < allTemperatures.length; i++) {
    const data = allTemperatures[i];
    const totalTemp = data.stats.reduce((acc, data) => acc + data.zon, 0);
    const averageTemp = totalTemp / data.stats.length;

    let cityListItem = listItemTemplate
      .replaceAll("%STAD%", data.stad)
      .replaceAll("%AVERAGE%", averageTemp.toFixed(2) + "°C");

    cityListItem += "<ul>";

    for (let j = 0; j < data.stats.length; j++) {
      const month = data.stats[j].maand;
      const temperature = data.stats[j].zon;

      cityListItem += `<li>${month}: ${temperature}°C</li>`;
    }

    cityListItem += "</ul>";

    html += cityListItem;
  }

  list.innerHTML = html;
}
main();
