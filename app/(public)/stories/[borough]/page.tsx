import seoKeywords from "@/app/constants/seoKeywords";
import StoriesPageComponent from "../components/StoriesPage/storiesPage.component";
// import StoriesPageComponent from "../components/StoriesPage/storiesPage.component";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ borough: string }>;
}) {
  const { borough } = await params;

  const formatBoroughName = (slug: string) => {
    switch (slug) {
      case "bronx":
        return "The Bronx";
      case "statenisland":
        return "Staten Island";
      default:
        return slug;
    }
  };

  const properBorough = formatBoroughName(borough);
  const title = `${properBorough} Stories | The Not Project`;
  const description = `Explore stories from ${properBorough} on The Not Project.`;
  const url = `https://www.thenotproject.com/stories/${borough}`;
  const image = `/media/boroughBackdrops/${borough}.png`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `Stories from ${properBorough}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    keywords: [...seoKeywords.stories, properBorough],
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ borough: string }>;
}) {
  const { borough } = await params;
  return <StoriesPageComponent boroughParam={borough} />;
}
