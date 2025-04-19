import { CornerDownRight } from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,

} from "@/components/ui/sidebar";

export function AppSidebar({ isOpen, toggleSidebar }: { isOpen: boolean, toggleSidebar: () => void }) {
    return (
        <div
            className={`fixed inset-0 z-50 bg-dark-opacity transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
            onClick={toggleSidebar}
        >
            <Sidebar
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {[
                                    { title: "О компании", url: "/aboutCompany", icon: CornerDownRight },
                                    { title: "Память", url: "/memory", icon: CornerDownRight },
                                    { title: "Районный ритуальный центр", url: "/center", icon: CornerDownRight },
                                    { title: "Контакты", url: "/contact", icon: CornerDownRight },
                                    { title: "Реквизиты", url: "/details", icon: CornerDownRight },
                                    { title: "Отзывы", url: "/reviews", icon: CornerDownRight },
                                ].map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <a href={item.url} className="flex items-center gap-2">
                                                <item.icon className="w-5 h-5" />
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
        </div>
    );
}
