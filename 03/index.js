let domainName = (url) => {
  if (url.includes('://')) {
    let splitUrl = url.split('://')[1].split('.')[0]
    if (splitUrl.includes('www')) {
      return splitUrl = url.split('.')[1]
    } else {
      return splitUrl
    }
  } else if (url.includes('www')) {
    return url.split('.')[1]
  } else {
    return url.split('.')[0]
  }
}

// function domainName(url){
//   url = url.replace("https://", '');
//   url = url.replace("http://", '');
//   url = url.replace("www.", '');
//   return url.split('.')[0];
// };

// function domainName(url){
//   return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
// }

console.log(domainName("http://github.com/carbonfive/raygun"))
console.log(domainName("http://www.zombie-bites.com"))
console.log(domainName("https://www.cnet.com"))
console.log(domainName("www.xakep.ru"))