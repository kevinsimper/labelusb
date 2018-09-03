// 04f9:209d (vendorid:productId)
import { Buffer } from "buffer/";

let device;

const label = fetch('/label.json')
  .then((res) => {
    return res.text()
  })
  .then((text) => {
    return JSON.parse(text, (key, value) => {
      return value && value.type === "Buffer" ? Buffer.from(value.data) : value
    })
  })

label
.then((label_buffer) => {
  console.log("label_buffer", label_buffer);
})

const filters = [
  {
    vendorId: 0x04f9
  }
];

window.connect = function() {
  label.then((label_buffer) => {
    let devices = navigator.usb.requestDevice(
      { filters: filters }
    )
  
    devices
      .then(selectedDevice => {
        console.log(selectedDevice.productName);
        console.log(selectedDevice.manufacturerName);
        device = selectedDevice;
        console.log("device", device);
        return device.open(); // Begin a session.
      })
      .then(() => device.selectConfiguration(1))
      .then(() => device.claimInterface(0))
      // interfaceNumner, alternateSetting
      .then(() => device.selectAlternateInterface(0, 0))
      // endpoint number: 2 (out, bulk)
      .then(() => {
        device.transferOut(2, label_buffer)
      })
      .catch(e => console.log(e))
  })
}