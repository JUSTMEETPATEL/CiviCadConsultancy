"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {  House, Mail } from "lucide-react";
import Link from "next/link";

export function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement & {
        name: { value: string };
        email: { value: string };
        subject: { value: string };
        message: { value: string };
    };
    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            access_key: "6d908142-e09a-46d0-97d7-390db141f10b",
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value,
        }),
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
        setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
      <Link
            href="/"
            className="bg-black text-white px-4 py-2 mb-10 rounded-full font-bold hover:bg-gray-800 transition-all duration-200 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="flex items-center">
              Home
              <House className="ml-2 h-4 w-4" />
            </span>
          </Link>
        <Card className="bg-white shadow-lg border border-gray-100">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-600">
              Get in Touch
            </CardTitle>
            <CardDescription className="text-gray-500">
              We&apos;d love to hear from you! Fill out the form below to send us a
              message.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} action="" className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="border-gray-200 focus:border-gray-500 focus:ring-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="border-gray-200 focus:border-gray-500 focus:ring-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-gray-700">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    required
                    className="border-gray-200 focus:border-gray-500 focus:ring-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    className="min-h-[150px] border-gray-200 focus:border-gray-500 focus:ring-gray-500"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gray-500 hover:bg-gray-600 text-white"
                >
                  Submit
                </Button>
              </form>
            ) : (
              <div className="text-center py-8">
                <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                  Thank you!
                </h3>
                <p className="text-gray-500">
                  We&apos;ll get back to you shortly.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">
            Other Ways to Reach Us
          </h2>
          <div className="flex justify-center space-x-8">
            <div className="flex items-center text-gray-600">
              <Mail className="h-5 w-5 mr-2" />
              <a
                href="mailto:contact@reciperoulette.com"
                className="hover:underline"
              >
                civicadconsultancy@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
