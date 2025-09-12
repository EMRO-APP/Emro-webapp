import * as React from "react";

import { SearchForm } from "@/components/search-form";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  Ambulance,
  Bell,
  HomeIcon,
  LogOutIcon,
  Settings,
  SettingsIcon,
  Tag,
  TagIcon,
} from "lucide-react";

const data = {
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: "#",
          isActive: true,
          icon: <HomeIcon />,
        },
        {
          title: "Manage Bookings",
          url: "#",
          icon: <Ambulance />,
        },
        {
          title: "Subscription Plans",
          url: "#",
          icon: <TagIcon />,
        },
      ],
    },
    {
      title: "Manage Prefrences",
      url: "#",
      items: [
        {
          title: "Notifications",
          url: "#",
          icon: <Bell />,
        },
        {
          title: "System Settings",
          url: "#",
          icon: <Settings />,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="my-6 ">
        <img src="/logoO.svg" loading="lazy" className="w-1/2" />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title} className="mb-4">
                    <SidebarMenuButton
                      className="hover:bg-blue-light data-[active=true]:bg-blue-light data-[active=true]:text-grey-normal text-grey-normal"
                      asChild
                      isActive={item.isActive}
                    >
                      <div>
                        {item.icon}
                        <a href={item.url}>{item.title}</a>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <div className="hidden md:flex gap-2 py-10">
          <div className="text-red-normal">
            <LogOutIcon />
          </div>
          <p>Log Out</p>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
