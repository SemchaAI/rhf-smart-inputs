import { FormWithMultiSelect } from "@/components/entities/forms/FormWithMultiSelect";
import { MultiSelect, Option } from "@/components/features";
import { Container } from "@/components/shared";
import { useEffect, useState } from "react";

// type FormValues = {
//   technologies: Option[];
// };
// DEFAULT EXAMPLE OF USING MULTISELECT
export default function HomePage() {
  const [options, setOptions] = useState<Option[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  console.log("selected", selected, isLoading);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://67557eb711ce847c992a46aa.mockapi.io/api/v1/technologies",
        );
        const data = await response.json();
        // Assuming the returned data is in the form of Option[]:
        setOptions(data);
      } catch (error) {
        console.error("Error fetching options:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <Container>
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-3xl">Home. Multi-select test</h1>
          <MultiSelect
            options={options}
            value={selected}
            onChange={(option) => {
              // Toggle selection logic: remove if exists, add if not
              const exists = selected.some((v: string) => v === option);
              if (exists) {
                setSelected(selected.filter((v: string) => v !== option));
              } else {
                setSelected([...selected, option]);
              }
            }}
            onClear={() => setSelected([])}
            placeholder="Select options"
            loading={isLoading}
          />
          <FormWithMultiSelect />
        </div>
      </Container>
    </section>
  );
}
