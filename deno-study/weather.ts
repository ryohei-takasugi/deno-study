import Weathers from "./WeatherModel.ts";

const filenames = Deno.args;
for (const filename of filenames) {
  const file = await Deno.open(filename);
  await file.readable.pipeTo(Deno.stdout.writable, { preventClose: true });
}

const jmaApi = await fetch("https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json");
const responce = JSON.parse(await jmaApi.text());
console.log(responce);

// deno-lint-ignore prefer-const
let wethersData: Array<Weathers> = []; 
console.log("-----------------------------------")
for (const area of responce[0].timeSeries[0].areas) {
  wethersData.push(area as Weathers);
}

for (const w of wethersData) {
  for (let i = 0; i < w.weatherCodes.length; i++) {
    console.log(w.area.name);
    console.log(w.area.code);
    console.log(w.weatherCodes[i]);
    console.log(w.weathers[i]);
    console.log(w.winds[i]);
    console.log(w.waves[i]);  
    console.log("-----");
  }
}
