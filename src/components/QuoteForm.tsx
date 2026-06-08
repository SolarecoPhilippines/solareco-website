"use client";

import type { FormEvent } from "react";
import { products } from "@/src/data/products";
import { FACEBOOK_PAGE_URL, PUBLIC_EMAIL } from "@/src/lib/constants";
import { Button } from "./Button";

export function QuoteForm() {
  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const lines = [
      `Name: ${formData.get("name") ?? ""}`,
      `Company: ${formData.get("company") ?? ""}`,
      `Contact Number: ${formData.get("phone") ?? ""}`,
      `Email: ${formData.get("email") ?? ""}`,
      `Product Interest: ${formData.get("product") ?? ""}`,
      `Location: ${formData.get("location") ?? ""}`,
      "",
      "Message:",
      `${formData.get("message") ?? ""}`,
    ];
    const subject = encodeURIComponent("Solareco quotation request");
    const body = encodeURIComponent(lines.join("\n"));

    window.location.href = `mailto:${PUBLIC_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" onSubmit={submitQuote}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Name
          <input className="min-h-11 rounded-md border border-slate-300 px-3 text-base font-normal outline-none transition focus:border-[#0D3567] focus:ring-2 focus:ring-[#0D3567]/20" name="name" type="text" autoComplete="name" required />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Company name <span className="font-normal text-slate-500">optional</span>
          <input className="min-h-11 rounded-md border border-slate-300 px-3 text-base font-normal outline-none transition focus:border-[#0D3567] focus:ring-2 focus:ring-[#0D3567]/20" name="company" type="text" autoComplete="organization" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Email
          <input className="min-h-11 rounded-md border border-slate-300 px-3 text-base font-normal outline-none transition focus:border-[#0D3567] focus:ring-2 focus:ring-[#0D3567]/20" name="email" type="email" autoComplete="email" required />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Contact number
          <input className="min-h-11 rounded-md border border-slate-300 px-3 text-base font-normal outline-none transition focus:border-[#0D3567] focus:ring-2 focus:ring-[#0D3567]/20" name="phone" type="tel" autoComplete="tel" required />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Location
          <input className="min-h-11 rounded-md border border-slate-300 px-3 text-base font-normal outline-none transition focus:border-[#0D3567] focus:ring-2 focus:ring-[#0D3567]/20" name="location" type="text" autoComplete="address-level2" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Product
          <select className="min-h-11 rounded-md border border-slate-300 px-3 text-base font-normal outline-none transition focus:border-[#0D3567] focus:ring-2 focus:ring-[#0D3567]/20" name="product" defaultValue="" required>
            <option value="" disabled>Select a product</option>
            {products.map((product) => (
              <option key={product.slug} value={product.slug}>{product.name}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-800 sm:col-span-2">
          Message
          <textarea className="min-h-36 rounded-md border border-slate-300 px-3 py-3 text-base font-normal outline-none transition focus:border-[#0D3567] focus:ring-2 focus:ring-[#0D3567]/20" name="message" required />
        </label>
      </div>
      <label className="mt-5 flex gap-3 text-sm leading-6 text-slate-700">
        <input className="mt-1 h-4 w-4 rounded border-slate-300 text-[#0D3567] focus:ring-[#0D3567]" type="checkbox" name="consent" required />
        I agree to be contacted by Solareco regarding this inquiry.
      </label>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#0D3567] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#15477f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567]">
          Submit
        </button>
        <Button href={FACEBOOK_PAGE_URL} variant="secondary">
          Contact on Facebook
        </Button>
      </div>
    </form>
  );
}
