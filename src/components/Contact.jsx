import { useState } from "react";
import { Button } from "./ui/button";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Localhost ka direct path diya hai taake koi confusion na ho
      const res = await fetch(`${import.meta.env.VITE_API_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast({
          title: "Message Sent ✅",
          description: "I will contact you soon!",
        });
        setFormData({ name: "", email: "", message: "" }); // Form khali karne ke liye
      } else {
        throw new Error(data.message || "Failed to send");
      }
    } catch (error) {
      toast({
        title: "Error ❌",
        description: "Server is not responding. Make sure backend is running!",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+92 334 330 3759", href: "tel:+923343303759" },
    { icon: Mail, label: "Email", value: "arbaniabdullatif@gmail.com", href: "mailto:arbaniabdullatif@gmail.com" },
    { icon: MapPin, label: "Location", value: "Karachi, Pakistan", href: null },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium uppercase tracking-wider mb-4">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-display mb-4">Let's Connect</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h3 className="text-xl font-display font-semibold mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index}>
                  {item.href ? (
                    <a href={item.href} className="flex items-start gap-4 group p-4 rounded-xl transition-all hover:bg-card">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 p-4 rounded-xl">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary"><item.icon size={20} /></div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-card border border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border outline-none"
              />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-background border outline-none"
              />
              <Button type="submit" className="w-full">
                <Send size={18} className="mr-2" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;