const fakeObj =  {
    link: '',
    cacheId: Math.random(1000),
    title: 'Demo google data',
    snippet: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    pagemap: {
        cse_thumbnail: [
            {src: 'https://media.timeout.com/images/105292780/630/472/image.jpg'}
        ]
    }
}

const fakeSocialObj =  {
    link: '',
    cacheId: Math.random(1000),
    title: 'Instagram data',
    snippet: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    pagemap: {
        cse_thumbnail: [
            {src: 'https://media.timeout.com/images/105292780/630/472/image.jpg'}
        ]
    }
}

const fakeGoogleData = {
    items: Array(8).fill(fakeObj)
}

const fakeSocialData = {
    items: Array(6).fill(fakeSocialObj)
}

export {
    fakeGoogleData,
    fakeSocialData
}