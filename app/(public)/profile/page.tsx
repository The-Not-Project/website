import seoKeywords from "@/app/constants/seoKeywords";
import ProfilePage from "./profilePage";

export const metadata = {
  title: "Profile | The Not Project",
  description: "Manage your personal information and saved stories on The Not Project.",
  openGraph: {
    title: "Profile | The Not Project",
    description: "Manage your personal information and saved stories on The Not Project.",
    url: "https://www.thenotproject.com/profile",
    type: "website",
    images: [
      {
        url: "/media/LoAndDavid.png",
        width: 1200,
        height: 630,
        alt: "The Not Project Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Profile | The Not Project",
    description: "Manage your personal information and saved stories on The Not Project.",
    images: ["/media/LoAndDavid.png"],
  },
  keywords: seoKeywords.profile,
};

export default function Page() {
  return <ProfilePage />
}
