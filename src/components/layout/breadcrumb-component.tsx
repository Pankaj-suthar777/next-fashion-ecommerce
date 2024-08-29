import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export interface BreadcrumbDemoProps {
  items: {
    name: string;
    href: string;
  }[];
}

export default function BreadcrumbComponent({ items }: BreadcrumbDemoProps) {
  return (
    <Breadcrumb className="w-full flex flex-row">
      <BreadcrumbList className="flex flex-row">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink href={item.href}>{item.name}</BreadcrumbLink>
            </BreadcrumbItem>
            {items.length !== index + 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
