import StyledComponentsRegistry from "@/app/utils/styled-registry";
import NavBar from "./shared/components/navbar/navbar.component";
import Footer from "./shared/components/footer/footer.component";

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {    
  return (
      <StyledComponentsRegistry>
        <NavBar />
        {children}
        <Footer />
      </StyledComponentsRegistry>
  );
}
