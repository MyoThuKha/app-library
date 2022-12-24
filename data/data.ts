interface item {
  title: string;
  about: string;
  details: string;
  tools: string[];
  uri: string;
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
      about: "weather app for android",
      details: "",
      tools: ["Openweathermap API"],
      uri: "",
    },
    {
      title: "note app",
      about: "Simple Note Taking App",
      details:
        "This is my first flutter project and at that time I am very fond of note taking apps. And I think it was the best practice to create simple app. Although projects UI is a litte rough, I really had fun coding that idea into reality.",
      tools: ["Sqflite", "Shared Preferences", "Flutter Staggered Grid View"],
      uri: "https://github.com/MyoThuKha/Simple-Note-App/releases/tag/v1.0.0",
    },
    {
      title: "habit tracker",
      about: "habit tracker with heatmap",
      details: "",
      tools: ["Hive", "Flutter Heatmap Calendar"],
      uri: "",
    },
  ],
  next: [
    {
      title: "weather forecast",
      details: "",
      about: "current weather in the world",
      tools: [
        "Openweathermap API",
        "Typescript",
        "Tailwind CSS",
        "Framer-motion",
      ],
      uri: "weather-myothukha.vercel.app",
    },
    {
      title: "food recipes",
      about: "more than 80 recipes in one place.",
      details: "",
      tools: ["Tailwind CSS", "Redux-Toolkit", "spoonacular API"],
      uri: "recipes-myothukha.vercel.app",
    },
    {
      title: "cafe",
      about: "learn about the variety of cafe",
      details: "",
      tools: ["Tailwind CSS", "Framer-motion", "sampleapis"],
      uri: "cafe-myothukha.vercel.app",
    },
  ],
  reactNative: [
    {
      title: "to do app",
      about: "",
      details: "",
      tools: ["Redux-Toolkit", "Redux-Persist", "async-storage", "Moment JS"],
      uri: "",
    },
    {
      title: "note app",
      about: "lightweight note taking app",
      details: "",
      tools: ["Redux-Toolkit", "Redux-Persist", "async-storage"],
      uri: "",
    },
    {
      title: "calculator",
      about: "simple calculator with redux",
      details: "",
      tools: ["Redux-Toolkit"],
      uri: "",
    },
  ],
};

export default dataList;
