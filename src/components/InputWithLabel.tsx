import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputWithLabel({
  label,
  type,
  id,
  placeholder,
  LabelStyle,
  InputStyle,
}: {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  LabelStyle?: string;
  InputStyle?: string;
}) {
  return (
    <div className="grid w-full items-center gap-4">
      <Label htmlFor={id} className={`text-gray-400 ${LabelStyle}`}>
        {label}
      </Label>
      <Input
        className={`outline-none h-[40px] focus:outline-none ${InputStyle}`}
        type={type}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}
