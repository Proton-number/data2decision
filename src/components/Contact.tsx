import { motion } from "motion/react";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Github,
  Facebook,
} from "lucide-react";
import { Input } from "./ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email." }),
  subject: z
    .string()
    .min(8, { message: "Subject must be at least 8 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

function Contact() {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-blue-400" },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      color: "hover:bg-blue-600",
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
    { icon: Github, href: "#", label: "GitHub", color: "hover:bg-gray-800" },
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
      color: "hover:bg-blue-800",
    },
  ];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className=" min-h-screen">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-24 pb-10"
      >
        <div className="container mx-auto px-6 md:px-14">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 ">
              Let's Connect
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
              laborum obcaecati dignissimos, modi doloribus ea distinctio fugit
              harum ipsam recusanda
            </p>

            {/* Social Media Links */}
            <div className="flex justify-center gap-4 mb-12">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-3 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-sm
                    ${social.color} group transition-all duration-300
                    hover:shadow-lg hover:-translate-y-1`}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-10">
        <div className="container mx-auto px-6 md:px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Direct Email Card */}
            <motion.a
              href="mailto:hello@company.com"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="backdrop-blur-lg bg-white/30 dark:bg-white/10 rounded-2xl p-6 shadow-lg
                cursor-pointer transition-all group"
            >
              <div
                className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 
                flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
              >
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us Directly</h3>
              <p className="text-gray-600 dark:text-gray-300">
                hello@company.com
              </p>
            </motion.a>

            {/* Phone Card */}

            <motion.a
              href="tel:+15551234567"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="backdrop-blur-lg bg-white/30 dark:bg-white/10 rounded-2xl p-6 shadow-lg
                cursor-pointer transition-all group"
            >
              <div
                className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-400 to-indigo-600 
                flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
              >
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 dark:text-gray-300">
                +1 (555) 123-4567
              </p>
            </motion.a>

            {/* Location Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="backdrop-blur-lg bg-white/30 dark:bg-white/10 rounded-2xl p-6 shadow-lg
                lg:col-span-1 md:col-span-2"
            >
              <div
                className="w-12 h-12 rounded-xl bg-gradient-to-r from-violet-400 to-violet-600 
                flex items-center justify-center mb-4"
              >
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Visit Our Office</h3>
              <p className="text-gray-600 dark:text-gray-300">
                123 Innovation Drive
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto px-6 md:px-14">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Prefer a structured format? Use our contact form below.
            </p>
          </div>
          {/* form */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto backdrop-blur-lg bg-white/30 dark:bg-white/10 p-8 md:p-12 rounded-2xl shadow-lg"
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  name="name"
                  render={() => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          aria-label="Name"
                          placeholder="Name"
                          className="peer w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-black/50 backdrop-blur-sm outline-none transition-all dark:text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="email"
                  render={() => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          aria-label="Email"
                          placeholder="Email"
                          className="peer w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-black/50 backdrop-blur-sm outline-none transition-all dark:text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="subject"
                  render={() => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input
                          aria-label="Subject"
                          placeholder="Subject"
                          className="peer w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-black/50 backdrop-blur-sm outline-none transition-all dark:text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="message"
                  render={() => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          aria-label="Message"
                          placeholder="Type your message here."
                          rows={5}
                          className="peer w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-black/50 backdrop-blur-sm outline-none transition-all dark:text-white resize-none"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all shadow-lg"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
