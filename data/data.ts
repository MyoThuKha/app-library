interface item {
  title: string;
  about: string;
  tools: string;
}

interface dataListProp {
  [key: string]: item[];
  flutter: item[];
  next: item[];
  reactNative: item[];
}
const dataList: dataListProp = {
  flutter: [
    {
      title: "weather app",
      about: "Created with flutter and openweathermap api",
      tools: "",
    },
    {
      title: "note app",
      about: "Using Sqlite database with flutter coding.",
      tools: "",
    },
    {
      title: "habit tracker",
      about: "Simple habit tracker with heatmap",
      tools: "",
    },
  ],
  next: [
    {
      title: "weather forecast",
      about: "Created with nextjs and openweathermap api",
      tools: "",
    },
    {
      title: "food recipes",
      about: "combined spoonacular api with nextjs",
      tools: "",
    },
    {
      title: "cafe",
      about: "display the variety of cafe",
      tools: "",
    },
  ],
  reactNative: [
    {
      title: "to do app",
      about: "",
      tools: "",
    },
    {
      title: "note app",
      about: "",
      tools: "",
    },
    {
      title: "calculator",
      about: "simple calculator with redux",
      tools: "",
    },
  ],
};

export default dataList;
