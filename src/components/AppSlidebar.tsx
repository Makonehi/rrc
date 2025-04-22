// import { CornerDownLeft } from "lucide-react"
//
// import {
//     Sidebar,
//     SidebarContent,
//     SidebarGroup,
//     SidebarGroupContent,
//     SidebarGroupLabel,
//     SidebarMenu,
//     SidebarMenuButton,
//     SidebarMenuItem,
// } from "@/components/ui/sidebar"
//
// // Menu items.
// const items = [
//     {title: "О компании", url: "/aboutCompany", icon: CornerDownLeft},
//     {title: "Память", url: "/memory", icon: CornerDownLeft},
//     {title: "Районный ритуальный центр", url: "/center", icon: CornerDownLeft},
//     {title: "Контакты", url: "/contact", icon: CornerDownLeft},
//     {title: "Реквизиты", url: "/details", icon: CornerDownLeft},
//     {title: "Отзывы", url: "/reviews", icon: CornerDownLeft},
// ]
//
// export function AppSidebar() {
//     return (
//         <Sidebar side="right" variant='inset' className="block lg:hidden">
//             <SidebarContent>
//                 <SidebarGroup>
//                     <SidebarGroupLabel>Application</SidebarGroupLabel>
//                     <SidebarGroupContent>
//                         <SidebarMenu>
//                             {items.map((item) => (
//                                 <SidebarMenuItem key={item.title}>
//                                     <SidebarMenuButton asChild>
//                                         <a href={item.url}>
//                                             <item.icon/>
//                                             <span>{item.title}</span>
//                                         </a>
//                                     </SidebarMenuButton>
//                                 </SidebarMenuItem>
//                             ))}
//                         </SidebarMenu>
//                     </SidebarGroupContent>
//                 </SidebarGroup>
//             </SidebarContent>
//         </Sidebar>
//     )
// }

import { CornerDownRight, X } from "lucide-react";
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
            className={`fixed top-0 left-0 block inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
                isOpen? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={toggleSidebar}
        >
            <Sidebar
                side='right'
                className={`fixed top-0 right-0 h-full max-w-[100vw] z-50 bg-white shadow-lg transform transition-transform duration-300 ${
                    isOpen? "translate-x-0" : "translate-x-full"
                } w-72 md:w-80 overflow-hidden`}
            >
                <div className="flex justify-end p-4">
                    <button onClick={toggleSidebar}>
                        <X className="w-6 h-6 text-black" />
                    </button>
                </div>

                <SidebarContent className="h-full overflow-y-auto min-w-0">
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