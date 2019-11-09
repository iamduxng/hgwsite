const post = {
  id: 0,
  title: 'Hanoi Travel Guide',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  thumbnails: {
    default: {
      url: 'https://i.ytimg.com/vi/z0Z4pC3fJgI/maxresdefault.jpg',
      height: 90,
      width: 120
    },
    high: {url: "https://i.ytimg.com/vi/z0Z4pC3fJgI/maxresdefault.jpg", width: 480, height: 360},
    medium: {url: "https://i.ytimg.com/vi/z0Z4pC3fJgI/maxresdefault.jpg", width: 320, height: 180}
  }
}

export default (new Array(8)).fill(post);