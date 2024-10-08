"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  ChartBarStacked,
  Home,
  LineChart,
  Package,
  Package2,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <TooltipProvider>
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
          <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
            <Link
              href="#"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            >
              <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/admin"
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-lg  text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                    {
                      "bg-accent": pathname === "/admin",
                    }
                  )}
                >
                  <Home className="h-5 w-5" />
                  <span className="sr-only">Dashboard</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Dashboard</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/admin/orders"
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-lg  text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                    {
                      "bg-accent": pathname === "/admin/orders",
                    }
                  )}
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span className="sr-only">Orders</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Orders</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/admin/products"
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-lg  text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                    {
                      "bg-accent": pathname === "/admin/products",
                    }
                  )}
                >
                  <Package className="h-5 w-5" />
                  <span className="sr-only">Products</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Products</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/admin/categories"
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-lg  text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                    {
                      "bg-accent": pathname === "/admin/categories",
                    }
                  )}
                >
                  <ChartBarStacked className="h-5 w-5" />
                  <span className="sr-only">Categories</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Categories</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/admin/customers"
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-lg  text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                    {
                      "bg-accent": pathname === "/admin/customers",
                    }
                  )}
                >
                  <Users2 className="h-5 w-5" />
                  <span className="sr-only">Customers</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Customers</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/admin/analytics"
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-lg  text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                    {
                      "bg-accent": pathname === "/admin/analytics",
                    }
                  )}
                >
                  <LineChart className="h-5 w-5" />
                  <span className="sr-only">Analytics</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Analytics</TooltipContent>
            </Tooltip>
          </nav>
          <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/admin/settings/general"
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-lg  text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                    {
                      "bg-accent": pathname === "/admin/settings",
                    }
                  )}
                >
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </nav>
        </aside>
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          {children}
        </div>
      </TooltipProvider>
    </div>
  );
}
