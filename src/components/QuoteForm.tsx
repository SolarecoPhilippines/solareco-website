"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import Link from "next/link";
import { products } from "@/src/data/products";
import { FACEBOOK_PAGE_URL, PUBLIC_EMAIL } from "@/src/lib/constants";
import { Button } from "./Button";

type SubmissionState = "idle" | "submitting" | "success" | "error";

const publicProducts = products.filter((product) => product.published);

export function QuoteForm() {
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");

  async function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = new URLSearchParams();

    formData.forEach((value, key) => {
      body.append(key, String(value));
    });

    setSubmissionState("submitting");

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!response.ok) {
        throw new Error(`Form submission returned ${response.status}`);
      }

      form.reset();
      setSubmissionState("success");
    } catch {
      setSubmissionState("error");
    }
  }

  const isSubmitting = submissionState === "submitting";

  return (
    <form
      name="quotation-request"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="border-t-4 border-[#0D3567] bg-white p-6 shadow-[0_3px_14px_rgba(15,23,42,0.04)] ring-1 ring-slate-200 sm:p-8 lg:p-9"
      onSubmit={submitQuote}
    >
      <input type="hidden" name="form-name" value="quotation-request" />
      <div className="mb-7 border-b border-slate-100 pb-6">
        <p className="eyebrow text-[#0D3567]">Quotation request</p>
        <h2 className="mt-3 font-heading text-[clamp(1.75rem,1.5rem+0.8vw,2.25rem)] font-black leading-tight tracking-[-0.025em] text-slate-950">Share your project details</h2>
        <p className="mt-3 text-base leading-7 text-slate-600">Required fields help the team understand the inquiry and coordinate the next step.</p>
      </div>
      <p className="hidden" aria-hidden="true">
        <label>
          Do not fill out this field
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="form-label">
          <span>Name</span>
          <input className="field-control" name="name" type="text" autoComplete="name" required />
        </label>
        <label className="form-label">
          <span>Company name <span className="font-normal text-slate-500">(optional)</span></span>
          <input className="field-control" name="company" type="text" autoComplete="organization" />
        </label>
        <label className="form-label">
          <span>Email</span>
          <input className="field-control" name="email" type="email" autoComplete="email" required />
        </label>
        <label className="form-label">
          <span>Contact number</span>
          <input className="field-control" name="phone" type="tel" autoComplete="tel" required />
        </label>
        <label className="form-label">
          <span>Location</span>
          <input className="field-control" name="location" type="text" autoComplete="address-level2" />
        </label>
        <label className="form-label">
          <span>Product</span>
          <select className="field-control" name="product" defaultValue="" required>
            <option value="" disabled>Select a product</option>
            {publicProducts.map((product) => (
              <option key={product.slug} value={product.name}>{product.name}</option>
            ))}
          </select>
        </label>
        <label className="form-label sm:col-span-2">
          <span>Message</span>
          <textarea className="field-control min-h-40 resize-y py-3" name="message" required />
        </label>
      </div>
      <label className="mt-6 flex cursor-pointer gap-3 text-base leading-7 text-slate-700">
        <input className="mt-1 h-5 w-5 shrink-0 rounded border-slate-400 text-[#0D3567] focus:ring-[#0D3567]" type="checkbox" name="consent" value="yes" required />
        <span>
          I agree to be contacted by Solareco regarding this inquiry. The information submitted here is used to respond
          to this request; see the <Link href="/privacy" className="font-semibold text-[#0D3567] underline-offset-4 hover:underline">Privacy Policy</Link> for general website information.
        </span>
      </label>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#0D3567] px-5 py-2.5 text-[15px] font-semibold text-white transition hover:bg-[#15477f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567] disabled:cursor-wait disabled:opacity-65"
        >
          {isSubmitting ? "Submitting..." : "Submit Quotation Request"}
        </button>
        <Button href={FACEBOOK_PAGE_URL} variant="secondary">
          Contact on Facebook
        </Button>
      </div>
      <div className="mt-5" role="status" aria-live="polite">
        {submissionState === "success" ? (
          <p className="rounded-md border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-800">
            Your quotation request was submitted successfully. Solareco will review the inquiry and contact you using
            the details provided.
          </p>
        ) : null}
        {submissionState === "error" ? (
          <div className="rounded-md border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
            <p className="font-semibold">The form could not be submitted. No successful submission was confirmed.</p>
            <p className="mt-1">
              Please <a href={`mailto:${PUBLIC_EMAIL}`} className="font-semibold underline underline-offset-4">email {PUBLIC_EMAIL}</a> or use the Facebook contact link above.
            </p>
          </div>
        ) : null}
      </div>
    </form>
  );
}
