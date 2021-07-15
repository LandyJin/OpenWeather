type Env = {
  apiUrl: string;
  apiKey: string;
  iconUrl: string;
  cities: string[];
  weekDays: string[];
};

const env: Env = {
  apiUrl: "https://api.openweathermap.org/data/2.5",
  apiKey: "7b4fb46cc05ea689b30741a37fa6efb7",
  iconUrl: "https://api.openweathermap.org/img/w/",
  cities: [
    "Melbourne,au", "Canberra,au", "Sydney,au" , "Darwin,au", "Brisbane,au", "Adelaide,au", "Hobart,au", "Perth,au", "Test Error,au"
  ],
  weekDays: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
};

export default env;