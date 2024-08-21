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

export default function Dashboard() {
  const [activeModule, setActiveModule] = useState(null);
  const toggleModule = (module: any) => {
    setActiveModule(activeModule === module ? null : module);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center h-16 px-4 bg-black text-white">
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold"
            prefetch={false}
          >
            <HomeIcon className="w-6 h-6" />
            <span>Dashboard</span>
            <Badge variant="destructive">0</Badge>
          </Link>
          <ChevronLeftIcon className="w-6 h-6" />
          <ChevronRightIcon className="w-6 h-6" />
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
        <div className="flex flex-col w-full md:w-2/3 p-4">
          <Tabs defaultValue="notifications">
            <TabsList>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="announcements">Announcements</TabsTrigger>
            </TabsList>
            <TabsContent value="notifications">
              <div className="h-[282px] overflow-y-scroll border rounded-lg p-2 shadow-lg">
                <Card className="mb-2 shadow-lg">
                  <CardHeader>
                    <CardTitle>
                      <div>Gymkhana Module</div>
                      <div className="text-sm font-normal mt-1">
                        2 weeks, 6 days ago
                      </div>
                    </CardTitle>
                    <CardDescription>
                      <span className="text-lg text-gray-600 mt-5">
                        Hackbyte event by BitByte Club will be organised in
                        CR102 -by PRIYANSH MEHTA
                      </span>
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="mb-2 shadow-lg">
                  <CardHeader>
                    <CardTitle>
                      <div>Gymkhana Module</div>
                      <div className="text-sm font-normal mt-1">
                        2 weeks, 6 days ago
                      </div>
                    </CardTitle>
                    <CardDescription>
                      <span className="text-lg text-gray-600 mt-5">
                        Hackbyte event by BitByte Club will be organised in
                        CR102 -by PRIYANSH MEHTA
                      </span>
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="mb-2 shadow-lg">
                  <CardHeader>
                    <CardTitle>
                      <div>Gymkhana Module</div>
                      <div className="text-sm font-normal mt-1">
                        2 weeks, 6 days ago
                      </div>
                    </CardTitle>
                    <CardDescription>
                      <span className="text-lg text-gray-600 mt-5">
                        Hackbyte event by BitByte Club will be organised in
                        CR102 -by PRIYANSH MEHTA
                      </span>
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="mb-2 shadow-lg">
                  <CardHeader>
                    <CardTitle>
                      <div>Gymkhana Module</div>
                      <div className="text-sm font-normal mt-1">
                        2 weeks, 6 days ago
                      </div>
                    </CardTitle>
                    <CardDescription>
                      <span className="text-lg text-gray-600 mt-5">
                        Hackbyte event by BitByte Club will be organised in
                        CR102 -by PRIYANSH MEHTA
                      </span>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="announcements">
              <div className="h-[282px] overflow-y-scroll border rounded-lg p-2 shadow-lg">
                <Card className="mb-2 shadow-lg">
                  <CardHeader>
                    <CardTitle>
                      <div>Gymkhana Module</div>
                      <div className="text-sm font-normal mt-1">
                        2 weeks, 6 days ago
                      </div>
                    </CardTitle>
                    <CardDescription>
                      <span className="text-lg text-gray-600 mt-5">
                        Hackbyte event by BitByte Club will be organised in
                        CR102 -by PRIYANSH MEHTA
                      </span>
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="mb-2 shadow-lg">
                  <CardHeader>
                    <CardTitle>
                      <div>Gymkhana Module</div>
                      <div className="text-sm font-normal mt-1">
                        2 weeks, 6 days ago
                      </div>
                    </CardTitle>
                    <CardDescription>
                      <span className="text-lg text-gray-600 mt-5">
                        Hackbyte event by BitByte Club will be organised in
                        CR102 -by PRIYANSH MEHTA
                      </span>
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="mb-2 shadow-lg">
                  <CardHeader>
                    <CardTitle>
                      <div>Gymkhana Module</div>
                      <div className="text-sm font-normal mt-1">
                        2 weeks, 6 days ago
                      </div>
                    </CardTitle>
                    <CardDescription>
                      <span className="text-lg text-gray-600 mt-5">
                        Hackbyte event by BitByte Club will be organised in
                        CR102 -by PRIYANSH MEHTA
                      </span>
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="mb-2 shadow-lg">
                  <CardHeader>
                    <CardTitle>
                      <div>Gymkhana Module</div>
                      <div className="text-sm font-normal mt-1">
                        2 weeks, 6 days ago
                      </div>
                    </CardTitle>
                    <CardDescription>
                      <span className="text-lg text-gray-600 mt-5">
                        Hackbyte event by BitByte Club will be organised in
                        CR102 -by PRIYANSH MEHTA
                      </span>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          <div className="mt-4">
            <Accordion
              type="single"
              collapsible
              defaultValue={"modules"}
              className="w-full p-2"
            >
              <AccordionItem value="modules">
                <AccordionTrigger className="h-14 text-lg bg-black text-white rounded-lg p-2">
                  Modules
                </AccordionTrigger>
                <AccordionContent>
                  <Card className="w-full">
                    <CardContent className="whitespace-nowrap grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                      {[
                        "Academics",
                        "Programme and Curriculum",
                        "Mess Management",
                        "Visitor's Hostel",
                        "Healthcare Center",
                        "Scholarship Port0al",
                        "Complaint System",
                        "Placement Cell",
                        "Department Portal",
                        "Gymkhana",
                        "Hostel Management",
                        "Other Academic Procedure",
                      ].map((module, index) => (
                        <Button
                          key={index}
                          variant={
                            activeModule === module ? "default" : "outline"
                          }
                          className="flex items-center justify-center h-16 break-words"
                          onClick={() => toggleModule(module)}
                        >
                          <div>{module}</div>
                        </Button>
                      ))}
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/4 p-4 ml-20">
          <Card className="w-full bg-gray-200 border border-gray-300 shadow-lg">
            <CardContent className="flex flex-col items-center">
              <img
                src="/profile.png"
                alt="Profile"
                className="h-60 w-60 rounded-full mt-5"
              />
              <div className="mt-4 text-center">
                <h2 className="text-xl font-bold">MIRIYALA VITHESH KRISHNA</h2>
                <p>CSE - 22BCS161</p>
                <p>B.Tech 2022</p>
                <p>Sem - 1</p>
                <p>Student</p>
              </div>
              <Button variant="outline" className="mt-4 shadow-lg">
                View Professional Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

function ChevronLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function HomeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
