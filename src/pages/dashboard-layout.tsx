import { AppSidebar } from "@/components/app-sidebar";
import { NavUser } from "@/components/nav-user";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Link, Outlet, useLocation } from "react-router";
// const data = {
  const user = {
    name: "John",
    email: "john@gmail.com",
    avatar: "/logoO.svg",
  }

export default function DashboardLayout() {
  const location = useLocation();
  const pathNames = location.pathname.split("/").filter(Boolean);
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <div className="flex justify-between items-center gap-2 w-full">
            <Breadcrumb>
              <BreadcrumbList>
                {pathNames.map((value, index) => {
                  const to = "/" + pathNames.slice(0, index + 1).join("/");
                  const isLast = index === pathNames.length - 1;
                  const label = value.charAt(0).toUpperCase() + value.slice(1);
                  return (
                    <BreadcrumbItem
                      key={to}
                      className="hidden md:flex items-center gap-1"
                    >
                      {isLast ? (
                        <BreadcrumbPage>{label}</BreadcrumbPage>
                      ) : value === "dashboard" ? (
                        // Dashboard is not clickable
                        <span>{label}</span>
                      ) : (
                        <BreadcrumbLink asChild>
                          <Link to={to}>{label}</Link>
                        </BreadcrumbLink>
                      )}
                      {!isLast && <BreadcrumbSeparator />}
                    </BreadcrumbItem>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>
            <NavUser user={user} />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div>
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" /> */}
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
