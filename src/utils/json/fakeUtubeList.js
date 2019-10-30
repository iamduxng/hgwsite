
const fakeObj =  {
    etag: "8jEFfXBrqiSrcF6Ee7MQuz8XuAM/GirtS7MnW7gio0UJ1r2ZOdHL7dQ",
    id: {
      kind: "youtube#video",
      videoId: "d6S4daLd8wg"
    },
    kind: "youtube#searchResult",
    snippet: {
      channelId: "UCHKVXtT1YBCYUnnr4apqXfg",
      channelTitle: "Travel Thirsty",
      description: "Octopus is eaten in many cultures and is a common food on the Mediterranean and Asian coasts. The arms and sometimes other body parts are prepared in ...",
      liveBroadcastContent: "none",
      publishedAt: "2017-07-27T11:41:37.000Z",
      thumbnails: {
        default: {
          height: 90,
          url: "https://i.ytimg.com/vi/d6S4daLd8wg/default.jpg",
          width: 120
        },
        high: {
          url: "https://i.ytimg.com/vi/d6S4daLd8wg/hqdefault.jpg", 
          width: 480, 
          height: 360
        },
        medium: {
          url: "https://i.ytimg.com/vi/d6S4daLd8wg/mqdefault.jpg", 
          width: 320, 
          height: 180
        }
      },
      title: "Korean Street Food - GIANT OCTOPUS Seoul Seafood"
    }
  }

const fakeData = Array(8).fill(fakeObj);

export default fakeData;