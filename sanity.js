// import { SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: "magx2vzb",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-03-25",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
