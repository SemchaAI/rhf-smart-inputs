import { Container } from "@/components/shared";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="after:content[''] after:border-foreground-muted relative h-20 w-full bg-foreground after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:border-t after:border-solid">
      <Container>
        <div className="flex h-20 items-center">
          <p className="typo-body-14 w-full text-end">
            © {year}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};
