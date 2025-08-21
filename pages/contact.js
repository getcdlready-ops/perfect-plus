import { toast } from "react-toastify";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { Input } from "../src/components/ui/input";
import { TextArea } from "@radix-ui/themes";
import { useState } from "react";

const SERVICE_ID = "service_vr0swno";
const TEMPLATE_ID = "template_bki58pu";
const PUBLIC_KEY = "h2LpkiNfIOITcGjfs";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    const formattedData = {
      fullName: data.fullName || "--",
      email: data.email || "--",
      phone: data.phone || "--",
      message: data.message || "--",
    };

    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        formattedData,
        PUBLIC_KEY
      );

      toast("Details submitted successfully!", { type: "success" });
      reset();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Failed to send email:", error);
      toast("Failed to send message.", { type: "error" });
    }
  };

  return (
    <Layout footer={1} header={1}>
      {/* <PageBanner pageName={"Contact Us"} /> */}

      <section className="py-14 mt-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-10 shadow-lg rounded-lg"
          >
            <div className="text-center mb-10">
              <p className="text-[#08006a] font-semibold uppercase">
                Need Assistance? Get in Touch
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold">
                Reach Out Anytime
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <Input
                placeholder="Full Name"
                {...register("fullName", { required: "Full Name is required" })}
              />
              <Input
                placeholder="Email Address"
                type="email"
                {...register("email", { required: "Email is required" })}
              />
              <Input
                placeholder="Phone Number"
                {...register("phone", { required: "Phone Number is required" })}
              />
            </div>

            <div className="mb-6">
              <TextArea
                placeholder="Write Message"
                className={
                  "flex w-full rounded-md  text-base  file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                }
                rows={5}
                {...register("message", { required: "Message is required" })}
              />
            </div>

            <div className="col-md-12">
              <div className="form-group text-center mb-0">
                <button type="submit" className="theme-btn cursor-pointer">
                  {loading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                      />
                      Submitting...
                    </>
                  ) : (
                    <div>
                      send Message <i className="fas fa-arrow-right" />
                    </div>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* Contact Form End */}
      {/* Location Map Area Start */}
      <div className="features-section rel z-1   ">
        <div className="our-location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14564.03187527638!2d-121.56258197067827!3d38.58378865234521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad4171d24dd55%3A0x7f990eef29745109!2s532%20Houston%20St%2C%20West%20Sacramento%2C%20CA%2095691%2C%20USA!5e0!3m2!1sen!2sin!4v1753203962274!5m2!1sen!2sin"
            height={600}
            style={{ border: 0, width: "100%" }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </Layout>
  );
};
export default ContactUs;
