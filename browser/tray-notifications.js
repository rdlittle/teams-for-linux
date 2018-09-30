'use strict';

const { nativeImage } = require('electron');

/**
 * Build an app icon with a notifications count overlay.
 */
function buildIcon({ count, icon }) {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    canvas.height = 24;
    canvas.width = 24;
    const image = new Image();
    image.src = icon.toDataURL('image/png');
    console.log("In tray-notification.buildIcon()" +image.src)

    // Create the red circle for notifications
    image.onload = () => {
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0, 24, 24);
      if (count > 0) {
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.ellipse(12, 10, 10, 10, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';

        ctx.font = 'bold 10px "Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif';
        if (count > 9) {
          ctx.fillText('9+', 15, 15);
        } else {
          ctx.fillText(count.toString(), 15, 15);
        }
      }
      resolve(canvas.toDataURL());
    };
  });
}

exports = module.exports = ({ ipc, iconPath }) => {
  let lastCount = 0;

  ipc.on('page-title', () => {
    if (typeof angular === 'undefined') {
      return;
    }

    const count = angular.element(document.documentElement)
      .controller()
      .pageTitleNotificationCount;
    if (lastCount !== count) {
      buildIcon({ count, icon: nativeImage.createFromPath(iconPath) })
        .then((icon) => {
          ipc.send('notifications', {
            count,
            icon
          });
        });
      lastCount = count;
    }
  });
};
