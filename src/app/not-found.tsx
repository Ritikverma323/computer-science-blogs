"use client";
import Link from "next/link";
import "./globals.css";

export default function NotFound() {
  return (
    <div className="not-found-wrapper">
      <h1 className="not-found-title">404</h1>
      <h2 className="not-found-subtitle">Page Not Found</h2>
      <p className="not-found-text">
        Oops! The page you’re looking for doesn’t exist or may have been moved.
      </p>
      <Link href="/" className="not-found-button">
        Go Home
      </Link>
    </div>
  );
}
