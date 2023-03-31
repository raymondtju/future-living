import { buildUrl } from "cloudinary-build-url";

export const cloudinary = (name: string) => {
  return buildUrl(`/future-living/${name}`, {
    cloud: {
      cloudName: "dstfzlnsw",
    },
    transformations: {
      resize: {
        type: "fill",
      },
    },
  });
};
