import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function InputWithButton() {
  return (
    <div className="flex w-[500px] max-w-sm items-center h-[40px]  border-gray-400">
      <Input
        placeholder="Search"
        className="rounded-none focus:outline-none h-full"
      />
      <Button type="submit" className="rounded-none h-full bg-gray-900">
        <i className="ri-search-line "></i>
      </Button>
    </div>
  );
}
