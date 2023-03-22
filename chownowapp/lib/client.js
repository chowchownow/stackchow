import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client = sanityClient( {
       projectId: "2yoy5jgj",
       dataset: 'production',
       apiVersion: "2023-03-15",
       useCdn: true,
       token:
       "sky1vuo6dWfPlOOifJ16s5oML4zzkitikjmRmdHHw6ok66n73loO7k4orPd0v9z4c1eRd2c3UzqGtkioBgfEHBtAXKasakBI2DkusXnKdnzxLHYuDbE4I9YTYItGl7Dx8OTPYrpiv8PofvqpCgquzQriSPhO6wH4ThXnAe65zr0wImjC6Ewc"
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)