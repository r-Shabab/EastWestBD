import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MdSpaceDashboard,
  MdOutlineSpaceDashboard,
  MdOutlineFeedback,
  MdFeedback,
} from "react-icons/md";
import { HiOutlineUsers, HiUsers } from "react-icons/hi2";
import {
  IoLayersOutline,
  IoLayers,
  AiOutlineProject,
  AiFillProject,
} from "react-icons/io5";
import { FaRegFileAlt, FaFileAlt } from "react-icons/fa";
import {
  LayoutDashboard,
  Users,
  Layers,
  FileText,
  Briefcase,
  AlertCircle,
  LogOut,
  ArrowLeftFromLine,
  ArrowRightFromLine,
  Menu,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import logo from "../../assets/EastWestLogo.png";
const AdminDashboard: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const sidebarItems = [
    { icon: <LayoutDashboard size={28} />, label: "Dashboard" },
    { icon: <Users size={28} />, label: "User Management" },
    { icon: <Layers size={28} />, label: "Stage Management" },
    { icon: <FileText size={28} />, label: "Template Management" },
    { icon: <Briefcase size={28} />, label: "Project Management" },
    { icon: <AlertCircle size={28} />, label: "Audit Trail" },
    { icon: <LogOut size={28} />, label: "Logout" },
  ];

  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <motion.div
        className="bg-white shadow-lg z-50"
        initial={{ width: isExpanded ? 350 : 100 }}
        animate={{ width: isExpanded ? 350 : 100 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={`h-32 px-6 flex justify-between items-center ${
            isExpanded ? "justify-start" : "justify-center"
          }`}
        >
          <img
            src={logo}
            alt="Logo"
            className={isExpanded ? "max-h-16" : "hidden"}
          />

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="text-gray-700  hover:text-gray-900"
          >
            {isExpanded ? (
              <ArrowLeftFromLine size={36} />
            ) : (
              <ArrowRightFromLine size={36} />
            )}
          </Button>
        </div>
        <Separator className="" />
        <motion.nav
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="space-y-1"
        >
          {sidebarItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`w-full h-24 hover:bg-gray-100 rounded-none ${
                isExpanded ? "justify-start px-6" : "justify-center"
              }`}
            >
              <span>{item.icon}</span>
              {isExpanded && (
                <span className="ml-4 text-xl font-normal font-poppins">
                  {item.label}
                </span>
              )}
            </Button>
          ))}
        </motion.nav>
      </motion.div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navbar */}
        <header className="bg-white flex justify-end items-center space-x-10 h-24 shadow-sm">
          <Bell size={28} className="hover:cursor-pointer"></Bell>
          <div className="max-w-full pe-16">
            <div className="">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={toggleSidebar}
              >
                <Menu size={20} />
              </Button>
              <div className="flex items-center space-x-4">
                <span className="text-xl font-poppins font-medium text-gray-700">
                  John Doe
                </span>
                <Avatar className="w-16 h-16">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="max-w-7xl mx-auto py-12 px-6">
            {/* Your dashboard content will go here */}
            <h1 className="text-3xl font-semibold text-gray-900 mb-8">
              Dashboard
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Example content blocks */}
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white shadow rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Content Block {item}
                  </h2>
                  <p className="text-gray-600">
                    This is a placeholder for your dashboard content.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
