"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  Bed,
  CalendarClock,
  Castle,
  ChevronLeft,
  ChevronRight,
  Component,
  Dumbbell,
  GraduationCap,
  Home,
  HousePlus,
  Landmark,
  Menu,
  Notebook,
  School,
  Utensils,
  Warehouse,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const notifications = [
  {
    title: "Gymkhana module",
    time: "2 weeks, 6 days ago",
    description:
      "Hackbyte event by BitByte club will be organized in CR102 - by Priyansh Mehta",
  },
  {
    title: "Gymkhana module",
    time: "3 weeks ago",
    description:
      "A session by BitByte Club will be organised in CR101 -by PRIYANSH MEHTA",
  },
  {
    title: "Mess management module",
    time: "5 weeks ago",
    description: "Registrations are open",
  },
];

const announcements = [
  {
    title: "Healthcare center",
    time: "2 weeks, 6 days ago",
    description: "Test announcement by Prakash Kumar",
  },
  {
    title: "Department",
    time: "4 weeks, 2 days ago",
    description: "Course by Prof.Preethi Khanna",
  },
];

const modules = [
  {
    icon: <Landmark />,
    name: "Academics",
  },
  {
    icon: <CalendarClock />,
    name: "Programme and Curriculum",
  },
  {
    icon: <Utensils />,
    name: "Mess Management",
  },
  {
    icon: <Bed />,
    name: "Visitor's Hostel",
  },
  {
    icon: <HousePlus />,
    name: "Healthcare Center",
  },
  {
    icon: <GraduationCap />,
    name: "Scholarship Portal",
  },
  {
    icon: <Notebook />,
    name: "Complaint System",
  },
  {
    icon: <School />,
    name: "Placement Cell",
  },
  {
    icon: <Castle />,
    name: "Department Portal",
  },
  {
    icon: <Dumbbell />,
    name: "Gymkhana",
  },
  {
    icon: <Warehouse />,
    name: "Hostel Management",
  },
  {
    icon: <Component />,
    name: "Other Academic Procedure",
  },
];

export default function Dashboard() {
  const [activeModule, setActiveModule] = useState(null);
  const toggleModule = (module: any) => {
    setActiveModule(activeModule === module ? null : module);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center h-16 px-4 bg-black text-white">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild className="block md:hidden">
              <Button>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetHeader>
                <SheetTitle className="flex items-center justify-center m-2">
                  Modules
                </SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-2">
                    {modules.map((module, index) => (
                      <Button
                        key={index}
                        variant={
                          activeModule === module ? "default" : "outline"
                        }
                        onClick={() => toggleModule(module)}
                        className="flex flex-row items-center justify-start gap-3 text-sm border shadow-2xl"
                      >
                        {module.icon}
                        {module.name}
                      </Button>
                    ))}
                  </div>
                </SheetDescription>
              </SheetHeader>
              <SheetFooter></SheetFooter>
            </SheetContent>
          </Sheet>
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold"
            prefetch={false}
          >
            <Home className="w-6 h-6" />
            <span>Dashboard</span>
            <Badge variant="destructive">0</Badge>
          </Link>
          <Link href={"#"}>
            <ChevronLeft />
          </Link>
          <Link href={"#"}>
            <ChevronRight />
          </Link>
        </div>
        <div className="text-black ml-auto flex items-center gap-4">
          <Select>
            <SelectTrigger id="role">
              <SelectValue placeholder="Student" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="student">Student</SelectItem>
              <SelectItem value="teacher">Teacher</SelectItem>
            </SelectContent>
          </Select>
          <Button className="text-white" variant="ghost">
            Logout
          </Button>
        </div>
      </header>
      <main className="flex flex-1 p-4 md:p-8 lg:p-12">
        <div className="flex flex-col w-2/3 p-4">
          <Tabs defaultValue="notifications">
            <TabsList>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="announcements">Announcements</TabsTrigger>
            </TabsList>
            <TabsContent value="notifications">
              <div className="h-[70vh] md:h-[282px] w-full overflow-y-scroll border rounded-lg p-2 shadow-2xl">
                {notifications.map((notification, index) => (
                  <Card key={index} className="min-h-20 p-4 mb-2 shadow-2xl">
                    <CardTitle>
                      <div>{notification.title}</div>
                      <div className="text-sm font-normal mt-1">
                        {notification.time}
                      </div>
                    </CardTitle>
                    <CardDescription className="flex items-center justify-between">
                      <span className="text-lg text-gray-600">
                        {notification.description}
                      </span>
                      <Button variant={"outline"} className="shadow-2xl">
                        Mark as read
                      </Button>
                    </CardDescription>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="announcements">
              <div className="h-[282px] overflow-y-scroll border rounded-lg p-2 shadow-2xl">
                {announcements.map((announcement, index) => (
                  <Card key={index} className="min-h-20 p-4 mb-2 shadow-2xl">
                    <CardTitle>
                      <div>{announcement.title}</div>
                      <div className="text-sm font-normal mt-1">
                        {announcement.time}
                      </div>
                    </CardTitle>
                    <CardDescription className="flex items-center justify-between">
                      <span className="text-lg text-gray-600">
                        {announcement.description}
                      </span>
                      <Button variant={"outline"} className="shadow-2xl">
                        Mark as read
                      </Button>
                    </CardDescription>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          <div className="my-4 shadow-2xl rounded-lg hidden md:block">
            <Accordion
              type="single"
              collapsible
              defaultValue={"modules"}
              className="w-full p-2 pb-0"
            >
              <AccordionItem value="modules">
                <AccordionTrigger className="h-14 text-lg bg-black text-white rounded-lg p-2 my-2">
                  Modules
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-4 gap-2">
                    {modules.map((module, index) => (
                      <Button
                        key={index}
                        variant={
                          activeModule === module ? "default" : "outline"
                        }
                        onClick={() => toggleModule(module)}
                        className="min-h-20 flex flex-col items-center justify-center gap-1 text-sm shadow-xl"
                      >
                        {module.icon}
                        {module.name}
                      </Button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="flex flex-col sm:justify-center md:justify-normal w-1/4 sm:w-2/5 md:w-1/4 p-4 md:ml-20">
          <Card className="w-full bg-gray-200 border border-gray-300 shadow-2xl">
            <CardContent className="flex flex-col items-center">
              <img
                src="/profile.png"
                alt="Profile"
                className="h-56 md:h-60 w-56 md:w-60 rounded-full mt-5"
              />
              <div className="mt-4 text-center">
                <h2 className="text-xl font-bold">MIRIYALA VITHESH KRISHNA</h2>
                <p>CSE - 22BCS161</p>
                <p>B.Tech 2022</p>
                <p>Sem - 1</p>
                <p>Student</p>
              </div>
              <Button variant="outline" className="mt-4 shadow-2xl">
                View Professional Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
