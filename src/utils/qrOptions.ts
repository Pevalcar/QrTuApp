import { atom } from "nanostores";
import QRCodeStyling, { type Options } from "qr-code-styling";

export const $qrOptions = atom<Options>({
  data: "https://qr-code-styling.com",
  width: 300,
  height: 300,
  backgroundOptions: {
    color: "transparent", //TODO transparent
  },
  image:
    "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  dotsOptions: {
    color: "#333",
    type: "dots",
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 10,
    imageSize: 0.5,
  },
});

export const $qrCode = atom(new QRCodeStyling($qrOptions.get()));

const updateQrCode = () => {
  $qrCode.set(new QRCodeStyling($qrOptions.get()));
};

//Image options

export const onFileChange = (event: any) => {
  if (event === null) {
    $qrOptions.set({
      ...$qrOptions.get(),
      image: undefined,
    });
  } else {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        $qrOptions.set({
          ...$qrOptions.get(),
          image: e.target?.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  }
  updateQrCode();
};

export const onMaginImageChange = (event: any) => {
  $qrOptions.set({
    ...$qrOptions.get(),
    imageOptions: {
      ...$qrOptions.get().imageOptions,
      margin: Number(event.target.value),
    },
  });
  updateQrCode();
};

export const hideBackgroundDots = () => {
  $qrOptions.set({
    ...$qrOptions.get(),
    imageOptions: {
      ...$qrOptions.get().imageOptions,
      hideBackgroundDots: $qrOptions.get().imageOptions?.hideBackgroundDots
        ? false
        : true,
    },
  });
  updateQrCode();
};

export const onImageSizeChange = (event: any) => {
  $qrOptions.set({
    ...$qrOptions.get(),
    imageOptions: {
      ...$qrOptions.get().imageOptions,
      imageSize: Number(event.target.value),
    },
  });
  updateQrCode();
};
