function checkImageUrl(Img, position) {
  Img += ''
  const pattern = /^https:\/\/api\.mandarin\.weniv\.co\.kr\/(\d{13})\.(png|svg|jpg|jpeg|gif|webp)$/;

  if (pattern.test(Img)) {
    console.log('통과!')
    return Img
  }
  else {
    if (Img.includes('https://api.mandarin.weniv.co.kr/https://api.mandarin.weniv.co.kr/')) {
      const result = Img.replace('https://api.mandarin.weniv.co.kr/https://api.mandarin.weniv.co.kr/', 'https://api.mandarin.weniv.co.kr/')
      return checkImageUrl(result, position)
    }
    if (Img.includes('mandarin.api')) {
      const result = Img.replace('mandarin.api', 'api.mandarin')
      return checkImageUrl(result, position)
    }

    const regex = /(\d+)\.(png|svg|jpg|jpeg|gif|webp)$/;
    const match = Img.match(regex);
    console.log(match)
    const fileNameWithExtension = match && match[1].length === 13 ? match[1] + '.' + match[2] : null

    if (fileNameWithExtension) {
      return 'https://api.mandarin.weniv.co.kr/' + fileNameWithExtension;
    }

    if (Img.includes('Ellipse') || !fileNameWithExtension) {
      if (position === 'profile') {
        return 'https://api.mandarin.weniv.co.kr/' + '1687455865316.jpg'
      } if (position === 'post') {
        return 'https://api.mandarin.weniv.co.kr/' + '1687455865316.jpg'
      }
    }
  }
}

export default checkImageUrl;