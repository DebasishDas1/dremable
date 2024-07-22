import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqSectionProps = {
  list: {
    query: string;
    answer: string;
  }[];
};

const FaqSection = ({ list }: FaqSectionProps) => {
  return (
    <>
      {list.map((item, index) => (
        <Accordion key={index} type="single" collapsible className="md:w-[50%]">
          <AccordionItem
            value={`item-${index + 1}`}
            className="py-1 px-6 rounded-lg my-4 bg-white"
          >
            <AccordionTrigger>{item.query}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </>
  );
};

export default FaqSection;
