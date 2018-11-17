
function ajax(opt) {
  return new Promise((resolve, reject) => {
    //   let xml = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
      let xml = new XMLHttpRequest();
      xml.onload = function() {
          resolve(xml.response)
      }
      if (opt.method === 'get') {
        xml.open(opt.method, opt.url, opt.async);
      }
      xml.send()
  })
}

export default ajax;