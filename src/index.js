let devices = navigator.usb.getDevices()

devices.then(devices => {
  devices.map(device => {
    console.log(device.productName);
    console.log(device.manufacturerName);
  });
}).catch(e => console.log(e))
