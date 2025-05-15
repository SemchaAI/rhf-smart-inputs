import { ProductForm } from "@/components/entities";
import { Container } from "@/components/shared";

export default function ProductAdminPage() {
  return (
    <section>
      <Container>
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-3xl">File input test</h1>
          <ProductForm />
        </div>
      </Container>
    </section>
  );
}
