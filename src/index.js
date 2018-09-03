// 04f9:209d (vendorid:productId)
let device;

const filters = [
  {
    vendorId: 0x04f9
  }
];


function connect() {
  let devices = navigator.usb.requestDevice(
    { filters: filters }
  )

  devices
  .then(selectedDevice => {
      console.log(selectedDevice.productName);
      console.log(selectedDevice.manufacturerName);
      device = selectedDevice;
      return device.open(); // Begin a session.
  })
  .catch(e => console.log(e))
}