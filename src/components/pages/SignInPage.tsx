import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/EastWestLogo.png";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Eye, EyeOff } from "lucide-react";

const SignInPage: React.FC = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log("Sign in attempt with:", identifier, password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-neutral-200 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.3, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "backInOut" }}
        className="w-full max-w-2xl bg-white shadow-lg rounded-lg"
      >
        <Card>
          <CardHeader>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="p-4 flex justify-center"
            >
              <img className="w-32" src={logo} alt="logo" />
            </motion.div>
            <CardTitle className="text-4xl font-semibold text-center text-black">
              Sign In
            </CardTitle>
            <p className="text-center text-neutral-500">
              Sign in to your account
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="identifier"
                    className="text-lg font-medium text-neutral-700"
                  >
                    Phone Number/Email
                  </Label>
                  <Input
                    id="identifier"
                    placeholder="Enter your phone number or email"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    className="w-full px-3 py-8 text-lg border-2 border-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="password"
                    className="text-lg font-medium text-neutral-700"
                  >
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3 py-8 text-lg border-2 border-neutral-800 rounded-md "
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:text-neutral-700 focus:outline-none"
                    >
                      {showPassword ? (
                        <EyeOff className="h-6 w-6" />
                      ) : (
                        <Eye className="h-6 w-6" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type="submit"
                  className="w-full mt-6 bg-black text-xl py-8 text-white transition-all duration-200 ease-in-out"
                >
                  Sign In
                </Button>
              </motion.div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end text-md text-neutral-600">
            <a href="#" className="hover:underline">
              Forgot password?
            </a>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default SignInPage;
