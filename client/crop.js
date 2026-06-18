const Jimp = require('jimp');

async function processImages() {
  try {
    // Process Icon
    const icon = await Jimp.read('public/images/logos/FV LOGO PNG (15).png');
    icon.autocrop();
    await icon.writeAsync('public/images/nav-icon-cropped.png');
    console.log('Icon cropped successfully');

    // Process Text
    const text = await Jimp.read('public/images/logos/FV LOGO PNG (3).png');
    text.autocrop();
    await text.writeAsync('public/images/nav-text-cropped.png');
    console.log('Text cropped successfully');
  } catch (err) {
    console.error('Error:', err);
  }
}

processImages();
