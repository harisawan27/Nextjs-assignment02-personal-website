"use client";

import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Set up the worker using CDN
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfThumbnailProps {
  url: string;
  alt: string;
  className?: string;
}

export default function PdfThumbnail({ url, alt, className = "" }: PdfThumbnailProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onLoadSuccess = () => {
    setLoading(false);
  };

  const onLoadError = (err: Error) => {
    console.error("Error loading PDF:", err);
    setError(true);
    setLoading(false);
  };

  if (!mounted) {
    return (
      <div className={`flex items-center justify-center bg-gray-800/50 ${className}`}>
        <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-gray-800/50 ${className}`}>
        <div className="text-center text-gray-400">
          <i className="fas fa-file-pdf text-4xl mb-2" />
          <p className="text-xs">PDF Preview</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-white ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <Document
        file={url}
        onLoadSuccess={onLoadSuccess}
        onLoadError={onLoadError}
        loading={null}
        className="w-full h-full flex items-center justify-center"
      >
        <Page
          pageNumber={1}
          width={350}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
    </div>
  );
}
