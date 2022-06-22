export const getThumbnailUrlFromVideo = videoUrl => {
    const url = new URL(videoUrl)
    const videoId = url.searchParams.get('v')

    return `https://img.youtube.com/vi/${videoId}/0.jpg`
}

export const getEmbedUrlFromVideo = videoUrl => {
    const url = new URL(videoUrl)
    const videoId = url.searchParams.get('v')

    return `https://youtube.com/embed/${videoId}`
}