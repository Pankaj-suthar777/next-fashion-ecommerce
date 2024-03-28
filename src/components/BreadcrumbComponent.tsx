import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export interface BreadcrumbDemoProps {
  firstText: string;
  firstLink: string;
  secondText?: string;
  secondLink?: string;
}

export function BreadcrumbDemo({
  firstText,
  firstLink,
  secondText,
  secondLink,
}: BreadcrumbDemoProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href={firstLink}>{firstText}</BreadcrumbLink>
        </BreadcrumbItem>
        {secondLink && secondText && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={secondLink}>{secondText}</BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
