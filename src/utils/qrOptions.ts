import { atom } from "nanostores";
import { log } from "node_modules/astro/dist/core/logger/core";
import QRCodeStyling, { type Options, type TypeNumber } from "qr-code-styling";

export const $qrOptions = atom<Options>({
  data: "https://qrtuapp.netlify.app/en/",
  width: 300,
  height: 300,
  margin: 0,

  backgroundOptions: {
    color: "#ffffff", //TODO transparent
  },
  image:
    "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  dotsOptions: {
    color: "#84c4f5",
    type: "dots",
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 1,
    imageSize: 0.5,
  },
});

export const $qrCode = atom(new QRCodeStyling($qrOptions.get()));

const updateQrCode = () => {
  $qrCode.set(new QRCodeStyling($qrOptions.get()));
};

//url
export const onUrlChange = (event: any) => {
  event.preventDefault();
  $qrOptions.set({
    ...$qrOptions.get(),
    data: event.target.value,
  });
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

export const onSizeChange = (event: any) => {
  $qrOptions.set({
    ...$qrOptions.get(),
    width: Number(event.target.value),
    height: Number(event.target.value),
  });
  updateQrCode();
};

export const onMarginInputChange = (event: any) => {
  const margin = Number(event.target.value);
  $qrOptions.set({
    ...$qrOptions.get(),
    margin,
  });
  updateQrCode();
};

export const onMarginChange = (number: number) => {
  const { margin } = $qrOptions.get();
  const marginb = margin ?? 0;
  if (number === -1) {
    if (marginb === 0) {
      return;
    }
    $qrOptions.set({
      ...$qrOptions.get(),
      margin: marginb - 1,
    });
    updateQrCode();
    return;
  } else if (number === 1) {
    if (marginb === 100) {
      return;
    }
    $qrOptions.set({
      ...$qrOptions.get(),
      margin: marginb + 1,
    });
    updateQrCode();
    return;
  }
};

//Background options
export const onColorBgChange = (event: any) => {
  $qrOptions.set({
    ...$qrOptions.get(),
    backgroundOptions: {
      ...$qrOptions.get().backgroundOptions,
      color: event.target.value,
    },
  });
  updateQrCode();
};

export const onRoundChange = (event: any) => {
  $qrOptions.set({
    ...$qrOptions.get(),
    backgroundOptions: {
      ...$qrOptions.get().backgroundOptions,
      round: Number(event.target.value),
    },
  });
  updateQrCode();
};

export const setGradienteBg = (color: any | undefined) => {
  $qrOptions.set({
    ...$qrOptions.get(),
    backgroundOptions: {
      ...$qrOptions.get().backgroundOptions,
      gradient: color ?? undefined,
    },
  });
  updateQrCode();
};

export const onTypeGradeiveChange = (event: any) => {
  console.log(event.target.value);

  $qrOptions.set({
    ...$qrOptions.get(),
    backgroundOptions: {
      ...$qrOptions.get().backgroundOptions,
      gradient: {
        ...$qrOptions.get().backgroundOptions?.gradient,
        type: event.target.value,
        colorStops: $qrOptions.get().backgroundOptions?.gradient
          ?.colorStops ?? [
          {
            offset: 0,
            color: "#ffffff",
          },
          {
            offset: 100,
            color: "onRotationChangeInput",
          },
        ],
      },
    },
  });
  updateQrCode();
};

export const onFirstGradientColorChange = (event: any) => {
  $qrOptions.set({
    ...$qrOptions.get(),
    backgroundOptions: {
      ...$qrOptions.get().backgroundOptions,
      gradient: {
        ...$qrOptions.get().backgroundOptions?.gradient,
        type: $qrOptions.get().backgroundOptions?.gradient?.type ?? "linear",
        colorStops: [
          {
            offset: 0,
            color: event.target.value,
          },
          {
            offset: 1,
            color:
              $qrOptions.get().backgroundOptions?.gradient?.colorStops[1]
                .color ?? "blue",
          },
        ],
      },
    },
  });
  updateQrCode();
};

export const onSecondGradientColorChange = (event: any) => {
  $qrOptions.set({
    ...$qrOptions.get(),
    backgroundOptions: {
      ...$qrOptions.get().backgroundOptions,
      gradient: {
        ...$qrOptions.get().backgroundOptions?.gradient,
        type: $qrOptions.get().backgroundOptions?.gradient?.type ?? "linear",
        colorStops: [
          {
            offset: 0,
            color:
              $qrOptions.get().backgroundOptions?.gradient?.colorStops[0]
                .color ?? "blue",
          },
          {
            offset: 1,
            color: event.target.value,
          },
        ],
      },
    },
  });
  updateQrCode();
};

export const onRotationChange = (event: any) => {
  $qrOptions.set({
    ...$qrOptions.get(),
    backgroundOptions: {
      ...$qrOptions.get().backgroundOptions,
      gradient: {
        type: $qrOptions.get().backgroundOptions?.gradient?.type ?? "linear",
        colorStops: $qrOptions.get().backgroundOptions?.gradient
          ?.colorStops ?? [
          {
            offset: 0,
            color: "#ffffff",
          },
          {
            offset: 100,
            color: "blue",
          },
        ],
        rotation: (Math.PI * Number(event)) / 180,
      },
    },
  });
  updateQrCode();
};

//Dots options
export const onDotTypeChange = (event: any) => {
  $qrOptions.set({
    ...$qrOptions.get(),
    dotsOptions: {
      ...$qrOptions.get().dotsOptions,
      type: event.target.value,
    },
  });
  updateQrCode();
};

export const onDotColorChange = (event: any) => {
  $qrOptions.set({
    ...$qrOptions.get(),
    dotsOptions: {
      ...$qrOptions.get().dotsOptions,
      color: event.target.value,
    },
  });
  updateQrCode();
};

export const onRotationDotsChange = (event: any) => {
  $qrOptions.set({
    ...$qrOptions.get(),
    dotsOptions: {
      ...$qrOptions.get().dotsOptions,
      gradient: {
        type: $qrOptions.get().dotsOptions?.gradient?.type ?? "linear",
        colorStops: $qrOptions.get().dotsOptions?.gradient?.colorStops ?? [
          {
            offset: 0,
            color: "#ffffff",
          },
          {
            offset: 100,
            color: "red",
          },
        ],
        rotation: (Math.PI * Number(event)) / 180,
      },
    },
  });
  updateQrCode();
};

export const onTipeDotsChange = (event: any) => {
  $qrOptions.set({
    ...$qrOptions.get(),
    dotsOptions: {
      ...$qrOptions.get().dotsOptions,
      gradient: {
        ...$qrOptions.get().dotsOptions?.gradient,
        type: event.target.value,
        colorStops: $qrOptions.get().dotsOptions?.gradient?.colorStops ?? [
          {
            offset: 0,
            color: "#ffffff",
          },
          {
            offset: 100,
            color: "onRotationChangeInput",
          },
        ],
      },
    },
  });
  updateQrCode();
};

export const onFirstDotsColorChange = (event: any) => {
  $qrOptions.set({
    ...$qrOptions.get(),
    dotsOptions: {
      ...$qrOptions.get().dotsOptions,
      gradient: {
        ...$qrOptions.get().dotsOptions?.gradient,
        type: $qrOptions.get().dotsOptions?.gradient?.type ?? "linear",
        colorStops: [
          {
            offset: 0,
            color: event.target.value,
          },
          {
            offset: 1,
            color:
              $qrOptions.get().dotsOptions?.gradient?.colorStops[1].color ??
              "blue",
          },
        ],
      },
    },
  });
  updateQrCode();
};

export const onSecondDotsColorChange = (event: any) => {
  $qrOptions.set({
    ...$qrOptions.get(),
    dotsOptions: {
      ...$qrOptions.get().dotsOptions,
      gradient: {
        ...$qrOptions.get().dotsOptions?.gradient,
        type: $qrOptions.get().dotsOptions?.gradient?.type ?? "linear",
        colorStops: [
          {
            offset: 0,
            color:
              $qrOptions.get().dotsOptions?.gradient?.colorStops[0].color ??
              "blue",
          },
          {
            offset: 1,
            color: event.target.value,
          },
        ],
      },
    },
  });
  updateQrCode();
};

export const setGradioeDots = (color: any | undefined) => {
  $qrOptions.set({
    ...$qrOptions.get(),
    dotsOptions: {
      ...$qrOptions.get().dotsOptions,
      gradient: color ?? undefined,
    },
  });
  updateQrCode();
};

//Corners
export const onCornerTypeChange = (event: any) => {
  $qrOptions.set({
    ...$qrOptions.get(),
    cornersSquareOptions: {
      ...$qrOptions.get().cornersSquareOptions,
      type: event.target.value === "none" ? undefined : event.target.value,
    },
  });
  updateQrCode();
};

export const setGradienteCornersSquare = (color: any | undefined) => {
  $qrOptions.set({
    ...$qrOptions.get(),
    cornersSquareOptions: {
      ...$qrOptions.get().cornersSquareOptions,
      gradient: color ?? undefined,
    },
  });
  updateQrCode();
};

export const onFirstCornersSquareColorChange = (event: any) => {
  $qrOptions.set({
    ...$qrOptions.get(),
    cornersSquareOptions: {
      ...$qrOptions.get().cornersSquareOptions,
      gradient: {
        ...$qrOptions.get().cornersSquareOptions?.gradient,
        type: $qrOptions.get().cornersSquareOptions?.gradient?.type ?? "linear",
        colorStops: [
          {
            offset: 0,
            color: event.target.value,
          },
          {
            offset: 1,
            color:
              $qrOptions.get().cornersSquareOptions?.gradient?.colorStops[1]
                .color ?? "blue",
          },
        ],
      },
    },
  });
  updateQrCode();
};

export const onSecondCornersSquareColorChange = (event: any) => {
  $qrOptions.set({
    ...$qrOptions.get(),
    cornersSquareOptions: {
      ...$qrOptions.get().cornersSquareOptions,
      gradient: {
        ...$qrOptions.get().cornersSquareOptions?.gradient,
        type: $qrOptions.get().cornersSquareOptions?.gradient?.type ?? "linear",
        colorStops: [
          {
            offset: 0,
            color:
              $qrOptions.get().cornersSquareOptions?.gradient?.colorStops[0]
                .color ?? "blue",
          },
          {
            offset: 1,
            color: event.target.value,
          },
        ],
      },
    },
  });
  updateQrCode();
};

export const onRotationCornerTypeChange = (event: any) => {
  $qrOptions.set({
    ...$qrOptions.get(),
    cornersSquareOptions: {
      ...$qrOptions.get().cornersSquareOptions,
      gradient: {
        type: $qrOptions.get().cornersSquareOptions?.gradient?.type ?? "linear",
        colorStops: $qrOptions.get().cornersSquareOptions?.gradient
          ?.colorStops ?? [
          {
            offset: 0,
            color: "#ffffff",
          },
          {
            offset: 100,
            color: "blue",
          },
        ],
        rotation: (Math.PI * Number(event)) / 180,
      },
    },
  });
  updateQrCode();
};

export const onTipeCornersSquareChange = (event: any) => {
  $qrOptions.set({
    ...$qrOptions.get(),
    cornersSquareOptions: {
      ...$qrOptions.get().cornersSquareOptions,
      gradient: {
        ...$qrOptions.get().cornersSquareOptions?.gradient,
        type: event.target.value,
        colorStops: $qrOptions.get().cornersSquareOptions?.gradient
          ?.colorStops ?? [
          {
            offset: 0,
            color: "#ffffff",
          },
          {
            offset: 100,
            color: "onRotationChangeInput",
          },
        ],
      },
    },
  });
  updateQrCode();
};

export const onCornerColorChange = (event: any) => {
  $qrOptions.set({
    ...$qrOptions.get(),
    cornersSquareOptions: {
      ...$qrOptions.get().cornersSquareOptions,
      color: event.target.value,
    },
  });
  updateQrCode();
};
//Dot Corners
export const onCornerDotTypeChange = (event: any) => {
  $qrOptions.set({
    ...$qrOptions.get(),
    cornersDotOptions: {
      ...$qrOptions.get().cornersDotOptions,
      type: event.target.value === "none" ? undefined : event.target.value,
    },
  });
  updateQrCode();
};

export const setGradienteCornersDot = (color: any | undefined) => {
  $qrOptions.set({
    ...$qrOptions.get(),
    cornersDotOptions: {
      ...$qrOptions.get().cornersDotOptions,
      gradient: color ?? undefined,
    },
  });
  updateQrCode();
};

export const onRotationCornerDotTypeChange = (event: any) => {
  $qrOptions.set({
    ...$qrOptions.get(),
    cornersDotOptions: {
      ...$qrOptions.get().cornersDotOptions,
      gradient: {
        type: $qrOptions.get().cornersDotOptions?.gradient?.type ?? "linear",
        colorStops: $qrOptions.get().cornersDotOptions?.gradient
          ?.colorStops ?? [
          {
            offset: 0,
            color: "#ffffff",
          },
          {
            offset: 100,
            color: "blue",
          },
        ],
        rotation: (Math.PI * Number(event)) / 180,
      },
    },
  });
  updateQrCode();
};

export const onLinearColorDotCornerChange = (event: any) => {
  $qrOptions.set({
    ...$qrOptions.get(),
    cornersDotOptions: {
      color: event.target.value,
    },
  });
  updateQrCode();
};

export const onFirstCornersDotColorChange = (event: any) => {
  $qrOptions.set({
    ...$qrOptions.get(),
    cornersDotOptions: {
      ...$qrOptions.get().cornersDotOptions,
      gradient: {
        ...$qrOptions.get().cornersDotOptions?.gradient,
        type: $qrOptions.get().cornersDotOptions?.gradient?.type ?? "linear",
        colorStops: [
          {
            offset: 0,
            color: event.target.value,
          },
          {
            offset: 1,
            color:
              $qrOptions.get().cornersDotOptions?.gradient?.colorStops[1]
                .color ?? "blue",
          },
        ],
      },
    },
  });
  updateQrCode();
};

export const onSecondCornersDotColorChange = (event: any) => {
  $qrOptions.set({
    ...$qrOptions.get(),
    cornersDotOptions: {
      ...$qrOptions.get().cornersDotOptions,
      gradient: {
        ...$qrOptions.get().cornersDotOptions?.gradient,
        type: $qrOptions.get().cornersDotOptions?.gradient?.type ?? "linear",
        colorStops: [
          {
            offset: 0,
            color:
              $qrOptions.get().cornersDotOptions?.gradient?.colorStops[0]
                .color ?? "blue",
          },
          {
            offset: 1,
            color: event.target.value,
          },
        ],
      },
    },
  });
  updateQrCode();
};

export const onTipeCornersDotChange = (event: any) => {
  $qrOptions.set({
    ...$qrOptions.get(),
    cornersDotOptions: {
      ...$qrOptions.get().cornersDotOptions,
      gradient: {
        ...$qrOptions.get().cornersDotOptions?.gradient,
        type: event.target.value,
        colorStops: $qrOptions.get().cornersDotOptions?.gradient
          ?.colorStops ?? [
          {
            offset: 0,
            color: "#ffffff",
          },
          {
            offset: 100,
            color: "onRotationChangeInput",
          },
        ],
      },
    },
  });
  updateQrCode();
};
//QR options
export const onTypeNumberChange = (event: any) => {
  if (event < 0 || event > 40) {
    return;
  }
  $qrOptions.set({
    ...$qrOptions.get(),
    qrOptions: {
      ...$qrOptions.get().qrOptions,
      typeNumber: event as TypeNumber,
    },
  });
  updateQrCode();
};

export const onModeChange = (event: any) => {
  $qrOptions.set({
    ...$qrOptions.get(),
    qrOptions: {
      ...$qrOptions.get().qrOptions,
      mode: event.target.value,
    },
  });
  updateQrCode();
};

export const onErrorCorrectionChange = (event: any) => {
  $qrOptions.set({
    ...$qrOptions.get(),
    qrOptions: {
      ...$qrOptions.get().qrOptions,
      errorCorrectionLevel: event.target.value,
    },
  });
  updateQrCode();
};
