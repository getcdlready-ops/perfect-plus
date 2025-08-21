import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import SignatureCanvas from "react-signature-canvas";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../src/components/ui/card";
import { Button } from "../src/components/ui/button";
import { Input } from "../src/components/ui/input";
import { Label } from "../src/components/ui/label";
import { RadioGroup, RadioGroupItem } from "../src/components/ui/radio-group";
import { Checkbox } from "../src/components/ui/checkbox";
import { Calendar, User, MapPin, FileText, PenTool } from "lucide-react";
import { toast } from "react-toastify";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/components/PageBanner";
import emailjs from "@emailjs/browser";
const SERVICE_ID = "service_uimxucn";
const TEMPLATE_ID = "template_wy7cadp";
const PUBLIC_KEY = "cj9evgivVEUn1Qkb3";

export default function Enrollment() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const signatureRef = useRef(null);
  const [sameAsPhysical, setSameAsPhysical] = useState(false);
  const [loading, setLoading] = useState(false);

  const physicalAddress = watch([
    "physical.line1",
    "physical.city",
    "physical.state",
    "physical.zip",
  ]);

  const handleSameAsPhysicalChange = (checked) => {
    setSameAsPhysical(checked);
    if (checked) {
      setValue("mailing.line1", physicalAddress[0] || "");
      setValue("mailing.city", physicalAddress[1] || "");
      setValue("mailing.state", physicalAddress[2] || "");
      setValue("mailing.zip", physicalAddress[3] || "");
    }
  };

  const onSubmit = async (data) => {
    if (!signatureRef.current?.isEmpty()) {
      const signatureData = signatureRef.current.toDataURL();
      const formData = { ...data, signature: signatureData };
      setLoading(true);
      // const pdfDoc = await PDFDocument.create();
      // const page = pdfDoc.addPage([595, 842]);

      // const pngImage = await pdfDoc.embedPng(signatureData);
      // const pngDims = pngImage.scale(0.5);

      // page.drawImage(pngImage, {
      //   x: 50,
      //   y: 700,
      //   width: pngDims.width,
      //   height: pngDims.height,
      // });

      // const pdfBytes = await pdfDoc.save();

      // // Download the PDF
      // const blob = new Blob([pdfBytes], { type: "application/pdf" });
      // const link = document.createElement("a");
      // link.href = URL.createObjectURL(blob);
      // link.download = "signature.pdf";
      // link.click();
      const templateParams = {
        to_email: "gurpreetramgarhia0808@gmail.com",
        from_name: formData.firstName + " " + formData.lastName,
        user_email: formData.email,
        first_name: formData.firstName,
        last_name: formData.lastName,
        age: formData.age,
        agree_to_terms: formData.agreeToTerms,
        citizen: formData.citizen,
        application_date: formData.date,
        dob: formData.dob,
        license: formData.license,
        phone1: formData.phone1,
        phone2: formData.phone2,
        sex: formData.sex,
        race: formData.race,
        mailing_line1: formData.mailing.line1,
        mailing_city: formData.mailing.city,
        mailing_state: formData.mailing.state,
        mailing_zip: formData.mailing.zip,
        physical_line1: formData.physical.line1,
        physical_city: formData.physical.city,
        physical_state: formData.physical.state,
        physical_zip: formData.physical.zip,
        signature_data: formData.signature.split(",")[1],
        attachment: signatureData,
      };
      try {
        const response = await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          templateParams,
          PUBLIC_KEY
        );
        console.log("Email sent successfully!", response.status, response.text);
        toast("Details submitted successfully!", { type: "success" });
        reset();
        signatureRef.current?.clear();
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Failed to send email:", error);
      }
    } else {
      setLoading(false);
      toast("Please provide your signature", { type: "error" });
    }
  };

  return (
    <Layout header={1} footer={1}>
      {/* <PageBanner pageName={"Enrollment Form"} /> */}

      <div className="min-h-screen bg-gray-50 py-10 mt-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-4 md:mb-8">
            <h3 className="text-xl md:text-3xl font-bold text-gray-900 my-4">
              Enroll Now & Hit the Road
            </h3>
            <p className="text-md md:text-lg text-gray-600">
              Pacific Truck School Training Program
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="gap-y-8">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="gap-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Enrollment Date</Label>
                    <Input
                      id="date"
                      type="date"
                      {...register("date", {
                        required: "Enrollment date is required",
                      })}
                    />
                    {errors.date && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.date.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="license">License/Permit Number</Label>
                    <Input
                      id="license"
                      {...register("license", {
                        required: "License/Permit number is required",
                      })}
                    />
                    {errors.license && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.license.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="middleName">Middle Name</Label>
                    <Input id="middleName" {...register("middleName")} />
                  </div>

                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      {...register("lastName", {
                        required: "Last name is required",
                      })}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input
                      id="dob"
                      type="date"
                      {...register("dob", {
                        required: "Date of birth is required",
                      })}
                    />
                    {errors.dob && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.dob.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      {...register("age", {
                        required: "Age is required",
                        min: {
                          value: 18,
                          message: "Must be at least 18 years old",
                        },
                      })}
                    />
                    {errors.age && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.age.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="gap-y-4">
                  <div>
                    <Label>Sex</Label>
                    <RadioGroup defaultValue="" className="flex gap-6 mt-2">
                      <div className="flex items-center gap-x-2">
                        <RadioGroupItem
                          value="male"
                          id="male"
                          {...register("sex", {
                            required: "Please select sex",
                          })}
                        />
                        <Label htmlFor="male" className="mt-2">
                          Male
                        </Label>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <RadioGroupItem
                          value="female"
                          id="female"
                          {...register("sex", {
                            required: "Please select sex",
                          })}
                        />
                        <Label htmlFor="female" className="mt-2">
                          Female
                        </Label>
                      </div>
                    </RadioGroup>
                    {errors.sex && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.sex.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label>US Citizen</Label>
                    <RadioGroup defaultValue="" className="flex gap-6 mt-2">
                      <div className="flex items-center gap-x-2">
                        <RadioGroupItem
                          value="yes"
                          id="citizen-yes"
                          {...register("citizen", {
                            required: "Please specify citizenship status",
                          })}
                        />
                        <Label htmlFor="citizen-yes" className="mt-2">
                          Yes
                        </Label>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <RadioGroupItem
                          value="no"
                          id="citizen-no"
                          {...register("citizen", {
                            required: "Please specify citizenship status",
                          })}
                        />
                        <Label htmlFor="citizen-no" className="mt-2">
                          No
                        </Label>
                      </div>
                    </RadioGroup>
                    {errors.citizen && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.citizen.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email format",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone1">Phone Number 1</Label>
                    <Input
                      id="phone1"
                      {...register("phone1", {
                        required: "Phone number is required",
                      })}
                    />
                    {errors.phone1 && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone1.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone2">Phone Number 2</Label>
                    <Input id="phone2" {...register("phone2")} />
                  </div>
                </div>

                <div>
                  <Label htmlFor="race">Race/Ethnicity</Label>
                  <Input
                    id="race"
                    {...register("race", {
                      required: "Race/ethnicity is required",
                    })}
                  />
                  {errors.race && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.race.message}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Physical Address */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Physical Address
                </CardTitle>
              </CardHeader>
              <CardContent className="gap-y-4">
                <div>
                  <Label htmlFor="physicalLine1">Address Line 1</Label>
                  <Input
                    id="physicalLine1"
                    {...register("physical.line1", {
                      required: "Address is required",
                    })}
                  />
                  {errors.physical?.line1 && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.physical.line1.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="physicalCity">City</Label>
                    <Input
                      id="physicalCity"
                      {...register("physical.city", {
                        required: "City is required",
                      })}
                    />
                    {errors.physical?.city && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.physical.city.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="physicalState">State</Label>
                    <Input
                      id="physicalState"
                      {...register("physical.state", {
                        required: "State is required",
                      })}
                    />
                    {errors.physical?.state && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.physical.state.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="physicalZip">ZIP Code</Label>
                    <Input
                      id="physicalZip"
                      {...register("physical.zip", {
                        required: "ZIP code is required",
                      })}
                    />
                    {errors.physical?.zip && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.physical.zip.message}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mailing Address */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Mailing Address
                </CardTitle>
              </CardHeader>
              <CardContent className="gap-y-4">
                <div className="flex items-center gap-x-2">
                  <Checkbox
                    id="sameAsPhysical"
                    checked={sameAsPhysical}
                    onCheckedChange={handleSameAsPhysicalChange}
                  />
                  <Label htmlFor="sameAsPhysical" className="mt-2">
                    Same as physical address
                  </Label>
                </div>

                <div>
                  <Label htmlFor="mailingLine1">Address Line 1</Label>
                  <Input
                    id="mailingLine1"
                    {...register("mailing.line1", {
                      required: "Mailing address is required",
                    })}
                    disabled={sameAsPhysical}
                  />
                  {errors.mailing?.line1 && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.mailing.line1.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="mailingCity">City</Label>
                    <Input
                      id="mailingCity"
                      {...register("mailing.city", {
                        required: "City is required",
                      })}
                      disabled={sameAsPhysical}
                    />
                    {errors.mailing?.city && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.mailing.city.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="mailingState">State</Label>
                    <Input
                      id="mailingState"
                      {...register("mailing.state", {
                        required: "State is required",
                      })}
                      disabled={sameAsPhysical}
                    />
                    {errors.mailing?.state && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.mailing.state.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="mailingZip">ZIP Code</Label>
                    <Input
                      id="mailingZip"
                      {...register("mailing.zip", {
                        required: "ZIP code is required",
                      })}
                      disabled={sameAsPhysical}
                    />
                    {errors.mailing?.zip && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.mailing.zip.message}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Release of Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Release of Information
                </CardTitle>
              </CardHeader>
              <CardContent className="gap-y-4">
                <div className="bg-gray-50  rounded-lg">
                  <p className="text-sm leading-relaxed">
                    <strong>RELEASE OF INFORMATION:</strong> I authorize Perfect
                    Plus CDL School Truck to obtain a motor vehicle report as
                    part of my application process. If I am accepted for
                    enrollment, I authorize Pacific Truck School Truck to
                    forward information from this application and or other
                    school records to prospective employers. I hereby declare
                    that all information I have provided is true, fact and best
                    of my knowledge.
                  </p>
                </div>

                <div className="flex items-center gap-x-2">
                  <Checkbox
                    id="agreeToTerms"
                    {...register("agreeToTerms", {
                      required: "You must agree to the release of information",
                    })}
                  />
                  <Label htmlFor="agreeToTerms" className="text-sm mt-2">
                    I agree to the release of information as stated above
                  </Label>
                </div>
                {errors.agreeToTerms && (
                  <p className="text-red-500 text-sm">
                    {errors.agreeToTerms.message}
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Digital Signature */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PenTool className="h-5 w-5" />
                  Digital Signature
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="gap-y-4">
                  <p className="text-sm text-gray-600">
                    Please sign below using your mouse or touch device
                  </p>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-1 lg:p-4 bg-gray-50">
                    <SignatureCanvas
                      ref={signatureRef}
                      penColor="black"
                      canvasProps={{
                        width: 600,
                        height: 200,
                        className:
                          "border border-gray-200 rounded bg-white w-full",
                      }}
                    />
                  </div>
                  <div className=" mt-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => signatureRef.current?.clear()}
                    >
                      Clear Signature
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                className="px-10 py-3 mb-3 bg-[#DF6B2F] text-white rounded-md"
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                    />
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
