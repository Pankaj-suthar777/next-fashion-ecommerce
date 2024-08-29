import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function InputWithLabel({
  label,
  type,
  id,
  placeholder,
  LabelStyle,
  InputStyle,
  value,
  onChange,
}: {
  onChange?: (e: any) => void;
  value: string | number;
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
        onChange={onChange}
        value={value}
        className={`outline-none h-[40px] focus:outline-none ${InputStyle}`}
        type={type}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}
