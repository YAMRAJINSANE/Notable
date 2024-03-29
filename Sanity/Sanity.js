import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "lfnkoq12",
  dataset: "production",
  apiVersion: "2023-07-13", // use current UTC date - see "specifying API version"!
  // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
