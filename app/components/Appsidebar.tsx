import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

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
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Stages and Checklist",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Upload Docs",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Preferred Vendors",
    url: "#",
    icon: Search,
  },
  {
    title: "Tech Stack",
    url: "#",
    icon: Settings,
  },
  {
    title: "Targets",
    url: "#",
    icon: Settings,
  },
  {
    title: "Zee Sales Targets",
    url: "#",
    icon: Settings,
  },
  {
    title: "MAI Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Pending Questions",
    url: "#",
    icon: Settings,
  }
]

export function AppSidebar() {
  return (
    <Sidebar className="bg-red-500 w-[245px]" >
      <SidebarHeader className="bg-[#11455D] px-6 py-6 w-[245px]">
        <div>
        <img 
          src="/logo.png" 
          alt="Logo"
          className="h-14 w-auto"
        />
        </div>
        </SidebarHeader>
      <SidebarContent className="bg-[#11455D] w-[245px]">
        <SidebarMenu className="px-5 py-1">
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="px-1 py-1 text-neutral-50 opacity-75">
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="bg-[#11455D] px-6 py-6 w-[245px]">
        <p className="text-neutral-50 opacity-75 text-[16px] font-DM sans font-[100]">Logout</p>
        </SidebarFooter>
    </Sidebar>
  )
}